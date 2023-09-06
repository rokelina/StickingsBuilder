export function isStickingsObjEmpty(stickings: {
  [key: string]: string;
}): boolean {
  return Object.keys(stickings).length === 0;
}

export function isSaveBtnDisabled(stickings: { [key: string]: string }) {
  return Object.keys(stickings).length !== 4;
}

export function isStickingChecked(
  stickings: { [key: string]: string },
  beatName: string,
  children: string
): boolean {
  for (const [key, value] of Object.entries(stickings)) {
    if (key === beatName && value === children) {
      return true;
    }
  }
  return false;
}

export function isRowChecked(
  stickings: {
    [key: string]: string;
  },
  rowLabel: string
): boolean {
  // current selected stickings values
  const objValues = Object.values(stickings);

  if (
    objValues.length === 4 &&
    new Set(objValues).size === 1 &&
    objValues[0] === rowLabel
  ) {
    return true;
  }
  return false;
}
