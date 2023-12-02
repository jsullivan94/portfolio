require('dotenv').config()
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const Project = require('./models/projectModel')
const errorMiddleware = require('./middleware/errorMiddleware')

const app = express()

app.use(cors())
app.use(express.json())
app.use(errorMiddleware)

const MONGO_URL=process.env.MONGO_URL
const PORT=process.env.PORT











mongoose.
connect(MONGO_URL)
.then(() => {
    console.log('Connected to mongo db')
    app.listen(PORT, () => {
        console.log(`Node server running on port ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})