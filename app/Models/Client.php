<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    public $incrementing = false; 
    protected $primaryKey = 'Ref';
    protected $keyType = 'string';

    protected $fillable = [
        'Ref',
        'idClient',
        'dateCurr',
        'phone',
        'mail',
        'address',
        'monthSalary',
        'currSalary',
        'limitItog',
        'decision',
    ];
}
