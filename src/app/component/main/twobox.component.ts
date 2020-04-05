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
  reviews: Review[];//TODO
  forumThreads: Thread[];//TODO

  constructor(
    private filmService: FilmService,
    private personService: PersonService
  ) {
  }

  ngOnInit() {
    this.collectFilms();
    this.collectPersons();
  }

  private collectFilms(): void {
    this.filmService.getTop10()
      .subscribe(filmsList => this.films = filmsList._embedded.filmDTOList);
  }

  private collectPersons() {
    this.personService.getTop10()
      .subscribe(personsList => this.persons = personsList._embedded.personDTOList);
  }
}
