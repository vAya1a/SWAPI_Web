<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
Use App\Models\Pilot;

class PilotController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pilotos = Pilot::all();
        return response()->json($pilotos, 200);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $piloto = new Pilot();
        $piloto->nombre = $request->nombre;
        $piloto->edad = $request->edad;
        $piloto->planeta_origen = $request->planeta_origen;
        $piloto->save();
        return response()->json($piloto, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $piloto = Pilot::find($id);
        if(!$piloto){
            return response()->json(['message' => 'Piloto no encontrado'], 404);
        }
        return response()->json($piloto, 200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $piloto = Pilot::find($id);
        if(!$piloto){
            return response()->json(['message' => 'Piloto no encontrado'], 404);
        }
        $piloto->nombre = $request->nombre;
        $piloto->edad = $request->edad;
        $piloto->planeta_origen = $request->planeta_origen;
        $piloto->save();
        return response()->json($piloto, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $piloto = Pilot::find($id);
        if(!$piloto){
            return response()->json(['message' => 'Piloto no encontrado'], 404);
        }
        $piloto->delete();
        return response()->json(['message' => 'Piloto eliminado correctamente'], 200);
    }
}
