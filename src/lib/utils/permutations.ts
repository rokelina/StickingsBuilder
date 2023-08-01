const eightNotesPermutations = Object.freeze({
  rl: 'rl',
  lr: 'lr',
  rr: 'rr',
  ll: 'll',
});

const tripletPermutations = Object.freeze({
  rlr: 'rlr',
  lrl: 'lrl',
  rrl: 'rrl',
  llr: 'llr',
  rll: 'rll',
  lrr: 'lrr',
  rrr: 'rrr',
  lll: 'lll',
});

const sixteenthPermutations = Object.freeze({
  rlrl: 'rlrl',
  rrll: 'rrll',
  rllr: 'rllr',
  rlrr: 'rlrr',
  rrrl: 'rrrl',
  rrlr: 'rrlr',
  rlll: 'rlll',
  lrlr: 'lrlr',
  llrr: 'llrr',
  lrrl: 'lrrl',
  lrll: 'lrll',
  lllr: 'lllr',
  llrl: 'llrl',
  lrrr: 'lrrr',
});

const quintupletPermutations = Object.freeze({
  rlrlr: 'rlrlr',
  lrlrl: 'lrlrl',
  rrlrl: 'rrlrl',
  llrlr: 'llrlr',
  rrllr: 'rrllr',
  llrrl: 'llrrl',
  rlrll: 'rlrll',
  lrlrr: 'lrlrr',
});

const sextupletPermutations = Object.freeze({
  rlrlrl: 'rlrlrl',
  lrlrlr: 'lrlrlr',
  rrllrr: 'rrllrr',
  llrrll: 'llrrll',
  rlrlrr: 'rlrlrr',
  lrlrll: 'lrlrll',
  rlrrll: 'rlrrll',
  lrllrr: 'lrllrr',
  rllrrl: 'rllrrl',
  lrrllr: 'lrrllr',
});

const septupletPermutations = Object.freeze({
  rlrlrlr: 'rlrlrlr',
  lrlrlrl: 'lrlrlrl',
  rlrlrll: 'rlrlrll',
  lrlrlrr: 'lrlrlrr',
  rrlrlrl: 'rrlrlrl',
  llrlrlr: 'llrlrlr',
  rllrrll: 'rllrrll',
  lrrllrr: 'lrrllrr',
  rrllrrl: 'rrllrrl',
  llrrllr: 'llrrllr',
  rlrllrr: 'rlrllrr',
  lrlrrll: 'lrlrrll',
  rllrrlr: 'rllrrlr',
  lrrllrl: 'lrrllrl',
});

export {
  eightNotesPermutations,
  tripletPermutations,
  sixteenthPermutations,
  quintupletPermutations,
  sextupletPermutations,
  septupletPermutations,
};
