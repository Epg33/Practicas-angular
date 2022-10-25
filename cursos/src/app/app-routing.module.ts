import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componente/login/login.component';
import { RegistroComponent } from './componente/registro/registro.component';

const routes: Routes = [{path:'', component: LoginComponent},
{path: 'registro', component: RegistroComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
