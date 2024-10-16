import { Injectable } from '@angular/core';
import { Memorials } from "./memorials.model"; // Importa la interface Memorials

@Injectable({
  providedIn: 'root'
})
export class MemorialsService {

  memorialsList: Memorials[] = [
    {
      id: 1,
      title: 'Memorial #1',
      date: 'Octubre 14, 2024',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer imperdiet nulla ac tellus convallis vestibulum. Pellentesque fermentum ex sit amet elit posuere dapibus. Mauris ut sodales purus, et euismod massa. Phasellus vulputate libero tellus, vel varius leo tempus eu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Nullam mollis et felis eu fringilla. Vivamus pellentesque, lectus sed viverra sollicitudin, est augue rutrum justo, non vehicula velit purus nec metus. Nullam vel consequat odio, id euismod metus. Maecenas id dictum sem. Ut faucibus viverra mattis. Etiam pulvinar vestibulum bibendum. Praesent dui sapien, interdum vitae interdum eu, malesuada a risus. Quisque vehicula quam nec bibendum tristique.'
    },
    {
      id: 2,
      title: 'Memorial #2',
      date: 'Octubre 13, 2024',
      content: 'Vivamus ac faucibus arcu. Etiam vel pretium lectus. Nunc dui lectus, luctus sed porttitor in, condimentum sed nunc. Mauris gravida porttitor eros quis pulvinar. Etiam felis tellus, pharetra vel euismod sit amet, faucibus quis purus. Integer condimentum tempor lectus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vestibulum vel urna eget tellus pulvinar efficitur. Sed sollicitudin mi eget consectetur vehicula. Suspendisse risus arcu, dapibus vitae venenatis sit amet, pellentesque sed lectus. Morbi luctus metus quis odio finibus finibus. Nunc ornare commodo turpis nec auctor. Proin elit nibh, laoreet sed nisi a, eleifend faucibus tellus. Vivamus quis mauris odio. Etiam non ligula quis erat finibus efficitur vitae vel erat.'
    },
    {
      id: 3,
      title: 'Memorial #3',
      date: 'Octubre 12, 2024',
      content: 'Mauris non neque sodales, suscipit diam sit amet, varius augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Curabitur non ultrices sapien. Aenean lorem ex, pellentesque nec ipsum ut, suscipit suscipit sem. Mauris placerat dignissim lacus et rhoncus. Aliquam nec pellentesque lacus, ac sodales tellus. Morbi tincidunt ipsum interdum mauris pellentesque porttitor. Nullam quis enim ut felis congue efficitur quis in libero. Ut vulputate, ipsum in vehicula venenatis, felis nulla accumsan tortor, non facilisis sapien libero quis tellus. Mauris sit amet justo sapien.'
    },
  ];

  constructor() {}

  getMemorialsList() {
    return this.memorialsList;
  }

  getMemorialsById(id: number) {
    return this.memorialsList.find(memorials => memorials.id === id);
  }
}
