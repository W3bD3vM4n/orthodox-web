import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { AppRoutingModule } from './app-routing.module';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { SchedulerComponent } from './scheduler/scheduler.component';
import { DialogComponent } from './dialog/dialog.component';
import { TextBoxModule } from '@syncfusion/ej2-angular-inputs';
import { TextAreaModule } from '@syncfusion/ej2-angular-inputs';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TabViewModule } from 'primeng/tabview';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { QuillModule } from 'ngx-quill'
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    SchedulerComponent,
    DialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CalendarModule,
    ScheduleModule,
    DialogModule,
    TextBoxModule,
    TextAreaModule,
    FontAwesomeModule,
    TabViewModule,
    BrowserAnimationsModule,
    QuillModule.forRoot(),
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
