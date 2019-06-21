import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import querystring from 'querystring';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'https://node-hnapi.herokuapp.com/newest';

  constructor(private http: HttpClient) { }

  getNews(params = { page: 1 }): Observable<any> {
    params = querystring.stringify(params);
    return this.http.get(this.apiUrl + '?' + params);
  }

  getItemById(id: number): Observable<any> {
    return this.http.get('https://node-hnapi.herokuapp.com/item/' + id);
  }
}
