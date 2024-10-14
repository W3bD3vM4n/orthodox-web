import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MemorialsListComponent } from "./memorials-list/memorials-list.component";
import { MemorialsDetailComponent } from "./memorials-detail/memorials-detail.component";

const routes: Routes = [
  { path: '', component: MemorialsListComponent },
  { path: ':id', component: MemorialsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemorialsRoutingModule { }
