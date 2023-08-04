export const mapToSequence = (stickings: {
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
