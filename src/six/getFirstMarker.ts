export const getFirstMarker = (buffer: string): number =>
  getFirstMarkerForNDistincCharacters(buffer, 4);

const areAllCharacterOfStringDistinct = (input: string) => {
  for (let index = 0; index <= input.length - 2; index++) {
    for (let j = 1; j + index <= input.length - 1; j++) {
      if (input[index] === input[index + j]) {
        return false;
      }
    }
  }

  return true;
};

export const getFirstMarkerFor14DistinctCharacters = (buffer: string) =>
  getFirstMarkerForNDistincCharacters(buffer, 14);

const getFirstMarkerForNDistincCharacters = (
  buffer: string,
  numberOfDistinctCharacters: number
) => {
  for (
    let index = 0;
    index < buffer.length - numberOfDistinctCharacters;
    index++
  ) {
    if (
      areAllCharacterOfStringDistinct(
        buffer.substring(index, index + numberOfDistinctCharacters)
      )
    ) {
      return index + numberOfDistinctCharacters;
    }
  }

  throw new Error("dit not find marker");
};
