import {Genre} from "./genre";
import {Country} from "./country";
import {Summary} from "./summary";
import {Premieredate} from "./premieredate";
import {Distributor} from "./distributor";

export interface Film {
  id: number;
  title: string;
  titleOriginal: string;
  yearOfProduction: number;
  duration: number;
  genres: Genre[];
  countries: Country[];
  premiereDates: Premieredate[];
  distributionInPoland: Distributor[];
  mainSummary: Summary;
}
