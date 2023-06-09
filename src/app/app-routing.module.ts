import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { AddComponent } from './test/add/add.component';
import { UpdateComponent } from './test/update/update.component';

const routes: Routes = [
  {path:"" , component: TestComponent, data : {animation: "isRight"}},
  {path:"add" , component: AddComponent, data : {animation: "isRight"}},
  {path:"update" , component: UpdateComponent, data : {animation: "isRight"}},
  {path:"*" , component: TestComponent, data : {animation: "isRight"}},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
