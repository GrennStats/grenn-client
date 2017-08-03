import {heroes} from "../player/heroes";
import {Pipe, PipeTransform} from "@angular/core";
import {find} from "lodash";


@Pipe({name: "heroColor"})
export class HeroColorPipe implements PipeTransform {

  public transform(heroKey: string): string {
    const hero = find(heroes, h => h.key === heroKey);

    return hero ? hero.color : "";
  }
}
