import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  switchLanguage(event: Event) {
    const target = event.target as HTMLSelectElement;
    const selectedLanguage = target?.value;

    if (selectedLanguage) {
      this.translate.use(selectedLanguage);
      console.log('Selected language:', selectedLanguage);
    }
  }
}
