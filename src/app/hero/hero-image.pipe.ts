import {Pipe, PipeTransform, ChangeDetectorRef} from "@angular/core";
import {find} from "lodash";
import {HeroResource, Hero} from "./hero-resource";
import {Observable} from "rxjs/Observable";


@Pipe({
  name: "heroImage",
  pure: false
})
export class HeroImagePipe implements PipeTransform {
  private heroes: Hero[];

  constructor(private hero: HeroResource, private change: ChangeDetectorRef) {
    this.hero.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
      this.change.markForCheck();
    });
  }

  public transform(heroKey: string): string {
      const hero = find(this.heroes, h => h.key === heroKey);

      console.log(heroKey, hero);

      return hero ? hero.image : "";
  }
}
