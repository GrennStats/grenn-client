import * as numeral from "numeral";

export function round2Digits(num: number): number {
  return +numeral(num).format("0.00");
}

export function getPercentage(lower, higher): number {
  const value = Math.min(100,  lower / higher * 100);

  return Math.floor(value);
}
