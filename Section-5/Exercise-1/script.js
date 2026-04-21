let address = {
  street: "a",
  city: "b",
};

function showAdd(address) {
  for (let key in address) console.log(key, address[key]);
}

showAdd(address);
