import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardapioComponent } from './views/cardapio/cardapio.component';
import { EventosComponent } from './views/eventos/eventos.component';
import { HomeComponent } from './views/home/home.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"eventos",
    component:EventosComponent
  },
  {
    path:"cardapio",
    component:CardapioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
