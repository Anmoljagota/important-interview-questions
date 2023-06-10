// let obj = {
//   name: "Anmol",
//   code: "fw18_0435",
//   batch: "fw18",
//   friends: 4,
//   performance: "good",
// };

// let newobj = JSON.stringify(obj);
// let parsenewobj = JSON.parse(newobj);
// console.log(parsenewobj[0]);

//JSON or javascript object notation is a format for structure the data
//for example=when we declare a any varible like a=10 so a is not taking the value as 10 it is actually taking the address of memory where the a is allocated here we can thing that where is the use or helpfull JSON . if we need to
// transfer the data from one network to another network one way is that transfer the entire memory of our computer along with the address but this is a very risky to tranfer entire memory so this is not a safest method
//to solve this problem JSON comes into the picture it converts the entire data into the human readable format and then we can easily transfer the data without taking any risk.

// console.log(typeof function(){

// }
// // )
// const isAuth;
// console.log(isAuth)
// function getname(){
//   var status=true;
//   if(status){
//     const name="anmol"
//   }
//   console.log(name)
// }
// getname()
// console.log([1] === [1])
// function alpha(){
//   var x=100;
//   this.beta()
// }
// function beta(){
//   var x=200;
//   console.log(this.x)
// }
// alpha()
// console.log("1")
// setTimeout(() => {
//     console.log("2")
// }, 0);
// console.log("3")
// console.log("1");
// setTimeout(() => {
//   console.log("2");
// }, 0);
// Promise.resolve().then(()=>{
//     console.log("3")
// })
// console.log("4")
// console.log("1")
// setTimeout(() => {
//     console.log("2")
//     Promise.resolve().then(()=>{
//         console.log("3")
//     })
//     console.log("4")
// }, 0);
// console.log("5")
// console.log("1")
// setTimeout(() => {
//     console.log("2")
// }, 0);
// setImmediate(()=>{
//     console.log("3")
// })
// process.nextTick(()=>{
//     console.log("4")
// })
// console.log("5")


// console.log("1")
// setTimeout(() => {
//     console.log("2")
//     process.nextTick(()=>{
//         console.log("3")
//     })
// }, 0);
// process.nextTick(()=>{
//     console.log("4")
// })
// console.log("5");
console.log("1")
setImmediate(()=>{
    console.log("2")
})
process.nextTick(()=>{
    console.log("3")
})
console.log("4")
