var Name = { name: "Vlad" };
var SomeLetters = [7, 8, 5, 6];
var SomeText = "42";
var SomeNumber = 42;
var SomeFunction = function() {};
console.log(Name, ", Тип:", typeof Name);
console.log(SomeLetters, ", Тип:", typeof SomeLetters);
console.log(SomeText, ", Тип:", typeof SomeText);
console.log(SomeNumber, ", Тип:", typeof SomeNumber);
console.log(SomeFunction, ", Тип:", typeof SomeFunction);

//SomeText = Number(SomeText);
//SomeNumber = SomeNumber.toString();
//console.log(SomeText);
//console.log(typeof SomeText);
//console.log(SomeNumber);
//console.log(typeof SomeNumber);* /


//console.log(SomeText == SomeNumber);
//-console.log(SomeText === SomeNumber);


var changer = 13;
var changedNumber = SomeNumber + changer;
console.log("Зашифрований SomeNumber:", changedNumber);
var unchangedNumber = changedNumber - changer;
console.log("Розшифрований SomeNumber:", unchangedNumber);