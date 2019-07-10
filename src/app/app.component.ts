import { Component } from '@angular/core';
import { AppService } from './app.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  mobileNavList: boolean = false;
  language = 'RU';

  themeValue = localStorage.getItem('theme') == 'light' ? false : true;

  constructor(private appService: AppService){}

  toggleMenu(){
    this.mobileNavList = !this.mobileNavList;
  }

  toggleTheme(value){
    if(value.target.checked){
      this.appService.setThemeValue('dark');
    } else if (!value.target.checked){
      this.appService.setThemeValue('light');
    }
  }
}