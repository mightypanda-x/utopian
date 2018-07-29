const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

const app = express();
const RETRIEVE_PROJECTS_URL = "https://utopian.rocks/api/posts?status=pending";
const request = require("request");
app
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`));

/*
const routes = require('./routes');

const router = express.Router();
app.use(routes.registerRoutes(router, app));
*/
app.get('/api/pending', (req, res) => {
    request.get({
        url: RETRIEVE_PROJECTS_URL,
        json: true
    }, function (error, response, body) {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Request-Method', '*');
        res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
        res.setHeader('Access-Control-Allow-Headers', '*');
        res.status(200).send(body);
    });
});