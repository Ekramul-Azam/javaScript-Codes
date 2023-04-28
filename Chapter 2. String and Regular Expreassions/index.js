
var unknown = 333;
var unknown = '333';

if (typeof unknown === 'string'){
   console.log("unknownVariable is a string") 
}else{
    console.log("number")
};

var X = '333';

if(typeof X ==="string" && X.length> 0){
    console.log("this is genuine string with chracters of rwitespace in it ")
}else{
    console.log("not a string")
}
var y = 5654;

if(typeof y ==="string" && y.length > 0){
    console.log("this is genuine string with chracters of rwitespace in it ")
}else{
    console.log("not a string")
}

// String Test
const aVariable = "29292" ;
const unknownVariable = new String('test');

if (typeof unknownVariable=== 'string'  || String.prototype.isPrototypeOf(unknownVariable)){
    console.log("It's a string primitive or a string wrapped in an object")
};

let azam = "";
console.log(typeof(azam));
let p = null;
console.log(typeof(p));
let q = undefined;
console.log(typeof(undefined));


// Convert a number to string

const somNumber = 42;
console.log(somNumber);
console.log(typeof(somNumber));
const someString = somNumber + "";
console.log(typeof(someString));

// Another approach to convert a number to string

const aNewNumber = 100;
console.log(typeof(aNewNumber));
const toString = aNewNumber.toString();

console.log(typeof(toString));

// you want a fixed number of decimal places (like 30.00 instead of 30). 
// Solution : use => Number.toFixed() method

const numWithFraction = 2937.848472;
console.log(numWithFraction);
const fixedToDecimal = numWithFraction.toFixed();
console.log(fixedToDecimal)
const fixedToDecima = numWithFraction.toFixed(1);
console.log(fixedToDecima)
const fixedToDeci = numWithFraction.toFixed(2);
console.log(fixedToDeci);

// to rounding a number (that means to get to the power values)use => toExponential() method

const anNumber = 666667.74;
const round = anNumber.toExponential(); //6.6666774e+5
console.log(round);
const roun = anNumber.toExponential(2);
console.log(roun);// 6.67e+5

// toPrecision() method can round a number 
// const anotherNum = 98484.26526;
const anotherNum = 4.26526;
const toPrecisionNum = anotherNum.toPrecision(3);
console.log(toPrecisionNum);//4.27;

let aN = anotherNum.toPrecision(5);
console.log(aN);//4.2653

// If you want to apply formatting like commmas , a currency symbol, or some other locale-specific details, you need the help of the Intl.NumberFormat object.

const formatter = new Intl.NumberFormat('en-Us',{style:'currency',currency: 'USD'});

const someNumber = 14.64;
const moneyString = formatter.format(someNumber);

console.log(moneyString);

// If you create a Intl.numberFormat object without any constuctor arguments, you get the locale settings of the current computer
const formatte = new Intl.NumberFormat("en-US");
const AzamNum =  2929;
const Money = formatte.format(AzamNum);
console.log(Money) // 2,929  (only extra comma is added)

// older version to convert a number in money

const AmericanMoney = 20.737;
const formt = new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' }).format(AmericanMoney)
console.log(formt);


// use of special charecture like @ or another

// Solution: Just paste the character you want into your editor. For example, if you need a copyright symbol , first find the character in a desktop utility like charmap( on a Windows computer) or just search for "copyright symbol" in google. Select the symbol, copy it, and then the paste it into your code.

// But If you want to use a character that wouldn`t normally be alowed in your code(according to the syntax rules of JavaScript), you need to use one of its escape sequences- special character code combinations that aren't interpreted literally.

const favoriteMovie = "My favorite movie is \
'The Seventh Seal\'.";
console.log(favoriteMovie); //My favorite movie is 'The Seventh Seal'.

const myName = "My name is \'Azam\'.";
console.log(myName);

const Saim = 'He is \"Saim\" and \nhe is \"2\" years old \t but he is quite boy' 
console.log(Saim);

// Remember that 
// \' is for single quote
//  \"  is for Double quote
//  \t  is for make a tab distance
// \n is used to make a new line
// \b is used to make Nondestructive backspace*
// Example of Nondestructive backspace

const MrAzam = 'Is he  a Teacher \b';
console.log(MrAzam);// He is a  Teacher 
// To make  manual space use => Form feed* \f
const ekName = "this is the use of \f form feed";
console.log(ekName);

