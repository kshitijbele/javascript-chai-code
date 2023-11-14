let score1 = 33
console.log(typeof(score1))

///////////////////////////////////////////////////////////////////////////////////////

let score2 = "33"
console.log(typeof(score2));

let valueInNumber = Number(score2);
console.log(typeof(valueInNumber))

/////////////////////////////////////////////////////////////////////////////////////////

let score3 = "33abc"
console.log(typeof(score3));

let valueInNumber2 = Number(score3);
console.log(typeof(valueInNumber2))
console.log(valueInNumber2)

// Conversion to Number
// "33" => 33
// "33abc" => NaN
// true => 1
// false => 0
// null => 0
// undefined => NaN

// Conversion to Boolean
// 1 => true
// 0 => fale
// "" => false
// "kshitij" => true
// null => false
// undefined => false

//************************ Operations **************************//

console.log(2**3)
let str1 = "hello"
let str2 = " kshitij"
let str3 = str1 + str2
console.log(str3)

console.log("1" + 2) //12
console.log(1 + "2") //12
console.log("1" + 2 + 2) //122
console.log(1 + 2 + "2") //32

let x = 3;
const y = x++;

console.log(`x:${x}, y:${y}`);
// Expected output: "x:4, y:3"

let a = 3;
const b = ++a;

console.log(`a:${a}, b:${b}`);
// Expected output: "a:4, b:4"