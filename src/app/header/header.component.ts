import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  placeholderSearch?: string;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('es');
  }

  ngOnInit() {
    this.updatePlaceholder();

    // Estar pendiente a eventos de cambio de idioma
    this.translate.onLangChange.subscribe(() => {
      this.updatePlaceholder();
    });
  }

  updatePlaceholder() {
    this.translate.get('HEADER_SEARCH').subscribe((translatedText: string) => {
      this.placeholderSearch = translatedText;
    });
  }

  // Dropdownlist Idiomas
  // switchLanguage(event: Event) {
  //   const target = event.target as HTMLSelectElement;
  //   const selectedLanguage = target?.value;

  //   if (selectedLanguage) {
  //     this.translate.use(selectedLanguage);
  //     console.log('Selected language:', selectedLanguage);
  //   }
  // }

  // Botones Idiomas
  switchLanguage(language: string) {
    this.translate.use(language);
  }
}
