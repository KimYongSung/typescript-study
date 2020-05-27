
const 챕터2_예제 = () => {

    function recursive(){
        console.log('Hello TypeScript!')
    
        let a = 1+2
        let b = a + 3
        let c = {
            apple: a,
            banana: b
        }
        let d = c.apple * 4
    
        recursive();
    }
    
    recursive();

}