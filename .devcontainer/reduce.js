const arr1 = [1,2,3,5];


// const sum = arr1.reduce(function (acc,currval){
//     console.log(acc);
//     console.log(currval);
//     console.log('checkl');
//     return acc + currval
// }, 0)

// console.log(sum);
// const sum = arr1.reduce((acc, val)=>acc+val,0);
// console.log(sum);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const price = shoppingCart.reduce((acc,val)=>{
    return(acc+val.price);
},0);
console.log(price);