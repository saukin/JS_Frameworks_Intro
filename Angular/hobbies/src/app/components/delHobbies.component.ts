import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-delhobbies',
    template: `
        <li>{{ delHobby }}</li>
    `
})

export class DelHobbiesComponent {

    @Input() delHobby: string;
    

}