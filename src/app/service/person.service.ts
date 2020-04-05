import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Personlist} from "../model/personlist";
import {Person} from "../model/person";
import {Filmography} from "../model/filmography";

@Injectable()
export class PersonService {
  restUrl: string;

  constructor(private http: HttpClient) {
    this.restUrl = environment.service.url + '/person';
  }

  getPerson(id: number): Observable<Person> {
    return this.http.get<Person>(this.restUrl + "/" + id);
  }

  getList(): Observable<Personlist> {
    return this.http.get<Personlist>(this.restUrl + '/list');
  }

  getTop10(): Observable<Personlist> {
    return this.http.get<Personlist>(this.restUrl + '/top10');
  }

  getFilmography(id: number): Observable<Filmography> {
    return this.http.get<Filmography>(this.restUrl + "/" + id + "/filmography");
  }
}
