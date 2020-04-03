require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete('5e85abadbfff7a5bc19dc087').then((task)=>{
//   console.log(task);
//   return Task.countDocuments({completed:false})
// }).then((result)=>{
//   console.log(result)
// }).catch((e)=>{
//   console.log(e)
// })


const deleteTaskAndCount = async (id) =>{
  const task = await Task.findByIdAndDelete(id)
  const count = await Task.countDocuments({completed:false})
  return count
}

deleteTaskAndCount('5e85aad4bfff7a5bc19dc084').then((user)=>{
  console.log(user);
}).catch((e)=>{
  console.log(e)
})