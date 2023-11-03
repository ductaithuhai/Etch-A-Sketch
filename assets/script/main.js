
let yourSize = document.getElementById("pickSize");
let size;
function getSize() {
  size = document.getElementById("size").value;
  let container = document.getElementById('container');
  while (container.lastElementChild) {
    container.removeChild(container.lastElementChild);
  }
  let square = [];
  if (size == 256) {
    for (let i = 1; i <= size; i++) {
      square[i] = document.createElement('div');
      square[i].setAttribute('class', 'square' + [i]);
      square[i].style.backgroundColor = 'white';
      square[i].style.width = '40px';
      square[i].style.height = '40px';
      container.appendChild(square[i]);
    }
  } else if (size == 1024) {
    for (let i = 1; i <= size; i++) {
      square[i] = document.createElement('div');
      square[i].setAttribute('class', 'square' + [i]);
      square[i].style.backgroundColor = 'white';
      square[i].style.width = '20px';
      square[i].style.height = '20px';
      container.appendChild(square[i]);
    }
  } else {
    for (let i = 1; i <= size; i++) {
      square[i] = document.createElement('div');
      square[i].setAttribute('class', 'square' + [i]);
      square[i].style.backgroundColor = 'white';
      square[i].style.width = '10px';
      square[i].style.height = '10px';
      container.appendChild(square[i]);
    }
  }


  let color;
  function getVal() {
    color = document.getElementById("favcolor").value;
  }
  function erase() {
    color = 'white';
  };

  let element = [];
  for (let i = 1; i <= size + 1; i++) {
    element[i] = document.getElementsByClassName("square" + [i]);
    console.log(element);
    console.log(element[1]);
    function changeColor(color) {
      (element[i])[0].style.backgroundColor = color;
    }
    (element[i])[0].addEventListener("mouseenter", function () {
      let yourColor = document.getElementById("pickColor");
      yourColor.addEventListener("click", getVal);
      if ((element[i])[0].style.backgroundColor === 'white') {
        changeColor(color);
      }

      let eraseAll = document.getElementById('erase');
      eraseAll.addEventListener("click", erase);
      if ((element[i])[0].style.backgroundColor !== 'white') {
        changeColor(color);
      }
    });
  }
}
yourSize.addEventListener("click", getSize);

// let container = document.getElementById('container');
// let square = [];
// for (let i = 1; i < size + 1; i++) {
//   square[i] = document.createElement('div');
//   square[i].setAttribute('class', 'square' + [i]);
//   square[i].style.backgroundColor = 'white';
//   square[i].style.width = '40px';
//   square[i].style.height = '40px';
//   container.appendChild(square[i]);
// }

// let color;
// function getVal() {
//   color = document.getElementById("favcolor").value;
// }

// let element = [];
// for (let i = 1; i < size + 1; i++) {
//   element[i] = document.getElementsByClassName("square" + [i]);
//   console.log(element);
//   console.log(element[1]);
//   function changeColor(color) {
//     (element[i])[0].style.backgroundColor = color;
//   }
//   (element[i])[0].addEventListener("mouseenter", function () {
//     let yourColor = document.getElementById("pickColor");
//     yourColor.addEventListener("click", getVal);
//     if ((element[i])[0].style.backgroundColor === 'white') {
//       changeColor(color);
//     }
//   });
// }