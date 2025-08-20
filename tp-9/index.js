import express from 'express';
import comedero from './routes/comedero.js'
import horarios from './routes/horarios.js'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(comedero)
app.use('/horarios',horarios)

app.listen(PORT, () => {
  console.log(`Servidor escuchando en ${PORT}`);
});
