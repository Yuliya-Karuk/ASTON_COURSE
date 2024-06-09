// Домашнее задание(Порешать типовые задачи - написать порядок и вывод в консоли):

// ЗАКОММЕНТИРОВАЛА ВСЕ ПОТОМУ ЧТО ТАК УДОБНЕЙ ПРОВЕРЯТЬ

// 1)
// console.log('1');
// setTimeout(() => console.log('2'), 1);
// let promiseNew = new Promise((resolve) => {
//     console.log('3');
//     resolve();
// });
// promiseNew.then(() => console.log('4'));
// setTimeout(() => console.log('5'));
// console.log('6');

// в Chrome
// 1, 3, 6, 4, 5, 2
// console.log('1') - сразу попадает в call stack -> выполняется и call stack очищается
// setTimeout(() => console.log('2'), 1); - попадает в Web Api и там ждет
// let promiseNew - попадает в стек и выполняется
// promiseNew.then(() => console.log('4')); - попадает в очерель микро тасков и ждет
// setTimeout(() => console.log('5')); - - попадает в Web Api и там ждет
// console.log('6'); - сразу попадает в call stack -> выполняется и call stack очищается
// затем проверятся очередь микрозадач - и promiseNew.then(() => console.log('4')); попадает call stack -> выполняется и call stack очищается
// за это время в Web Api setTimeout-ы выполняются и их коллбеки попадают в очередь микрозадач
// первым в call stack попадает и выполняется setTimeout(() => console.log('5')); потому что у него время меньше, и call stack очищается
// в call stack попадает и выполняется setTimeout(() => console.log('2'), 1); и call stack очищается

// в Node
// 1, 3, 6, 4, 2, 5
// такая же цепочка только разница в setTimeout
// В Node.js все задачи из фазы timers обрабатываются в порядке их задержки, поэтому setTimeout(..., 1) будет
// сработать раньше, чем setTimeout(..., 0), так как задержка  1мс уже истекла.
//////////////////////////////
// 2)
// let promiseTree = new Promise((resolve, reject) => {
//     resolve("a");
//     console.log("1");
//     setTimeout(() => {
//         console.log("2");
//     }, 0);
//     console.log("3");
// });

// 132
/////////////////////////
// 3)
// let promiseTwo = new Promise((resolve, reject) => {
//     resolve("a");
// });
// promiseTwo
//     .then((res) => {
//         return res + "b";
//     })
//     .then((res) => {
//         return res + "с";
//     })
//     .finally((res) => {
//         return res + "!!!!!!!";
//     })
//     .catch((res) => {
//         return res + "d";
//     })
//     .then((res) => {
//         console.log(res);
//     });

// abc
/////////////////////////////
// 4)
// function doSmth() {
//     return Promise.resolve("123");
// }
// doSmth()
//     .then(function (a) {
//         console.log("1", a); //
//         return a;
//     })
//     .then(function (b) {
//         console.log("2", b);
//         return Promise.reject("321");
//     })
//     .catch(function (err) {
//         console.log("3", err);
//     })
//     .then(function (c) {
//         console.log("4", c);
//         return c;
//     });

// 1 123, 2 123, 3 321, 4 undefined
// undefined потому что в блоке catch ничего не возвращается,  значит в последнем then c = undefined
///////////////////////////
// 5)
// console.log("1");
// setTimeout(function () {
//     console.log("2");
// }, 0);
// Promise.resolve().then(() => console.log("3"));
// console.log("4");

// 1, 4, 3, 2
////////////////////////////
//7)
// async function a() {
//   console.log("a");
// }

// console.log("1");

// (async function () {
//   console.log("f1");
//   await a();
//   console.log("f2");
// })();
// console.log("2");

