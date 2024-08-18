const numbers = [1,3,5,6,8,6,4,2,4];
const new_nums = numbers.map((num)=>num+10)
// console.log(new_nums);

// perform chaining 

const number_chain = numbers.map((num)=>num*10)
                      .map((num)=>num+1)
                      .filter((num)=>{
                        return(num>40)
                      })

                      console.log(number_chain)