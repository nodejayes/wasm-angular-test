import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent }       from './app.component';
import {JsFibonacciService}   from './js-fibonacci.service';
import {WasmFibonacciService} from './wasm-fibonacci.service';
import {FormsModule}          from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    JsFibonacciService,
    WasmFibonacciService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
