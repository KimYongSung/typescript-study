function bigintEx(){
    let a = 1234n           // bigint
    const b = 5678n         // 5678n
    var c = a + b           // bigint
    let d = a < 1235        // boolean
    let e = 88.5n           // 에러 A bigint literal must be an integer.ts(1353)
    let f: bigint = 100n    // bigint    
    let g: 100n = 100n      // 100n
    let h: bigint = 100     // 에러 '100' 형식은 'bigint' 형식에 할당할 수 없습니다.ts(2322)
}