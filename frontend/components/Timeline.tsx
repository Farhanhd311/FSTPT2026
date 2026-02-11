'use client';

import { useState, useEffect, useRef } from 'react';
import FadeIn from './FadeIn';

interface TimelineItem {
  label: string;
  title: string;
  date: string;
  year: string;
  description?: string;
  highlight?: boolean;
}

const timelineData: TimelineItem[] = [
  { label: 'MILESTONE', title: 'Pengumuman Call for Paper', date: '14 February', year: '2026' },
  { label: 'SUBMISSION', title: 'Periode Pengumpulan Full Paper', date: '1 March – 15 July', year: '2026' },
  { label: 'REVIEW', title: 'Proses Review Full Paper', date: '1 June – 31 July', year: '2026' },
  { label: 'ANNOUNCEMENT', title: 'Pengumuman Hasil Review Paper', date: '1 August', year: '2026' },
  { label: 'REVISION', title: 'Revisi & Pengumpulan Camera-Ready Paper', date: '1 – 31 August', year: '2026' },
  { label: 'REGISTRATION', title: 'Registrasi Peserta & Pemakalah', date: '15 August – 30 September', year: '2026' },
  { label: 'EVENT DAY', title: 'Pelaksanaan Acara', date: '6 – 7 November', year: '2026', description: 'Convention Hall & UPT Bahasa Universitas Andalas, Padang', highlight: true },
];

// Check if a date range has passed based on the current real date
function getStatus(date: string, year: string): 'past' | 'current' | 'upcoming' {
  const now = new Date();
  const y = parseInt(year);

  // Parse end date from range (or single date)
  const parts = date.split('–').map(s => s.trim());
  const endPart = parts[parts.length - 1];

  const monthMap: Record<string, number> = {
    'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
    'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11,
  };

  // Extract day and month from end part
  const endTokens = endPart.split(' ');
  const endDay = parseInt(endTokens[0]);
  const endMonthStr = endTokens[endTokens.length - 1];
  const endMonth = monthMap[endMonthStr] ?? 0;
  const endDate = new Date(y, endMonth, endDay, 23, 59, 59);

  // Parse start date
  const startPart = parts[0];
  const startTokens = startPart.split(' ');
  const startDay = parseInt(startTokens[0]);
  // If start has month, use it; otherwise use end month
  const startMonthStr = startTokens.length > 1 ? startTokens[startTokens.length - 1] : endMonthStr;
  const startMonth = monthMap[startMonthStr] ?? endMonth;
  const startDate = new Date(y, startMonth, startDay, 0, 0, 0);

  if (now > endDate) return 'past';
  if (now >= startDate && now <= endDate) return 'current';
  return 'upcoming';
}

const labelColors: Record<string, string> = {
  'MILESTONE': 'text-fog bg-fog/10',
  'SUBMISSION': 'text-white bg-gradient-to-r from-fog to-sage',
  'REVIEW': 'text-sage bg-sage/10',
  'ANNOUNCEMENT': 'text-fog bg-fog/10',
  'REVISION': 'text-white bg-gradient-to-r from-sage to-moss',
  'REGISTRATION': 'text-fog bg-fog/10',
  'EVENT DAY': 'text-white bg-gradient-to-r from-fog to-sage shadow-lg shadow-fog/20',
};

// Compute overall progress percentage based on dates
function computeOverallProgress(): number {
  const now = new Date();
  const first = new Date(2026, 1, 14); // 14 Feb 2026 — first milestone
  const last = new Date(2026, 10, 7);  // 7 Nov 2026 — last event day

  if (now < first) return 0;
  if (now > last) return 100;

  const total = last.getTime() - first.getTime();
  const elapsed = now.getTime() - first.getTime();
  return Math.round((elapsed / total) * 100);
}

