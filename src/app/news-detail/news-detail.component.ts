import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {NewsService} from '../../shared/services/news.service';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {

  private id: number;
  public item = {} as any;

  constructor(
      private route: ActivatedRoute,
      private newsService: NewsService
  ) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.newsService
        .getItemById(this.id)
        .subscribe((res: any) => this.item = res);
  }

}
