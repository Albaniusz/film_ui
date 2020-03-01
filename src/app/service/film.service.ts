import {Injectable} from '@angular/core';
import {Film} from "../model/film";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from '../../environments/environment';

@Injectable()
export class FilmService {
  restUrl: string;

  constructor(private http: HttpClient) {
    this.restUrl = environment.service.url + '/film';
  }

  getFilm(id: number, fakeTitle: string): Observable<Film> {
    return this.http.get<Film>(this.restUrl + "/" + id + "/" + fakeTitle);
  }

  getTop10(): Observable<Film[]> {
    return this.http.get<Film[]>(this.restUrl + '/top10');
  }
}
