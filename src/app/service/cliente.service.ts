import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  url = 'http://localhost:8080/api/clientes/';

  constructor(private http: HttpClient) { }

  cargarUsuarios(): Observable<any>{
    return this.http.get(this.url);
  }


  guardarUsuario(usuario: Usuario) {
    return this.http.post(this.url, usuario);
  }

  eliminarUsuario(id: number) {
    return this.http.delete(this.url + id);
  }

  actualizarRegistro(id:  any): Observable<any> {
    console.log("ingresando adnaiodn" + id);
    // console.log(id);
    return this.http.patch(this.url+'estado',{id:id});
  }

  actualizarAprobado(id:  any): Observable<any> {
    console.log("ingresando adnaiodn 222222" + id);
    return this.http.patch(this.url+'estado2',{id:id});
  }

  buscarCedula(cedula: string): Observable<any> {
    return this.http.get(this.url+'cedula/' + cedula);
  }


}
