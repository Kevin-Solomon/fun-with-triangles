const submitBtn = document.querySelector('#submit');
let angleOne = document.querySelector('#angle1');
console.log(angleOne)
let angleTwo = document.querySelector("#angle2")
let angleThree = document.querySelector("#angle3")
const outputDiv = document.querySelector(".output")
submitBtn.addEventListener('click',()=>{
  angleOne = angleOne.value===''?0:angleOne.value;
  console.log(angleOne)
  angleTwo = angleTwo.value===''?0:angleTwo.value;
  console.log(angleTwo)
  angleThree = angleThree.value===''?0:angleThree.value;
  console.log(angleThree)
  if(angleOne+angleTwo+angleThree===180)
  {
    outputDiv.innerHTML = "Yuhu! these angles can make a triangle"
  }
  else{
    outputDiv.innerHTML='Oops! these angles cannot make a triangle'
  }
});
