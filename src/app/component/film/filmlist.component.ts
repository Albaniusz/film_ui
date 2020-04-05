import {Component, OnInit} from '@angular/core';
import {FilmService} from "../../service/film.service";
import {Film} from "../../model/film";

@Component({
  selector: 'app-filmlist',
  templateUrl: './filmlist.component.html',
})
export class FilmlistComponent implements OnInit {
  films: Film[];

  constructor(
    private filmService: FilmService,
  ) {
  }

  ngOnInit(): void {
    this.collectFilms();
  }

  private collectFilms(): void {
    this.filmService.getList()
      .subscribe(filmsList => this.films = filmsList._embedded.filmDTOList);
  }
}
