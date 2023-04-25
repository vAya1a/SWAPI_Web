<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PilotStarship extends Model
{
    use HasFactory;

    protected $fillable=['id_pilot','id_starship'];

    public function getPilotbyId($idPilot){
        return Pilot::find($idPilot);
      } 
}
