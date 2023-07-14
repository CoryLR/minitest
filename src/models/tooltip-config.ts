import { Mutable } from "./mutable";

export type TooltipConfig = typeof DEFAULT_TOOLTIP_CONFIG;
export type TooltipOptions = Mutable<Partial<typeof DEFAULT_TOOLTIP_CONFIG>>;

export const DEFAULT_TOOLTIP_CONFIG = Object.freeze({
  type: 'info' as 'info' | 'error',
  pinnedOverride: false,
  animationSpeed: 1,
});
