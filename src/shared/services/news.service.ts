import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'https://node-hnapi.herokuapp.com/newest';

  constructor(private http: HttpClient) { }

  getNews(params = {}): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getItemById(id: number): Observable<any> {
    return this.http.get('https://node-hnapi.herokuapp.com/item/20221659');
  }
}
