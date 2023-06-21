// console.log(Math.max())
// console.log(5<6<7)
// console.log(7>6>5)
// let x=1;
// x=x++
// console.log(x)
// console.log(typeof [])
// console.log("hlo",[]+[])
// console.log(NaN===NaN)

// let f=new String("foo")
// let c=new String("foo")
// // console.log(f==="foo")
// console.log(c===f)
// let x=10;
// let y=(x++,x+5)
// console.log(x)
// console.log(y)

// function foo(){
//     console.log(this.a)
// }
// var a=10
// var obj={a:20,foo:foo}

// obj.foo()

// var a=10
// function loo(){
//     var a=20
//     foo()
// }
// function foo(){
//     console.log("hlo",this.a)
// }
// loo()

// var obj1={
//     a:10,
//     foo:function(){
//         console.log(this.a)
//     }
// }
// var obj2={a:20}
// obj1.foo.call(obj2)

// var a=10;
// var obj={
//     a:20,
//     foo:function(){
//         console.log(this.a)
//     }
// }
// var k=obj.foo
// k()


// function k(){
//     console.log(this.a)
// }
// var obj1={a:10}
// var obj2={a:20}
// k.call(obj1)
// k.call(obj2)

// var obj = {
//   prop: 42,
//   fun: function () {
//     console.log(this.prop);
//   },
// };
// var foo = obj.fun;
// var prop = 20;
// foo();

//closures in js important question
// function calculator(intialvalue=0){
//     var val=intialvalue
//     function add(value){
// val=value+val
// return val
//     }
//     return {add}
// }
// var p=calculator()
// console.log(p.add(10))
// console.log(p.add(10))

//closures with settimeout
// let arr=[1,2,3,4,5]
// for(var i=0;i<arr.length;i++){
//     setTimeout(() => {
//         console.log(i,arr[i])
//     }, i*1000);
// }

//call,apply,bind with the help of this keyword in js

//1. METHOD
//  let obj1 = {
//   name: "anmol",
//   profeesion: "sofwware developer",
//   palace: "Delhi",
//   details: function () {
//     console.log(this.name);
//   },
// };
// let obj2 = {
//   name: "tanya",
//   profeesion: "Teacher",
//   palace: "Delhi",
// };

// obj1.details.call(obj2)

//2 METHOD by doing the function outside the object important
// let obj1 = {
//   name: "anmol",
//   profeesion: "sofwware developer",
//   palace: "Delhi"
// };

//   function details(company,age) {
//     console.log(this.name,company,age);
//   }
// let obj2 = {
//   name: "tanya",
//   profeesion: "Teacher",
//   palace: "Delhi",
// };

//with the help of a call
// details.call(obj1,"infotech","23")
// details.call(obj2)

//with the help of apply
// details.apply(obj1,["infotech","23"])

//bind
//in the bind the can store the function rather then to call directly like a call and apply and invoke this function when we need to invoke like given example
// let invokelater=details.bind(obj1)
// invokelater()

//In a Constructor function
// function Details(name,email,password){
// this.name=name;
// this.email=email;
// this.password=password
// }

// function checkdata(){
//     console.log(this.name,this.email,this.password)
// }
// const p=new Details("anmol","anmoljagota08@gmail.com","anmol1290")
// const p1=new Details("tanya","anmoljagota08@gmail.com","anmol1290")
// checkdata.call(p1)

//Memoization in js
//1 Problem
// let sum=0;
// function calculation(n){
//     for(let i=0;i<n;i++){
//         sum+=i
//     }
//     console.log("i am sum",sum)
//     return sum
// }
// console.time()
// console.log(calculation(150))
// console.timeEnd()
//2. solution
// function memoization(fun){
//     // console.log("i am fun",fun)
//     let cache={}
//     return function(...args){

//         let n=args[0]
//         if(n in cache){
//             return cache[n]
//         }
//         else{
//             let ans=fun(n)
//             cache[n]=ans
//             return ans
//         }
//     }
// }
// console.time()
// let value= memoization(calculation)
// console.timeEnd()
// console.time()
// console.log("value",value(1950))
// console.timeEnd()

//CURRYING IN JAVASCRIPT
//1.problem statement
// function sum(a){
// return function (b){
//     return function (c){
//         return a+b+c
//     }
// }
// }
// let out=sum(1)
// let out1=out(2)
// console.log(out1(3))
//2. SOLUTION WITH THE HELP OF CURRYING
// let out=sum(1)(2)(3)
// console.log(out)


//iterator in javascript
// const iterable = [1, 2, 3];
// const iterator = iterable[Symbol.iterator]();
// console.log(iterator.next());
// console.log(iterator.next());

// let x="10"
// let y="10"
// console.log(x>=y)

//use strict mode
// "use strict"
//  i=5
// console.log(i)

//MY OWN MAP FUNCTION USING PROTOTYPE
// let arr=[1,2,3,4,5]
// Array.prototype.MyMap=function(callback){
//     let temp=[]
//     for(let i=0;i<this.length;i++){
//         temp.push(callback(this[i],i,this))
//     }
//     return temp
// }

// let newrr=arr.MyMap((ele,i,arr)=>{
//     return ele>2
// })
// console.log(newrr)


//MY FILTER FUNCTION
// let arr=[1,2,3,4,5]
// Array.prototype.MyFilter=function(callback){
//     let temp=[]
//     for(let i=0;i<this.length;i++){
//         if(callback(this[i],i,this)) {
//             temp.push(this[i])
//         }
//     }
//     return temp
// }



// let newarr=arr.MyFilter((ele,i,arr)=>{
//     return ele>1
// })
// console.log(newarr)

//fill in javascript
// let arr=[1,2,3,4,5,6,7,8,9]
// arr.fill("p")
// console.log(arr)


//set
// let arr=["anmol","tanya","anmol","ankush","parsant","parsant","rakul"]
// let newarr=new Set(arr)
// console.log(newarr)