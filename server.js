const express = require("express");
const app = express();

// use a view engine for convenience
// so we can display server-collected info (= the referer in that case) in the HTML markup
// http://expressjs.com/en/guide/using-template-engines.html
app.set('view engine', 'pug')

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get('/', function (req, res) {
  const referer = req.get('Referer');
  res.render('index', { message: `${referer}` });
})

// app.get("/", (request, response) => {
//   // console.log("request", request)
//   // console.log(request.headers.referer);
//   const referer = request.get('Referer');
//   console.log("referer", referer);
//   response.send(`<p>Referrer: ${referer}</p>`)
//   // response.sendFile(__dirname + "/views/index.html");
//   // response.render("index.html", { name: 'Tobi' }, function (err, html) {
//   //   // ...
//   // })
// });

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});
