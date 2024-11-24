const arr = ["x", "x", "x", "a", "a", "a", "a", "a", "b", "b", "d"];
const arr2 = arr.map((a) => `${a}${a}`);
const uniqueArr = Array.from(new Set(arr2));
console.log(uniqueArr);

const map = new Map();
arr.forEach((el) => {
  if (!map.has(el)) map.set(el, 1);
  else {
    let count = map.get(el);
    map.set(el, ++count);
  }
});
console.log(map);
