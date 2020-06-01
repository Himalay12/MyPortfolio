const express = require('express');
const bodyParser = require('body-parser');


//
const app = express();

//use public folder
app.use(express.static('public'));

app.get('/', (req, res)=>{
    res.sendFile(`${__dirname}/index.html`);
})

//listen to port 3000
app.listen(3000, (req, res) => {
    console.log('server is listening at port 3000.');
})