
//camelCase
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0
// increment
function increment() {
    count += 1
    countEl.textContent = count
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    // console.log(count)
    // console.log(count)
    countEl.textContent = 0
    count = 0
}
// console.log(count)
// let username = "per"
// let message = "You have three new notifications"
// console.log(message + ", " + username + "!")

// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)

// let name = "Jhon"
// let greeting = "Hi, my name is "
// let myGreeting = greeting + name
// console.log(myGreeting)

// let welcomeEL = document.getElementById("welcome-el")
// let name = "Jhon"
// let greeting = "Welcome back, "
// welcomeEL.innerText = greeting + name
// welcomeEl.innerText += "!"  

// practice
// let firstName = "Irfan"
// let lastName = "Ramadhan"

// let fullName = firstName + " " + lastName

// console.log(fullName)

// practice 2
// let name = "Linda"
// let greeting = "Hi there"

// function greet() {
//     console.log(greeting + ", " + name + "!")
// }

// greet()

// practice 3
// let myPoints = 3

// function add3Points() {
//     myPoints += 3
//     console.log(myPoints)
// }

// function remove1Point() {
//     myPoints -= 1
//     console.log(myPoints)
// }

// add3Points()
// add3Points()
// add3Points()
// remove1Point()
// remove1Point()
// console.log(myPoints)

// practice 4
// console.log("2" + 2) // 22
// console.log(11 + 7) // 18
// console.log(6 + "5") // 65
// console.log("My points: " + 5 + 9) // My points: 59
// console.log(2 + 2) // 4
// console.log("11" + "14") // 1114

// practice 5
// let errorParagraph = document.getElementById("error")
// console.log(errorParagraph)

// function purchase() {
//     console.log("button clicked")
//     errorParagraph.textContent = "Something went wrong, please try again"
// }

// practice 6
// let num1 = 8
// let num2 = 2
// document.getElementById("num1-el").textContent = num1
// document.getElementById("num2-el").textContent = num2

// let sumEl = document.getElementById("sum-el")

// function add() {
//     addSum = num1 + num2
//     // console.log(addSum)
//     sumEl.textContent = "Sum: " + addSum
// }


// function subtract() {
//     subSum = num1 - num2
//     console.log(subSum)
//     sumEl.textContent = "Sum: " + subSum
// }

// function divide() {
//     divSum = num1 / num2
//     console.log(divSum)
//     sumEl.textContent = "Sum: " + divSum
// }

// function multiply() {
//     mulSum = num1 * num2
//     console.log(mulSum)
//     sumEl.textContent = "Sum: " + mulSum
// }
