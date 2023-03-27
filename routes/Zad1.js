import { db } from '../models/connect.js'
import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
    let sql = 'CREATE DATABASE SKLEP'
    db.query(sql, (err, result) => {
        if (err) throw err
        console.log('Db created')
    })
})

export { router }