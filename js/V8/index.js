// function foo() {
//     var a='燕杰'
//     var b=a
//     var c = { name:'燕杰'}
//     var d=c
//     console.log(a)
//     console.log(b)
// }
// foo()



function  foo(){
    var myName = '燕杰'
    let test1=1
    const test2=2
    var innerBar ={
        setName: function (newName){
            myName = newName
        },
        getName:function(){
            console.log(test1);
            return myName
        }
    }
    return innerBar
}
var bar =foo()
bar.setName('支总')
bar.getName()







// function bar() {
//     var a={name:'燕杰'}
//     var b=a
//     a.name='支总'
//     console.log(a) //支总
//     console.log(b) //支总
// }
// bar()


// var baz;
// baz =12;
// baz='abc'
// baz=true