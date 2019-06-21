import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.css']
})
export class NewsItemComponent implements OnInit {

  @Input() newsItem: any = [];

  constructor(private router: Router) { }

  ngOnInit() {}

  openDetailPage(newsID) {
    this.router.navigateByUrl('/item/' + newsID);
  }

}
