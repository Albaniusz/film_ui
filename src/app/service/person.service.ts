import {Injectable} from "@angular/core";
import {Person} from "../model/person";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Personlist} from "../model/Personlist";

@Injectable()
export class PersonService {
  restUrl: string;

  constructor(private http: HttpClient) {
    this.restUrl = environment.service.url + '/person';
  }

  getPerson(id: number, fakeName: string): Observable<Person> {
    return this.http.get<Person>(this.restUrl + "/" + id + "/" + fakeName);
  }

  getList(): Observable<Personlist> {
    return this.http.get<Personlist>(this.restUrl + '/list');
  }

  getTop10(): Observable<Personlist> {
    return this.http.get<Personlist>(this.restUrl + '/top10');
  }
}
