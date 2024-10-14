import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemorialsService } from "../memorials.service";
import { Memorials } from "../memorials.model";

@Component({
  selector: 'app-memorials-detail',
  templateUrl: './memorials-detail.component.html',
  styleUrl: './memorials-detail.component.css'
})
export class MemorialsDetailComponent implements OnInit {

  breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Memorials', url: '/memorials' },
  ];

  memorialsArticle: Memorials | undefined;

  constructor(private route: ActivatedRoute, private memorialsService: MemorialsService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.memorialsArticle = this.memorialsService.getMemorialsById(id);
  }

}
