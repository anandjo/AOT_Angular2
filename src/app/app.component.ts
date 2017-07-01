import { Component } from '@angular/core';
import { Config } from './config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public myUrl: any;
  private baseUrl: any = Config;
  constructor(){
    this.baseUrl = Config.getString();
    this.myUrl = this.baseUrl;
  }
}

