import { db } from '../models/connect.js'

db.query('SELECT * FROM `klienci` WHERE `id` = 3', (err,result) => {
    if(err) throw err
    console.log(result)

    //Result
    /* 
     [
        RowDataPacket {
          id: 3,
          firstName: 'Pebrook',
          lastName: 'Cruce',
          bornDate: 1936-07-14T23:00:00.000Z
        }
      ]  */
})

