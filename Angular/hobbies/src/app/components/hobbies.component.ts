import { Component, Output, Input, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-hobbies',
    template: `
        <li
            (click) = "onHobbyClicked()"
            [class] = "ind % 2 == 0 ? 'pink' : 'gray'">
            {{ hobbyName }}
        </li>
    `,
    styleUrls: ['../app.component.css']
})

export class HobbieComponent {
    @Input() ind: number;
    @Input() hobbyName: string;
    @Output() hobbyRemoved = new EventEmitter<string>();

    onHobbyClicked() {
        this.hobbyRemoved.emit(this.hobbyName);
    }

}