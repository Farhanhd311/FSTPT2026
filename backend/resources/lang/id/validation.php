<?php

return [
    'required' => 'Kolom :attribute wajib diisi.',
    'email' => ':attribute harus berupa alamat email yang valid.',
    'min' => [
        'string' => ':attribute harus memiliki minimal :min karakter.',
        'numeric' => ':attribute harus minimal :min.',
        'file' => ':attribute harus minimal :min kilobyte.',
    ],
    'max' => [
        'string' => ':attribute tidak boleh lebih dari :max karakter.',
        'numeric' => ':attribute tidak boleh lebih dari :max.',
        'file' => ':attribute tidak boleh lebih dari :max kilobyte.',
    ],
    'confirmed' => 'Konfirmasi :attribute tidak cocok.',
    'unique' => ':attribute sudah digunakan.',
    'string' => ':attribute harus berupa teks.',
    'numeric' => ':attribute harus berupa angka.',
    'file' => ':attribute harus berupa file.',
    'mimes' => ':attribute harus berupa file bertipe: :values.',
    'uploaded' => ':attribute gagal diunggah.',
    'image' => ':attribute harus berupa gambar.',
    'date' => ':attribute bukan tanggal yang valid.',
    'in' => ':attribute yang dipilih tidak valid.',
];
