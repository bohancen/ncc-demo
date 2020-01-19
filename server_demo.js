console.log(process.env.NODE_PATH)
const {express,haha} = require('server-modules')
// const express = require('express')
const app = express()

app.get('/',(req,res)=>{
  res.send('ncc deom')
})

app.listen(2333,r=>{
  console.log(2333)
})