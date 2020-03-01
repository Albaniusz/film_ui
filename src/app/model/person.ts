import {Country} from "./country";

export interface Person {
  id: number;
  name: string;
  birthDate: string;
  birthPlace: string;
  birthCountry: Country;
}
