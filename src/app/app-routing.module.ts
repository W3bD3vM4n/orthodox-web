import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { DiscoverComponent } from './sections/discover/discover.component';
import { SchedulerComponent } from './sections/scheduler/scheduler.component';
import { GodManComponent } from './sections/god-man/god-man.component'
import { ChurchComponent } from './sections/church/church.component';
import { MisionVisionComponent } from "./sections/mision-vision/mision-vision.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'god-man', component: GodManComponent },
  { path: 'church', component: ChurchComponent },
  { path: 'mision-vision', component: MisionVisionComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
