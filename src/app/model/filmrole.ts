import {Film} from "./film";
import {Person} from "./person";
import {Role} from "./role";

export interface Filmrole {
  id: number;
  title: string;
  importance: number;
  person: Person;
  film: Film;
  role: Role;
}
