let cart = ["shoes", "shirt", "pant"];
let orderid = proceedtoorder(cart)
  .then((orderid) => {
    console.log(orderid);
    return proceedToPayment(orderid);
  })
  .then((payment) => {
    console.log(payment);
  })
  .then((ordersumarry)=>{
    
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("i will run all the time don't matter what happened");
  });

function proceedtoorder(cart) {
  let newPromise = new Promise((resove, reject) => {
    if (!validateCart(cart)) {
      reject("something wrong with user");
    }
    let orderId = Math.random();
    setTimeout(() => {
      resove(orderId);
    }, 3000);
  });
  return newPromise;
}

function validateCart(cart) {
  return true;
}
function proceedToPayment(id) {
  let payment = new Promise((res, rej) => {
    if (id) {
      res("Payment success");
    }
    rej("payment unsucessfull");
  });
  return payment;
}
