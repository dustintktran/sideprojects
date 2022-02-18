const express = require('express');
const parser = require('body-parser');

const app = express();
app.use(express.static('build/'));

app.listen(3000, console.log('App running on port 3000'));