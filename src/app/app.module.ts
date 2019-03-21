import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OverlayModule } from '@angular/cdk/overlay';

import { AppComponent, ToastComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent
  ],
  imports: [
    BrowserModule,
    OverlayModule,
  ],
  entryComponents: [ToastComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
