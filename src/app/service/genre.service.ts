import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Genrelist} from "../model/genrelist";

@Injectable()
export class GenreService {
  restUrl: string;

  constructor(private http: HttpClient) {
    this.restUrl = environment.service.url + '/genre';
  }

  getList(): Observable<Genrelist> {
    return this.http.get<Genrelist>(this.restUrl + '/listfull');
  }
}
