const circle = {
  radius: 1,
};

circle.color = "green";
circle.draw = function () {};
delete circle.color;
console.log(circle);
