// 使用commonjs模块化规范
const {numFn1,numFn2,x} = require("./a.js")

console.log(x);

console.log(numFn1(10,20));

console.log(numFn2(10,10));
// 使用ES6模块化规范
import {name,age,height} from "./info.js"

console.log(name,age,height);