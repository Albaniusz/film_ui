import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Countrylist} from "../model/countrylist";

@Injectable()
export class CountryService {
  restUrl: string;

  constructor(private http: HttpClient) {
    this.restUrl = environment.service.url + '/country';
  }

  getList(): Observable<Countrylist> {
    return this.http.get<Countrylist>(this.restUrl + '/listfull');
  }
}
