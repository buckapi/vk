import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DesingRoutingModule } from './desing-routing.module';
import { DesingComponent } from './desing.component';


@NgModule({
  declarations: [
    DesingComponent
  ],
  imports: [
    CommonModule,
    DesingRoutingModule
  ]
})
export class DesingModule { }
