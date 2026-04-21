const movies = [
  { title: "a", year: 2018, ratting: 4.5 },
  { title: "b", year: 2018, ratting: 4.6 },
  { title: "c", year: 2018, ratting: 4.8 },
  { title: "d", year: 2011, ratting: 4.9 },
  { title: "e", year: 2015, ratting: 4.7 },
  { title: "f", year: 2014, ratting: 4.1 },
];
const titles = movies
  .filter((m) => m.year === 2018 && m.ratting >= 4)
  .sort((a, b) => a.ratting - b.ratting)
  .reverse()
  .map((m) => m.title);

console.log(titles);
