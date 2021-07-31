const option1= document.querySelector('#option1')
const option2= document.querySelector('#option2')
const option3= document.querySelector('#option3')
const divArr= document.querySelectorAll(".formula")
const forms= document.querySelectorAll('form')
console.log(forms)
console.log(divArr[0].getElementsByClassName('output'))
option1.addEventListener('change', ()=>{
  console.log("done")
  divArr[0].style.display="block";
})
option2.addEventListener('change', ()=>{
  console.log("done")
  divArr[1].style.display="block";
})
option3.addEventListener('change', ()=>{
  console.log("done")
  divArr[2].style.display="block";
})
forms[0].addEventListener('submit',(e)=>{
  console.log("sup")
  e.preventDefault();
  const b = forms[0][0].value;
  const h = forms[0][1].value;
  const area = 0.5*b*h;
  divArr[0].getElementsByClassName('output')[0].innerHTML = area;
})
forms[1].addEventListener('submit',(e)=>{
  console.log("sup")
  e.preventDefault();
  const a = Number(forms[1][0].value);
  const b = Number(forms[1][1].value);
  const c = Number(forms[1][2].value);
  const s = (a+b+c)/2;
  const temp =s*(s-a)*(s-b)*(s-c);
  console.log(temp,s,typeof a,b,c)
  const area = Math.sqrt(temp);
  divArr[1].getElementsByClassName('output')[0].innerHTML = area;
})
forms[2].addEventListener('submit',(e)=>{
  console.log("sup")
  e.preventDefault();
  const b = Number(forms[2][0].value);
  const c = Number(forms[2][1].value);
  const aDeg = Number(forms[2][2].value)*(Math.PI/180);
  const area = 0.5*b*c*Math.sin(aDeg);
  divArr[2].getElementsByClassName('output')[0].innerHTML = area;
})