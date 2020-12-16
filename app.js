const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const handlebars = require('handlebars')
const trashTalkGenerator = require('./Trash_Talk_Generator.js')
const app = express()
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

// register helper
handlebars.registerHelper('ifEquals', function (job, selectedJob, options) {
  return (job === selectedJob) ? options.fn(this) : options.inverse(this)
})

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const options = req.body
  console.log(options)
  const trashTalk = trashTalkGenerator(options)
  res.render('index', { options, trashTalk })
})

app.listen(port, () => {
  console.log(`Express is running on http://localhost:${port}`)
})
