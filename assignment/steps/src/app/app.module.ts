import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComp } from './parent.component';
import { ChildComp } from './child-component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComp,
    ChildComp
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
