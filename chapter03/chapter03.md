# 3장. 타입의 모든 것

## 타입(type) 이란?

값과 이 값으로 할 수 있는 일의 집합

> 값과 할 수 있는 일의 집합이란? 
> * Boolean 타입은 모든 참과 거짓을 수행할 수 있는 연산(||, &&, ! 등) 의 집합
> * number 타입은 모든 숫자와 숫자에 적용할 수 있는 연산(+,-,*,/,% 등)과 호출할 수 있는 메서드(.toFixed, toPrecision, .toString )의 집합
> * string 타입은 모든 문자열과 문자열에 수행할 수 있는 연산(+,||, && 등)과 호출할 수 있는 메서드(.concat, .toUppercase 등)의 집합

## 타입의 종류

### any

* 타입들의 대부.
* any로 뭐든지 할 수 있지만 왠만하면 사용하지 말자.
* 모든 연산과 메서드 호출이 가능해지며, 타입의 장점이 사라진다.
* 사용해야 한다면 명시적으로 any 타입임을 선언해야한다.

> TSC 플래그: noImplicitAny
> * 타입스크립트의 기본 설정은 any로 추론되는 값을 발견하여도 예외를 발생시키지 않는다.
> * 예외를 발생시키고 싶을 경우 tsconfig.js 파일에서 noImplicityAny 플래그를 활성화하거나 strict을 활성화 하자.

### unknown

* any와 같이 모든 값을 대표하지만, 타입을 검사해 정제하기 전까지 사용할 수 없도록 강제한다.
* java의 Object와 비슷한 느낌?

```typescript
let a: unknown = 30
let b = a
let c = a + 10 // 에러 TS2571: 객체의 타입이 'unknown' 임

if(typeof a === 'number'){
    let d = a + 10 // number
}
```

### boolean 

* 참과 거짓 두개의 값을 갖는다.
* java에서의 boolean과 의미는 동일하다.
* 타입 리터널을 통해서 `오직 하나의 값만을 나타내는 타입`으로 선언이 가능하다.

```typescript
let a = true            // boolean
var b = false           // boolean 
const c = true          // true
let d: boolean = true   // boolean
let e: true = true      // true
let f: true = false     // 에러
```

### number

* 모든 숫자의 집합이다.
  * 정수, 소수, 양수, 음수, Infinity, NaN

```typescript
let a = 1234                // number
var b = Infinity * 0.10     // number
const c = 5678              // 5678
let d = a < b               // boolean
let e: number = 100         // number  
let f: 26.218 = 26.218      // 26.218
let g: 26.218 = 10          // 에러
```  

* 긴 숫자의 경우 숫자 분리자를 이용할 수 있다.

```typescript
let oneMillion = 1_000_000 // 1000000 과 같음
let twoMillion = 2_000_000 // 2000000 과 같음
```

### bigint

* javascript와 typescript에 새로 추가된 타입
* number 타입보다 더 큰 수도 표현이 가능
* ES2020 스펙으로 지원하는 자바스크립트 엔진 여부 확인이 필요

```typescript
let a = 1234n           // bigint
const b = 5678n         // 5678n
var c = a + b           // bigint
let d = a < 1235        // boolean
let e = 88.5n           // 에러 
let f: bigint = 100n    // bigint
let g: 100n = 100n      // 100n
let h: bigint = 100     // 에러 
```

### string

* 모든 문자열의 집합
* 연결(+), 슬라이스(.slice) 등의 연산을 수행

```typescript
let a = 'hello'         // string
var b = 'billy'         // string
const c = '!'           // '!'
let d = `${a} ${b}${c}` // string
let e: string = 'zoom'  // string
let f: 'john' = 'john'  // 'john'
let g: 'john' = 'zoe'   // 에러
```

### symbol

* ES2015에 새로 추가된 기능.
* 객체와 맵에서 문자열 키를 대신하는 용도로 사용함.
* 사람들이 잘 알려진 키만 사용하도록 강제하여 실수를 방지 할 수 있다.

```typescript
let a = Symbol('a')         // symbol
let b: symbol = Symbol('b') // symbol
let c = a === b             // boolean
let d = a + 'x'             // 에러
```

* unique symbol을 명시적으로 정의할 수 있다.

```typescript
const e = Symbol('e')
const f: unique symbol = Symbol('f')
let g: unique symbol = Symbol('f') // 에러
let h = e === e // boolean
let i = e === f // 에러 
```

### 객체

* 타입스크립트의 객체 타입은 객체의 형태를 정의한다.

> 구조 기반 타입화
> * 객체의 이름에 상관없이 어떤 프로퍼티를 갖고 있는지를 따진다.
> * 일부 언어에서는 덕 타이핑이라고 한다.

