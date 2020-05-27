const 명시적인_typeSystem = () => {
    let a: number = 1
    let b: string = 'hello'
    let c: boolean[] = [true, false]
}

const 자동으로_추론하는_typeSystem = () => {
    let a = 1
    let b = 'hello'
    let c = [true, false]
}

const 최종_타입_할당 = () => {
    const buildArray = () => {
        let a = []
        a.push(1)
        a.push('x')
        return a
    }

    let myArray = buildArray();
    myArray.push(true)
}