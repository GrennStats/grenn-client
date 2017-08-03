import {heroes} from "../player/heroes";
import {Pipe, PipeTransform} from "@angular/core";
import {find} from "lodash";


@Pipe({name: "heroImage"})
export class HeroImagePipe implements PipeTransform {

  public transform(heroKey: string): string {
    const hero = find(heroes, h => h.key === heroKey);

    return hero ? hero.image : "";
  }
}
