# 객체 리터럴

## 1. 객체란?

자바스크립트는 객체(object)기반의 프로그래밍 언어이며, 자바스크립트를 구성하는 거의"모든것"이 객체. 원시값을 제외한 나머지 값들(함수, 배열, 정규표현식 등)은 모두 객체.

원시타입은 단 하나의 값만을 나타내지만 객체 타입(object/reference type)은 다양한 타입의 값(원시값 또는 다른 객체)을 하나의 단위로 구성한 복합적인 자료구조(data structure)다. 또한 원시타입의 값, 즉 원시값은 변경 불가능한 값(immutable value)이지만 객체 타입의 값, 즉 객체는 변경 가능한 값(mutable value)이다.

객체는 0개 이상의 프로퍼티로 구성된 집합이며, 프로퍼티는 키(key)와 값(value)으로 구성.

![객체는 프로퍼티의 집합](/Users/kimtaeyoon/Documents/dev/TIL/javascript/image/object.png)

자바스크립트에서 사용할 수 있는 모든 값은 프로퍼티 값이 될 수 있음. 자바스크립트의 함수는 일급 객체이므로 값으로 취급할 수 있음. 따라서 함수도 프로퍼티 값으로 사용할 수 있음. 프로퍼티 값이 할수일 경우 일반 함수와 구분하기 위해 메서드(method)라 부름.

![객체의 프로퍼티와 메서드](/Users/kimtaeyoon/Documents/dev/TIL/javascript/image/method.png)

객체는 프로퍼티와 메서드로 구성된 집합체이다.

- 프로퍼티: 객체의 상태를 나타내는 값(data)
- 메서드: 프로퍼티(상태 데이터)를 참조하고 조작할 수 있는 동작(behavior)

객체는 객체의 상태를 나타내는 값(프로퍼티)과 프로퍼티를 참조하고 조작할 수 있는 동작(메서드)을 모두 포함할 수 있기 때문에 상태와 동작을 하나의 단위로 구조화할 수 있어 유용.

```
객체와 함수
자바스크립트의 객체는 함수와 밀접한 관계를 가진다. 함수로 객체를 생성하기도 하며 함수 자체가 객체이기도 하다. 자바스크립트에서 함수와 객체는 분리해서 생각할 수 없는 개념이다. 즉 객체를 이해해야 함수를 제대로 이해할 수 있고, 반대로 함수를 이해해야 객체를 정확히 이해할 수 있음.
따라서 객체와 함수를 분리해서 설명하는 것은 옳지 않다. 프로그래밍 언어 자체에는 순서가 없고 서로 물고 물리는 순환 구조가 있어서 잘 이해되지 않는 개념이 나오면 멈추지 말고 일단은 다음으로 넘어가는 것도 한가지 방법.
```

객체들의 집합으로 프로그램을 표현하려는 프로그래밍 패러다임을 객체지향 프로그래밍이라함.

## 2. 객체 리터럴에 의한 객체 생성

C++나 자바와 같은 클래스 기반 객체지향 언어는 클래스를 사전에 정의하고 필요한 시점에 new 연산자와 함께 생성자(constructor)를 호출하여 인스턴스를 생성하는 방식으로 객체를 생성.

```
인스턴스(instance)
인스턴스란 클래스에 의해 생성되어 메모리에 저장된 실체를 말함. 객체지향 프로그래밍에서 객체는 클래스오 인스턴스를 포함한 개념이다. 클래스는 인스턴스를 생성하기 위한 템플릿의 역할을 함. 인스턴스는 객체가 메모리에 저장되어 실제로 존재하는 것에 초점을 맞춘 용어.
```

자바스크립트는 프로토타입 기반 객체지향 언어로서 클래스 기반 객체지향 언어와는 달리 다양한 객체 생성 방법을 지원.

- 객체 리터럴
- Object 생성자 함수
- 생성자 함수
- Object.create 메서드
- 클래스

