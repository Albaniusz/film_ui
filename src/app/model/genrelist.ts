import {Genre} from "./genre";

export interface Genrelist {
  _embedded: {
    genreDTOList: Genre[]
  }
}
