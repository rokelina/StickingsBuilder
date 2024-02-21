/**  Maps the stickings 'letters' to midi notes ('C3'|'D3') that will be triggered
 * by Tone.Sequence.
 * Takes the stickings object's values and returns a two dimentional array.
 * Each sub-array represents a beat. Example:
 * ['RL', 'RLR', 'RL', 'RLR'] is mapped to [['C3', 'D3'], ['C3', 'D3', 'C3'], ['C3', 'D3'], ['C3', 'D3', 'C3']] */

const mapToSequence = (stickings: {
  [key: string]: string;
}): ('C3' | 'D3')[][] => {
  return Object.values(stickings).map((value: string) => {
    const notes = value.split('').map((char) => {
      if (char === 'R') {
        return 'C3';
      } else {
        return 'D3';
      }
    });
    return notes;
  });
};

export default mapToSequence;