객체 생성 방법 중에서 가장 일반적이고 간단한 방법은 객체 리터럴을 사용하는 방법임. 리터럴은 사람이 이해할 수 있는 문자 또는 약속된 기호를 사용하여 값을 생성하는 표기법이지만 객체 리터럴은 객체를 생성하기 위한 표기법이다.

객체 리터럴은 중괄호({...})내에 0개 이상의 프로퍼티를 정의. 변수에 할당이 이루어지는 시점에 자바스크립트 엔진은 객체 리터럴을 해석해 객체를 생성.

```javascript
var person = {
  name: 'Lee',
  sayHello: function () {
    console.log(`Hello! My name is ${this.name}.`);
  }
};

console.log(typeof person); // object
console.log(person); // {name: "Lee", sayHello: ƒ}

```

만약 중괄호 내에 프로퍼티를 정의하지 않으면 빈 객체가 생성.

```javascript
var empty = {}; // 빈 객체
console.log(typeof empty); // object
```

객체 리터럴의 중괄호는 코드 블록을 의미하지 않는데 주의. 코드 블록의 닫는 중괄호 뒤에는 세미콜론을 붙이지 않지만 객체리터럴은 값으로 평가되는 표현식이 때문에 닫는 중괄호 뒤에는 세미콜론을 붙임.

객체 리터럴은 자바스크립트의 유연함과 강력함을 대표하는 객체 생성 방식임. 객체를 생성하기 위해 클래스를 먼저 정의하고 new연산자와 함께 생성자를 호출할 필요가 없다. 숫자 값이나 문자열을 만드는 것과 유사하게 리터럴로 객체를 생성. 객체 리터럴에 프로퍼티를 포함시켜 객체를 생성함과 동시에 프로퍼티를 만들 수도 있고, 객체를 생성한 이후에 프로퍼티를 동적으로 추가할 수 도 있음.

객체 리터럴 외의 객체 생성 방식은 모두 함수를 사용해 객체를 생성함.

## 3. 프로퍼티

객체는 프로퍼티(property)들의 집합이며 프로퍼티는 키(key)와 값(value)으로 구성됨. 프로퍼티를 나열할 때는 쉼표로 구분함. 일반적으로 마지막 프로퍼티 뒤에는 쉼표를 사용하지 않으나 사용해도 좋음.

```javascript
var person = {
  // 프로퍼티 키는 name, 프로퍼티 값은 'Lee'
  name: 'Lee',
  // 프로퍼티 키는 age, 프로퍼티 값은 20
  age: 20
};
```

프로퍼티 키와 프로퍼티 값으로 사용할 수 있는 값.

- 프로퍼티 키 : 빈 문자열을 포함하는 모든 문자열 또는 심벌 값
- 프로퍼티 값 : 자바스크립트에서 사용할 수 있는 모든 값

프로퍼티 키는 프로퍼티 값에 접근할 수 있는 이름으로서 식별자 역할을 하지만 반드시 식별자 네이밍 규칙을 따라야 하는건 아니지만 식별자 네이밍 규칙을 준수하는 프로퍼티 키와 그렇지 않은 프로퍼티 키는 미묘한 차이가 있음.

심벌 값도 프로퍼티 키로 사용할 수 있지만 일반적으로 문자열을 사용함. 이때 프로퍼티 키는 문자열이므로 따옴표('...'또는 "...")로 묶어야 하지만 식별자 네이밍 규칙을 준수하는 이름 즉, 자바스크립트에서 사용 가능한 유효한 이름인 경우 따옴표를 생략할 수 있음. 반대로 말하면 식별자 네이밍 규칙을 따르지 않는 이름에는 반드시 따옴표를 사용해야 함.

```javascript
var person = {
  firstName: 'Ung-mo', // 식별자 네이밍 규칙을 준수하는 프로퍼티 키
  'last-name': 'Lee'   // 식별자 네이밍 규칙을 준수하지 않는 프로퍼티 키
};

console.log(person); // {firstName: "Ung-mo", last-name: "Lee"}
```

