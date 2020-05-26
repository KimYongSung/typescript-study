const 구조_기반_타입화 = () => {
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

    c = new Person('matt','smith')
}

const 구조_기반_타입화_에러케이스 = () => {

    let a: { b: number }

    a = {} // 에러

    a = {
        b: 1,
        c: 2 // 에러
    }
}

const 확실한_할당 = () => {
    let i: number
    let j = i * 3 // 에러

    let x
    let j = x * 3 // 에러
}

const 프로퍼티_케이스 = () => {
    let a: {
        b: number
        c?: string
        [key: number] : boolean
    }
}