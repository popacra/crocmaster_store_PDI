import express from 'express'

const router = express.Router();

router.get('/comedero', (req, res) => {
    res.json({ mensaje: `Esta es la ruta GET de mi entidad Comedero` });
});

// POST
router.post('/comedero', (req, res) => {
    res.json({ mensaje: `Esta es la ruta POST de mi entidad Comedero` });
});

// PUT
router.put('/comedero/:id', (req, res) => {
    const { id } = req.params
    res.json({ mensaje:  `Esta es la ruta PUT de mi entidad Comedero con la ID ${id}` });
});

// DELETE
router.delete('/comedero/:id', (req, res) => {
    const { id } = req.params
    res.json({ mensaje: `Esta es la ruta DELETE de mi entidad Comedero con la ID ${id}` });
});

// GET con ID
router.get('/comedero/:id', (req, res) => {
    const { id }= req.params
    res.json({ mensaje: `Esta es la ruta GET de mi entidad comedero con el ID ${id}` });
});

export default router