프로퍼티 키로 사용한 firstName은 식별자 네이밍 규칙을 준수해서 따옴표를 생략함. 하지만 last-name은 식별자 네이밍 규칙을 준수하지 않으므로 따옴표를 생략할 수 없음. 자바스크립트 엔진은 따옴표를 생략한 last-name을 - 연산자가 있는 표현식으로 해석함.

```javascript
var person = {
  firstName: 'Ung-mo',
  last-name: 'Lee' // SyntaxError: Unexpected token -
};
```

문자열 또는 문자열로 평가할 수 있는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있음. 이런 경우에는 프로퍼티 키로 사용할 표현식을 대괄호([...])로 묶어야함.

```javascript
var obj = {};
var key = 'hello';

// ES5: 프로퍼티 키 동적 생성
obj[key] = 'world';
// ES6: 계산된 프로퍼티 이름
// var obj = { [key]: 'world' };

console.log(obj); // {hello: "world"}
```

빈 문자열을 프로퍼티 키로 사용해도 에러가 발생하지는 않음. 하지만 키로서의 의미를 갖지 못하므로 권장하지 않음.

```javascript
var foo = {
  '': ''  // 빈 문자열도 프로퍼티 키로 사용할 수 있다.
};

console.log(foo); // {"": ""}
```

프로퍼티 키에 문자열이나 심벌 값 이외의 값을 사용하면 암묵적 타입 변환을 통해 문자열이 됨. 예를 들어, 프로퍼티 키로 숫자 리터럴을 사용하면 따옴표는 붙지 않지만 내부적으로는 문자열로 반환함.

```javascript
var foo = {
  0: 1,
  1: 2,
  2: 3
};

console.log(foo); // {0: 1, 1: 2, 2: 3}
```

var, function과 같은 예약어를 프로퍼티 키로 사용해도 에러가 발생하지 않지만 예상지 못한 에러가 발생할 여지가 있으므로 권장하지 않음

```javascript
var foo = {
  var: '',
  function: ''
};

console.log(foo); // {var: "", function: ""}
```

이미 존재하는 프로퍼티 키를 중복 선언하면 나중에 선언한 프로퍼티가 먼저 선언한 프로퍼티를 덮어씀. 이때 에러가 발생하지 않는다는 점에 주의 필요.

```javascript
var foo = {
  name: 'Lee',
  name: 'Kim'
};

console.log(foo); // {name: "Kim"}
```

## 4. 메서드

자바스크립트의 함수는 객체(일급 객체(first-class object))다. 따라서 함수는 값으로 취급할 수 있기 때문에 프로퍼티 값으로 사용할 수 있음.

프로퍼티 값이 함수일 경우 일반 함수와 구분하기 위해 메서드(method)라 부름. 즉 메서드는 객체에 묶여있는 함수를 의미함.

```javascript
var circle = {
  radius: 5, // ← 프로퍼티

  // 원의 지름
  getDiameter: function () { // ← 메서드
    return 2 * this.radius; // this는 circle을 가리킨다.
  }
};

console.log(circle.getDiameter()); // 10
```

메서드 내부에서 사용한 this 키워드는 객체 자신(위 예제에서는 circle 객체)을 가리키는 참조 변수임.

## 5. 프로퍼티 접근

프로퍼티에 접근하는 방법은 두가지.

- 마침표 프로퍼티 접근 연산자(.)를 사용하는 마침표 표기법(dot notation)
- 대괄호 프로퍼티 접근 연산자([…])를 사용하는 대괄호 표기법(bracket notation)

프로퍼티 키가 식별자 네이밍 규칙을 준수하는 이름, 즉 자바스크립트에서 사용 가능한 유효한 이름이면 마침표 표기법과 대괄호 표기법을 모두 사용할 수 있음.

마침표 프로퍼티 접근 연산자 또는 대괄호 프로퍼티 접근 연산자의 좌측에는 객체로 평가되는 표현식을 기술함. 마침표 프로퍼티 접근 연산자의 우측 또는 대괄호 프로퍼티 접근 연산자의 내부에는 프로퍼티 키를 저장함.

