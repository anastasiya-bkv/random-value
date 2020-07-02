const squares = $(".square");
let freeSquares = [...squares];
const values = [1, 2, 3, 4, 5, 6, 7, 8];
const colors = [
  "red",
  "green",
  "blue",
  "pink",
  "aquamarine",
  "violet",
  "springgreen",
  "orange",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function setAttrValue(value, array) {
  const r = getRandomInt(array.length - 1);
  $(array[r]).attr("data-value", value);
  $(array[r]).css({ "background-color": colors[value - 1] });
  return array.splice(r, 1);
}

values.forEach((val) => {
  setAttrValue(val, freeSquares);
  setAttrValue(val, freeSquares);
});
