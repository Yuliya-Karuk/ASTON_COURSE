// Манипуляции с числами

// const number_1 = 1000000;
// const number_2 = 1_000_000;
// const number_3 = 1e6;

// Неточные вычисления
// Внутри JavaScript число представлено в виде 64-битного формата IEEE-754.
// Для хранения числа используется 64 бита: 52 из них используется для хранения цифр,
// 11 для хранения положения десятичной точки и один бит отведён на хранение знака.
//
// Если число слишком большое, оно переполнит 64-битное хранилище, JavaScript вернёт бесконечность:

// const floatInt1 = 0.1;
// const floatInt2 = 0.2;
//
// const res = (floatInt1 + floatInt2).toFixed(2);
// const finalRes = Number(res);

// Число хранится в памяти в бинарной форме, как последовательность бит – единиц и нулей.
// Но дроби, такие как 0.1, 0.2, которые выглядят довольно просто в десятичной системе счисления,
// на самом деле являются бесконечной дробью в двоичной форме.
//
// Другими словами, что такое 0.1? Это единица делённая на десять — 1/10, одна десятая.
// В десятичной системе счисления такие числа легко представимы, по сравнению с одной третьей: 1/3,
// которая становится бесконечной дробью 0.33333(3).


// Ссылочный тип данных - ОБЪЕКТ

// let user1 = {
//     name: 'Alex',
//     age: 25
// }
//
// let user2 = user1;
//
// console.log(user1 === user2);
//
// user2.age = 10
//
// console.log(user1);

///////////////////

// let foo = {
//     bar: 1,
// }
//
// const baz = foo;
//
// foo = {
//     bar: 3
// }
//
// foo.bar = 2
//
//
// console.log (baz.bar);  // ?
// console.log (foo.bar);  // ?

////////////////////


// let a = {};
// function clear(a) {
//     a.b = 2;
//     a = null;
// }
// clear(a);
//
// console.log(a);
// console.log(a.b);

// Autoboxing
// Когда вы обращаетесь к свойству или методу примитивного значения,
// JavaScript автоматически выполняет автозапаковку,
// создавая временный объект-обертку с использованием
// соответствующего конструктора (String, Number, Boolean).
// Этот временный объект имеет прототип, который содержит свойства и методы для работы с примитивным значением.

// Явное приведение типов

// К строке:
// console.log(String(123))         // '123'
// console.log(String(-12.3))       // '-12.3'
// console.log(String(null))        // 'null'
// console.log(String(undefined))       // 'undefined'
// console.log(String(true))        // 'true'
// console.log(String(false))       // 'false'
// console.log(String(function name() {}))      // 'function name() {}'
// console.log(String({}))      // '[object Object]'
// console.log(String({ key: 42 }))         // '[object Object]'
// console.log(String([]))          // ''
// console.log(String([1, 2]))          //'1,2'
// console.log(String(Symbol('my symbol')))         // 'Symbol(my symbol)'
// console.log('' + Symbol('my symbol'))            // ошибка TypeError !!!!!!

// console.log(Number('123'))       // 123
// console.log(Number('123.4'))         // 123.4
// console.log(Number('123,4'))         // NaN
// console.log(Number(''))          // 0
// console.log(Number(null))        // 0
// console.log(Number(undefined))       // NaN
// console.log(Number(true))        // 1
// console.log(Number(false))       // 0
// console.log(Number(function () {}))      //Nan
// console.log(Number({}))          // NaN
// console.log(Number([]))          // 0
// console.log(Number([1]))         // 1
// console.log(Number([1, 2]))      // NaN
// Number(Symbol('my symbol'))    // Ошибка TypeError
// +Symbol('123')                 // Ошибка TypeError


// console.log(Boolean(''))     //false
// console.log(Boolean('string'))       //true
// console.log(Boolean('false'))        //true
// console.log(Boolean(0))      //false
// console.log(Boolean(42))     //true
// console.log(Boolean(-42))        //true
// console.log(Boolean(NaN))        //false
// console.log(Boolean(null))       //false
// console.log(Boolean(undefined))      //false
// console.log(Boolean(function () {}))     //true
// console.log(Boolean({}))         //true
// console.log(Boolean({ key: 42 }))        //true
// console.log(Boolean([]))         //true
// console.log(Boolean([1, 2]))         //true

