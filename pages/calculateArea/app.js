const option1= document.querySelector('#option1')
const option2= document.querySelector('#option2')
const option3= document.querySelector('#option3')
const divArr= document.querySelectorAll(".formula")
const forms= document.querySelectorAll('form')
console.log(forms)
console.log(divArr)
option1.addEventListener('change', ()=>{
  console.log("done")
  divArr[0].style.display="block";
})
forms[0].addEventListener('submit',(e)=>{
  console.log("sup")
  e.preventDefault();
  console.log(forms[0][0].value)
})