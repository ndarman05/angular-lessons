import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../shared/services/news.service';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news: any = [];
  params: any = {
    page: 1
  };

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.getItems();
  }

  prevPage() {
    if (this.params.page > 0) {
      this.params.page--;
    }
    this.getItems();
  }

  nextPage() {
    this.params.page++;
    this.getItems();
  }

  private getItems() {
    this.newsService
        .getNews(this.params)
        .subscribe((res: any) => this.news = res);
  }

}
