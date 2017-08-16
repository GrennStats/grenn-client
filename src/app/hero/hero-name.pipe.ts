import {Pipe, PipeTransform} from "@angular/core";
import {find} from "lodash";
import {Observable} from "rxjs/Observable";
import {HeroResource, Hero} from "./hero-resource";


@Pipe({
  name: "heroName",
  pure: false
})
export class HeroNamePipe implements PipeTransform {
  private heroes: Hero[];

  constructor(private hero: HeroResource) {
    this.hero.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  public transform(heroKey: string): string {
      const hero = find(this.heroes, h => h.key === heroKey);

      return hero ? hero.name : "";
  }
}
