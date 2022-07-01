const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];

const btn = document.getElementById("btn");

const color = document.querySelector(".color");

function getrandomcolor(array) {
  const index = Math.floor(Math.random() * array.length);

  const item = array[index];

  return index;
}

// btn.addEventListener("click", function () {
//   const randomnumber = getrandomcolor(colors);
//   document.body.style.backgroundColor = colors[randomnumber];
//   color.textContent = colors[randomnumber];
//   console.log(colors[randomnumber]);
// });

const array = ["a", "sdf", "sdf", "sd"];
let counter = 1;
array.forEach((element) => {
  console.log(counter);
  console.log("Item" + counter + element);
  counter++;
});

const arrays = [3, 3, 4, 6, 7];

arrays.forEach((element) => {
  console.log(counter);
});
