import {Component, OnInit} from '@angular/core';
import {FilmService} from "../../service/film.service";
import {Film} from "../../model/film";

@Component({
  selector: 'app-filmlistgenre',
  templateUrl: './filmlistgenre.component.html',
})
export class FilmlistgenreComponent implements OnInit {
  films: Film[];

  constructor(
    private filmService: FilmService,
  ) {
  }

  ngOnInit(): void {
    this.collectFilms();
  }

  private collectFilms(): void {
    this.filmService.getListByGenre()
      .subscribe(filmsList => this.films = filmsList._embedded.filmDTOList);
  }
}
