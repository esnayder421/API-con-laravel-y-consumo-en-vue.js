<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ciudad extends Model
{
    public $table = "ciudad";
    public $primarykey = "id";
    public $timestamps = false;
    use HasFactory;
}
