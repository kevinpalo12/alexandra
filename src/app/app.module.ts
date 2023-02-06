import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DistanciaComponent } from './components/distancia/distancia.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './components/home/home.component';
import { MalPoemaComponent } from './components/mal-poema/mal-poema.component';
import { SiempreComponent } from './components/siempre/siempre.component';
import { RecuerdoComponent } from './components/recuerdo/recuerdo.component';

@NgModule({
  declarations: [
    AppComponent,
    DistanciaComponent,
    HomeComponent,
    MalPoemaComponent,
    SiempreComponent,
    RecuerdoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GoogleMapsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
