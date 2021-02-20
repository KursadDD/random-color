const colors = ["blue", "gray", "green", "purple"];

const randomColorButton = document.querySelector("#randomColorButton");
const addColorButton = document.querySelector("#setColorButton");

addColorButton.addEventListener("click", addColor);
randomColorButton.addEventListener("click", changeColors);

//1) Arraydan rastgele renk seçmek
function changeColors() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.querySelector("#colorName").innerHTML = colors[randomIndex];
  document.querySelector("body").style.backgroundColor = colors[randomIndex];
  console.log(randomIndex);
}

//2)Kullanıcının girdiği string'i renk listesine eklemek ve
//arkaplanı o renk yapmak
function addColor() {
  const userInput = document.querySelector(".colorInput");
  colors.push(userInput.value);
  document.querySelector("body").style.backgroundColor = userInput.value;
}
