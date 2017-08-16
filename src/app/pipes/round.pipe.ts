import {Pipe, PipeTransform} from "@angular/core";
import {find} from "lodash";
import {round2Digits} from "../math.utility";


@Pipe({name: "round"})
export class RoundPipe implements PipeTransform {

  public transform(number: number): number {
    return round2Digits(number);
  }
}
