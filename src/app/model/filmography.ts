import {Filmographyelement} from "./filmographyelement";

export interface Filmography {
  _embedded: {
    filmographyDTOList: Filmographyelement[];
  }
}
