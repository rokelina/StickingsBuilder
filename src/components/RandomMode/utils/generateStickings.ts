import {
  eightNotesPermutations,
  tripletPermutations,
} from '../../Menu/permutations';

const generateStickings = (selectedOption: string) => {
  const eighths = Object.values(eightNotesPermutations);
  const triplets = Object.values(tripletPermutations);
  const combinations = [...eighths, ...triplets];

  const randomIndex = (arr: string[]): number => {
    return Math.floor(Math.random() * arr.length);
  };

  const generateOutput = (arr: string[]): { [key: string]: string } => {
    return {
      'beat-1': arr[randomIndex(arr)],
      'beat-2': arr[randomIndex(arr)],
      'beat-3': arr[randomIndex(arr)],
      'beat-4': arr[randomIndex(arr)],
    };
  };

  let output: { [key: string]: string };

  switch (selectedOption) {
    case 'combinations':
      output = generateOutput(combinations);
      break;

    case 'eighths':
      output = generateOutput(eighths);
      break;

    case 'triplets':
      output = generateOutput(triplets);
      break;

    default:
      output = {};
      break;
  }
  return output;
};

export default generateStickings;
