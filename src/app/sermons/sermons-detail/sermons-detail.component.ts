import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SermonsService } from "../sermons.service";
import { Sermons } from "../sermons.model";

@Component({
  selector: 'app-sermons-detail',
  templateUrl: './sermons-detail.component.html',
  styleUrl: './sermons-detail.component.css'
})
export class SermonsDetailComponent implements OnInit {

  breadcrumbs = [
    { label: 'Home', url: '/' },
    { label: 'Sermons', url: '/sermons' },
  ];

  sermonsArticle: Sermons | undefined;

  constructor(private route: ActivatedRoute, private sermonsService: SermonsService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.sermonsArticle = this.sermonsService.getSermonsById(id);
  }

}
