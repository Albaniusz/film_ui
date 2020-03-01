import {Component, OnInit} from '@angular/core';
import {Person} from "../../model/person";
import {ActivatedRoute} from "@angular/router";
import {PersonService} from "../../service/person.service";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit {
  person: Person;
  id: number;
  fakeName: string;

  constructor(
    private personService: PersonService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.fakeName = params['fakeName']
    });
  }

  ngOnInit(): void {
    this.collectPerson();
  }

  collectPerson() {
    this.personService.getPerson(this.id, this.fakeName).subscribe(person => this.person = person);
  }
}
