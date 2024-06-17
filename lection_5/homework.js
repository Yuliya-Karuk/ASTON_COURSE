1.
const a = {b: 1},
    c = Object.create(a);
// c — это объект, который наследует от a. В прототипной цепочке c.__proto__ указывает на a.

console.log(c.b); // 1
// c не имеет собственного свойства b, поэтому оно ищется в его прототипе, который является a
delete c.b;
console.log(c.b); // 1
// Удаление свойства b у c не имеет эффекта, так как у c нет собственного свойства b.
delete a.b;
console.log(c.b); // undefined
// c.b теперь не может найти это свойство в прототипной цепочке.
a.z = 2;
console.log(c.z); // 2
// Свойство z добавляется в объект a. Поскольку c наследует от a, c.z теперь возвращает значение 2, которое находится в a.
c.z = 3;
console.log(a.z); // 2
// Создание собственного свойства z у объекта c не влияет на объект a

// 2.

// const promise = new Promise(() => {
// })
// console.log(promise.prototype === Promise.__proto__) // false
// console.log(promise.__proto__ === Promise.prototype) // потому что вот так true

// const obj = {}
// console.log(obj.__proto__ === Object.prototype) // true

// console.log(new Array([]).__proto__ === Array.prototype) // true

function Fn1 () {}
function Fn2 () {}
console.log(Fn1.constructor === Fn2.constructor) // true
// Fn1 и Fn2 являются функциями, и их конструктор - это встроенная функция Function.

console.log(Fn1.prototype === Fn2.prototype) // false
// Fn1.prototype и Fn2.prototype - это разные объекты, даже если они пустые.

const fn1 = new Fn1();
const fn2 = new Fn2();

console.log(fn1.__proto__ === Fn1.prototype); // true
console.log(fn2.__proto__ === Fn2.prototype); // true
//3.

// У вас есть два конструктора, Animal и Bird.
// Каждый объект типа Bird должен наследовать метод speak от Animal.
// Однако, Bird также должен иметь свой собственный метод fly.

// Создайте функцию-конструктор Animal, который принимает параметр name и устанавливает его как свойство объекта.
// Добавьте метод speak в Animal, который выводит в консоль звук, издаваемый животным (например, "Some generic sound").
// Создайте конструктор Bird, который принимает параметр name и вызывает конструктор Animal с тем же именем.
// Добавьте метод fly в Bird, который выводит в консоль сообщение о том, что птица летит (например, "Flying high!").
// Создайте объекты animal и bird с использованием соответствующих конструкторов и вызовите их методы speak и fly.
// Решите задачу, используя прототипное наследование, чтобы Bird наследовал от Animal.

// Должно быть такое поведение:
// const animal = new Animal("Дженни");
// const bird = new Bird("Воробей");
//
// animal.speak(); // "Some generic sound"
// bird.speak();   // "Some generic sound"
// bird.fly();     // "Flying high!"

function Animal(name) {
    this.name = name;

    this.speak = function () {
        console.log("Some generic sound");
    }
}

// либо
// Animal.prototype.speak = function () {
//     console.log("Some generic sound");
// }

function Bird(name) {
    Animal.call(this, name);

    this.fly = function () {
        console.log("Flying high!");
    }
}

//либо
// Bird.prototype.fly = function () {
//     console.log("Flying high!");
// }

Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

const animal = new Animal("Дженни");
const bird = new Bird("Воробей");

animal.speak(); // "Some generic sound"
bird.speak();   // "Some generic sound"
bird.fly();     // "Flying high!"
