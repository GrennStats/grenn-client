export function round2Digits(num: number) {
  return Math.round(num * 100) / 100;
}

export function getPercentage(lower, higher): number {
  const value = Math.min(100,  lower / higher * 100);

  return Math.floor(value);
}
