import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  text = 'Welcome to Mango School Website.';
  animatedText: string = '';
  ngOnInit(): void {
    this.createWellcomeAnimation();
  }

  createWellcomeAnimation(){
    let currentIndex = 0;

    setInterval(() => {
      if (currentIndex < this.text.length) {
        this.animatedText += this.text[currentIndex];
        currentIndex++;
      }
    }, 100);
  }

}
