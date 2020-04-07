import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from '../../environments/environment';
import {Film} from "../model/film";
import {Filmlist} from "../model/filmlist";
import {Filmcast} from "../model/filmcast";

@Injectable()
export class FilmService {
  restUrl: string;

  constructor(private http: HttpClient) {
    this.restUrl = environment.service.url + '/film';
  }

  getFilm(id: number): Observable<Film> {
    return this.http.get<Film>(this.restUrl + "/" + id);
  }

  getFilmHeader(id: number): Observable<Film> {
    return this.http.get<Film>(this.restUrl + "/" + id + '/header');
  }

  getFullCast(id: number): Observable<Filmcast> {
    return this.http.get<Filmcast>(this.restUrl + "/" + id + "/fullcast");
  }

  getList(): Observable<Filmlist> {
    return this.http.get<Filmlist>(this.restUrl + '/list');
  }

  getListByGenre(): Observable<Filmlist> {
    return this.http.get<Filmlist>(this.restUrl + '/list/genre');
  }

  getTop10(): Observable<Filmlist> {
    return this.http.get<Filmlist>(this.restUrl + '/top10');
  }
}
