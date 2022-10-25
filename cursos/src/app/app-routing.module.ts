import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursosComponent } from './componente/cursos/cursos.component';
import { LoginComponent } from './componente/login/login.component';
import { MisionComponent } from './componente/mision/mision.component';
import { RegistroComponent } from './componente/registro/registro.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'mision', component: MisionComponent},
  {path: 'cursos', component: CursosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