// Get the next upcoming milestone info
function getNextMilestone(): { title: string; daysLeft: number } | null {
  const now = new Date();
  const monthMap: Record<string, number> = {
    'January': 0, 'February': 1, 'March': 2, 'April': 3, 'May': 4, 'June': 5,
    'July': 6, 'August': 7, 'September': 8, 'October': 9, 'November': 10, 'December': 11,
  };

  for (const item of timelineData) {
    const parts = item.date.split('–').map(s => s.trim());
    const startPart = parts[0];
    const endPart = parts[parts.length - 1];
    const endMonthStr = endPart.split(' ').pop() || '';
    const startTokens = startPart.split(' ');
    const startDay = parseInt(startTokens[0]);
    const startMonthStr = startTokens.length > 1 ? startTokens[startTokens.length - 1] : endMonthStr;
    const startMonth = monthMap[startMonthStr] ?? 0;
    const startDate = new Date(2026, startMonth, startDay);

    if (now < startDate) {
      const diffMs = startDate.getTime() - now.getTime();
      const daysLeft = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
      return { title: item.title, daysLeft };
    }

    // Check if the end date hasn't passed yet (current)
    const endTokens = endPart.split(' ');
    const endDay = parseInt(endTokens[0]);
    const endMonth = monthMap[endMonthStr] ?? 0;
    const endDate = new Date(2026, endMonth, endDay, 23, 59, 59);

    if (now <= endDate) {
      return { title: item.title, daysLeft: 0 }; // currently active
    }
  }
  return null;
}

