// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

// console.log("Starting to make a coffee\n" +
//     "Grinding coffee beans\n" +
//     "Boiling water\n" +
//     "Mixing boiled water with crushed coffee beans\n" +
//     "Pouring coffee into the cup\n" +
//     "Pouring some milk into the cup\n" +
//     "Coffee is ready!")

// console.log("Write how many cups of coffee you will need: ");
// let userInput = Number(input());
//
// console.log(`For ${userInput} cups of coffee you will need: `);


// // Calculate the total amount of ingredients needed for the users input
// let totalWater = waterPerCup * userInput;
// let totalMilk = milkPerCup * userInput;
// let totalBeans = beansPerCup * userInput;
//
// // Output the result to the user
// console.log(`${totalWater} ml of water
// ${totalMilk} ml of milk
// ${totalBeans} g of coffee beans`);


// console.log("Write how many ml of water the coffee machine has:");
// let availableWater = Number(input());
//
// console.log("Write how many ml of milk the coffee machine has:");
// let availableMilk = Number(input());
//
// console.log("Write how many grams of coffee beans the coffee machine has:");
// let availableBeans = Number(input());
//
// console.log("Write how many cups of coffee you will need:");
// let requiredCups = Number(input());
//
// //Ingredients needed for 1 cup of coffee
// let waterPerCup = 200;
// let milkPerCup = 50;
// let beansPerCup = 15;
//
// // Calculate how many cups can be made with the available ingredients
// let maxCupsByWater = Math.floor(availableWater / waterPerCup);
// let maxCupsByMilk = Math.floor(availableMilk / milkPerCup);
// let maxCupsByBeans = Math.floor(availableBeans / beansPerCup);
//
// // The number of cups the machine can make is the minimum of the 3 below values
// let maxCups = Math.min(maxCupsByWater, maxCupsByMilk, maxCupsByBeans);
//
// if(maxCups >= requiredCups){
//     if(maxCups > requiredCups){
//         console.log(`Yes, I can make that amount of coffee (and even ${maxCups - requiredCups} more than that)`);
//     } else {
//         console.log("Yes, I can make that amount of coffee");
//     }
// } else {
//     console.log(`No, I can make only ${maxCups} cup(s) of coffee`);
// }

// Available ingredients in the coffee machine
let availableWater = 400;
let availableMilk = 540;
let availableBeans = 120;
let availableCups = 9;
let moneyGenerated = 550;

function display(){
    console.log(`The coffee machine has:
${availableWater} ml of water
${availableMilk} ml of milk
${availableBeans} g of coffee beans
${availableCups} disposable cups
$${moneyGenerated} of money`);
}

startingMenu();
function startingMenu(){
    display();
    console.log("Write action (buy, fill, take):");
    let userInput = String(input());

    switch(userInput){
        case "buy":
            buyCoffee();
            break;
        case "fill":
            fillCoffeeMachine();
            break;
        case "take":
            collectMoney();
            break;
        default:
            console.log("Invalid");
    }
    display();
}



function buyCoffee(){
    console.log("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
    let choice = Number(input());

    switch (choice){
        case 1:
            if(availableWater >= 250 && availableBeans
            >= 16 && availableCups >= 1){
                availableWater -= 250;
                availableBeans -= 16;
                availableCups -= 1;
                moneyGenerated += 4;
            }
            break;
        case 2:
            if(availableWater >= 350 && availableMilk >= 75 && availableBeans >= 20 && availableCups >= 1){
                availableWater -= 350;
                availableMilk -= 75;
                availableBeans -= 20;
                availableCups -= 1;
                moneyGenerated += 7;
            }
            break;
        case 3:
            if(availableWater >= 200 && availableMilk >=100 && availableBeans >= 12 && availableCups >= 1){
                availableWater -= 200;
                availableMilk -= 100
                availableBeans -= 12;
                availableCups -= 1;
                moneyGenerated += 6;
            }
            break;
        default:
            console.log("invalid");
    }
}

function fillCoffeeMachine(){
    console.log("Write how many ml of water you want to add:");
    let waterAdded = Number(input());

    console.log("Write how many ml of milk you want to add:");
    let milkAdded = Number(input());

    console.log("Write how many grams of coffee beans you want to add: ");
    let beansAdded = Number(input());

    console.log("Write how many disposable cups you want to add:");
    let cupsAdded = Number(input());

    availableWater += waterAdded;
    availableMilk += milkAdded;
    availableBeans += beansAdded;
    availableCups += cupsAdded;

}

function collectMoney(){
    console.log(`I gave you $${moneyGenerated}`);
    moneyGenerated = 0;
}

