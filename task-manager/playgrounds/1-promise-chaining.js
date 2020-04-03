// const add = (a, b) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(a+ b)
//   }, 2000)
// })
// }

// add(1,1).then((sum)=>{
//   console.log(sum)
//   return add(sum,4)
// }).then((sum2)=>{
//   console.log(sum2)
// }).catch((e)=>{
//   console.log(e)
// })

require('../src/db/mongoose');
const User = require('../src/models/user')

User.findByIdAndUpdate('5e85949cec24714a32c10b37',
  {age:1}).then((user)=>{
    console.log(user);
    return User.countDocuments({age:1})
  }).then((result)=>{
    console.log(result);
  }).catch((e)=>{
    console.log(e)
  })

