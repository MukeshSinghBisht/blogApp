import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'blogApp';
  constructor(){
    localStorage.setItem('blogs',JSON.stringify([{
      name: 'John',
      image: 'https://keirqld.com.au/wp-content/uploads/2016/04/man-in-office.jpg',
      title: 'Javascript',
      content: 'Javascript is a awesome'
    },
    {
      name: 'Peter',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTs69qgWQGnAEnwV5YTrtjyNk5nFcf68rpYlbEBLQtP_bewC5iL&usqp=CAU',
      title: 'Truth',
      content: 'Truth is most often used to mean being in accord with fact or reality, or fidelity to an original or standard.[1] Truth is also sometimes defined in modern contexts as an idea of "truth to self", or authenticity.'
    }
  ]));
  }
}
