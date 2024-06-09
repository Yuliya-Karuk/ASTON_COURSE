// console.log('Start');
//
// example()
// setTimeout(function setTimeoutFn1() {
//     console.log('Timeout finished1');
// }, 0);
//
// console.log('End');
//
// function example () {
//     console.log('example')
//
//     setTimeout(function setTimeoutFn2() {
//         console.log('Timeout finished2');
//     }, 0)
// }

// star, example, end, Timeout finished2, Timeout finished1

///////////////////////
// function bar() {
//     console.log('bar start');
//     setTimeout(() => {
//         console.log('bar end');
//     }, 1000);
// }
//
// function baz() {
//     console.log('baz start');
//     setTimeout(() => {
//         console.log('baz end');
//     }, 500);
// }
//
// function foo() {
//     console.log('foo start');
//     bar();
//     baz();
//     console.log('foo end');
// }
//
// console.log('Script start');
// foo();
// console.log('Script end');

// Script start, foo start, bar start, baz start, foo end, Script end, baz end, bar end

///////////////////////

// function bar() {
//     console.log('bar start');
//     setTimeout(() => {
//         console.log('bar end');
//     }, 2000);
// }
//
// function baz() {
//     console.log('baz start');
//     setTimeout(() => {
//         console.log('baz end');
//     }, 0);
// }
//
// function foo() {
//     console.log('foo start');
//
//     function sleep(ms) {
//         const start = Date.now();
//
//         while (Date.now() < start + ms) {
//
//         }
//     }
//
//     function loop() {
//         const start = new Date().getTime();
//         sleep(3000)
//         const end = new Date().getTime();
//         console.log(`SecondWay: ${end - start}ms`);
//     }
//     bar();
//     loop();
//
//     baz();
//     console.log('foo end');
// }
//
// console.log('Script start');
// foo();
// console.log('Script end');

// такой ответ будет в консоли Google Chrome
// Script start, foo start, bar start, SecondWay: 3000ms, baz start, foo end, Script end, baz end, bar end
// такой ответ будет в консоли Node
// В Node.js все задачи из фазы timers обрабатываются в порядке их задержки, поэтому setTimeout(..., 2000) будет
// сработать раньше, чем setTimeout(..., 0), так как задержка 2000 мс уже истекла из-за длительной блокировки.
// Script start, foo start, bar start, SecondWay: 3000ms, baz start, foo end, Script end, bar end, baz end,
///////////////////////////////////
// setTimeout(()=> {
//     console.log('t1')
// },0)
//
// const promise1 = Promise.resolve();
// promise1
//     .then(()=> console.log('promise1'))
//     .then(()=>  console.log('promise2'))
//
// const promise2 = Promise.resolve();
//
// setTimeout(()=> {
//     console.log('t2')
// },0)
// promise2
//     .then(()=> console.log('promise3'))
//     .then(()=> console.log('promise4'))
//
// setTimeout(()=> {
//     console.log('t3')
// },0)

// promise1, promise3, promise2, promise4, t1, t2, t3
///////////////////////////////
// console.log("1");
//
// setTimeout(() => console.log("2"), 1);
//
// let promise = new Promise((resolve) => {
//   console.log("3");
//   resolve();
// });
//
// promise.then(() => console.log("4"));
//
// setTimeout(() => console.log("5"));
//
// console.log("6");

// 1, 3, 6, 4, 5, 2 - вывод в Chrome
// 1, 3, 6, 4, 2, 5 - вывод в Node
///////////////////////////////
// Promise
//     .reject('a')
//     .catch(p => p + 'b')
//     .catch(p => p + 'с')
//     .then(p => p + 'd')
//     .finally(p => p + 'e')
//     .then(p => console.log(p))

// abd

///////////////////////
// function a() {
//     console.log('1')
//     Promise.resolve().then(a)
// }
//
// function b() {
//     console.log('2')
//     setTimeout(b);
// }
// a()
// b()

// 1211111111 бесконечно
/////////////////////////

/////////////////////
// const asyncFn = async () => {
//     console.log(1)
//     const data = () => {
//         console.log('async')
//     }
//
//     await data()
//     console.log(2)
//     console.log('hello')
// }
//
// asyncFn()
// console.log(3)

// 1, async, 3, 2, hello
// потому что все что после await попадет в микротаски( типа попадет в then)

// альтернативный код на промис
// const asyncFn = () => {
//     console.log(1);
//     const data = () => {
//         return new Promise((resolve) => {
//             console.log('async');
//             resolve();
//         });
//     };
//
//     return data()
//         .then(() => {
//             console.log(2);
//             console.log('hello');
//
//             return 456
//         });
// };
//
// asyncFn()
//
// console.log(3)
