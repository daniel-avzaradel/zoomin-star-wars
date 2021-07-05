const exp = require('express');
const app = exp();

app.get('/favorites', (req, res) => {
    res.send('hello world')
})

app.listen(5000, () => {
    console.log('Listening to port 5000');
})