```javascript
var person = {
  name: 'Lee'
};

// 마침표 표기법에 의한 프로퍼티 접근
console.log(person.name); // Lee

// 대괄호 표기법에 의한 프로퍼티 접근
console.log(person['name']); // Lee
```

대괄호 표기법을 사용하는 경우 **대괄호 프로퍼티 접근 연산자 내부에 지정하는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이어야 함.** 대괄호 프로퍼티 접근 연산자 내에 따옴표로 감싸지 않은 이름을 프로퍼티 키로 사용하면 자바스크립트 엔진은 식별자로 해석함.

```javascript
var person = {
  name: 'Lee'
};

console.log(person[name]); // ReferenceError: name is not defined
```

위 예제에서 ReferenceError가 발생한 이유는 대괄호 연산자 내의 따옴표로 감싸지 않은 이름, 즉 식별자 name을 평가하기 위해 선언된 name을 찾았지만 찾지 못했기 때문.

객체에 존재하지 않는 프로퍼티에 접근하면 undefined를 반환함. 이때 ReferenceError가 발생하지 않는데 주의.

```javascript
var person = {
  name: 'Lee'
};

console.log(person.age); // undefined
```

프로퍼티 키가 식별자 네이밍 규칙을 준수하지 않는 이름, 즉 자바스크립트에서 사용 가능한 유효한 이름이 아니면 반드시 대괄호 표기법을 사용해야 함. 단, 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있음. 그 외의 경우 대괄호 내에 들어가는 프로퍼티 키는 반드시 따옴표로 감싼 문자열이여야 한다.

```javascript
var person = {
  'last-name': 'Lee',
  1: 10
};

person.'last-name';  // -> SyntaxError: Unexpected string
person.last-name;    // -> 브라우저 환경: NaN
                     // -> Node.js 환경: ReferenceError: name is not defined
person[last-name];   // -> ReferenceError: last is not defined
person['last-name']; // -> Lee

// 프로퍼티 키가 숫자로 이뤄진 문자열인 경우 따옴표를 생략할 수 있다.
person.1;     // -> SyntaxError: Unexpected number
person.'1';   // -> SyntaxError: Unexpected string
person[1];    // -> 10 : person[1] -> person['1']
person['1'];  // -> 10
```

 위 예제에서 `person.last-name`의 실행 결과는 Node.js 환경에서 “ReferenceError: name is not defined”이고 브라우저 환경에서는 NaN이다. 

`person.last-name`을 실행할 때 자바스크립트 엔진은 먼저 person.last를 평가한다. person 객체에는 프로퍼티 키가 last인 프로퍼티가 없기 때문에 person.last는 undefined로 평가된다. 따라서 `person.last-name`은 `undefined – name`과 같다. 다음으로 자바스크립트 엔진은 name이라는 식별자를 찾는다. 이때 name은 프로퍼티 키가 아니라 식별자로 해석되는 것에 주의하자.

Node.js 환경에서는 현재 어디에도 name이라는 식별자(변수, 함수 등의 이름) 선언이 없으므로 “ReferenceError: name is not defined”이라는 에러가 발생한다. 그런데 브라우저 환경에서는 name이라는 전역 변수(전역 객체 window의 프로퍼티)가 암묵적으로 존재한다. 전역 변수 name은 창(window)의 이름을 가리키며, 기본값은 빈 문자열이다. 따라서 `person.last-name`은 `undefined – ''`과 같으므로 NaN이 된다. 

## 6. 프로퍼티 값 갱신

이미 존재하는 프로퍼티에 값을 할당하면 프로퍼티 값이 갱신함.

```javascript
var person = {
  name: 'Lee'
};

// person 객체에 name 프로퍼티가 존재하므로 name 프로퍼티의 값이 갱신된다.
person.name = 'Kim';

console.log(person);  // {name: "Kim"}
```

## 7. 프로퍼티 동적 생성

존재하지 않는 프로퍼티에 값을 할당하면 프로퍼티가 동적으로 생성되어 추가되고 프로퍼티 값이 할당됨.

