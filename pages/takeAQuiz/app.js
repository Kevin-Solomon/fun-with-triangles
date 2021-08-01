const form = document.querySelector("form")
console.log(form)
const divArr = Array.from(document.querySelectorAll(".question-box"));
let score =0;
const outputDiv = document.querySelector('.output')
console.log(outputDiv)
const submitBtn = document.querySelector('#btn')
console.log(submitBtn)
const answer = ['yes','no','yes','yes','yes','isosceles','30','both','5','scalene']
form.addEventListener('submit',(e)=>{
  e.preventDefault();
  console.log('sup')
  const userAnswer = divArr.map((div)=>{
    if(div.children[1].checked){
      return div.children[1].value;
    }
    else if(div.children[3].checked){
      return div.children[3].value;
    }
    else if(div.children[5].checked){
      return div.children[5].value;
    }
    else{
      return undefined;
    }
  })
  for (let i =0;i<answer.length;i++){
    if(answer[i] === userAnswer[i]){
      score += 1;
      divArr[i].style.backgroundColor='green'
    }
    else{
      divArr[i].style.backgroundColor = 'red'
    }
  }
  outputDiv.innerHTML= `Your score is ${score}`
  submitBtn.style.display = 'none'
  console.log(userAnswer)
  console.log(divArr[0].children[1].checked)
})