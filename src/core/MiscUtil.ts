
/**
 * Rounds a number to a specific precision
 * @example round(10.123, 1) // 10.1
 * @example round(10.56789, 2) // 10.57
 */
export function round(value: number, precision: number): number {
  const multiplier = Math.pow(10, precision || 0);
  return Math.round(value * multiplier) / multiplier;
}
