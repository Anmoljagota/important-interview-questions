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

//INFINITE CURRYING IN JAVASCRIPT
// function curry(a) {
//   return function (b) {
//     if (b) {
//       return curry(a + b);
//     }
//     return a;
//   };
// }

// console.log(curry(10)(5)(6));

//CHANING
// const cal={
//  total:0,
//     sum(a){
// this.total+=a
// return this
//     },
// sub(a){
//     this.total-=a
//     return this
// },
// div(a){
//     this.total/=a
//     return this
// }
// }

// const p=cal.sum(10).sub(5).div(2)
// console.log(p.total)

//NULL VS UNDEFINED

// let arr = [1, 2, 3, 4, 5];
// const newarr = arr.map((ele) => {
//   return ele > 2;
// });
// const filterarr = arr.filter((ele) => {
//   return ele > 2;
// });
// console.log(newarr)
// console.log(filterarr)

//closures Again
// function outer(){
//     var a=10;
//     function inner(){
//         let sum=a+20;
//         console.log(sum)
//     }
//     return inner
// }
// outer()()

// for(var i=0;i<5;i++){
//     function changereference(i){
//         setTimeout(function(){
//             console.log(i)
//         },i*1000)
//     }
// changereference(i)
// }
//5
//5 times 5
//output
//iterating
//settimeout
//call satck
//reference
//output

// console.log("Start");

// // Asynchronous function with a callback
// function asyncOperation(callback) {
//   setTimeout(function () {
//     console.log("Asynchronous operation complete");
//     callback();
//   }, 2000); // Simulating a delay of 2 seconds
// }

// asyncOperation(function () {
//   console.log("Callback function executed");
// });

// console.log("End");

//DIFFERENT WAY TO CREATE A OBJECT IN JS
//1 OBJECT LITERAL

// const obj={
//     name:"anmol",
//     role:"developer",
//     salary:"not mentioned"
//     }
//     console.log(obj)

//2 CONSTRUCTOR
// const obj=new Object()
// obj.name="anmol";
// obj.role="developer";
// obj.saary="not mentioned"
// console.log(obj)

//3 OBJECT METHOD
// const personprototype = {
//   great: function () {
//     console.log(`My Name is ${this.name}`);
//   },
// };

// const person = Object.create(personprototype);
// person.name = "anmol";
// console.log(person);
// person.great();

//4 CONSTRUCTOR FUNCTION
// function Createobject(name,role,salary){
//     this.name=name;
//     this.role=role;
//     this.salary=salary;
// }

// const newobj=new Createobject("anmol","developer","not mentioned")
// console.log(newobj)

//5 WITH THE help of classes
// class createobj{
//     constructor(name,role,salary){
//         this.name=name;
//         this.role=role;
//         this.salary=salary
//     }
// }
// const person=new createobj("anmol","developer","not mentioned")
// console.log(person)

//CALL , APPLY , BIND IN JS

// function watertap(state) {
//   console.log(
//     `Name of the person is ${this.name} and room number is ${this.room} and state is ${state}`
//   );
// }

// let person1 = {
//   name: "anmol",
//   room: 25,
// };
// let person2 = {
//   name: "tanya",
//   room: 70,
// };
// person1store=watertap.bind(person1,"delhi");
// person2store=watertap.bind(person2,"punjab");
// person1store()

//slice in js
// let arr=[1,2,3,4,5]
// let newarr=arr.slice(2,4)
// console.log(newarr)

//splice in js
// let arr=[1,2,3,4,5]
// arr.splice(1,1,6,7)
// console.log(arr)

//MEMOIZATION IN JS
// const memoization_function=()=>{
//     let catche={}
//     return (value)=>{
// if(value in catche){
//     console.log("taking from catche")
//     return catche[value]
// }
// else{
//     console.log("calculating result");
//     let newresult=value+20

//     catche[value]=newresult
//     return newresult
// }
//     }
// }
// const value=memoization_function()

// console.log(value(20))

// let x=[1,2,3]
// let y=x.join("-")
// let z=y.replaceAll("-","")
// console.log(z)

// const myPromise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("Resolved!"), 2000);
//   });
//   console.log("Start");
//   myPromise.then((data) => console.log(data));
//   console.log("End");

// let arr=[1,2,3,4,5,6,7,8,9]
// arr.map((ele)=>{
//   // console.log(ele>2)
// })
// let arr1=[1,2,3,4,5,6,7,8,9]
// arr.filter((ele)=>{
//   console.log(ele>2)
// })
// let promise = new Promise((res, rej) => {
//   if (res) {
//     return "success";
//   } else {
//     return "err";
//   }
// })
//   .then((res) => {
//     console.log("done");
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async function AsyncHandle() {
// const res=await fetch("https://json-mock-orbitz.onrender.com/data");
// const data=await res.json()
// console.log("i am data",data)

// }
// AsyncHandle()

// let arr=["1","2","3","4","5","6"]
// let newarr=arr.toString()
// console.log(typeof newarr)

// let obj={
//     name:"anmol",
//     role:"developer",
//     age:23
// }
// let ans=0;
// const numbers = [4, 7, 2, 9, 5, 1, 8, 3, 6];
// for(let i=0;i<numbers.length;i++){
// ans=Math.max(ans,numbers[i]);
// }
// console.log(ans)

// let obj = {
//   name: "anmol",
//   class: "fw18",
//   role: "mern developer",
// };
// let obj2 = {
//   name: "tanya",
//   class: "fw18",
//   role: "react developer",
// };
// let obj3 = {
//   name: "raksha",
//   class: "fw18",
//   role: "backend developer",
// };

// function callall(state, city) {
//   console.log(
//     `my name is ${this.name} and i belong to ${this.class} and my role is ${this.role} and state is ${state} and city is ${city}`
//   );
// }

// const collect = callall.bind(obj3, "punjab", "chandigarh");


//BINARY SEARCH
// function binary(arr,findnumber){
// console.log("hlo...");
//     let l=0;
//     let right=arr.length-1;
// while(l<=right){
//     let mid=Math.floor((l+right)/2);
//     console.log("midddd",mid)
//     if(arr[mid]===findnumber){
//         return mid;
//     }
//     else if(arr[mid]>findnumber){
//         right=mid-1;
//     }
//     else if(arr[mid]<findnumber){
//         l=mid+1;
//     }
// }
// return -1;
// }

// let arr=[1,4,6,10,100,115,125,130,150,200,210,230];
// let findnumber=10;
// console.log(binary(arr,findnumber))

for(var i=0;i<3;i++){
    setTimeout(()=>{
        fn(i)
    })
}
for(let i=0;i<3;i++){
    setTimeout(()=>{
        fn(i)
    })
}
function fn(i){
    console.log(i)
}