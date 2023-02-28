import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab
// import {MenuItem} from 'primeng/api';

import { ToolbarComponent } from './views/toolbar/toolbar.component';                  //api

//PRIMENG
import {ButtonModule} from 'primeng/button';

import {CardModule} from 'primeng/card';
import {CarouselModule} from 'primeng/carousel';
import {GMapModule} from 'primeng/gmap';

//COMPONENTES
import { FooterComponent } from './views/footer/footer.component';
import { HomeComponent } from './views/home/home.component';
import {ToolbarModule} from 'primeng/toolbar';
import { EventosComponent } from './views/eventos/eventos.component';
import {DividerModule} from 'primeng/divider';
import { CardapioComponent } from './views/cardapio/cardapio.component';
import {SidebarModule} from 'primeng/sidebar';
import { LoginComponent } from './views/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    FooterComponent,
    EventosComponent,
    CardapioComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AccordionModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    CarouselModule,
    GMapModule,
    DividerModule,
    SidebarModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
