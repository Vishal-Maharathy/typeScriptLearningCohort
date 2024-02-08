"use strict";
function fun1(a) {
    console.log(a ^ 100);
}
let interval = 1000;
function runAnotherFunction(fn, interval) {
    setTimeout(fn, interval);
}
runAnotherFunction(fun1, interval);
