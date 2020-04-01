const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-app',{
  useUnifiedTopology:true,
  useNewUrlParser: true
})

// const User = mongoose.model('User',{
//   name:{
//     type: String
//   },
//   age: {
//     type: Number
//   }
// });

// const me = new User({
//   name: 'Andrew',
//   age: 'mike'
// })

// me.save().then(()=>{
//   console.log(me);
// }).catch((error)=>{
//   console.log('Error!',error);
// })

const Task = mongoose.model('Task',{
  description:{
    type: String
  },
  completed:{
    type: Boolean
  }
})

const t1 = new Task({
  description: 'avc',
  completed: true
})

t1.save().then(()=>{
  console.log(t1);
}).catch((errror)=>{
  console.log(error)
})