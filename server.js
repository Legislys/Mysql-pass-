import express from 'express'
const app = express()
import { router as createDbRouter } from './routes/Zad1.js'
import { router as createTableRouter } from './routes/Zad1.js'
import { router as seedDbRouter } from './routes/Zad3.js'

app.use('/createdb/', createDbRouter)
app.use('/createtable/', createTableRouter)
app.use('./insertdata/', seedDbRouter)

app.listen(process.env.PORT || 3000, () => console.log('Server is listening'))