// Сравнение типов
// console.log(null === undefined)      //false
// console.log(null == undefined)       //true
// console.log(NaN == NaN)          //false
// console.log([] == []);           //false
// console.log(true == 1);          //true
// console.log(false == 0);         //true
// console.log(false == '');            //true

// console.log(null > 0);       //false
// console.log(null == 0);      //false
// console.log(null === 0);     //false
// console.log(null >= 0);      //true
//Согласно спецификации ECMAScript, null при нестрогом сравнении равен только undefined и ничему больше.
//

// Причина в том, что нестрогое равенство и сравнения > < >= <= работают по-разному.
// Сравнения преобразуют null в число, рассматривая его как 0.
// Поэтому выражение (3) null >= 0 истинно, а null > 0 ложно.
//
// С другой стороны, для нестрогого равенства == значений undefined и null действует особое правило:
// эти значения ни к чему не приводятся,
// они равны друг другу и не равны ничему другому. Поэтому (2) null == 0 ложно.

// Неявное преобразование типов
// console.log('11' + 25)      //1125
// console.log(null + 10)      //10
// console.log(undefined + null)       //NaN
// console.log([] + 1)         //1
// console.log({} + 1)         //[object Object]1

//Если один из операндов является строкой, JavaScript попытается преобразовать другой операнд к строке и выполнить конкатенацию.
//Если один из операндов не является строкой, JavaScript попытается преобразовать оба операнда в числа и выполнить сложение

// console.log(null + false  - true + 25 + +[])         // 24

const isEqualInt = 2 === 2
let sum = [] - isEqualInt + undefined - null
// console.log(sum)         //NaN

// console.log('ba' + +[1,2,3])             //baNaN
// console.log(Array(5).join('wat' - 1) + ' Batman!')      //NaNNaNNaNNaN Batman!

// Логические операторы
// ! && || ??
// Оператор нулевого слияния (??)
// Оператор нулевого слияния (??) — это логический оператор, возвращающий значение правого операнда,
// если значение левого операнда содержит null или undefined, в противном случае возвращается значение левого операнда.

// const check1 = 1 && false || '';
// console.log(check1)                 //''
// const check2 = [] || 'hello';
// console.log(check2)             //[]
// const check3 = [] && {} || 123;
// console.log(check3)             //{}
// const check4 =   0 || 'world' || [] && null || false
// console.log(check4)         //world

// let a = null
// if (a !== undefined && a !== null) {
//     a = 5
// } else {
//     a = 10
// }
//
// console.log(a)


// Поднятие или hoisting — это механизм в JavaScript, в
// котором переменные и объявления функций, передвигаются
// вверх  своей  области  видимости  перед тем, как
// код будет выполнен.


// function example() {
//     if (true) {
//         var x = 10;
//         console.log(x);
//     }
//     console.log(x);
// }
//
// example();
//
// console.log(x);

//////////////////

// function jumpOut() {
//     var a = [1, 2, 3];
//     for (var i = 0; i < a.length; i++) {
//         var value = a[i];
//         console.log(value);
//     }

//     console.log(`Outside loop ${value}`)
// }

// jumpOut()

// function hoisting() {
//     console.log(answer);
//     answer = 42;
//     console.log(answer);
//     var answer = 67;
// }
//
// hoisting()


// function temporalExample () {
//     const f = () => {
//         console.log(value);
//     }
//     f();
//     let value = 42;
// }
// temporalExample();

// let range = {
//     from: 1,
//     to: 5,
//
//     // for..of range вызывает этот метод один раз в самом начале
//     [Symbol.iterator]() {
//         // ...он возвращает перебираемый объект:
//         // далее for..of работает только с этим объектом, запрашивая следующие значения
//         return {
//             current: this.from,
//             last: this.to,
//
//             // next() вызывается при каждой итерации цикла for..of
//             next() {
//                 // нужно вернуть значение как объект {done:.., value :...}
//                 if (this.current <= this.last) {
//                     return { done: false, value: this.current++ };
//                 } else {
//                     return { done: true };
//                 }
//             }
//         };
//     }
// };
//
// let range2 = {
//     from: 1,
//     to: 5,
//
//     *[Symbol.iterator]() { // краткая запись для [Symbol.iterator]: function*()
//         for(let value = this.from; value <= this.to; value++) {
//             yield value;
//         }
//     }
// };
//
// alert( [...range2] ); // 1,2,3,4,5
