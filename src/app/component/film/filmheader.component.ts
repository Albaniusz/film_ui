import {Component, OnInit} from '@angular/core';
import {Film} from "../../model/film";
import {FilmService} from "../../service/film.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-filmheader',
  templateUrl: './filmheader.component.html',
})
export class FilmheaderComponent implements OnInit {
  film: Film;
  id: number;

  constructor(
    private filmService: FilmService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.collectFilm();
  }

  collectFilm() {
    this.filmService.getFilmHeader(this.id)
      .subscribe(film => this.film = film);
  }
}
