import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditClienteComponent } from './componets/edit-cliente/edit-cliente.component';
import { AddClienteComponent } from './componets/add-cliente/add-cliente.component';

const routes: Routes = [
  { path: '', redirectTo: '/addCliente', pathMatch: 'full' },
  { path: 'editClient', component: EditClienteComponent },
  { path: 'addCliente', component: AddClienteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
