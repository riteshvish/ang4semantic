import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SuiModule} from 'ng2-semantic-ui';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as components from './components';

const allComponents = Object.keys(components).map(k => components[k]);
@NgModule({
  declarations: [
    AppComponent,
    ...allComponents,
  ],
  imports: [
    BrowserModule,
    SuiModule,
    SharedModule,
    BrowserAnimationsModule
  ],
  exports: [
  ...allComponents,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
