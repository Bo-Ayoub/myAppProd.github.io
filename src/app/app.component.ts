import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  


   greetPeople(greeting:string, ...names:string[]):void {

    console.log( greeting+','+names.join(' and ')+'!');
  }


   greetPeople2 = (greeting: string, ...names: string[]): string => {
    return `${greeting}, ${names.join(' and ')}!`;
};


  




  


}

const component=new AppComponent();

component.greetPeople("hello","ayoub","ahmed","karim");
