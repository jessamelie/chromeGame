
let character = document.getElementById("character");
let block = document.getElementById("block");

//Jump Action Function
let jump = () => {
  if (character.classList != "animate") {
    character.classList.add("animate");
  }
  setTimeout(() => {
    character.classList.remove("animate");
  }, 500);
};

// Hit Detection Function
let hitDetection = setInterval(() => {
  //position of elements in pixels
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );
  //collision zone detection 
  if (blockLeft<20 && blockLeft>0 && characterTop>=130) {
    block.style.animation = "none";
    block.style.display = "none";
    alert("Too bad! You lose")
  }
}, 10);
