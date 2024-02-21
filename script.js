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

let hitDetection = setInterval(() => {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  if (blockLeft<20 && blockLeft>0 && characterTop>=130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("Too bad! You lose")
  }
}, 10);
