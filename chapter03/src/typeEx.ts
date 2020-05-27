const 타입_별칭 = ()=>{

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
}

const 타입_별칭_중복_정의 = () => {
    type Color = 'red'
    type Color = 'blud' // 에러
}

const 타입_덮어쓰기 = () => {
    type Color = 'red'

    let x = Math.random() < .5

    if(x) {
        type Color = 'blue' // 타입을 덮어씀
        let b: Color = 'blue'
    }else {
        let c: Color = 'red'
    }
}

type Cat = {name: string, purrs: boolean}
type Dog = {name: string, barks: boolean, wags: boolean}

const 유니온 = () => {

    type CatOrDogOrBoth = Cat | Dog // 유니온
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
}

const 인터섹션 = () => {

    type CatAndDog = Cat & Dog // 인터섹션

    let a: CatAndDog = {
        name: 'Donkers',
        barks: true,
        purrs: true,
        wags: true
    }
}

const 유니온_실전_예제 = () => {

    type Returns = string | null

    const trueOrNull = (isTrue:boolean) : Returns => {
        if(isTrue){
            return 'true'
        }
        return null
    }

    const stringOrNumber = (a: string | null, b: number) => {
        return a || b
    }

    console.log(stringOrNumber('str', 0))
    console.log(stringOrNumber(null, 0))
}