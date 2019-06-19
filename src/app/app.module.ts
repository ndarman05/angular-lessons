import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { HeaderComponent } from '../shared/header/header.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NewsListComponent } from './news-list/news-list.component';
import { NewsDetailComponent } from './news-detail/news-detail.component';
import { NewsItemComponent } from './news-list/news-item/news-item.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsService} from '../shared/services/news.service';
import {routing} from './app.routing';
import { ShowPageComponent } from './show-page/show-page.component';
import { AskPageComponent } from './ask-page/ask-page.component';
import { JobsPageComponent } from './jobs-page/jobs-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NewsListComponent,
    NewsDetailComponent,
    NewsItemComponent,
    ShowPageComponent,
    AskPageComponent,
    JobsPageComponent
  ],
  imports: [
    BrowserModule,
      FormsModule,
    routing,
    HttpClientModule
  ],
  providers: [
    NewsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
