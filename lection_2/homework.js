//Как исправить "одни пятёрки"?

// var result = [];
// for (var i = 0; i < 5; i++) {
//     result[i] = function () {
//         console.log(i);
//     };
// }
// result[0](); //5
// result[1](); //5
// result[2](); //5
// result[3](); //5
// result[4](); //5

//SOLUTION

var result = [];
for (let i = 0; i < 5; i += 1) {
    result[i] = function () {
        console.log(i);
    };
}
result[0](); //0
result[1](); //1
result[2](); //2
result[3](); //3
result[4](); //4

//////////////////////////////////////////////////

// function getGroup() {
//     let students = [];
//     let i = 0;
//     while (i < 10) {
//         students[i] = function() {
//             console.log(i);
//         }
//         i++
//     }
//
//     return students;
// }
//
// let group = getGroup();
//
// group[0](); // 10 как исправить на 0
// group[5](); // 10                  5

//SOLUTION

function getGroup() {
    let students = [];

    for (let i = 0; i < 10; i +=1 ) {
        students[i] = function() {
            console.log(i);
        }
    }

    return students;
}

let group = getGroup();

group[0](); //  0
group[5](); //  5

//////////////////////////////////////////////////

// Напишите функцию multiply, должна принимать произвольное количество аргументов и возвращать их произведение.

// const result1 = multiply(2)(3)(4);
// console.log(result1); // Вывод: 24
// const result2 = multiply(2)(3)(4)(5);
// console.log(result2); // Вывод: 120

// const result1 = multiply(2)(3)(4);
//
// // Пример использования:
// const result1 = multiply(2)(4);
// console.log(result1); // Вывод: 8
//
// const result2 = multiply(5)(2)(3);
// console.log(result2); // Вывод: 30

//SOLUTION

function multiply(a){
    const fn = (b) => {
        if (!b) {
            return a;
        } else {
            return multiply(a * b);
        }
    }

    fn.valueOf = () =>  a;
    return fn;
}

const result1 = (multiply(2)(4)).valueOf();
console.log(result1); // Вывод: 8

const result2 = (multiply(5)(2)(3)).valueOf();
console.log(result2); // Вывод: 30

/////////////////////////
// Написать функцию getUniqArray(arr), которая на вход принимает массив чисел и
// возвращает массив уникальных чисел.
//     Если аргумент arr состоит не из чисел, тогда функция должна выбросить ошибку.
//     Текст ошибки: "В getUniqArray был передан невалидный параметр. Аргумент arr
// должен быть массивом чисел".

function getUniqArray(arr) {
    if (!Array.isArray(arr) ) {
        throw Error('Переданный аргумент должен быть массивом');
    }
    if (!arr.every(el => typeof el === 'number' && !isNaN(el))) {
        throw Error('В getUniqArray был передан невалидный параметр. Аргумент arr должен быть массивом чисел');
    }
    return Array.from(new Set(arr));
}

console.log(getUniqArray([1, 2, 2, 4, 5]));
// console.log(getUniqArray([1, 2, 2, 4, NaN]));
// console.log(getUniqArray([1, 2, 2, '4', 5]));
// console.log(getUniqArray('1, 2, 3'));

