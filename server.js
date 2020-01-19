const {express} = require('./build_modules')
const app = express()

app.get('/',(req,res)=>{
  res.send('ncc deom')
})

app.listen(2333,r=>{
  console.log(2333)
})