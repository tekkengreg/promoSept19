import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayCardsComponent } from './display-cards/display-cards.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  { path: '', component: DisplayCardsComponent },
  { path: 'cart', component: CartComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
