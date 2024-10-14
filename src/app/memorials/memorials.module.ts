import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MemorialsRoutingModule } from './memorials-routing.module';
import { MemorialsListComponent } from "./memorials-list/memorials-list.component";
import { MemorialsDetailComponent } from "./memorials-detail/memorials-detail.component";


@NgModule({
  declarations: [
    MemorialsListComponent,
    MemorialsDetailComponent
  ],
  imports: [
    CommonModule,
    MemorialsRoutingModule
  ]
})
export class MemorialsModule { }
