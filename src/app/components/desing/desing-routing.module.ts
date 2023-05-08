import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesingComponent } from './desing.component';

const routes: Routes = [{ path: '', component: DesingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesingRoutingModule { }
