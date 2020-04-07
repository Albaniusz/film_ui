import {Filmcastelement} from "./filmcastelement";

export interface Filmcast {
  _embedded: {
    filmCastDTOList: Filmcastelement[];
  }
}
