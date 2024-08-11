let score = "fgfgfgfg";
let ans = typeof(score);
console.log(ans);
 //changing the value of the number is happening here

let valueNumber = Number(score);
console.log(valueNumber)  //it will give NaN =>which means not a number 
console.log(typeof(valueNumber));


// more can be done 

let number = 12121;
console.log(String(number));
let NumberType = String(number);
console.log(typeof(NumberType));

// similarly can be done with boolean {Boolean}  