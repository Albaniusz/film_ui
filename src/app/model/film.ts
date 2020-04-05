import {Genre} from "./genre";
import {Country} from "./country";
import {Summary} from "./summary";
import {Premieredate} from "./premieredate";
import {Distributor} from "./distributor";
import {Person} from "./person";

export interface Film {
  id: number;
  title: string;
  titleOriginal: string;
  titleClear: string;
  yearOfProduction: number;
  duration: number;
  genres: Genre[];
  countries: Country[];
  premiereDates: Premieredate[];
  distributionInPoland: Distributor[];
  mainSummary: Summary;
  directors: Person[];
  writers: Person[];
  _links: {
    self: {
      href: string
    },
    [s: string]: {
      href: string
    }
  };
}
