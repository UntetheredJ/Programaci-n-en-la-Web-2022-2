import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../Modelo/Persona';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  Url='http://localhost:8080/api/v1/persona';

  getPersonas(){
    return this.http.get<Persona[]>(this.Url);
  }

  createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url, persona);
  }

  getPersonaId(id:Number){
    return this.http.get<Persona>(this.Url + "/" + id);
  }

  updatePersona(persona:Persona){
    return this.http.put(this.Url + "/" + persona.id, persona);
  }

  deletePersona(persona:Persona){
    return this.http.delete(this.Url + "/" + persona.id);
  }
}
