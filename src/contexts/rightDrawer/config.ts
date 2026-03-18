export const RightDrawerSizes = {
  S: 'S',
  M: 'M',
  L: 'L',
  XL: 'XL',
};

export type RightDrawerSize = (typeof RightDrawerSizes)[keyof typeof RightDrawerSizes];

export const RIGHT_DRAWER_SIZES: Record<RightDrawerSize, number> = {
  [RightDrawerSizes.S]: 300,
  [RightDrawerSizes.M]: 450,
  [RightDrawerSizes.L]: 600,
  [RightDrawerSizes.XL]: 800,
};
