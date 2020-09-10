import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CoreModule } from './core/core.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { SharedModule } from './shared/shared.module';
import { StoreModule } from '@ngrx/store';
import { loggedReducer } from './app.reducer';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    CoreModule,
    StoreModule.forRoot({ LoggedIn: loggedReducer })
  ],
  exports: [
  ]
  ,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
