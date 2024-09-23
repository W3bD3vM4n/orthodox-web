import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SermonsListComponent } from "./sermons-list/sermons-list.component";
import { SermonsDetailComponent } from "./sermons-detail/sermons-detail.component";

const routes: Routes = [
  { path: '', component: SermonsListComponent },
  { path: ':id', component: SermonsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SermonsRoutingModule { }
