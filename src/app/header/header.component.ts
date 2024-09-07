import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  placeholderSearch?: string;
  isMenuOpen:boolean = false;

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

  // Botones Idiomas
  switchLanguage(language: string) {
    this.translate.use(language);
  }

  // Abre y cierra el menu para celulares
  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
