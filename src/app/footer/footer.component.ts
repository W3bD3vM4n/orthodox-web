import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {

  currentYear?: number;

  constructor(private translate: TranslateService) {}

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }
}
