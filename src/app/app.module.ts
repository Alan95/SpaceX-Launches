import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { LaunchItemComponent } from './components/launch-item/launch-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    LaunchItemComponent
  ],
  imports: [
    NgbModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
