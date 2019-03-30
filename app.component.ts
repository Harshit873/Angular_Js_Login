import { Component } from '@angular/core';
import { overrideComponentView } from '@angular/core/src/view';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title ="";
  val = "";
  submit ="";
  login = "";
  
  myfunction(){
    if (this.title == "user" && this.val == "user") {
      this.login= "WELCOME ☻";
    }
    else{
      this.login= "Opps!!";
    }
  }    
}
