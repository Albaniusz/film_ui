import {Component, OnInit} from '@angular/core';
import {FilmService} from "../../service/film.service";
import {PersonService} from "../../service/person.service";
import {Film} from "../../model/film";
import {Person} from "../../model/person";
import {Review} from "../../model/review";
import {Thread} from "../../model/thread";

@Component({
  selector: 'app-twobox',
  templateUrl: './twobox.component.html',
})
export class TwoboxComponent implements OnInit {
  films: Film[];
  persons: Person[];
  reviews: Review[];
  forumThreads: Thread[];

  constructor(
    private filmService: FilmService,
    private personService: PersonService
  ) {
  }

  ngOnInit() {
    this.collectFilms();
    // this.collectPersons();
  }

  private collectFilms(): void {
    this.filmService.getTop10()
      .subscribe(films => this.films = films);
  }

  private collectPersons() {
    this.personService.getTop10()
      .subscribe(persons => this.persons = persons);
  }
}
