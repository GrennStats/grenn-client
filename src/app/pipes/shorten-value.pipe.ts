import {Pipe, PipeTransform} from "@angular/core";
import {find} from "lodash";
import * as numeral from "numeral";

export function shortenValue(value: number): string {
  return numeral(value).format("a");
}

@Pipe({name: "shortenValue"})
export class ShortenValuePipe implements PipeTransform {

  public transform(number: number): string {
    return shortenValue(number);
  }
}
