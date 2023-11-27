import 'dotenv/config'
import express, { json } from 'express'
import cors from 'cors'
import { connect } from 'mongoose'
// import Project from '../models/projectModel.js';

const app = express()

app.use(cors())
app.use(json())

const MONGO_URL=process.env.MONGO_URL
const PORT=process.env.PORT

connect(MONGO_URL)
.then(() => {
    console.log('Connected to mongo db')
    app.listen(PORT, () => {
        console.log(`Node server running on port ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})