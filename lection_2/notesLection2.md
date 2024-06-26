### Function
Function Declarations: объявляется с  ключевое слово function, за которым следует имя функции. Всплывает в начало своей области видимости. Это означает, что вы можете вызывать функцию до её фактического объявления.

Function Expressions: создаётся путём присвоения анонимной функции переменной. Функциональные выражения не поднимаются. Вы должны объявить переменную перед использованием функции.

Arrow Functions: представляют сокращенный синтаксис для создания функций. Не имеют своего собственного контекста this и собственного объекта arguments (он берется из окружающей области видимости).

### Scope
Functional Scope - Функциональная область действия относится к переменным, объявленным внутри функции. Они локальны для этой функции и недоступны за ее пределами.
Global scope. - Глобальный охват охватывает всю программу. Переменные, объявленные вне любой функции, имеют глобальную область видимости и доступны из любого места кода.
Вложенные области возникают, когда функции или блоки создаются внутри других функций или блоков. Переменные, объявленные во внешней области, доступны во внутренних областях, но не наоборот.

Параметры функции в JavaScript — это переменные, указанные в скобках при объявлении функции. Они представляют данные, которые функция ожидает получить при вызове.
Когда функция создается – мы создаем ее с параметрами, а вызываем передавая аргументы.

Примитивы передаются по значению - его значение копируется в аргумент.
Объекты передаются по ссылке - При использовании ссылочного типа данных копируется ссылка. Все изменения в объекте, который был передан в качестве аргумента, будут видны всем, кто владеет ссылкой.

Для передачи произвольного числа параметров в функцию можно спользовать объект arguments - встроенный объект, который предоставляет доступ к аргументам, переданным в функцию. (не массив) или  рест-параметры (синтаксис ...args).

### LexicalEnvironment.
LexicalEnvironment. - внутренний (скрытый) объект, которая хранит все переменные и объявления функций. Она позволяет интерпретатору определить, какие переменные или функции доступны в разных областях видимости в вашей программе. Cостоит из  Environment Record – объект, в котором как свойства хранятся все локальные переменные (+this), Ссылка на внешнее лексическое окружение –то, которое соответствует коду снаружи от текучих {} Это своего рода хранилище переменных, функций, классов, объявленных в области видимости данного контекста.
Механизм обхода (lexical environment traversal) в данном контексте означает, что при запросе переменной или функции интерпретатор начинает поиск в текущей лексической среде. Если не находит там, он продолжает искать в каждой родительской лексической среде, пока не найдет переменную или функцию или не достигнет глобальной области видимости.
Контекст выполнения – специальная внутренняя структура данных, которая содержит информацию о вызове функции - конкретное место в коде, на котором находится интерпретатор, локальные переменные функции, значение this, и прочую служебную информацию. Контекст выполнения говорит нам, какая лексическая среда работает в данный момент. При вызове функции создается новый контекст выполнения, связанный с этой функцией

### Замыкание
Замыкание – это функция, которая запоминает свои внешние переменные и может получить к ним доступ, с помощью скрытого свойства [[Environment]], которое хранит ссылку на лексическое окружение, в котором была создана функция. Сочетание функции и лексического окружения в котором она была определена, позволяют функциям “запоминать” свою лексическую среду даже после завершения выполнения. Это позволяет создавать функции, которые могут сохранять состояние между вызовами. Связь сущности с порождающими контекстами через цепь ЛО или SсopeChain.

### Differences between scope and context.
Область видимости определяет, где переменные могут быть доступны.Контекст выполнения определяет, какая лексическая среда (где был написан код) работает в данный момент.

### This
This – текущий контекст выполнения внутри функции или метода (обычно объект), его значение зависит от того, как вызывается функция или метод.
Common issues with this:
Losing this: When this is used inside nested functions or callbacks, it might lose its intended context.
Arrow Functions: Arrow functions don’t have their own this context; they inherit it from the surrounding scope.
Event Handlers: Когда функция используется как обработчик событий, this присваивается элементу с которого начинается событие; Когда код вызван из инлайнового обработчика, this указывает на DOM-элемент, в котором расположен код события
Method Invocation: When calling a method, this refers to the object on which the method was invoked.Constructor Functions: In constructor functions, this refers to the newly created instance.
Explicit Binding: We can explicitly set this using methods like call, apply, or bind.Replacing this Value to change the value of this explicitly Use call or apply to invoke a function/method with a specific this context.
Binding this: The bind method creates a new function with a fixed this value.
Binding Twice: You can’t bind a function twice directly. However, you can chain bind calls:const boundTwice = greet.bind(person).bind({ name: 'Eve' });
В глобальном контексте выполнения (за пределами каких-либо функций) this ссылается на глобальный объект вне зависимости от режима (строгий или нестрогий).В пределах функции значение this зависит от того, каким образом вызвана функция. В строгом режиме, если значение this не установлено в контексте выполнения, оно остаётся undefined
В НЕ строгом по умолчанию будет использоваться объект global, которым в браузере является windowВызов f.bind(someObject) создаёт новую функцию с таким же телом и окружением, что и у f, но значение this указывает на первый аргумент bind, независимо от того, как вызывается функция.

### Spread-оператор
Если ... встретился в вызове функции или где-либо ещё, то это «оператор расширения». Он извлекает элементы из массива. С помощью оператора расширения можно вставить массив в функцию, которая по умолчанию работает с обычным списком аргументов.
### Параметры rest (...)
Если ... располагается в конце списка параметров функции, то это «остаточные параметры». Остаточные параметры используются, чтобы создавать новые функции с неопределённым числом аргументов. Собирает остальные неуказанные аргументы и делает из них массив.
function printArgs(...args) {console.log(args);}

