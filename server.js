const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')

require('dotenv').config()

const app = express()

app.use(cors())
app.use(express.json())
app.use('/products', productRoutes)


mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err))


app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000')
})