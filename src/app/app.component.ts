import { Component } from '@angular/core';
import arrayWords from "../utilities/words";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 100;



  handleSlideChange(e:any){
    this.limit=e.target.value;
  }

  generate(){
    this.words = arrayWords.slice(0,this.limit).join(' ');
  }

  random(){
    this.words= arrayWords[Math.floor(Math.random() * 20)];


  }


}
