import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Interceptor } from './interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddClienteComponent } from './componets/add-cliente/add-cliente.component';
import { EditClienteComponent } from './componets/edit-cliente/edit-cliente.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { DatosComponent } from './componets/datos/datos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { Perfil2Component } from './perfil2/perfil2.component';


@NgModule({
  declarations: [AppComponent, AddClienteComponent, EditClienteComponent, DatosComponent, PerfilComponent, Perfil2Component],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
