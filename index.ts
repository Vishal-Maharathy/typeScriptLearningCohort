
function fun1(a:number){
  console.log(a^100)
}
let interval:number=1000
function runAnotherFunction(fn:(a:number)=>void, interval:number){
  setTimeout(fn, interval)
}
runAnotherFunction(fun1, interval)