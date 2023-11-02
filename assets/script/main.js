let container=document.getElementById('container');
let square=[];
for(let i=1;i<257;i++){
  square[i]=document.createElement('div');
  square[i].setAttribute('class','square'+[i]);
  square[i].style.backgroundColor='white';
  square[i].style.width='40px';
  square[i].style.height='40px';
  container.appendChild(square[i]);
}

function selectColor(event) {
  var target = event.target;
  if (target.className === "color") {
    // Get all the color boxes by their class name
    var boxes = document.getElementById("color");
    // Loop through all the boxes
    for (var i = 0; i < boxes.length; i++) {
      // Remove the selected class from each box
      boxes[i].classList.remove("selected");
    }
    // Add the selected class to the target box
    target.classList.add("selected");
    // Get the display element by its id
    var display = document.getElementById("display");
    // Set the display text to the target background color
    display.textContent = target.style.backgroundColor;
    // Set the display background color to the target background color
    display.style.backgroundColor = target.style.backgroundColor;
    console.log(target.style.backgroundColor);
    let element=[];
    for (let i=1;i<257;i++){
      element[i] = document.getElementsByClassName("square"+[i]);
    console.log(element);
    console.log(element[1]);
    function changeColor(color) {
      (element[i])[0].style.backgroundColor = color;
      }
      (element[i])[0].addEventListener("mouseenter", function() {
      changeColor(target.style.backgroundColor);});
}
}
}
    let palette = document.getElementById("color");

    console.log(palette);
    palette.addEventListener("click", selectColor);