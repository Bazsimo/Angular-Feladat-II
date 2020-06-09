import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CivListComponent } from './civ-list/civ-list.component';
import { FormsModule } from '@angular/forms';
import { ConvertCivUniquePropPipe } from './shared/convert-civ-unique-prop.pipe';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { CivListDetailsComponent } from './civ-list/civ-list-details/civ-list-details.component';
import { OneUnitTableComponent } from './one-unit-table/one-unit-table.component';
import { UnitListComponent } from './unit-list/unit-list.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';
import { NotFound404Component } from './http-status/not-found404/not-found404.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CivListComponent,
    ConvertCivUniquePropPipe,
    ConvertToSpacesPipe,
    CivListDetailsComponent,
    OneUnitTableComponent,
    UnitListComponent,
    WelcomeViewComponent,
    NotFound404Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'units', component: UnitListComponent},
      { path: 'civilizations', component: CivListComponent},
      { path: '', component: WelcomeViewComponent, pathMatch: 'full'},
      { path: '**', component: NotFound404Component}
    ])
  ],
  providers: [
    ConvertCivUniquePropPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
