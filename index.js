const colors = [
  {
    name: "blue",
    motto: "Ocean Blue",
  },
  {
    name: "gray",
    motto: "smoke gray",
  },
  {
    name: "green",
    motto: "grass green",
  },
  {
    name: "purple",
    motto: "deep purple",
  },
];

const randomColorButton = document.querySelector("#randomColorButton");
const addColorButton = document.querySelector("#setColorButton");

addColorButton.addEventListener("click", addColor);
randomColorButton.addEventListener("click", changeColors);

//1) Arraydan rastgele renk seçmek
function changeColors() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  document.querySelector("#colorName").textContent = colors[randomIndex].name;
  document.querySelector("#colorDesc").textContent = colors[randomIndex].motto;

  document.querySelector("body").style.backgroundColor =
    colors[randomIndex].name;
}

//2)Kullanıcının girdiği string'i renk listesine eklemek ve
//arkaplanı o renk yapmak
function addColor() {
  const userInput = document.querySelector(".colorInput");
  const colorData = userInput.value.split(":");
  const colorObject = {
    name: colorData[0],
    motto: colorData[1],
  };

  if (colors.findIndex((color) => color.name === colorObject.name) === -1) {
    document.querySelector("body").style.backgroundColor = colorObject.name;
    document.querySelector("#colorName").textContent = colorObject.name;
    document.querySelector("#colorDesc").textContent = colorObject.motto;

    colors.push(colorObject);
    userInput.value = "";
    userInput.focus();
  } else {
    alert("Renk zaten mevcut");
  }
}
