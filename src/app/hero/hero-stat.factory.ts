import {Injectable} from "@angular/core";
import {getPercentage, round2Digits} from "../math.utility";
import {TotalStats, Stats, StatsType} from "../player/state/player.resource";

export interface StatGroup {
  value: number;
  percentage: number;
}

export interface GamesStat {
  wins: number;
  losses: number;
  total: number;
  winrate: number;
  hours: number;
}

export class HeroStat {
  hero: string;
  kills: StatGroup;
  deaths: StatGroup;
  assists: StatGroup;
  damage: StatGroup;
  kda: StatGroup;
  games: GamesStat;
}

@Injectable()
export class HeroStatFactory {

  /**
   * Get the game statistics of a hero
   *
   * @param stats
   */
  protected getHeroGameStats(stats: StatsType): GamesStat {
    const totalStats: TotalStats = stats.total;
    const wins = totalStats.wins || 0;
    const losses = totalStats.losses || 0;
    const totalHours = Math.floor(totalStats.time_played / 3600);

    return {
      total: totalStats.total_games,
      wins: wins,
      losses: losses,
      winrate: round2Digits(wins / totalStats.total_games * 100),
      hours: totalHours
    };
  }

  /**
   * Get the stat group of a certain stat
   *
   * @param value
   * @param percentage
   */
  protected getStatGroup(value: number, percentage: number): StatGroup {
    return {
      value: round2Digits(value),
      percentage: round2Digits(percentage)
    };
  }

  public getHeroStat(hero: string, stats: StatsType): HeroStat {
    const totalStats: TotalStats = stats.total;
    const bestStats: Stats = stats.best;

    const totalMinutes = Math.floor(totalStats.time_played / 60);

    const kills = totalStats.kills || 0;
    const assists = totalStats.assists || 0;
    const deaths = totalStats.deaths || 0;

    const killsPm = kills / totalMinutes;
    const killsP = getPercentage(killsPm, 1);

    const deathsPm = deaths / totalMinutes;
    const deathsP = getPercentage(deathsPm, 1);

    const assistsPm = assists / totalMinutes;
    const assistsP = getPercentage(assistsPm, 1);

    const kda = (kills + assists) / Math.max(1, deaths);
    const kdaP = getPercentage(kda, bestStats.kda);

    const damagePm = totalStats.damage_dealt / totalMinutes;
    const damageP = getPercentage(damagePm, 1);

    const wins = totalStats.wins || 0;
    const losses = totalStats.losses || 0;

    return {
      hero: hero,
      games: this.getHeroGameStats(stats),
      kills: this.getStatGroup(killsPm, killsP),
      deaths: this.getStatGroup(deathsPm, deathsP),
      assists: this.getStatGroup(assistsPm, assistsP),
      damage: this.getStatGroup(damagePm, damageP),
      kda: this.getStatGroup(kda, kdaP),
    };
  }
}
