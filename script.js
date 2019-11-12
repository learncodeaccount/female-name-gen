const express = require('express')
const app = express();
const faker = require('faker')
const names = require('human-names')

app.set('view engine', 'ejs')

const port = 3000 || process.env.PORT;


app.get('/', (req, res) => {
    res.render('index', {
        name: names.femaleRandom()
    })
})

app.listen(3000, () => {
    console.log(`listening on port ${port}`)
})

// console.log(names.femaleRandom())
// console.log(faker.finance.color())
