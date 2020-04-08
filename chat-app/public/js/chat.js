const socket = io()

//Elements 
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button') 
const $shareLocation = document.querySelector('#send-location') 
const $messages = document.querySelector('#messages')

//templates
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationTemplate = document.querySelector('#location-template').innerHTML

socket.on('message',(message)=>{
  console.log(message)
  const html = Mustache.render(messageTemplate,{
    message
  })
  $messages.insertAdjacentHTML('beforeend',html)
})

socket.on('locationMessage',(url)=>{
  const html = Mustache.render(locationTemplate,{
    url
  })
  $messages.insertAdjacentHTML('beforeend',html)
  // console.log(url)
})

document.querySelector('#message-form').addEventListener('submit',(e)=>{
  e.preventDefault()
  //disable
  $messageFormButton.setAttribute('disabled','disabled')

  const message = e.target.elements.message.value

  socket.emit('sendMessage',message,(error)=>{
    //enable
    $messageFormButton.removeAttribute('disabled')
    $messageFormInput.value = ''
    $messageFormInput.focus()

    if(error){
      return console.log(error)
    }
    console.log('the message was delivered')
  })
})

$shareLocation.addEventListener('click',()=>{
  if(!navigator.geolocation){
    return alert('Geolocation is not supported by your browser')
  }
  $shareLocation.setAttribute('disabled','disabled')
  
  navigator.geolocation.getCurrentPosition((position)=>{
    socket.emit('sendLocation',{
      latitude:position.coords.latitude,
      longitude:position.coords.longittude
    },()=>{
      console.log('Location shared!')
      $shareLocation.removeAttribute('disabled')
    })
  })
})