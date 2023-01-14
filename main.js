let myName = "daniel";
let age = 27
output = "can code javascript"

/*console.log(`my name is  ${myName} and my age is ${age} I ${output}`)

console.log()
let value = 130
let mile = 1.60934
let result = mile * value
console.log(`the distance of ${value}kms is equal to ${result}miles`)

const shoppingList = []
shoppingList.push("milk","bread","apples")
shoppingList.splice(1,1,"egg","bananas")
let removedLastItem = shoppingList.pop()
console.log(removedLastItem)
let findMilkIndex = shoppingList.indexOf("milk")
console.log(findMilkIndex)
shoppingList.push("carrots","lettuce")
let newShoppingList = ["juice","pop"]
let combineBothShoppingList = shoppingList.concat(newShoppingList)
let reCombineBothShopList = combineBothShoppingList.concat(newShoppingList)
let getLastIndexOfPop =reCombineBothShopList.lastIndexOf("pop")
reCombineBothShopList.sort()
console.log(reCombineBothShopList)

console.log(getLastIndexOfPop)
console.log(shoppingList)

const inventory = []
let firstItem = {
    name:"volkWagen",
    model: "2019",
    cost : "$500"
}

let secondItem = {
    name:"biro",
    model: "2019",
    cost : "$300"
}

let thirdItem = {
    name:"snickers",
    model: "2015",
    cost : "$200"
}

inventory.push(firstItem,secondItem,thirdItem)

console.log(inventory[2].model)

/*userAge = prompt("how old are you")
console.log(userAge)
let message 
if (userAge >= 21){
    message = "fully responsible"
} else if(userAge >= 19){
    message = "not entire responsible"
}
else{
    message = "not responsible"
}

alert(message)

let childAge = 15;
childAge > 10 ? console.log("true talk"):console.log("not true")

let activity = "breakfast"
switch(activity){
    case "breakfast":
        console.log("it is 7am")
        break;
        case "lunch":
            console.log("it is 2pm")
            break;
            case "dinner" :
                console.log("it is 5pm")
                break;
                default :
                console.log("m")
}
let number = 2
let generateRandomNumber = Math.random()



let add = generateRandomNumber*number

console.log(add)

/*let userInput = prompt("enter a number")
let randomNumber = Math.floor(Math.random() *100)
console.log(randomNumber)
if (userInput > randomNumber){
console.log("greater than ")
}
else {
    console.log("less than")
}

let prize = prompt("select a number btw 0 and 10 ")
let convertPromptValue = Number(prize)
    console.log(convertPromptValue)

    let Name ;
   let userName = prompt("what is your name")
    
    switch(userName){
        case "sandra":
            case "modupe" :
                case "hannah":
                    case "johnKenedy":
                 case "julia" :      
            alert("you are my friend")
            break;
            default :
           alert("i will be your friend next time")
                

    }


    let game =["rock","paper","scissor"]
    let selectGame = Math.floor(Math.random()*2)
let player = game[selectGame]
let computer = game[Math.floor(Math.random()*1)]
if (player == "scissor"&& computer == "paper"){
console.log("player wins")
} else if (player == computer){
console.log("what a ties")
}else if (player == "rock"&& computer == "scissor" || "paper"){
    console.log("player wins")
}else if (player == "paper" && computer=="scissor"){
    console.log("computer wins")
}
else if (player == "scissor"|| "paper" && computer =="rock"){
    console.log("computer wins")
}    


console.log("player:",player ,"computer:",computer)


const q = '1';
switch (q) {
 case '1':
 answer = "one";
 break;
 case 1:
 answer = 1;
 break;
 case 2:
 answer = "this is the one";
 break;
 default:
 answer = "not working";
}
console.log(answer);

let login = true;
let outputHolder = "";
let userOkay = login ? outputHolder = "logout" : outputHolder = 
"login";
console.log(userOkay);

function * createGenerator(){
    yield 'this';
    yield 'is';
    yield 'my';
    yield 'hood';
}
const generator = createGenerator()
console.log(generator.next())
console.log(generator.next())
console.log(generator.next())


const animalList = ['cat','dog','hen','goat']
function * loop(arr){
for (const item of arr){
    yield  `i like a ${item} as a pet`
}
}

const animalGenerator = loop(animalList)
console.log(animalGenerator.next())
console.log(animalGenerator.next())
console.log(animalGenerator.next())


let a = 10
let b = 15
console.log(a > b || b > a)
let numLimit = 5
let genRandom = Math.floor(Math.random()* numLimit)
let askQuestion =Number( prompt("enter a number from 0-5"))
let define = true
while(define && askQuestion){
  
    if(askQuestion === genRandom){
        console.log("you are actually right")
         console.log(define)
    
     }
     else{
console.log("nearly cannnot kill a bird")
    }
    define = false 
    console.log(define)
}
console.log(genRandom) 


let number;
do {
    number = prompt("please enter a number between 1 and 50")
} while((number >= 0 && number < 50))
*/
function getRecursion(nr){
    console.log(nr)
    if(nr > 0){
        getRecursion(--nr)
    }

}
getRecursion(3)



function reverseArray(a) {
    // Write your code here
    let d = []
for(let i = a.length -1; i >= 0; i--){
 
 d.push(a[i])
}
console.log(d)
}

reverseArray([3,4,2,1])
 let givenNum = [3,4,5,6,91]
function addArray(ar){
    for (let i = 0; i < ar.length;i++){
    let result = ar[i + 1]+ar[i]
    console.log(result)
    }
}
addArray(givenNum)

let arrey = [2,4,6]
for (let i = 0; i < arrey.length;i++){
  let result =   arrey[i]/ 2

console.log(result)
}




const dishData = [
    {
        name: "Italian pasta",
        price: 9.55
    },
    {
        name: "Rice with veggies",
        price: 8.65
    },
    {
        name: "Chicken with potatoes",
        price: 15.55
    },
    {
        name: "Vegetarian Pizza",
        price: 6.45
    },
]
const tax = 1.20;

// Implement getPrices()
function getPrices(taxBoolean) {
    for(let i = 0;i <dishData.length;i++ ){
        let finalPrice;
        if (taxBoolean == true){
         finalPrice = dishData[i].price*tax
        }
        else if(taxBoolean == false){
            finalPrice = dishData[i].price
        }
        else{
            console.log("you need to pass a boolean to the getPrices call!")
       return;
        }
        console.log(`Dish:${dishData[i].name}Price: $ ${finalPrice}`)
    }
}

// Implement getDiscount()
function getDiscount(taxBoolean,guest) {
    getPrices(taxBoolean)
    
    let condition1 = Number(guest)
    let condition2 = condition1 > 0 && condition1 < 30
    if (condition1 && condition2){
      let discount = 0
    
      if(guest < 5){
 discount = 5
        }
        else if(guest >= 5){
            discount = 10
        }
        console.log(`Discount is : $${discount}`)
    }
    else{
        console.log(`the secound argument must be a number between 0 and 30`)
    }
   
}

// Call getDiscount()
getDiscount(false,29)