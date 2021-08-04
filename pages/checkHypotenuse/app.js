const opposite = document.querySelector("#oppo");
console.log(opposite)
const adjacent = document.querySelector("#adj");
console.log(adjacent)
const outputDiv = document.querySelector(".output")
console.log(outputDiv)
document.addEventListener("submit",(e)=>{
  e.preventDefault();
  let hypo = Math.sqrt((opposite.value ** 2)+(adjacent.value ** 2))
  outputDiv.innerHTML = `The length of the hypotenuse is ${hypo}`
} )