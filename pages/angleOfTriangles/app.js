const submitBtn = document.querySelector('#submit');
document.addEventListener('submit',(e)=>{
  let angleOne = document.querySelector('#angle1');
  let angleTwo = document.querySelector("#angle2")
  let angleThree = document.querySelector("#angle3")
  const outputDiv = document.querySelector(".output")
  console.log(angleOne.value)
  angleOne = Number(angleOne.value);
  console.log(typeof angleOne)
  angleTwo = Number(angleTwo.value);
  console.log(angleTwo)
  angleThree = Number(angleThree.value);
  console.log(angleThree)
  if(angleOne+angleTwo+angleThree===180)
  {
    outputDiv.innerHTML = "Yuhu! these angles can make a triangle"
  }
  else{
    outputDiv.innerHTML='Oops! these angles cannot make a triangle'
  }
  e.preventDefault();
});
