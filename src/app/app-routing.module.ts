import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { PresidentMembersComponent } from './sections/president-members/president-members.component';
import { DiscoverComponent } from './sections/discover/discover.component';
import { SchedulerComponent } from './sections/scheduler/scheduler.component';
import { GodComponent } from './sections/god/god.component';
import { ChurchComponent } from './sections/church/church.component';
import { TraditionComponent } from './sections/tradition/tradition.component';
import { BibleComponent } from './sections/bible/bible.component';
import { LiturgyComponent } from './sections/liturgy/liturgy.component';
import { MysteriesComponent } from './sections/mysteries/mysteries.component';
import { VirginMaryComponent } from './sections/virgin-mary/virgin-mary.component';
import { SaintsComponent } from './sections/saints/saints.component';
import { FathersComponent } from './sections/fathers/fathers.component';
import { ClergyLaityComponent } from './sections/clergy-laity/clergy-laity.component';
import { CouncilsComponent } from './sections/councils/councils.component';
import { CanonsComponent } from './sections/canons/canons.component';
import { CreedComponent } from './sections/creed/creed.component';
import { OrthodoxyComponent } from './sections/orthodoxy/orthodoxy.component';
import { AutocephalyComponent } from './sections/autocephaly/autocephaly.component';
import { UnityComponent } from './sections/unity/unity.component';
import { MisionVisionComponent } from "./sections/mision-vision/mision-vision.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'president-members', component: PresidentMembersComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'god', component: GodComponent },
  { path: 'church', component: ChurchComponent },
  { path: 'tradition', component: TraditionComponent },
  { path: 'bible', component: BibleComponent },
  { path: 'liturgy', component: LiturgyComponent },
  { path: 'mysteries', component: MysteriesComponent },
  { path: 'virgin-mary', component: VirginMaryComponent },
  { path: 'saints', component: SaintsComponent },
  { path: 'fathers', component: FathersComponent },
  { path: 'clergy-laity', component: ClergyLaityComponent },
  { path: 'councils', component: CouncilsComponent },
  { path: 'canons', component: CanonsComponent },
  { path: 'creed', component: CreedComponent },
  { path: 'orthodoxy', component: OrthodoxyComponent },
  { path: 'autocephaly', component: AutocephalyComponent },
  { path: 'unity', component: UnityComponent },
  { path: 'mision-vision', component: MisionVisionComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
