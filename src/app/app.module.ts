import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//bootstrap alert import part 1
import { AlertModule } from 'ng2-bootstrap';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ BrowserModule , AlertModule.forRoot() ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule {
  
 }
