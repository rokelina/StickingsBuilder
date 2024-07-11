export const compareStickingObject = (
  objA: { [key: string]: string },
  objB: { [key: string]: string }
): boolean => {
  const keysA = Object.keys(objA).sort();
  const keysB = Object.keys(objB).sort();

  // Check if both objects have the same keys
  if (keysA.length !== keysB.length) {
    return false;
  }

  for (let i = 0; i < keysA.length; i++) {
    if (keysA[i] !== keysB[i]) {
      return false;
    }

    // Check if values for the same keys are equal
    if (objA[keysA[i]] !== objB[keysB[i]]) {
      return false;
    }
  }

  return true;
};
