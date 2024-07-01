import express from 'express';

const port = 3000;
const app = express();

app.use(express.static('public'));
app.use(express.static('dist'));

app.listen(port, () => console.log(`Listening on port: ${port}`));