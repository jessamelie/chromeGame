let character = document.getElementById("character");
let block = document.getElementById("block");

let jump = () => {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(() => {
    character.classList.remove("animate");
  }, 500);
};