```typescript
let c: {
    firstName: string
    lastName: string
} = {
    firstName: 'john',
    lastName: 'barrowman'
}

class Person{
    constructor(
        public firstName: string,
        public lastName: string
    ){}
}

c = new Person('matt','smith') // 구조 기반 타입화로 {} 객체와 class 모두 c에 참조 가능하다
```

```typescript
let a: { b: number }

a = {} // 에러 : b가 선언되지 않은 객체

a = { 
    b: 1,
    c: 2 // 에러 : c 가 추가된 객체
}

```

* 변수를 선언 후 값을 할당하도록 강제한다.

```typescript
let i: number
let j = i * 3 // 에러

let x
let j = x * 3 // 에러
```

* 객체 프로퍼티의 선언은 여러가지 방법으로 가능하다.

```typescript
let a: {
    b: number // a는 number 타입의 b 프로퍼티를 포함
    c?: string // a는 striing 타입의 c 프로퍼티를 포함할 수 있다
    [key: number] : boolean // a는 boolean 타입의 값을 갖는 number 타입의 프로퍼티를 여러 개 포함할 수 있다
}

a = {b: 1}
a = {b: 1, c: undefined}
a = {b: 1, c: 'd'}
a = {b: 1, 10: true}
a = {b: 1, 10: true, 20: false}
a = {10: true} // 에러
a = {b: 1, 33: 'red'} // 에러
```

### 타입 별칭

* 복잡한 타입을 반복하지 않게 해준다.
* 변수가 어떤 목적으로 사용되었는지 쉽게 이해할 수 있게 도와준다.
* 별칭을 추론하지 않으므로 반드시 별칭의 타입을 정의해야한다.

```typescript

type Age = number

type Person = {
    name: string
    age: Age
}

let age: Age = 55
let driver: Person = {
    name: 'James May',
    age: age
}

```

* 하나의 타입을 두번 정의 할 수 없다.

```typescript
type Color = 'red'
type Color = 'blud' // 에러
```

* let과 const 처럼 블록 영역에 적용된다.
  * 모든 블럭과 함수는 자신만의 영역을 가지므로 내부에 정의한 타입 별칭이 외부의 정의를 덮어쓴다.

```typescript
type Color = 'red'

let x = Math.random() < .5

if(x) {
    type Color = 'blue' // 타입을 덮어씀
    let b: Color = 'blue'
}else {
    let c: Color = 'red'
}
```

### 유니온과 인터센셕 타입

* A,B 라는 두 사물이 있을 때 이를 유니온(합집합)하면 둘을 합친 결과가 나오며 인터센셕(교집합) 하면 둘의 공통부분이 결과로 나온다.
* 타입은 집합과 비슷하므로 집합처럼 연산을 수행할 수 있는 유니온(|)과 인터섹션(&)을 제공한다. 

```typescript
type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}
type CatOrDogOrBoth = Cat | Dog
type CatAndDog = Cat & Dog

// Cat
let a: CatOrDogOrBoth = {
    name: 'Bonkers',
    purrs: true
}

// Dog
a = {
    name: 'Domino',
    barks: true,
    wags: true
}

// 둘다
a = {
    name: 'Donkers',
    barks: true,
    purrs: true,
    wags: true
}

// 인터섹션
let a: CatAndDog = {
        name: 'Donkers',
        barks: true,
        purrs: true,
        wags: true
    }
```

* 실전에서는 유니온을 자주 사용한다.

```typescript
const trueOrNull = (isTrue:boolean) : Returns => {
    if(isTrue){
        return 'true'
    }
    return null
}

const stringOrNumber = (a: string | null, b: number) => {
    return a || b
}

console.log(stringOrNumber('str', 0)) // str
console.log(stringOrNumber(null, 0)) // 0
```

### 배열

* 자바스크립트처럼 연결, 푸시, 검색, 슬라이스 등을 지원하는 특별한 객체다.

```typescript
let a = [1, 2, 3]        // number[]
let b = ['a','b']        // string[]
let c: string[] = ['a']  // string[]
let d = [1, 'a']         // (string | number)[]
const e = [2, 'b']       // (string | number)[]

let f = ['red']
f.push('blue')
f.push(true) // 에러

let g = []      // any[]
g.push(1)
g.push('red')

let h: number[] = []
h.push(1)
h.push('red') // 에러
```
* **배열은 동일한 타입으로 정의 후 사용**하자.
  * `동일한 타입이 아닐 경우 매번 검증 후 사용`해야 한다.

```typescript
let d = [1, 'a']
d.map(element => {
    if(typeof element === 'number'){ // 타입 검증
        return element * 3
    }
    return element.toUpperCase()
})
```

### 튜플

* 배열의 서브타입이다.
* 튜플은 선언시에 타입을 명시해야 한다.

