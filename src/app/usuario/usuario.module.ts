import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';


@NgModule({
  declarations: [
    TablaUsuariosComponent
  ],
  imports: [
    BrowserModule,
    UsuarioRoutingModule,
    CommonModule,
    HttpClientModule
  ],
  bootstrap: [TablaUsuariosComponent]
})
export class UsuarioModule { }
