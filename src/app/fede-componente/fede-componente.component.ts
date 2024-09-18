import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fede-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fede-componente.component.html',
  styleUrl: './fede-componente.component.css'
})
export class FedeComponenteComponent {
  fedeLista= [
    {name:'Gabimon',type:'reptil'},
    {name:'Danimon',type:'rata'},
    {name:'aronmon',type:'nigga'}
  ];

  tiposPersona: string[] = ['Reptil','rata','nigga'];

  addPersonas(personas :{name: string, type: string}){
    this.fedeLista.push(personas);
  }
}

