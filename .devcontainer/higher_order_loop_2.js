const coding = ["js", "ruby","cpp"]

// coding.forEach( function (item) {
//     console.log(item);
// } )

// we can use arrow function also 

// arrow function writing style 

// const greet = (a) =>{
//  console.log( `Hello ${a} , welcome aboard`);
// }
// greet('Anshuman');
// coding.forEach((item)=>{
// console.log(item);
// })

// apart from item this foreach loop has other parameters
// it has access to 
// coding.forEach ((item,index,arr)=>{
// console.log(item , index ,arr)
// })


// situation when there is an array which has objects inside
// this usually happens , as data comes from db in this format

const mycoding = [
    {
        languageName : "javascript",
        filetype : "js",
    },
    {
        languageName : "java",
        filtertype : "java",

    },
    {
        languageName: "cpp",
        filtertype:"c++",
    },
    {
        languageName: "python",
        filtertype:"py",
    }
]

mycoding.forEach((item)=>{
console.log(item.languageName);
})