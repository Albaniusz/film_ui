import {Injectable} from "@angular/core";
import {Person} from "../model/person";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class PersonService {
  restUrl: string;

  constructor(private http: HttpClient) {
    this.restUrl = environment.service.url + '/person';
  }

  getPerson(id: number, fakeName: string): Observable<Person> {
    return this.http.get<Person>(this.restUrl + "/" + id + "/" + fakeName);
  }

  getTop10(): Observable<Person[]> {
    return this.http.get<Person[]>(this.restUrl + '/top10');
  }
}
