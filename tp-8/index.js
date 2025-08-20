import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());


// GET
app.get('/comedero', (req, res) => {
  res.json({ mensaje: 'Esta es la ruta GET de mi entidad Comedero' });
});

// POST
app.post('/comedero', (req, res) => {
  res.json({ mensaje: 'Esta es la ruta POST de mi entidad Comedero' });
});

// PUT
app.put('/comedero/:id', (req, res) => {
  res.json({ mensaje: 'Esta es la ruta PUT de mi entidad Comedero' });
});

// DELETE
app.delete('/comedero/:id', (req, res) => {
  res.json({ mensaje: 'Esta es la ruta DELETE de mi entidad Comedero' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
