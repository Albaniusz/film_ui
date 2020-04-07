import {Component, OnInit} from '@angular/core';
import {Filmcastelement} from "../../model/filmcastelement";
import {PersonService} from "../../service/person.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-filmography',
  templateUrl: './filmography.component.html',
})
export class FilmographyComponent implements OnInit {
  filmography: Filmcastelement[];
  id: number;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnInit(): void {
    this.collectFilmography();
  }

  collectFilmography() {
    this.personService.getFilmography(this.id).subscribe(filmography => this.filmography = filmography._embedded.filmCastDTOList);
  }
}
