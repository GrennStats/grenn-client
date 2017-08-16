import {Pipe, PipeTransform} from "@angular/core";
import {find} from "lodash";

export function secondsToHours(seconds: number) {
  return seconds / 3600;
}


@Pipe({name: "secondsToHours"})
export class SecondsToHoursPipe implements PipeTransform {

  public transform(number: number): number {
    return secondsToHours(number);
  }
}
