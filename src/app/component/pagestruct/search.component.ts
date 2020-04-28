import {Component, OnInit} from '@angular/core';
import {CountryService} from "../../service/country.service";
import {GenreService} from "../../service/genre.service";
import {Genre} from "../../model/genre";
import {Country} from "../../model/country";

@Component({
  selector: 'app-pagestruct-search',
  templateUrl: './search.component.html',
})
export class SearchComponent implements OnInit {
  countries: Country[];
  genres: Genre[];

  constructor(
    private countryService: CountryService,
    private genreService: GenreService
  ) {
  }

  ngOnInit(): void {
    this.collectCountries();
    this.collectGenres();
  }

  collectCountries() {
    this.countryService.getList()
      .subscribe(countries => this.countries = countries._embedded.countryDTOList);
  }

  collectGenres() {
    this.genreService.getList()
      .subscribe(genres => this.genres = genres._embedded.genreDTOList);
  }
}
