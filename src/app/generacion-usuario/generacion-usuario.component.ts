import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-generacion-usuario',
  templateUrl: './generacion-usuario.component.html',
  styleUrls: ['./generacion-usuario.component.css']
})
export class GeneracionUsuarioComponent implements OnInit {
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  data: Observable<any>;
  constructor(private router: Router, public http: HttpClient) { }

  ngOnInit() {
  }

  generacionUsuarioForm = {
    usuario: "",
    contrasenia: "",
    fechaInicioEnProyecto: "",
    nombreUsuario: "",
    apellidoUsuario: "",

    dni: "",
    telefono: "",
    telefonoCelular: "",
    mail: "",
    sindicatoPerteneciente: "",

    antiguedad: "",
    nombreEmpresa: "",
    cuit: "",
    actividad: "",
    direccion: "",

    localidad: "",
    codigoPostal: "",
    partido: "",
    provincia: "",
    sindicato: "",

    cct: "",
    cctNro: "",
    ramaActividad: "",
    cctNro2: "",
    ramaActividad2: "",

    cctNro3: "",
    ramaActividad3: "",
    cctNro4: "",
    ramaActividad4: "",
    check: null

  }
  public saveDataUsuario(form) {

    var url = "http://localhost:8080/api/delegados"
    let postData = new FormData();
    this.generacionUsuarioForm.usuario = form.value.usuario;
    this.generacionUsuarioForm.contrasenia = form.value.contrasenia;
    this.generacionUsuarioForm.fechaInicioEnProyecto = form.value.fechaInicioEnProyecto;
    this.generacionUsuarioForm.nombreUsuario = form.value.nombreUsuario;
    this.generacionUsuarioForm.apellidoUsuario = form.value.apellidoUsuario;

    this.generacionUsuarioForm.dni = form.value.dni;
    this.generacionUsuarioForm.telefono = form.value.telefono;
    this.generacionUsuarioForm.telefonoCelular = form.value.telefonoCelular;
    this.generacionUsuarioForm.mail = form.value.mail;
    this.generacionUsuarioForm.sindicatoPerteneciente = form.value.sindicatoPerteneciente;

    this.generacionUsuarioForm.antiguedad = form.value.antiguedad;
    this.generacionUsuarioForm.nombreEmpresa = form.value.nombreEmpresa;
    this.generacionUsuarioForm.cuit = form.value.cuit;
    this.generacionUsuarioForm.actividad = form.value.actividad;
    this.generacionUsuarioForm.direccion = form.value.direccion;

    this.generacionUsuarioForm.localidad = form.value.localidad;
    this.generacionUsuarioForm.codigoPostal = form.value.codigoPostal;
    this.generacionUsuarioForm.partido = form.value.partido;
    this.generacionUsuarioForm.provincia = form.value.provincia;
    this.generacionUsuarioForm.sindicato = form.value.sindicato;

    this.generacionUsuarioForm.cct = form.value.cct;
    this.generacionUsuarioForm.cctNro = form.value.cctNro;
    this.generacionUsuarioForm.ramaActividad = form.value.ramaActividad;
    this.generacionUsuarioForm.cctNro2 = form.value.cctNro2;
    this.generacionUsuarioForm.ramaActividad2 = form.value.ramaActividad2;

    this.generacionUsuarioForm.cctNro3 = form.value.cctNro3;
    this.generacionUsuarioForm.ramaActividad3 = form.value.ramaActividad3;
    this.generacionUsuarioForm.cctNro4 = form.value.cctNro4;
    this.generacionUsuarioForm.ramaActividad4 = form.value.ramaActividad4;
    this.generacionUsuarioForm.check = form.value.check;

    this.data = this.http.post(url, this.generacionUsuarioForm, { headers: this.httpHeaders });
    this.data.subscribe(data => {
      console.log(data);

      console.log(form.value);

    });
    console.log("holass");
    //this.router.navigate(['/relevamientoInicial']);

  }
}
