function symbolEx(){
    let a = Symbol('a')         // symbol
    let b: symbol = Symbol('b') // symbol
    let c = a === b             // boolean
    let d = a + 'x'             // 에러
}

function uniqueSymbolEx(){
    const e = Symbol('e')
    const f: unique symbol = Symbol('f')
    let g: unique symbol = Symbol('f') // 에러
    let h = e === e // boolean
    let i = e === f // 에러 
}