// 1 f1 a 2 f2
// console.log("1"); - сразу попадает в call stack -> выполняется и call stack очищается
// IIFE вызывается и console.log("f1"); сразу попадает в call stack -> выполняется и call stack очищается
// затем вызывается a() - console.log("a"); сразу попадает в call stack -> выполняется и call stack очищается
// console.log("f2"); - попадает в очередь микротасков и ждет
// console.log("2"); - сразу попадает в call stack -> выполняется и call stack очищается
// console.log("f2"); - из очереди микротасков попадает в call stack -> выполняется и call stack очищается
////////////////////////////////
//8)
// console.log(1);

// setTimeout(() => console.log(2));

// async function func() {
//   console.log(3);

//   await new Promise((resolve) => {
//     console.log(4);
//     resolve();
//     console.log(5);
//   })
//     .then(() => console.log(6))
//     .then(() => console.log(7));

//   console.log(8);
// }

// setTimeout(() => console.log(9));

// func();

// console.log(10);

// 1, 3, 4, 5, 10, 6, 7, 8, 2, 9
// все так же как и выше задача
///////////////////////////////////
// 9)*
// function foo(callback) {
//     setTimeout(() => {
//         callback('A');
//     }, Math.random() * 100);
// }
// function bar(callback) {
//     setTimeout(() => {
//         callback('B');
//     }, Math.random() * 100);
// }
// function baz(callback) {
//     setTimeout(() => {
//         callback('C');
//     }, Math.random() * 100);
// }

// foo(console.log)
// bar(console.log)
// baz(console.log)

// const wrapper = (callback) => {
//     return new Promise((resolve) => {
//         callback(result => {
//             console.log(result);
//             resolve();
//         });
//     })
// }
//Solution

// wrapper(foo)
//     .then(() => {
//         return wrapper(bar);
//     })
//     .then(() => {
//         return wrapper(baz);
//     });


// Написать функцию, чтобы починить последовательность выполнения A,B,C без использования колбэк хэлла
// в функциях foo, bar,baz запрещено что-либо менять
// подсказка: нужны промисы =))

///////////////
// todo Объяснить код, рассказать какие консоли и в какой последовательности будут, а затем переписать его на промисы
// function resolveAfter2Seconds(x) {
//     console.log(`Какой Х пришёл -> ${x}`)
//     return new Promise(resolve => {
//         setTimeout(() => {
//             resolve(x); //
//         }, 5000);
//     });
// }
// async function add1(x) {
//     console.log('add1 Hello')
//     const a = await resolveAfter2Seconds(20);
//     const b = await resolveAfter2Seconds(30);
//     console.log('add1 Bye')
//     return x + a + b;
// }
// add1(10).then(console.log);

// add1 Hello, Какой Х пришёл -> 20, Какой Х пришёл -> 30, add1 Bye, 60

// вызов функции add1(10) и выполняет console.log('add1 Hello')
// вызов  функции resolveAfter2Seconds(20) и выполняет console.log(`Какой Х пришёл -> ${20}`)
// затем возвращается промис, и так как функция была вызвана c await, движое JS ждет 5с и тогда выполняет resolve(20)
// вызов  функции resolveAfter2Seconds(30) и выполняет console.log(`Какой Х пришёл -> ${30}`)
// затем возвращается промис, и так как функция была вызвана c await, движое JS ждет 5с и тогда выполняет resolve(30)
// затем выполняется console.log('add1 Bye')
//затем возвразается 10+20+30 = 60
// затем выполняется then(console.log); и консолится 60

// запись через промисы
function resolveAfter2Seconds(x) {
    console.log(`Какой Х пришёл -> ${x}`)
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x); //
        }, 5000);
    });
}

function add1(x) {
    console.log('add1 Hello')
    return new Promise(resolve => {
        resolveAfter2Seconds(20).then(a => {
            resolveAfter2Seconds(30).then(b => {
                resolve(x + a + b);
            });
        });
    })
    .then((summ) => {
        console.log('add1 Bye');
        return summ;
    })
}
add1(10).then(console.log);