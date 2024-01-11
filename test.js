/*
Basics
*/

// var ist immer global definiert, neuer und besser ist let/const. const ist eine nicht änderbare Konstante
var int = 20;
let intLet = 25;
let constString = 'array';
let arrString = ['test', 'test'];
const arrInt = [1, 2, 3, 4];

//ohne ... keine Kopie des Arrays, Pointer zeigt auf Original und auch Manipulationen werden am Original durchgeführt
let arrCopie = [...arrInt];

constString = 'test';

number = 25 + 10;

var number;

console.log(int);
console.log(intLet);
console.log(constString);
console.log(arrString);
console.log(arrInt);
console.log(arrCopie);

console.log(number);

let zeroString = '0';
let zeroNumber = 0;
let nullValue = null;
let nullString = '';

// Immer den exklusiven Vergleich !== oder === verwenden, da sonst unerwartete Seiteneffekte entstehen
console.log(zeroNumber == zeroString);
console.log(zeroNumber === zeroString);
console.log(nullValue == zeroString);
/*
Schleife
*/
const array = ['1', '2', '3'];
//for-loop basic
for (let index = 0; index < array.length; index++) {
  console.log(array[index]);
}
//while loop basic
let i = array.length - 1;
while (i >= 0) {
  console.log(array[i]);
  i--;
}
// do while
let idx = array.length - 1;
do {
  console.log(array[idx]);
  idx--;
} while (idx >= 0);
/*
if else
*/
const value1 = true;
const value2 = false;
const value3 = 2;
const value4 = 3;
//if else
if (value2) {
  console.log('value2 ist true');
} else {
  console.log('value2 ist false');
}
//if else syntactic sugar : Ternary Operator
let value = value3 === value4 ? 'value3 === value4' : false;
if (value) {
  console.log(value);
}

//if else if
if (value2) {
  console.log('value2 ist true');
} else if (value3 !== value4) {
  console.log('value3 ist nicht gleich value4');
} else {
  console.log('else case');
}
/*
Objecte und Classen
*/
//Objekte werden mit const oder let erzeugt und enthalten key-value Paare. Keys immer als String schreiben
const obj = {
  key: 12,
  key2: 'Test',
};
//Klassen benötigen eine Konstruktorfunktion und können noch weitere Funktionen zur Manipulation bekommen. Klassen können um weitere Funktionen ergänzt werden
class Person {
  constructor(name, vorname) {
    this.name = name;
    this.vorname = vorname;
  }
}
const maxMustermann = new Person('Max', 'Mustermann');

console.log(obj);
console.log(maxMustermann);

/*
Funktionen
*/
//alter Ansatz mit function Keyword
var fkt = function () {
  return 'fkt executed';
};
console.log(fkt());
//es6 und neuer:
//wenn nur ein Return erwartet wird ohne weitere Manipulation, kann diese Kurzschreibweise verwendet werden:
const multiply = (fktParam1, fktParam2) => fktParam1 * fktParam2;
//lange schreibweise es6
const subSmallerValue = (fktParam1, fktParam2) => {
  if (fktParam1 > fktParam2) {
    return fktParam1 - fktParam2;
  } else {
    return fktParam2 - fktParam1;
  }
};
console.log(multiply(2, 2));
console.log(subSmallerValue(2, 5));
