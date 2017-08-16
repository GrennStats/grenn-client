import {Pipe, PipeTransform} from "@angular/core";
import {find} from "lodash";
import {HeroResource, Hero} from "./hero-resource";
import {Observable} from "rxjs/Observable";


@Pipe({
  name: "heroImage",
  pure: false
})
export class HeroImagePipe implements PipeTransform {
  private heroes: Hero[];

  constructor(private hero: HeroResource) {
    this.hero.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  public transform(heroKey: string): string {
      const hero = find(this.heroes, h => h.key === heroKey);

      return hero ? hero.image : "";
  }
}
