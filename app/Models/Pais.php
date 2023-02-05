<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pais extends Model
{
    public $table = "pais";
    public $primarykey = "id";
    public $timestamps = false;
    use HasFactory;
}
