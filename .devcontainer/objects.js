// objects are of two types , one is literal
// and another is singleton or created using
// using constructor
// now example of literal objects
const JsUser ={
    'name': 'Anshuman',
    'age': 23,
    'email': 'anshumanmr2001@gmail.com',

}

// console.log(JsUser.name);

JsUser.state = function (){
    console.log('somewhere');
}



// example of object by using constuctor 

const usingConstructor = new Object();
// const usingConstructor = {};  both same 
usingConstructor.id = "12";
 usingConstructor.name = "tiasa";
 usingConstructor.isLoggedin = false




//  so its just object , with values of Number, string,
//  and bool , i want to show objects inside objects
 


UserValue = {
    email: "anshumanmr2001@gmail.com",
    fullname :{
        firstname: "Ansh",
        middlename :"",
        lastname : "Majumder",
    },
    age : "23",
};

console.log(Object.keys(UserValue))
console.log(Object.values(UserValue))
console.log(Object.entries(UserValue))

// like arrays objects can also be merged 

const obj1 = {1:"sasa" , 2:"sfff"};
const obj2 = {3:"qq" , 4:"bfede"};
const object_ans = Object.assign(obj1,obj2);
const obj3 = Object.assign({},obj1,obj2); //all values got combined and inside it 
//mdn docs learn more about object assign 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
console.log(object_ans);

const object_spread = {...obj1, ...obj2};
console.log(object_spread);
 



