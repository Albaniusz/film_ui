import {Person} from "./person";

export interface Personlist {
  _embedded: {
    personDTOList: Person[]
  }
}
