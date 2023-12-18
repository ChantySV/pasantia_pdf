const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

const puerto = 5000
app.listen(puerto, function() {
    console.log('Servidor OK en puerto: '+puerto);
});