import {Component, OnInit} from '@angular/core';
import {FilmService} from "../../service/film.service";
import {ActivatedRoute} from "@angular/router";
import {Filmcastelement} from "../../model/filmcastelement";

@Component({
  selector: 'app-filmcast',
  templateUrl: './filmcast.component.html',
})
export class FilmcastComponent implements OnInit {
  filmCast: Filmcastelement[];
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
    this.collectCast();
  }

  collectCast() {
    this.filmService.getFullCast(this.id).subscribe(cast => this.filmCast = cast._embedded.filmCastDTOList);
  }
}
