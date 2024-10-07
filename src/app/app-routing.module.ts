import { importProvidersFrom, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { PresidentMembersComponent } from './sections/president-members/president-members.component';
import { AdministrationComponent } from './sections/administration/administration.component';
import { SuccessionComponent } from './sections/succession/succession.component';
import { ElevationComponent } from './sections/elevation/elevation.component';
import { AutonomyComponent } from './sections/autonomy/autonomy.component';
import { ProclamationComponent } from './sections/proclamation/proclamation.component';
import { DiscoverComponent } from './sections/discover/discover.component';
import { SchedulerComponent } from './sections/scheduler/scheduler.component';
import { GalleryComponent } from './sections/gallery/gallery.component';
import { StoreComponent } from './sections/store/store.component';
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
import { BibleStudyComponent } from './sections/bible-study/bible-study.component';
import { EditorialComponent } from './sections/editorial/editorial.component';
import { IconographyComponent } from './sections/iconography/iconography.component';
import { HealthTherapiesComponent } from './sections/health-therapies/health-therapies.component';
import { MonasteryHistoryComponent } from './sections/monastery-history/monastery-history.component';
import { MonasteryBlueprintsComponent } from './sections/monastery-blueprints/monastery-blueprints.component';
import { MonasteryEcologyComponent } from './sections/monastery-ecology/monastery-ecology.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'president-members', component: PresidentMembersComponent },
  { path: 'administration', component: AdministrationComponent },
  { path: 'succession', component: SuccessionComponent },
  { path: 'elevation', component: ElevationComponent },
  { path: 'autonomy', component: AutonomyComponent },
  { path: 'proclamation', component: ProclamationComponent },
  { path: 'discover', component: DiscoverComponent },
  { path: '', redirectTo: '/sermons', pathMatch: 'full' },
  {
    path: 'sermons',
    loadChildren: () => import('./sermons/sermons.module').then(m => m.SermonsModule),
  },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  {
    path: 'events',
    loadChildren: () => import('./events/events.module').then(m => m.EventsModule),
  },
  { path: 'scheduler', component: SchedulerComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'store', component: StoreComponent },
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
  { path: 'history', component: MonasteryHistoryComponent },
  { path: 'blueprints', component: MonasteryBlueprintsComponent },
  { path: 'ecology', component: MonasteryEcologyComponent },
  { path: 'mision-vision', component: MisionVisionComponent },
  { path: 'bible-study', component: BibleStudyComponent },
  { path: 'editorial', component: EditorialComponent },
  { path: 'iconography', component: IconographyComponent },
  { path: 'health-therapies', component: HealthTherapiesComponent },
  // Add more routes as needed
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
