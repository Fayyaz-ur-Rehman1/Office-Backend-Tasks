import express from 'express'
import dotenv from 'dotenv'

import { connectDB } from './src/connection.js'
import router from './src/routes/routes.js'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 3099

app.use(express.json());
app.use('/users', router)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
  connectDB()
})