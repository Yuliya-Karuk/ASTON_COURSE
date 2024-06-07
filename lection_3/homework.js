//1
const user = {
    name: 'Bob',
    funcFunc() {
        return function() {
            console.log(this);
        }
    },
    funcArrow() {
        return () => {
            console.log(this);
        }
    },
    arrowFunc: () => {
        return function() {
            console.log(this);
        }
    },
    arrowArrow: () => {
        return () => {
            console.log(this);
        }
    },
};

user.funcFunc()();
//  undefined(global) - так как при втором вызове вызывается функция, у которой нет контекста
user.funcArrow()();
// user - так как вторая функция стрелочная, то при ее вызове - она будет брать контекст выше(у родителя) - а это user
user.arrowFunc()();
// undefined(global) - так как при втором вызове вызывается функция, у которой нет контекста
user.arrowArrow()();
// undefined(global) - у одной стрелочной родитель global, и поэтому второй ищет контекс и находит global

2
var poke1 = {name:'Pikachu'};
var poke2 = {name:'Chermander'};
var poke3 = {name:'Bulbasaur'};

var sayName = function(){ console.log(this.name) }

sayName.bind(poke1).bind(poke2).call(poke3);
// первым bind мы привязали poke1, второй bind не сработал, потому что нельзя привязать контекст во второй раз
// call вызывает функцию с уже привязанным контекстом poke1 - и поэтому poke3 ни на что не влияет


3
const obj = {
    firstName: 'Bill',
    lastName: 'Ivanov',

    showFirstName: function () {
        console.log(this.firstName);
    },

    showLastName: () => {
        console.log(this.lastName);
    }
}

obj.showFirstName();
// Bill - так как объектом перед точкой является obj, поэтому this ссылается на него.
obj.showLastName();
// undefined(global) - cтрелочная функция запомнила свой контекст в момент создания,
// то и при вызове она будет ссылаться именно на него.

obj.showFirstName.bind({ firstName: 'Boris' })();
// Boris - так как контекст перепривязался

obj.showFirstName.bind({ firstName: 'Boris' }).bind({ firstName: 'Oleg' })();
// Boris - так как контекст перепривязался, а второй раз привязать контекст с помощью bind нельзя

obj.showLastName.bind({ lastName: 'Boris' })();
// undefined(global) - cтрелочная функция запомнила свой контекст в момент создания, то и
// при вызове она будет ссылаться именно на него, a с помощью bind привязать контекст стрелочной функции нельзя

// 4

const user2 = {
    name: 'Mike',
    fn: function () {
        console.log(this.name)
    }
}

setTimeout(user2.fn, 1000)
// Что будет выведено в консоль после истечения таймаута и почему?
// undefined - потому что функция в setTimeout передается по ссылке и теряет контекст


// Сделайте так, чтоб починить и выводило "Mike"
setTimeout(user2.fn.bind(user2), 1000)
setTimeout(() => user2.fn(), 1000);
setTimeout(function() {
  user2.fn();
}, 1000);

// Подсказка - ответ найдете в 5 ссылке README

// 5
//Исправьте cтроку(***), чтобы всё работало (других строк изменять не надо, кроме password, чтобы проверить if else).
//
function askPassword(ok, fail) {
  let password = 'rockstar2'
  if (password == "rockstar") ok();
  else fail();
}

let user3 = {
  name: 'Вася',

  loginOk() {
    console.log(`${this.name} logged in`);
  },

  loginFail() {
    console.log(`${this.name} failed to log in`);
  },

};

askPassword(user3.loginOk.bind(user3), user3.loginFail.bind(user3));
// нужно привязать контекст так как при передаче по ссылен он теряется



