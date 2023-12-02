import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutoAffiliationModule } from './features/auto-affiliation/auto-affiliation.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AutoAffiliationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
