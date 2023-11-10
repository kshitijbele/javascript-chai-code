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