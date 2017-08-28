import {SearchRanking} from "@grenn/contract";
import {sortBy, compose, slice} from "ramda";

export function sortByPopularity(data: SearchRanking): string[] {
  const keys = Object.keys(data);

  return sortBy(key => -data[key], keys);
}

export const sortAndLimitRanking = compose(
  slice(0, 10) as (data: string[]) => string[],
  sortByPopularity
);
