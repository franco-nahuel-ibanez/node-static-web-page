const express = require('express');
const hbs = require('hbs')

//express
const app = express();
//helpers
require('./hbs/helpers');

const port = process.env.PORT || 3000;


app.use( express.static( __dirname + '/public' ) )

//Express HBS engine
hbs.registerPartials( __dirname + '/views/partials' )
app.set('view engine', 'hbs');


app.get( '/', (req, res) => {

	res.render('home', {
		nombre: 'franco nahuel',
		anio: new Date().getFullYear()
	})
})

app.get('/about', (req, res) => {
	res.render('about')
})


app.listen( port, () => {
	console.log(`server on port ${port}`)
})