import dotenv from 'dotenv'
dotenv.config()
import mysql from 'mysql'

const credentials = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
}
const db = mysql.createConnection(credentials)

db.connect(err => {
    if (err) throw err
    console.log('Connected')
})

export { db }