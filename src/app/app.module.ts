import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { HttpLoaderFactory } from './translate-loader';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { DialogComponent } from './dialog/dialog.component';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { TextAreaModule } from '@syncfusion/ej2-angular-inputs';
import { TabViewModule } from 'primeng/tabview';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { QuillModule } from 'ngx-quill'
import {FormsModule} from "@angular/forms";
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
import { hugeInstagram } from '@ng-icons/huge-icons'

@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent,
    DialogComponent,
    LayoutComponent,
    ScrollToTopComponent,
    HeaderComponent,
    FooterComponent
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
