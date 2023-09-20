require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const lawyerRouter = require('./routes/lawyerRouter')

const app = express()
app.use(express.json)
app.use(cors())

app.use('/lawyer', lawyerRouter)

const PORT = process.env.PORT || 5000
const URI = process.env.MONGODB_URL

app.listen(PORT, () => {
  console.log('Server is running on port:', PORT)
})

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('data base connected')
  })
  .catch((err) => console.log('Error', err))
