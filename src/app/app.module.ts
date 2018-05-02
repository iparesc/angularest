import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient, HttpHandler } from '@angular/common/http';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
//componentes
import { CancionesComponent } from './canciones/canciones.component';

//services
import { CancionesService } from './providers/canciones.service';


//pipes

@NgModule({
  declarations: [
    AppComponent,
    CancionesComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule
  ],
  providers: [       
    CancionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }