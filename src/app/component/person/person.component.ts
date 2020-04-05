import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PersonService} from "../../service/person.service";
import {Person} from "../../model/person";

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
})
export class PersonComponent implements OnInit {
  person: Person;
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
    this.collectPerson();
  }

  collectPerson() {
    this.personService.getPerson(this.id).subscribe(person => this.person = person);
  }
}
