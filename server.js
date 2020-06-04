const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
// use a view engine for convenience
// so I can display server-collected info (= the referrer in our case) in the HTML markup
// http://expressjs.com/en/guide/using-template-engines.html
app.set('view engine', 'pug')

app.use(express.static('public'))

app.get('/', function (req, res) {
  const referer = req.get('Referer')
  res.render('index', { message: `${referer}` })
})

app.get('/ref', function (req, res) {
  const referer = req.get('Referer')

  const origin = req.get('Origin')

  console.log('referer', referer)
  console.log('origin', origin)
  res.json(referer)
})

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
