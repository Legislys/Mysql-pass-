import { db } from '../models/connect.js'
import express from 'express'

const router = express.Router()

router.post('/:name', (req, res) => {
    const { name } = req.params
    let sql = `CREATE TABLE ${name}`
    if (name == 'klienci') {
        sql += ' (id INT AUTO_INCREMENT, firstName VARCHAR(50), lastName VARCHAR(50), bornDate date, PRIMARY KEY(id))'
    } else {
        sql += '(id INT AUTO_INCREMENT, name VARCHAR(60), company VARCHAR(60), price INT(30), PRIMARY KEY(id))'
    }
    db.query(sql, (err) => {
        if (err) throw err
        res.send(`Table ${name} created`)
    })
})

export { router }
