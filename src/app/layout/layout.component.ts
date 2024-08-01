import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza la ventana hasta arriba

    document.querySelector('.main-container')?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}