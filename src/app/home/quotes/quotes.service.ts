import { Injectable } from '@angular/core';
import { Quotes } from '../quotes/quotes.model';

@Injectable({
  providedIn: 'root'
})
export class QuotesService {

  private quotes: Quotes[] = [
    {
      id: 1,
      author: 'Author One',
      quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Error labore nam, iure ea doloremque placeat fuga, animi esse ullam dicta, iusto illum ducimus? Reiciendis quos accusamus provident natus, perspiciatis exercitationem?'
    },
    {
      id: 2,
      author: 'Author Two',
      quote: 'Quisque rutrum vulputate elementum. Morbi ut eros gravida tortor finibus vulputate. Pellentesque maximus dui ante, sit amet eleifend leo scelerisque in. Aenean eu risus in leo venenatis commodo non volutpat sapien. Nam hendrerit suscipit tortor laoreet consectetur. Donec sagittis lorem nec molestie posuere. Quisque bibendum vel lacus sed faucibus. Phasellus at mi ac lacus sagittis tristique nec in leo. Sed ac laoreet diam. Donec sit amet dignissim nisi, aliquet dictum metus. Maecenas iaculis auctor tortor, sed euismod ante tristique eu. Proin tristique arcu sed ipsum bibendum pretium.'
    },
    {
      id: 3,
      author: 'Author Three',
      quote: 'Donec cursus convallis turpis, sit amet efficitur est interdum vel. Sed fermentum massa id diam iaculis convallis. In egestas sed augue eu egestas. Curabitur blandit venenatis varius. Proin ut velit euismod, molestie quam a, ornare tortor. Aenean elementum id quam molestie pulvinar. Aenean molestie ultricies erat.'
    },
    // Add more quotes as needed
  ];

  constructor() {}

  getQuotes(): Quotes[] {
    return this.quotes;
  }
}
