import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FedeServiceService } from '../fede-service.service';

@Component({
  selector: 'app-fede-componente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fede-componente.component.html',
  styleUrl: './fede-componente.component.css'
})

export class FedeComponenteComponent implements OnInit {

  tiposPersona: string[] = ['Reptil', 'rata', 'nigga'];

  fedeLista : {name:string, type:string }[] = [];

  constructor(private fedeServiceService: FedeServiceService) {}

  ngOnInit(): void {

    this.fedeLista = this.fedeServiceService.getPersonas();

  }
  addPersonas(name:string, type: string){
    this.fedeServiceService.addPersonas({name,type})
  }
  deletePersonas(index: number) {
    this.fedeServiceService.deletePersonas(index);
  }
}

