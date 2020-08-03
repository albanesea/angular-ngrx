import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { profileReducer } from './core/profile/store/profile.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ProfileEffects } from './core/profile/store/profile.effects';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({profile: profileReducer}),
    EffectsModule.forRoot([ProfileEffects]) 
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