export default function Timeline() {
  const [lineProgress, setLineProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Only compute date-dependent values on client to avoid hydration mismatch
  useEffect(() => { setMounted(true); }, []);

  const statuses = mounted
    ? timelineData.map(item => getStatus(item.date, item.year))
    : timelineData.map(() => 'upcoming' as const);
  const completedCount = statuses.filter(s => s === 'past').length;
  const activeCount = statuses.filter(s => s === 'current').length;
  const overallProgress = mounted ? computeOverallProgress() : 0;
  const nextMilestone = mounted ? getNextMilestone() : null;

  // Scroll-driven line progress
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowH = window.innerHeight;

      const start = rect.top - windowH * 0.7;
      const end = rect.bottom - windowH * 0.3;
      const total = end - start;

      if (total <= 0) return;

      const progress = Math.min(1, Math.max(0, (-start) / total));
      setLineProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* ── Progress Summary Card ── */}
      <FadeIn>
        <div className="mb-12 rounded-2xl border border-clay/20 bg-white/90 backdrop-blur-sm p-6 lg:p-8 shadow-sm">
          {/* Top row: progress bar + percentage */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-fog to-sage flex items-center justify-center text-white font-black text-sm">
                {overallProgress}%
              </div>
              <div>
                <p className="text-pine font-bold text-sm">Progress Keseluruhan</p>
                <p className="text-sage text-xs">
                  {completedCount} dari {timelineData.length} tahap selesai
                  {activeCount > 0 && ` · ${activeCount} sedang berlangsung`}
                </p>
              </div>
            </div>
            {nextMilestone && (
              <div className="hidden sm:block text-right">
                {nextMilestone.daysLeft === 0 ? (
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-fog animate-pulse" />
                    <span className="text-sm font-bold text-fog">Sedang berlangsung</span>
                  </div>
                ) : (
                  <>
                    <p className="text-2xl font-black text-fog leading-none">{nextMilestone.daysLeft}</p>
                    <p className="text-[10px] text-sage font-semibold uppercase tracking-wider">hari lagi</p>
                  </>
                )}
              </div>
            )}
          </div>

          {/* Progress bar */}
          <div className="relative h-2 bg-clay/10 rounded-full overflow-hidden mb-5">
            <div
              className="absolute inset-y-0 left-0 rounded-full transition-all duration-1000 ease-out"
              style={{
                width: `${overallProgress}%`,
                background: 'linear-gradient(to right, #46707e, #6b8b81, #afbb98)',
                boxShadow: overallProgress > 0 ? '0 0 12px rgba(70,112,126,0.3)' : 'none',
              }}
            />
          </div>

          {/* Step dots */}
          <div className="flex items-center justify-between gap-1">
            {timelineData.map((item, i) => {
              const s = statuses[i];
              return (
                <div key={i} className="flex flex-col items-center gap-2 flex-1">
                  <div className={`w-full h-1.5 rounded-full transition-all duration-500
                                  ${s === 'past'
                                    ? 'bg-sage/40'
                                    : s === 'current'
                                      ? 'bg-gradient-to-r from-fog to-sage shadow-sm shadow-fog/20'
                                      : 'bg-clay/15'
                                  }`} />
                  <span className={`text-[9px] font-bold leading-none text-center hidden lg:block
                                   ${s === 'past' ? 'text-sage/40' : s === 'current' ? 'text-fog' : 'text-sage/60'}`}>
                    {i + 1}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Next milestone info (mobile) */}
          {nextMilestone && (
            <div className="sm:hidden mt-4 pt-3 border-t border-clay/10 flex items-center justify-between">
              <p className="text-xs text-sage">
                {nextMilestone.daysLeft === 0 ? 'Sedang berlangsung:' : 'Selanjutnya:'}{' '}
                <span className="font-bold text-pine">{nextMilestone.title}</span>
              </p>
              {nextMilestone.daysLeft > 0 && (
                <span className="text-sm font-black text-fog">{nextMilestone.daysLeft} hari</span>
              )}
            </div>
          )}
        </div>
      </FadeIn>

    <div ref={containerRef} className="relative">
      {/* Vertical line — background track */}
      <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-px bg-clay/15" />

      {/* Vertical line — animated progress fill */}
      <div
        className="absolute left-6 lg:left-8 top-0 w-px origin-top transition-none"
        style={{
          height: `${lineProgress * 100}%`,
          background: 'linear-gradient(to bottom, #46707e, #6b8b81, #afbb98)',
          boxShadow: '0 0 8px rgba(70,112,126,0.3)',
        }}
      />

      <div className="space-y-5">
        {timelineData.map((item, i) => {
          const status = getStatus(item.date, item.year);

          const isPast = status === 'past';
          const isCurrent = status === 'current';

          return (
            <FadeIn key={i} delay={i * 70}>
              <div
                ref={(el) => { itemRefs.current[i] = el; }}
                className="relative flex items-start gap-5 lg:gap-8 group transition-all duration-300"
              >
                {/* Dot indicator */}
                <div className="relative z-10 shrink-0 w-12 lg:w-16 flex justify-center pt-1">
                  {item.highlight ? (
                    <div className={`w-5 h-5 rounded-full ring-4 transition-all duration-500
                                    ${isPast
                                      ? 'bg-sage/60 ring-sage/20'
                                      : isCurrent
                                        ? 'bg-gradient-to-br from-fog to-pine ring-fog/30 shadow-[0_0_20px_rgba(70,112,126,0.5)] animate-pulse-glow'
                                        : 'bg-gradient-to-br from-fog to-pine ring-fog/20 shadow-[0_0_16px_rgba(70,112,126,0.4)]'
                                    }`} />
                  ) : (
                    <div className={`w-4 h-4 rounded-full ring-4 transition-all duration-500
                                    group-hover:scale-125
                                    ${isPast
                                      ? 'bg-sage/50 ring-clay/20 shadow-none'
                                      : isCurrent
                                        ? 'bg-gradient-to-br from-fog to-sage ring-fog/20 shadow-[0_0_16px_rgba(70,112,126,0.5)] scale-125'
                                        : 'bg-gradient-to-br from-fog to-sage ring-white shadow-[0_0_12px_rgba(70,112,126,0.3)]'
                                    }
                                    group-hover:shadow-[0_0_20px_rgba(70,112,126,0.5)]`} />
                  )}

                  {/* Current indicator pulse */}
                  {isCurrent && !item.highlight && (
                    <div className="absolute inset-0 flex justify-center pt-1">
                      <div className="w-4 h-4 rounded-full bg-fog/30 animate-ping" />
                    </div>
                  )}
                </div>

                {/* Card */}
                {item.highlight ? (
                  /* Highlighted event card */
                  <div className={`flex-1 rounded-2xl p-6 lg:p-7 relative overflow-hidden transition-all duration-400
                                  ${isPast
                                    ? 'bg-gradient-to-r from-sage/20 to-clay/10 border border-sage/20'
                                    : 'bg-gradient-to-r from-pine to-[#1e3a3f] border border-fog/20 shadow-xl shadow-pine/10'
                                  }
                                  hover:-translate-y-0.5`}>
                    {/* Glow decoration */}
                    {!isPast && (
                      <>
                        <div className="absolute top-0 right-0 w-40 h-40 bg-fog/10 rounded-full -translate-y-1/2 translate-x-1/3" />
                        <div className="absolute top-0 left-6 right-6 h-[2px] bg-gradient-to-r from-transparent via-fog/40 to-transparent rounded-full" />
                      </>
                    )}

                    <div className="relative flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <span className={`inline-block px-4 py-1.5 text-xs font-bold rounded-full mb-3
                                        ${isPast ? 'text-sage bg-sage/20' : labelColors[item.label]}`}>
                          {item.label}
                        </span>
                        <h3 className={`text-lg lg:text-xl font-extrabold
                                       ${isPast ? 'text-sage' : 'text-white'}`}>
                          {item.title}
                        </h3>
                        {item.description && (
                          <p className={`text-sm mt-1 ${isPast ? 'text-sage/60' : 'text-moss/70'}`}>
                            {item.description}
                          </p>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <p className={`text-2xl lg:text-3xl font-black tracking-tight
                                      ${isPast
                                        ? 'text-sage/50'
                                        : 'text-transparent bg-clip-text bg-gradient-to-r from-moss to-clay'
                                      }`}>
                          {item.date}
                        </p>
                        <p className={`text-sm font-semibold ${isPast ? 'text-sage/40' : 'text-fog'}`}>
                          {item.year}
                        </p>
                      </div>
                    </div>

                    {/* Status badge */}
                    {isPast && (
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-bold text-sage/40 bg-sage/10 px-2 py-0.5 rounded">COMPLETED</span>
                      </div>
                    )}
                    {isCurrent && (
                      <div className="absolute top-3 right-3">
                        <span className="text-[10px] font-bold text-white bg-fog/40 px-2 py-0.5 rounded animate-pulse">ONGOING</span>
                      </div>
                    )}
                  </div>
                ) : (
                  /* Regular card */
                  <div className={`flex-1 backdrop-blur-sm border rounded-2xl p-5 lg:p-6 transition-all duration-300
                                  ${isPast
                                    ? 'bg-clay/5 border-clay/10 opacity-60 hover:opacity-80'
                                    : isCurrent
                                      ? 'bg-white border-fog/25 shadow-lg shadow-fog/10 ring-1 ring-fog/10'
                                      : 'bg-white/80 border-clay/20 hover:shadow-lg hover:shadow-fog/5 hover:border-fog/20'
                                  }
                                  hover:-translate-y-0.5`}>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <span className={`inline-block px-3 py-1 text-xs font-bold rounded-full
                                          ${isPast ? 'text-sage/50 bg-sage/10' : labelColors[item.label]}`}>
                            {item.label}
                          </span>
                          {isCurrent && (
                            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-bold text-fog bg-fog/10 rounded-full">
                              <span className="w-1.5 h-1.5 bg-fog rounded-full animate-pulse" />
                              ACTIVE
                            </span>
                          )}
                          {isPast && (
                            <span className="px-2 py-0.5 text-[10px] font-bold text-sage/40 bg-sage/5 rounded-full">
                              ✓ DONE
                            </span>
                          )}
                        </div>
                        <h3 className={`text-base lg:text-lg font-bold
                                       ${isPast ? 'text-sage/60 line-through decoration-sage/20' : 'text-pine'}`}>
                          {item.title}
                        </h3>
                      </div>
                      <div className="text-right shrink-0">
                        <p className={`text-lg lg:text-xl font-extrabold tracking-tight
                                      ${isPast ? 'text-sage/40' : 'text-fog'}`}>
                          {item.date}
                        </p>
                        <p className={`text-xs font-medium ${isPast ? 'text-sage/30' : 'text-sage'}`}>
                          {item.year}
                        </p>
                      </div>
                    </div>


                  </div>
                )}
              </div>
            </FadeIn>
          );
        })}
      </div>
    </div>
    </>
  );
}

