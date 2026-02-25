<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class LocaleMiddleware
{
    /**
     * Supported locales.
     */
    protected array $supportedLocales = ['en', 'id', 'de', 'zh', 'ru', 'fr', 'ja', 'es'];

    /**
     * Handle an incoming request.
     *
     * Set the application locale based on the Accept-Language header.
     * Falls back to 'en' if the requested locale is not supported.
     */
    public function handle(Request $request, Closure $next): Response
    {
        $locale = $request->header('Accept-Language', 'en');

        // Accept-Language can be complex (e.g., "en-US,en;q=0.9,id;q=0.8")
        // Extract the primary language tag
        $locale = strtolower(substr($locale, 0, 2));

        if (!in_array($locale, $this->supportedLocales)) {
            $locale = 'en';
        }

        app()->setLocale($locale);

        return $next($request);
    }
}
