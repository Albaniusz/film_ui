import {Component, OnInit} from '@angular/core';
import {Film} from "../../model/film";
import {FilmService} from "../../service/film.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
})
export class FilmComponent implements OnInit {
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
    this.filmService.getFilm(this.id)
      .subscribe(film => this.film = film);
  }
}
