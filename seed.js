const mongoose = require('mongoose')
const Product = require('./models/Product')

mongoose.connect('mongodb://127.0.0.1:27017/productapp')
.then(async () => {

  await Product.create([
    {
      name: "Laptop",
      price: 2500000,
      image: "laptop.jpg"
    },
    {
      name: "Phone",
      price: 1200000,
      image: "phone.jpg"
    },
    {
      name: "Keyboard",
      price: 150000,
      image: "keyboard.jpg"
    }
  ])

  console.log("Products added")

  mongoose.disconnect()
})