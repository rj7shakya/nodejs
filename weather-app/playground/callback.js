const add = (num1,num2,callback)=>{
  // console.log(num1+num2);
  
  setTimeout(()=>{
    const sum = num1+num2;
    // console.log(sum);
    callback(sum);

  },2000);
}



// add (1,4);

add(1,4,(sum)=>{
  console.log(sum);
});