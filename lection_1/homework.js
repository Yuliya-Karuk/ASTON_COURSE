// Неявное преобразование типов
console.log(NaN + 1 + null + 1);    //NaN
console.log(NaN + 1 + null + 1 + "");   //'NaN'
console.log("" + NaN + 1 + null + 1 + "");  //'NaN1null1'
console.log("number" + 15 + 3)  //'number153'
console.log(true + false)   //1
console.log([] + null + 1)  //'null1'
console.log("foo" + + "bar")    //'fooNaN'
console.log(!!"false" == !!"true")  // true == true // true
console.log(null == '') //false
console.log([] == ![]) //false

// Логические операторы
console.log("a" && "b" && "c")      //'c'
console.log("a" || "b" || "c")      //'a'
console.log("a" && "" && "c")       //''
console.log("a" && "" || "c")       //'c'
console.log("" ?? "a")              //''
console.log(null ?? "a")            //'a'

// Всплытие

var a = 1;

function foo() {
    console.log(a);
}

function bar() {
    var a = 2;
    foo();
}

bar();
// 1 -  так как foo определена в глобальной области видимости
////////////////////

function foo(a) {
    if (a > 0) {
        var a = a + 10 // что будет если поменять на let ?
        return a
    }
    return a
}
console.log(foo(15))
// 25
//ReferenceError: Cannot access 'a' before initialization - потому что не было инициализации
////////////////////

function giveMeX(showX) {
    if(showX) {
        var x = 5;
    }
    return x;
}

console.log(giveMeX(false)); // потому что объявление вар всплыло и она стала undefined
console.log(giveMeX(true)); // 5
