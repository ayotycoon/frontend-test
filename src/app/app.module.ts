import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LogoComponent } from './components/logo/logo.component';
import { CardsComponent } from './components/cards/cards.component';
import { AddCardComponent } from './components/add-card/add-card.component';
import { CardComponent } from './components/card/card.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HeaderComponent } from './components/add-card/header/header.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/add-card/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './components/add-card/alert/alert.component';


const routes: Routes = [

  { path: '', pathMatch: 'full', component:  HomeComponent},
  { path: 'add-card',  component:  AddCardComponent},


];

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    CardsComponent,
    AddCardComponent,
    CardComponent,
    HeaderComponent,
    HomeComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers, { metaReducers }),
    ReactiveFormsModule,
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
