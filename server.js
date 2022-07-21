import express from 'express'


const app = express()


app.use(express.json())



app.get('/pepe',(req,res)=>{
  res.send('hello world')
})


app.listen(3000,()=>console.log('server listen on port 3000'))