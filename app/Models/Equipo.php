<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Equipo extends Model
{
    public $table = "equipos";
    public $primarykey = "id";
    public $timestamps = false;
    use HasFactory;
}
