const 배열_선언 = () => {
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
}

const 유니온_타입_배열 = () =>{
    let d = [1, 'a']
    d.map(element => {
        if(typeof element === 'number'){
            return element * 3
        }
        return element.toUpperCase()
    })
}