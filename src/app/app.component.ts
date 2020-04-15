import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  txt1;
  txt2;
  tes =['*','*','*'];
  hasil = 0;
  cek(){
    this.hasil = Math.pow(this.txt1,this.txt2);
    
  }
}
