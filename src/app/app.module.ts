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
import { DiscoverComponent } from './sections/discover/discover.component';
import { ArticlesComponent } from './sections/articles/articles.component';
import { NewsComponent } from './sections/news/news.component';
import { EventsComponent } from './sections/events/events.component';
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
import { MisionVisionComponent } from './sections/mision-vision/mision-vision.component';

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
    DiscoverComponent,
    ArticlesComponent,
    NewsComponent,
    EventsComponent,
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
    MisionVisionComponent
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
    BrowserAnimationsModule,
    QuillModule.forRoot(),
    FormsModule,
    NgIconsModule.withIcons({ hugeUserCircle02, hugeSearch01, hugeGoogleMaps, hugeFacebook01, hugeNewTwitterRectangle, hugeYoutube, hugeInstagram })
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
