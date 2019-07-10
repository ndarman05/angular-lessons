import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  themeValue = new BehaviorSubject<any>('light');

  constructor(){
    this.setThemeValue(localStorage.getItem('theme'));
  }

  getThemeValue(){
    return this.themeValue.value;
  }

  setThemeValue(value){
    this.themeValue.next(value);
    this.changeThemeValue(this.getThemeValue());
  }

  changeThemeValue(value){
    if(value == 'light'){
      localStorage.setItem('theme', 'light');
      document.documentElement.style.setProperty('--bg-color','white');
      document.documentElement.style.setProperty('--text-color','black');
    } else if( value == 'dark' ){
      localStorage.setItem('theme', 'dark');
      document.documentElement.style.setProperty('--bg-color', 'black');
      document.documentElement.style.setProperty('--text-color', 'white');
    }
  }
}
