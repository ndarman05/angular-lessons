import { Component, OnInit } from '@angular/core';
import {NewsService} from '../../shared/services/news.service';
import {ActivatedRoute, PRIMARY_OUTLET, Router, UrlSegment, UrlSegmentGroup, UrlTree} from '@angular/router';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrls: ['./news-list.component.css']
})
export class NewsListComponent implements OnInit {

  news: any = [];
  section = '/newest';
  params: any = {
    page: 1
  };

  constructor(
      private router: Router,
      private route: ActivatedRoute,
      private newsService: NewsService
  ) {
  }

  ngOnInit() {
    const page = +this.route.snapshot.paramMap.get('number');
    this.params.page = (page === 0) ? this.params.page : +this.route.snapshot.paramMap.get('number');
    this.section = (this.router.url === '/') ? this.section : '/' + this.getRootPath(this.router.url)[0].path;
    this.getItems();
  }

  prevPage() {
    if (this.params.page > 0) {
      this.params.page--;
    }
    this.router.navigateByUrl(this.section + '/' + this.params.page);
    this.getItems();
  }

  nextPage() {
    this.params.page++;
    this.router.navigateByUrl(this.section + '/' + this.params.page);
    this.getItems();
  }

  private getItems() {
    this.newsService
        .getNews(this.section, this.params)
        .subscribe((res: any) => this.news = res);
  }

  private getRootPath(url): UrlSegment[] {
    const tree: UrlTree = this.router.parseUrl(url);
    const g: UrlSegmentGroup = tree.root.children[PRIMARY_OUTLET];
    return g.segments;
  }

}
