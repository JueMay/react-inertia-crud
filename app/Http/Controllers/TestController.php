<?php

namespace App\Http\Controllers;

use App\Models\Test;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TestController extends Controller
{
    public function index(){
        return Inertia::render('Test/Index',[
            'tests' =>Test::all()
        ]);
    }

    public function create(){
        return Inertia::render('Test/Create');
    }

    public function store(){
        Test::create([
            'name' => request('name'),
            'description' => request('description')
        ]);
        return to_route('text.index');
    }

    public function edit(Test $test){
        dd($test);
    }

    public function deleteAll(){

        foreach(request()->Ids as $id){
            Test::destroy($id);
        }
        return to_route('text.index');
    }
}
