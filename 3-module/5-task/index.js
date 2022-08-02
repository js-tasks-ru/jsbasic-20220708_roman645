function getMinMax(str) {
let returnValue = str
  .split(" ")
  .filter((i) => isFinite(i))
  .map((i) => +i);

return {min: Math.min(...returnValue),
        max: Math.max(...returnValue)}
}