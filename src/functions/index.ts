export const randomInt = (max: number, min: number) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const randomArray = (len: number, max: number, min: number) => {
  const a: Set<number> = new Set();
  while (a.size < len) a.add(randomInt(max, min));
  return Array.from(a);
};

export const shuffle = (array: Array<number>) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
