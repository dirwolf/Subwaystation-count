// change the count-el in the HTML to reflect the new count
let countEl = document.getElementById("count-el")
console.log(countEl)
// now javascript developer has the control to modify the element
let count =0
let saveEl = document.getElementById("save-el")
// let resetEl = document.getElementById('reset-el')
function increment(){
    // console.log("The button was clicked")
    count = count+1
    // console.log(count)
    // innertext means the text inside of the tags)html
    countEl.innerText = count
     console.log(count)
}
function save(){
    let countStr =count + " - "
    //1. create a variable that contains both count and dash separator
    //2. render the variable in the save-el using innertext
    saveEl.textContent+=countStr
    countEl.textContent=0
    count=0
    // console.log(countStr)
}
// function reset(){
//     //  resetEl.innerText=0
// }
let welcomeEl = document.getElementById("welcome-el")
let disk = "Welcome to Subway station"
let greeting = "Welcome back"
welcomeEl.innerText =disk + greeting