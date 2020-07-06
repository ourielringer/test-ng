import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { IntuterComponent } from './comps/intuter/intuter.component';
import { LiInputerComponent } from './comps/li-inputer/li-inputer.component';

@NgModule({
  declarations: [
    AppComponent,
    IntuterComponent,
    LiInputerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
