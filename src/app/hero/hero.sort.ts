import {sortBy} from "lodash";
import {HeroStat} from "./hero-stat.factory";

export function sortStatsByMostPlayed(heroes: HeroStat[]): HeroStat[] {
  return sortBy(heroes, hero => -hero.games.total);
}
