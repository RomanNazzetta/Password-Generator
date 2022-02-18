//OBJECT CREATION
// let person = {
//     age: 35,
//     name: "Roman",
//     country: "Argentina"
// }

// function logData(){
//     console.log(person.name + " is "+ person.age+" years old and lives in " + person.country)
// }

// logData()

// let age = 5

//IF ELSE STATEMENT
//     if(age < 6){
//         console.log("Free")
//     } else if( age < 18){
//         console.log ("Child Discount")
//     } else if(age < 27){
//         console.log("Student Discount")
//     }else if(age < 67){
//         console.log("Full Price")
//     }else {
//         console.log("Senior Citizen Discount")
//     }

// FOR LOOP
// let largeCountries = ["China","India","USA","Indonesia","Pakistan"]
// console.log("The 5 largest countries in the world: ")
// for (let i = 0; i < largeCountries.length; i++){
//     console.log("- "+largeCountries[i])
// }


//PUSH & POP

// let largeCountries = ["Tuvalu","India","USA","Indonesia","Monaco"]

// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)

//LOGICAL OPERATORS
// let dayOfTheMonth = 13
// let weekday = "Friday"

// if( dayOfTheMonth === 13 && weekday === "Friday"){
//     console.log("😱")
// }

//ROCK PAPER SCISSOR

// let hands = ["rock", "paper","scissor"]

// function getHand(){
//     let randomIndex = Math.floor( Math.random() * 3)
//     return hands[randomIndex]
// }
// console.log(getHand())

//SORTING FRUITS

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit(){
    for (let i = 0; i< fruit.length; i++){
        if (fruit[i] === "🍎"){
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊" ){
            orangeShelf.textContent += "🍊"
        }
    }
}

sortFruit()