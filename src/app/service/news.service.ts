import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';
import {News} from "../model/news";

@Injectable()
export class NewsService {
  restUrl: string;

  constructor(private http: HttpClient) {
    this.restUrl = environment.service.url + '/news';
  }

  getLatest10(): Observable<News[]> {
    return this.http.get<News[]>(this.restUrl + '/latest10');
  }
}
