import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { AuthService } from '../services/usuarios/auth.service';


@Injectable({
  providedIn: 'root'
})
export class RelevamientoInicialService  {
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  data:any= []  ;
  nombreUsuario ="";
  idUser:number;
   
  constructor(public router: Router, private http:HttpClient, private authService:AuthService)  { 
   
   

  }

  flag:number = 0;
  private agregarAutorizacionHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpHeaders.append("Authorization", "Bearer " + token);
    }
    return this.httpHeaders;
  }



  obtenerRelevamiento(idUsuario){
    let params = new HttpParams().set("idUser",idUsuario)
    return this.http
    .get("http://localhost:8080/api/relevamientoInicialUsuario", {
      headers: this.agregarAutorizacionHeader(), params: params 
    })
    .subscribe(data => {
      console.log("PUT Request is successful  ", data);
      this.data =data;
      console.log("SERVICE   ", data);
      this.router.navigate(['/relevamientoInicial']);
    });
  }
}