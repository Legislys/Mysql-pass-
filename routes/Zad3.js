import express from 'express'
import { readFile } from 'node:fs/promises'
const router = express.Router()

router.get('/:table', async (req, res) => {
    const { table } = req.params
    let sql = ''
    try {
        const content = await readFile('../routes/random.json', { encoding: 'utf-8' })
        if (table == 'klienci') migrateData(JSON.parse(content)['clients'], sql, table)
        else migrateData(JSON.parse(content)['products'], sql, table)
    } catch (err) {
        res.status(404)
        console.log(err.message)
    }
})

function migrateData(content, sql, table) {
    content.forEach((element, i) => {
        const [param1, param2, param3] = Object.keys(element)
        const [val1, val2, val3] = Object.values(element)

        if (i == 0) {
            console.log(table);
            sql = sqlInsert(table, [`${param1}`, `${param2}`, `${param3}`], [val1, val2, val3])
        } else {
            sql += `,${sqlFormatter([val1, val2, val3], '"')}`
        }
    })
    db.query(sql, (err) => {
        if (err) throw err
        console.log('Succeeeded')
    })
}

function sqlInsert(table, queries, values) {
    return `INSERT INTO ${sqlFormatter([table])}${sqlFormatter(queries)} VALUES ${sqlFormatter(values, "'")}`
}

function sqlFormatter(strings, stringAnnotator = '`') {
    if (strings.length == 1) return '`' + strings + '`'
    else {
        let format = '('
        strings.forEach((string, i) => {
            if (i != strings.length - 1) {
                format += `${stringAnnotator}` + string + `${stringAnnotator},`
            } else {
                format += `${stringAnnotator}` + string + `${stringAnnotator})`
            }
        })
        return format
    }
}

export { router }