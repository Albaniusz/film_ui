import {Country} from "./country";

export interface Countrylist {
  _embedded: {
    countryDTOList: Country[]
  }
}
