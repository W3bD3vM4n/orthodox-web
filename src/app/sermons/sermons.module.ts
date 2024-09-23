import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SermonsRoutingModule } from './sermons-routing.module';
import { SermonsListComponent } from './sermons-list/sermons-list.component';
import { SermonsDetailComponent } from './sermons-detail/sermons-detail.component';


@NgModule({
  declarations: [
    SermonsListComponent,
    SermonsDetailComponent
  ],
  imports: [
    CommonModule,
    SermonsRoutingModule
  ]
})
export class SermonsModule { }
