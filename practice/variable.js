// 1. use strict
// added in ES5
// use this for Vanila JavaScript
'use strict';

// 2. Variable, rw(read/write)
// let (added in ES6)

// global scope
let username = 'workhardslave';
console.log(username);

// block scope
{
    let age = 27;
    console.log(age);
}

// console.log(age); error

// var (never use)
// var hoisting : move declaration from bottom to top
// has no blcok scope
num = 20
var num;
console.log(num);

// 3. Constant, r(read only)
// use const whenever possible
// only use let if variable needs to be changed

const dayInWeek = 7;
const madNumber = 5;
// dayInWeek = 10; error

// Note!
// Immutable data types : primitive types, frozen objects (ex. object.freeze())
// Mutable data types : all objects by default are mutable in JS
// favor immutable data type for a few reason :
//  - security
//  - thread safety
//  - reduce human mistakes

// 4. Varaible types
// primitive, single item : number, string, boolean, null, undefined, symbol
// object, box container
// function, first-class function
const count = 17; // integer
const size = 17.1; // deciaml number
console.log(`value : ${count}, type : ${typeof count}`);
console.log(`value : ${size}, type : ${typeof size}`);

// special numeric values
const infinity = 1 / 0;
const negativeInfinity = -1 / 0;
const nAn = 'not a number' / 2;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt (only in Chrome and Firefox yet)
const bigInt = 1234567890123456789012345678901234567890n; // over(-2^53 ~ 2^53)
console.log(`value : ${bigInt}, type : ${typeof bigInt}`);

// string (no char in JS)
const char = 'c';
const brendon = 'brendon';
const greeting = 'hello ' + brendon;
console.log(`value : ${greeting}, type : ${typeof greeting}`);
const helloBob = `hi ${brendon}!`; // template literal (string)
console.log(`value : ${helloBob}, type : ${typeof helloBob}`);

// boolean
// false : 0, null, undefined, NaN, ''
// true : any other values
const canRead = true; // true
const test = 3 < 1; // false
console.log(`value : ${canRead}, type : ${typeof canRead}`);
console.log(`value : ${test}, type : ${typeof test}`);

// null
let nothing = null;
console.log(`value : ${nothing}, type : ${typeof nothing}`);

// undefined
let x;
console.log(`value : ${x}, type : ${typeof x}`);

// symbol, create unique identifiers for objects
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');
console.log(symbol1 === symbol2); // false
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); // true
console.log(`value : ${symbol1.description}, type : ${typeof symbol1}`);

// Dynamic typing : dynamically typed language
// 변수의 타입이 런타임 시에 결정된다. -> TypeScript가 나온 배경
let text = 'hello';
console.log(`value : ${text}, type : ${typeof text}`);
text = 1;
console.log(`value : ${text}, type : ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type : ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text}, type : ${typeof text}`);