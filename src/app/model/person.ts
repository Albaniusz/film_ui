import {Country} from "./country";

export interface Person {
  id: number;
  name: string;
  nameClear: string;
  birthDate: string;
  birthPlace: string;
  birthCountry: Country;
}
