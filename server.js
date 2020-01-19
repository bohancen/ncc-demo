const {express,haha} = require('server-modules')
const app = express()

app.get('/',(req,res)=>{
  res.send('ncc deom   '+ haha())
})

app.listen(2333,r=>{
  console.log(2333)
})