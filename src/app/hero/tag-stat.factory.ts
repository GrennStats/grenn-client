import {Injectable} from "@angular/core";
import {heroes} from "../player/heroes";
import {PlayerStats, StatsType} from "../player/state/player.resource";
import {GamesStat} from "./hero-stat.factory";
import {round2Digits} from "../math.utility";

export function getHeroTags(): string[] {
  const tags = {};

  heroes.forEach(hero => {
    hero.tags.forEach(x => tags[x] = 1);
  });

  return Object.keys(tags);
}

export interface TagStat {
  tag: string;
  kills: number;
  deaths: number;
  assists: number;
  kda: number;
  games: GamesStat;
}

@Injectable()
export class TagStatFactory {

  public getStatsForTag(tag: string, stats: PlayerStats): TagStat {
    const taggedHeroes = heroes.filter(hero => hero.tags.includes(tag));
    const playedHeroes = taggedHeroes.filter(hero => {
      return Boolean(stats[hero.key]);
    });

    const kills = playedHeroes.map(hero => {
      const stat = stats[hero.key] as StatsType;

      return stat.total.kills || 0;
    }).reduce((previous, current) => previous + current, 0);

    const deaths = playedHeroes.map(hero => {
      const stat = stats[hero.key] as StatsType;

      return stat.total.deaths || 0;
    }).reduce((previous, current) => previous + current, 0);

    const assists = playedHeroes.map(hero => {
      const stat = stats[hero.key] as StatsType;

      return stat.total.assists || 0;
    }).reduce((previous, current) => previous + current, 0);

    const wins = playedHeroes.map(hero => {
      const stat = stats[hero.key] as StatsType;

      return stat.total.wins || 0;
    }).reduce((previous, current) => previous + current, 0);

    const losses = playedHeroes.map(hero => {
      const stat = stats[hero.key] as StatsType;

      return stat.total.losses || 0;
    }).reduce((previous, current) => previous + current, 0);

    const hours = playedHeroes.map(hero => {
      const stat = stats[hero.key] as StatsType;

      return round2Digits(stat.total.time_played / 3600);
    }).reduce((previous, current) => previous + current, 0);

    const total = wins + losses;

    return {
      tag: tag,
      deaths: deaths,
      kills: kills,
      assists: assists,
      kda: round2Digits((kills + assists) / Math.max(1, deaths)),
      games: {
        total: total,
        wins: wins,
        losses: losses,
        winrate: round2Digits(wins / total * 100),
        hours: hours
      }
    };
  }
}
