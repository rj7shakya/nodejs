require('../src/db/mongoose')
const Task = require('../src/models/task')

Task.findByIdAndDelete('5e85abadbfff7a5bc19dc087').then((task)=>{
  console.log(task);
  return Task.countDocuments({completed:false})
}).then((result)=>{
  console.log(result)
}).catch((e)=>{
  console.log(e)
})