import {Injectable} from "@angular/core";
import {PlayerStats, StatsType} from "../player/state/player.resource";
import {GamesStat} from "./hero-stat.factory";
import {Hero} from "./hero-resource";

export function getHeroTags(heroes: Hero[]): string[] {
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

  public getStatsForTag(heroes: Hero[], tag: string, stats: PlayerStats): TagStat {
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

      return stat.total.time_played / 3600;
    }).reduce((previous, current) => previous + current, 0);

    const total = wins + losses;

    return {
      tag: tag,
      deaths: deaths,
      kills: kills,
      assists: assists,
      kda: (kills + assists) / Math.max(1, deaths),
      games: {
        total: total,
        wins: wins,
        losses: losses,
        winrate: wins / total * 100,
        hours: hours
      }
    };
  }
}
