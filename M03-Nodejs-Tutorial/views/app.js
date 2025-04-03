const express = require('express');

// express app
const app = express();

// listen for requests
app.listen(3000);

app.get('/', (req, res) => {
    
    // res.send('<p>home page</p>');
    res.sendFile('./views/index.html', {
        root: _dirname
    });

});

app.get('/about', (req, res) => {
   // res.send('<p>about page</p>');
    res.sendFile('./views/about.html', { 
        root: __dirname
    })
})