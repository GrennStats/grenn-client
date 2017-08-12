import {sortBy} from "lodash";
import {HeroStat} from "./hero-stat.factory";
import {TagStat} from "./tag-stat.factory";

export function sortStatsByMostPlayed(heroes: HeroStat[]): HeroStat[] {
  return sortBy(heroes, hero => -hero.games.total);
}

export function sortStatsByTag(stats: TagStat[]): TagStat[] {
  const sortedTags = [
    "assassin",
    "shooter",
    "caster",

    "fighter",
    "bruiser",
    "tank",

    "control",
    "utility",

    "healer",
    "summoner"
  ];

  return sortBy(stats, stat => sortedTags.indexOf(stat.tag));
}
