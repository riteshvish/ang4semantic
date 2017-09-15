import { Component,ViewEncapsulation } from '@angular/core';
import {SuiCheckboxModule, SuiRatingModule,SuiDatepickerModule} from 'ng2-semantic-ui';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'app';
  selection = [];
  options:Array<string> = ['a','b','c'];
  onChange(model:Array<string>) {
    console.log(model);
  }
  public hexadecimalValue: string;

  public dropdownValue: string = '';

  onSubmit(value) {
    alert(`Submit: ${JSON.stringify(value)}`);
  }
}
