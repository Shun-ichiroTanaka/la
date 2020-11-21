<?php

namespace App\Http\Livewire;

use Livewire\Component;

class Pages extends Component
{
    public $modalFormVisible = true;
    public $slug;
    public $title;
    public $component;


    // モーダルを表示
    public function createShowModal()
    {
        $this->modalFormVisible = true;
    }

    // livewireの使用
    public function render()
    {
        return view('livewire.pages');
    }
}
