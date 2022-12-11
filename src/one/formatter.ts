export const formatToArray = (input: string): Array<Array<number>> => {
  const lines = input.split("\n").map((line) => line.replace(/\s/g, ""));
  const formattedInput: Array<Array<number>> = [[]];

  lines.forEach((line) => {
    if (line === "") {
      formattedInput.push([]);
    } else {
      formattedInput[formattedInput.length - 1].push(Number(line));
    }
  });

  return formattedInput;
};
