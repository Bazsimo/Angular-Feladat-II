import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CivListComponent } from './civ-list/civ-list.component';
import {FormsModule} from '@angular/forms';
import { ConvertCivUniquePropPipe } from './shared/convert-civ-unique-prop.pipe';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CivListComponent,
    ConvertCivUniquePropPipe,
    ConvertToSpacesPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
