import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FedeServiceService {

  fedeLista = [
    { name: 'Gabimon', type: 'reptil' },
    { name: 'Danimon', type: 'rata' },
    { name: 'aronmon', type: 'nigga' }
  ];


  getPersonas(){
    return this.fedeLista;
  }

  addPersonas(personas: { name: string, type: string }) {
    this.fedeLista.push(personas);
  }
  deletePersonas(index: number) {
    this.fedeLista.splice(index, 1);
  }

}