Конкатенация массивов с помощью spread-оператора:
const combinedArray = [...arr1, ...arr2];
Деструктуризация позволяет извлекать значения из объектов или массивов и присваивать их переменным, «распаковать» массивы или объекты в несколько переменныхconst [firstName, surname] = "Ilya Kantor".split(' ');.const person = { name: "Иван", age: 30 }; const { name, age } = person; присвоить свойство объекта переменной с другим названием let {width: w, height: h, title} = options;for (let [key, value] of Object.entries(user)) {//..}

### Цикл for…of
Цикл for ( variable of iterable) {//...} используется для перебора элементов массивов, строк и других итерируемых объектов; variable хранит значение всех свойств итерируемого объекта на каждой итерации. Позволяет перебирать элементы последовательно без необходимости работы с индексами.

### Методы объектов
Object.keys – возвращает массив ключей.
Object.values - возвращает массив значений.
Object.entries(obj) – возвращает массив пар [ключ, значение].
Object.keys/values/entries игнорируют символьные свойства использующие Symbol(...) в качестве ключей. (Так же, как и цикл for..in)
Object.getOwnPropertySymbols, возвращающий массив только символьных ключей. Reflect.ownKeys(obj), который возвращает все ключи

###  Статические методы Object:
Object.create(proto, [propertiesObject]) создает новый объект с указанным прототипом proto и необязательными свойствами propertiesObject.Object.assign(target, ...sources) копирует свойства из одного или нескольких объектов в целевой объект target.Object.freeze(obj) замораживает объект, предотвращая изменение его свойств.Object.seal(obj) запечатывает объект, позволяя изменять существующие свойства, но не добавлять новые.Object.is(obj1, obj2) сравнивает объекты на равенство.

Флаги свойств и дескрипторы Помимо значения value, свойства объекта имеют три специальных атрибута - 
Флаги свойств, такие как writable, enumerable, и configurable, позволяют настраивать поведение свойств.
Дескрипторы свойств, получаемые с помощью Object.getOwnPropertyDescriptor(obj, prop), содержат информацию о свойствах. 

Object.defineProperties(obj, descriptors), определять множество свойств сразу.
let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

Создание перебираемых объектов и использование Symbol.iterator:Symbol.iterator - это встроенный символ в JavaScript, используемый для определения итератора объекта.Если объект имеет метод с ключом Symbol.iterator, который возвращает функцию-итератор, то этот объект считается итерируемым.
Метод-итератор должен возвращать объект с методом next(), который в свою очередь должен возвращать объект с двумя свойствами: value (значение текущего элемента) и done (булево значение, указывающее, завершен ли итератор).

### static class methods
Обычно статические методы используются для реализации функций, которые будут принадлежать классу в целом, но не какому-либо его конкретному объекту. Значением this при вызове Obj.staticMethod() является сам конструктор класса Obj.Статические методы недоступны для отдельных объектов, могут вызываться для классов, но не для отдельных объектов.
Статические методы могут вызываться для классов, но не для отдельных объектов.

### Working with Object computed
Объекты могут быть инициализированы с new Object(), Object.create() и литеральной (инициирующей) нотации - список ноль или более пар имён свойств и значений, заключённых в фигурные скобки ({}).Есть два способа доступа к свойствам: точечная и скобочная записи. Для создания вычисляемых свойств используется скобочная запись - квадратные скобки [ ]В записи object[property_name], property_name - это выражение, вычисляющееся в строку или символ. Это может быть любая строка, не обязательно действительный идентификатор, например '1foo', '!bar!' или даже ' ' (пробел).

### Iterating through Object keys.
это процесс перебора всех ключей свойств объекта с целью получения доступа к их значениям или выполнения определенных операций. Цикл for...in: позволяет перебирать все перечислимые свойства объекта, включая его прототипные свойстваОбход перечисляемых свойств объекта осуществляется в произвольном порядке, может отличаться в разных браузерах. и между различными средами выполнения JavaScript.Включает в себя свойства, найденные в цепочке прототипов (прототипы объекта и их прототипы и так далее). Не рекомендуется использовать для обхода массивов, так как может включать индексы и другие свойства из прототипов.

for...of: Выполняет обход итерируемых объектов, таких как массивы, Map, Set, строки и другие.Не включает в себя свойства из цепочки прототипов. Однако не для обхода свойств в обычных объектах.

Object.keys() возвращает массив, содержащий имена всех собственных перечислимых свойств объекта, итерировать только по собственным свойствам объекта, без учета его прототипа.

Object.getOwnPropertyNames():возвращает массив, содержащий имена всех собственных свойств объекта, включая неперечислимые свойства.

### Copying arrays:
1.slice(),
 2.concat() const newArray = [].concat(originalArray);
 3.(...) спред оператор сonst newArray = [...originalArray];

### modifying arrays
Позволяет изменить его элементы, добавить новые или удалитьconst newArray = [...array, 5]; 
// Добавляет элемент в конец массива с помощью оператора распространенияУдаление элементов из массива можно выполнить с помощью методов pop(), shift(). Изменение элементов массива можно выполнить присвоением нового значения по индексу.

## Flattening
это процесс преобразования массива, содержащего вложенные массивы, в одномерный массив, объединяя все элементы вложенных массивов. var newArray = arr.flat(depth); - возвращает новый массив, в котором все элементы вложенных подмассивов были рекурсивно "подняты" на указанный уровень depth.const flattenedArray = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);

z