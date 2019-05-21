const express = require('express');
const app = express();
const port = process.env.PORT || 8000;   //This is for Heroku. We will use the port that is available, OR the port 8000.

app.use(express.static('./dist'));

app.listen(port, () => console.log('ready'));