import {Pipe, PipeTransform, ChangeDetectorRef} from "@angular/core";
import {find} from "lodash";
import {Observable} from "rxjs/Observable";
import {HeroResource, Hero} from "./hero-resource";

@Pipe({
  name: "heroColor",
  pure: false
})
export class HeroColorPipe implements PipeTransform {
  private heroes: Hero[];

  constructor(private hero: HeroResource, private change: ChangeDetectorRef) {
    this.hero.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
      this.change.markForCheck();
    });
  }

  public transform(heroKey: string): string {
      const hero = find(this.heroes, h => h.key === heroKey);

      return hero ? hero.color : "";
  }
}
