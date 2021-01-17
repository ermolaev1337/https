const express = require('express');
const path = require("path");
const app = express();
const PORT = 80;

app.use('/',express.static(path.join(__dirname,'/')));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));