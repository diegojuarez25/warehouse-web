import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProductComponent} from './components/product/product.component';

const routes: Routes = [
  {
    path: 'product',
    component: ProductComponent
  }
];

@NgModule({
  imports: [
      RouterModule.forRoot(
          routes,
          { enableTracing: true, useHash: true }
      )
  ],
  exports: [
      RouterModule
  ]
})
export class AppRoutingModule { }
