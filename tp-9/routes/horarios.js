import express from 'express'

const router = express.Router();

router.get('/', (req,res) =>{
    res.json({mensaje: `Esta es la ruta GET de mi entidad Horarios`})
});
router.get('/:id', (req,res) =>{
    const { id } = req.params
    res.json({mensaje: `Esta es la ruta GET de mi entidad Horarios con el ID ${id}`})
})
router.post('/', (req,res) =>{
    res.json({mensaje: `Esta es la ruta POST de mi entidad Horarios`})
})
router.put('/:id', (req,res) =>{
    const { id } = req.params
    res.json({mensaje: `Esta es la ruta PUT de mi entidad Horarios con el ID ${id}`})
})
router.delete('/:id', (req,res) =>{
    const { id } = req.params
    res.json({mensaje: `Esta es la ruta DELETE de mi entidad Horarios con el ID ${id}`})
})

export default router