
function test (){
    var msg = 'Hello i am biginer programmer'
        function second(){
            console.log(msg)
        }
        second ()

}
test()


//  closure is when a function is able to remember and access 
//  it's lexical scope even when that function executing outside it's lexical scope
function test (){
    var msg = 'Hello i am biginer programmer'
    return function(){
        console.log(msg)
    }
}
var result =test()
result ()
function main (input){
    console.log(input)
}

function maltiply(n){
    return n * 5
}

function sum (a,b){
    return a + b
}

main(maltiply(sum(10,20)))
