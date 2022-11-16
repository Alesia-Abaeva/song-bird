export function TwoDimensional(arr, size) {
  const res = [];
  for (let i = 0; i < arr.length; i = i + size) res.push(arr.slice(i, i + size));
  return res;
}