```javascript
var person = {
  name: 'Lee'
};

// person 객체에는 age 프로퍼티가 존재하지 않는다.
// 따라서 person 객체에 age 프로퍼티가 동적으로 생성되고 값이 할당된다.
person.age = 20;

console.log(person); // {name: "Lee", age: 20}
```

## 8. 프로퍼티 삭제

delete 연산자는 객체의 프로퍼티를 삭제함. 이때 delete 연산자의 피연산자는 프로퍼티 값에 접근할 수 있는 표현식이어야 함. 만약 존재하지 않는 프로퍼티를 삭제하면 아무런 에러없이 무시됨.

```javascript
var person = {
  name: 'Lee'
};

// 프로퍼티 동적 생성
person.age = 20;

// person 객체에 age 프로퍼티가 존재한다.
// 따라서 delete 연산자로 age 프로퍼티를 삭제할 수 있다.
delete person.age;

// person 객체에 address 프로퍼티가 존재하지 않는다.
// 따라서 delete 연산자로 address 프로퍼티를 삭제할 수 없다. 이때 에러가 발생하지 않는다.
delete person.address;

console.log(person); // {name: "Lee"}
```

## 9. ES6에서 추가된 객체 리터럴의 확장 기능

ES6에서는 더욱 간편하고 표현력 있는 객체 리터럴의 확장 기능을 제공

### 9-1 프로퍼티 축약 표현

객체 리터럴의 프로퍼티는 프로퍼티 키와 프로퍼티 값으로 구성. 프로퍼티 값은 변수에 할당된 값, 즉 식별자 표현식일 수도 있다.

```javascript
// ES5
var x = 1, y = 2;

var obj = {
  x: x,
  y: y
};

console.log(obj); // {x: 1, y: 2}
```

ES6에서는 프로퍼티 값으로 변수를 사용하는 경우 변수 이름과 프로퍼티 키가 동일한 이름일 때, 프로퍼티 키를 생략(property shorthand)할 수 있다. 이때 프로퍼티 키는 변수 이름으로 자동 생성됨.

```javascript
// ES6
let x = 1, y = 2;

// 프로퍼티 축약 표현
const obj = { x, y };

console.log(obj); // {x: 1, y: 2}
```

### 9-2 계산된 프로퍼티 이름

문자열 또는 문자열로 타입 변환할 수 있는 값으로 평가되는 표현식을 사용해 프로퍼티 키를 동적으로 생성할 수도 있다. 단 프로퍼티 키로 사용할 표현식을 대괄호([...])로 묶어야 한다. 이를 계산된 프로퍼티 이름(computed property name)이라 함.

ES5에서 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성하려면 객체 리터럴 외부에서 대괄호([...]) 표기법을 사용해야 함.

```javascript
// ES5
var prefix = 'prop';
var i = 0;

var obj = {};

// 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;
obj[prefix + '-' + ++i] = i;

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```

ES6에서는 객체 리터럴 내부에서도 계산된 프로퍼티 이름으로 프로퍼티 키를 동적 생성할 수 있음.

```javascript
// ES6
const prefix = 'prop';
let i = 0;

// 객체 리터럴 내부에서 계산된 프로퍼티 이름으로 프로퍼티 키 동적 생성
const obj = {
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i,
  [`${prefix}-${++i}`]: i
};

console.log(obj); // {prop-1: 1, prop-2: 2, prop-3: 3}
```

### 9-3 메서드 축약 표현

ES5에서 메서드를 정의하려면 프로퍼티 값으로 함수를 할당함.

```javascript
// ES5
var obj = {
  name: 'Lee',
  sayHi: function() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! Lee
```

ES6에서는 메서드를 정의할 때, function키워드를 생략한 축약 표현을 사용할 수 있음.

```javascript
// ES6
const obj = {
  name: 'Lee',
  // 메서드 축약 표현
  sayHi() {
    console.log('Hi! ' + this.name);
  }
};

obj.sayHi(); // Hi! Lee
```

ES6의 메서드 축약 표현으로 정의한 메서드는 프로퍼티에 할당한 함수와 다르게 작동함.

