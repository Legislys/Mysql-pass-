import { db } from '../models/connect.js'

db.query("SELECT * FROM `klienci` WHERE `bornDate` > '1998-01-01'", (err,result) => {
    if (err) throw err
    console.log(result)
})
