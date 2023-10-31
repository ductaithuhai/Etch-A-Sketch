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

for(let i=1;i<257;i++){
  square[i]=document.createElement('div');
  square[i].setAttribute('class','square'+[i]);
  square[i].style.backgroundColor='white';
  square[i].style.width='40px';
  square[i].style.height='40px';
  container.appendChild(square[i]);
}
