// Literals for concatination 
 
  // General Rule with concatentation operator + ; as shown here:
// let  team ;team = "Barsa";
// var  hireDate; hireDate = "1.1.2020"

// var  employeeDetail = 'Our team includes ' + team + "team. They\'ve been a team member since " + hireDate + '!';

// console.log(employeeDetail);


// With mordern concatination literals process
let emoji = "!"+String.fromCodePoint(0x1F354);
let emoji2 = String.fromCodePoint(0x1F334);
let emoji3 = String.fromCodePoint(0x1F337);
let emoji4 = String.fromCodePoint(0x1F339);
let firstName = "Hoe";
let LastName = "Doe";
let team; team = "Barsa";
let hireDate ; hireDate = "1.1.2020";
let employeeDetail = `${emoji4}Our team includes ${firstName} who works on the ${team} ${emoji3}team${emoji}. They\'vebeen a team leader ${emoji2} since ${hireDate}. `
console.log(employeeDetail);

// adding emoji with String.formCodePoint() method in the above;


// Calculation with template literals 

const calculation = `The Sum of 5 + 3 is ${5+3}`; console.log(calculation);;
const calculation2 = `The Substraction of 5 - 3 is ${5-3};`; console.log(calculation2);
const calculation3 = `The Multiplication of 5 * 3 is ${5*3};`; console.log(calculation3);
const calculation4 = `The Division of 5 / 3 is ${5/3};`; console.log(calculation4);
const calculation5 = `The Modulas of 5 % 3 is ${5%3};`; console.log(calculation5);

// Calculating the time Elapsed Between Two Dates

function getDaysSince(date){
    const today = new Date();
    console.log(today)
    const oneDay = 24 * 60 * 60 * 1000 ; // hours*minutes*seconds*milliseconds
    console.log(oneDay);
    console.log( Math.round(Math.abs(oneDay)));
    console.log( Math.round(Math.abs(today)));
    console.log( Math.round(Math.abs((today-date)/oneDay)));
    return Math.round(Math.abs((today - hireDate) / oneDay));
}

employeeDetail = `${emoji4}Our team includes ${firstName} who works on the ${team} ${emoji3}team${emoji}. They\'vebeen a team leader ${emoji2} since ${hireDate}, that\'s ${getDaysSince(hireDate)} `
console.log(employeeDetail);
var con = document.getElementById('container');
var txtNode = document.createTextNode(employeeDetail)
con.appendChild( txtNode);
container.style.width = '100%';
container.style.height = '500px';
container.style.background = '#6F38A4';
container.style.color = 'white';
container.style.padding='20px ';


let num = 10;
console.log(typeof(num));
let x = num + "";
console.log(typeof(x));
let printToDivWindow = document.createTextNode(typeof(x));
con.appendChild(printToDivWindow) ;