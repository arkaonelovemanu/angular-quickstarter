import { Component } from '@angular/core';
import { NgModule } from '@angular/core';


@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><courses></courses>
  <authors></authors>`
})
export class AppComponent  { name = 'Angular'; }
