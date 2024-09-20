import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})
export class NewsDetailComponent implements OnInit {
  newsArticle: any;

  newsList = [
    {
      id: 1,
      title: 'Noticia #1',
      date: 'Septiembre 20, 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nulla ac tellus convallis vestibulum. Pellentesque fermentum ex sit amet elit posuere dapibus. Mauris ut sodales purus, et euismod massa. Phasellus vulputate libero tellus, vel varius leo tempus eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam mollis et felis eu fringilla. Vivamus pellentesque, lectus sed viverra sollicitudin, est augue rutrum justo, non vehicula velit purus nec metus. Nullam vel consequat odio, id euismod metus. Maecenas id dictum sem. Ut faucibus viverra mattis. Etiam pulvinar vestibulum bibendum. Praesent dui sapien, interdum vitae interdum eu, malesuada a risus. Quisque vehicula quam nec bibendum tristique.'
    },
    {
      id: 2,
      title: 'Noticia #2',
      date: 'September 19, 2024',
      content: 'Vivamus ac faucibus arcu. Etiam vel pretium lectus. Nunc dui lectus, luctus sed porttitor in, condimentum sed nunc. Mauris gravida porttitor eros quis pulvinar. Etiam felis tellus, pharetra vel euismod sit amet, faucibus quis purus. Integer condimentum tempor lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum vel urna eget tellus pulvinar efficitur. Sed sollicitudin mi eget consectetur vehicula. Suspendisse risus arcu, dapibus vitae venenatis sit amet, pellentesque sed lectus. Morbi luctus metus quis odio finibus finibus. Nunc ornare commodo turpis nec auctor. Proin elit nibh, laoreet sed nisi a, eleifend faucibus tellus. Vivamus quis mauris odio. Etiam non ligula quis erat finibus efficitur vitae vel erat.'
    },
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.newsArticle = this.newsList.find(news => news.id === id);
  }
}
