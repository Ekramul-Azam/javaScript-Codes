var animals = new Array("cat","dog", "hen", "cat", "cow","elephant","horse","lion");
console.log(animals.indexOf("elephant")); // 5
console.log(animals.lastIndexOf("cat")); //3

console.log(animals);
//remove an element from array
// splice() method
var remElem = animals.splice((animals.indexOf("cat"), 1))
console.log(remElem)

// splice in new element
 animals.splice(animals.lastIndexOf("cat"),3,"monkey","GOAT");
 console.log(animals);

 console.log(animals.toString()); //monkey,GOAT

// ading new array with concatination
 let charSets = ["ab","ba","bc","cd","de", "ab","cd", "ee","cd"];
 console.log(charSets)
 let charSets2 = ["mm","nn"]
 let charSets3 = charSets.concat(charSets2);
 console.log(charSets3);

 // replace element with splice method
 while(charSets3.indexOf("cd") != -1){
    charSets3.splice(charSets3.indexOf("cd"), 1,"##")
 };
 console.log(charSets3); //(11) ['ab', 'ba', 'bc', '##', 'de', 'ab', '##', 'ee', '##', 'mm', 'nn'];

 // delete new element
 while(charSets3.indexOf("##") != -1){
    charSets3.splice(charSets3.indexOf("##"), 1)
 }
 console.log(charSets3); //(8) ['ab', 'ba', 'bc', 'de', 'ab', 'ee', 'mm', 'nn']
