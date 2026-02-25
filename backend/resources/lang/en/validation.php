<?php

return [
    'required' => 'The :attribute field is required.',
    'email' => 'The :attribute must be a valid email address.',
    'min' => [
        'string' => 'The :attribute must be at least :min characters.',
        'numeric' => 'The :attribute must be at least :min.',
        'file' => 'The :attribute must be at least :min kilobytes.',
    ],
    'max' => [
        'string' => 'The :attribute may not be greater than :max characters.',
        'numeric' => 'The :attribute may not be greater than :max.',
        'file' => 'The :attribute may not be greater than :max kilobytes.',
    ],
    'confirmed' => 'The :attribute confirmation does not match.',
    'unique' => 'The :attribute has already been taken.',
    'string' => 'The :attribute must be a string.',
    'numeric' => 'The :attribute must be a number.',
    'file' => 'The :attribute must be a file.',
    'mimes' => 'The :attribute must be a file of type: :values.',
    'uploaded' => 'The :attribute failed to upload.',
    'image' => 'The :attribute must be an image.',
    'date' => 'The :attribute is not a valid date.',
    'in' => 'The selected :attribute is invalid.',
];
