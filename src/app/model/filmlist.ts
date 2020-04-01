import {Film} from "./film";

export interface Filmlist {
  _embedded: {
    filmDTOList: Film[]
  }
}
