import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './componente/nav/nav.component';
import { LoginComponent } from './componente/login/login.component';
import { FooterComponent } from './componente/footer/footer.component';
import { RegistroComponent } from './componente/registro/registro.component';
import { MisionComponent } from './componente/mision/mision.component';
import { CursosComponent } from './componente/cursos/cursos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    LoginComponent,
    FooterComponent,
    RegistroComponent,
    MisionComponent,
    CursosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
