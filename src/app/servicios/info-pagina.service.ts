import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoPagina } from '../interfaces/info-paginas.interface';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService { 

  info: InfoPagina = {};
  cargada: boolean = false;
  
  public equipo: any[] = [];  

  constructor(private http: HttpClient) {
    console.log('Servicio de info-pagina listo');
    this.cargarInfo();
    this.cargarEquipo();
  }  
  
  private cargarInfo(){
    this.http.get('assets/data/data-pagina.json')
    .subscribe((resp: InfoPagina) => {
      console.log(resp);
      this.cargada = true;
      this.info = resp;      
    });
  }
  
  private cargarEquipo(){
    this.http.get('https://angular-exercise-1c92c-default-rtdb.firebaseio.com/equipo.json')
    .subscribe((resp: any) => {
      this.equipo = resp;
      console.log(resp);  
    });
  }

}