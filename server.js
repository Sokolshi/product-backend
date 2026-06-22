const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')
const app = express()

app.use(cors())
app.use(express.json())
app.use('/products', productRoutes)


mongoose.connect('mongodb://127.0.0.1:27017/productapp')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))


app.listen(3000, '0.0.0.0',() => {
  console.log('Server running on port 3000')
})