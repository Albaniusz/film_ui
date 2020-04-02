import {Component, OnInit} from '@angular/core';
import {Person} from "../../model/person";
import {PersonService} from "../../service/person.service";

@Component({
  selector: 'app-personlist',
  templateUrl: './personlist.component.html',
})
export class PersonlistComponent implements OnInit {
  persons: Person[];

  constructor(
    private personService: PersonService,
  ) {
  }

  ngOnInit(): void {
    this.collectPersons();
  }

  private collectPersons(): void {
    this.personService.getList()
      .subscribe(personsList => this.persons = personsList._embedded.personDTOList);
  }
}
