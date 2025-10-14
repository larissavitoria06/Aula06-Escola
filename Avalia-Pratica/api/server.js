// src/server.js
const express = require('express');
const cors = require('cors');
const proferouter = require('./router/proferouter.js');
const turmarouter = require('./routes/turmaRoutes');
const ativirouter = require('./routes/ativirouter');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/professores', proferoutes);
app.use('/turmas', turmaroutes);
app.use('/atividades', ativirouter);

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
