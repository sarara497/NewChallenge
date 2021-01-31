const express = require('express')
const cors = require('cors')
const bodyParser = require("body-parser");
const path = require('path')

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use('/Items' , require('./Routes/Items'))

if(process.env.NODE_ENV === 'production'){ 
  app.use(express.static('snack-vending-machine/build'))

  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, "snack-vending-machine", "build", "index.html"))
    })
}

app.use((req,res) => {
    res.send('Welcome to Backend *_^')
  })
  
  app.listen(process.env.PORT || 4000 , ()=> console.log("iam running on port 4000"))