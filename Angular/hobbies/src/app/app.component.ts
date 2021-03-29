import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'hobbies';
  newHobby: string = '';
  hobbies: string[] = ['one','two'];
  delHobbies: string[] = ['three','four'];

  addHobby() {
   this.hobbies.push(this.newHobby);
  }
  
  removeHobby(hobby) {
    const ind = this.hobbies.indexOf(hobby);
    this.delHobbies.push(this.hobbies.splice(ind,1)[0]);
  }

}
