import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { HttpLoaderFactory } from './translate-loader';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { SchedulerComponent } from './sections/scheduler/scheduler.component';
import { DialogComponent } from './sections/scheduler/components/dialog/dialog.component';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { TextAreaModule } from '@syncfusion/ej2-angular-inputs';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { TimelineModule } from 'primeng/timeline';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { QuillModule } from 'ngx-quill'
import { FormsModule } from "@angular/forms";
import { LayoutComponent } from './layout/layout.component';
import { ScrollToTopComponent } from './scroll-to-top/scroll-to-top.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NgIconsModule } from '@ng-icons/core';
import { hugeUserCircle02 } from '@ng-icons/huge-icons';
import { hugeSearch01 } from '@ng-icons/huge-icons';
import { hugeGoogleMaps } from '@ng-icons/huge-icons'
import { hugeFacebook01 } from '@ng-icons/huge-icons'
import { hugeNewTwitterRectangle } from '@ng-icons/huge-icons'
import { hugeYoutube } from '@ng-icons/huge-icons'
import { hugeInstagram } from '@ng-icons/huge-icons';
import { HomeComponent } from './home/home.component';
import { CapitalizePipe } from './capitalize.pipe';
import { PresidentMembersComponent } from './sections/president-members/president-members.component';
import { AdministrationComponent } from './sections/administration/administration.component';
import { SuccessionComponent } from './sections/succession/succession.component';
import { ElevationComponent } from './sections/elevation/elevation.component';
import { AutonomyComponent } from './sections/autonomy/autonomy.component';
import { ProclamationComponent } from './sections/proclamation/proclamation.component';
import { DiscoverComponent } from './sections/discover/discover.component';
import { ArticlesComponent } from './sections/articles/articles.component';
import { EventsComponent } from './sections/events/events.component';
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
import { MonasteryHistoryComponent } from './sections/monastery-history/monastery-history.component';
import { MonasteryBlueprintsComponent } from './sections/monastery-blueprints/monastery-blueprints.component';
import { MonasteryEcologyComponent } from './sections/monastery-ecology/monastery-ecology.component';
import { QuestionOriginComponent } from './sections/question-origin/question-origin.component';
import { QuestionInterpretationComponent } from './sections/question-interpretation/question-interpretation.component';
import { QuestionAdorationComponent } from './sections/question-adoration/question-adoration.component';
import { QuestionVenerationComponent } from './sections/question-veneration/question-veneration.component';
import { QuestionIntercessionComponent } from './sections/question-intercession/question-intercession.component';
import { QuestionRelicsComponent } from './sections/question-relics/question-relics.component';
import { QuestionIconsComponent } from './sections/question-icons/question-icons.component';
import { QuestionJoinComponent } from './sections/question-join/question-join.component';
import { BibleStudyComponent } from './sections/bible-study/bible-study.component';
import { EditorialComponent } from './sections/editorial/editorial.component';
import { IconographyComponent } from './sections/iconography/iconography.component';
import { HealthTherapiesComponent } from './sections/health-therapies/health-therapies.component';
import { MisionVisionComponent } from './sections/mision-vision/mision-vision.component';
import { UnderConstructionComponent } from './sections/under-construction/under-construction.component';
import { GalleryModule, GalleryItem, ImageItem } from 'ng-gallery';
import { LightboxModule, LIGHTBOX_CONFIG } from 'ng-gallery/lightbox';

@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent,
    DialogComponent,
    LayoutComponent,
    ScrollToTopComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CapitalizePipe,
    PresidentMembersComponent,
    AdministrationComponent,
    SuccessionComponent,
    ElevationComponent,
    AutonomyComponent,
    ProclamationComponent,
    DiscoverComponent,
    ArticlesComponent,
    EventsComponent,
    GalleryComponent,
    StoreComponent,
    GodComponent,
    ChurchComponent,
    TraditionComponent,
    BibleComponent,
    LiturgyComponent,
    MysteriesComponent,
    VirginMaryComponent,
    SaintsComponent,
    FathersComponent,
    ClergyLaityComponent,
    CouncilsComponent,
    CanonsComponent,
    CreedComponent,
    OrthodoxyComponent,
    AutocephalyComponent,
    UnityComponent,
    MonasteryHistoryComponent,
    MonasteryBlueprintsComponent,
    MonasteryEcologyComponent,
    QuestionOriginComponent,
    QuestionInterpretationComponent,
    QuestionAdorationComponent,
    QuestionVenerationComponent,
    QuestionIntercessionComponent,
    QuestionRelicsComponent,
    QuestionIconsComponent,
    QuestionJoinComponent,
    BibleStudyComponent,
    EditorialComponent,
    IconographyComponent,
    HealthTherapiesComponent,
    MisionVisionComponent,
    UnderConstructionComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AppRoutingModule,
    CalendarModule,
    ScheduleModule,
    DialogModule,
    TextBoxModule,
    TextAreaModule,
    TabViewModule,
    AccordionModule,
    TimelineModule,
    BrowserAnimationsModule,
    QuillModule.forRoot(),
    FormsModule,
    NgIconsModule.withIcons({ hugeUserCircle02, hugeSearch01, hugeGoogleMaps, hugeFacebook01, hugeNewTwitterRectangle, hugeYoutube, hugeInstagram }),
    GalleryModule,
    LightboxModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {
      provide: LIGHTBOX_CONFIG,
      useValue: {
        panelClass: 'fullscreen' // Configuración por defecto de lightbox
      }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
