const express = require('express');


const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, '/distr')));

// An api endpoint that returns a short list of items
app.get('/', (req, res) => {
    var list = ["item1", "item2", "item3"];
    res.json(list);
    console.log('Sent list of items');
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/distr/index.html'));
});

const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
});