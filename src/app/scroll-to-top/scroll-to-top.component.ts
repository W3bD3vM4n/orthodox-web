import { Component } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrl: './scroll-to-top.component.css'
})
export class ScrollToTopComponent {

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Desplaza la ventana hasta arriba

    document.querySelector('.main-container')?.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
