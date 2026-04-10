const movie = {
  name: "howa",
  releaseYear: 2022,
  derector: "tomuk",
};

function showProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      console.log(key + ":" + obj[key]);
    }
  }
}
showProperties(movie);
