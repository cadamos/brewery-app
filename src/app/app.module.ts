import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BreweryComponent } from './Components/brewery/brewery.component';
import { BreweryItemComponent } from './components/brewery-item/brewery-item.component';
import { ControlComponent } from './components/control/control.component';
import { BreweryService} from './services/brewery.service';
import { SpecBreweryPipe } from './spec-brewery.pipe';

@NgModule({
  declarations: [
    AppComponent,
    BreweryComponent,
    BreweryItemComponent,
    ControlComponent,
    SpecBreweryPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    BreweryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
