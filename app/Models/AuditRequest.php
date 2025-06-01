<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AuditRequest extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'website',
        'struggle',
    ];

    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the validation rules for the model.
     *
     * @return array
     */
    public static function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'website' => 'required|url|max:255',
            'struggle' => 'nullable|string|max:1000',
        ];
    }
}