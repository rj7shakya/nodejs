const express = require('express');
const router = express.Router()

//@router    GET api/contacts
//@desc      Get all users contacts
//@access    Private

router.get('/',(req,res)=>{
  res.send('Get all contacts')
})

//@router    POST api/contacts
//@desc      Add new contacts
//@access    Private

router.post('/',(req,res)=>{
  res.send('Add contact')
})

//@router    PUT api/contacts/:id
//@desc      Update contacts
//@access    Private

router.put('/:id',(req,res)=>{
  res.send('Update contact')
})


//@router    DELETE api/contacts/:id
//@desc      Delete contacts
//@access    Private

router.delete('/:id',(req,res)=>{
  res.send('Delete contacts')
})
module.exports = router
