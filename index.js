const express = require('express')
const exphbs=require('express-handlebars');

const path = require('path') 
const app = express()
const port = 3000

// to send java script variables into templates we use templating engine : express handlebars

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static(path.join(__dirname,"static")))

app.use('/',require(path.join(__dirname,'routes/blog')))

app.listen(port, () => {
console.log(`Blog app listening at http://localhost:${port}`)
})        