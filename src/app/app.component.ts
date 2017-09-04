import { Component } from '@angular/core';
import {SuiCheckboxModule, SuiRatingModule,SuiDatepickerModule} from 'ng2-semantic-ui';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selection = [];
  options:Array<string> = ['a','b','c'];
  onChange(model:Array<string>) {
    console.log(model);
  }

}
