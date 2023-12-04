export default function groceriesList() {
  const arr = [
    ['Apples', 10],
    ['Tomatoes', 10],
    ['Pasta', 1],
    ['Rice', 1],
    ['Banana', 5],
  ];
  const data = new Map();
  for (const a of arr) data.set(a[0], a[1]);
  return data;
}
