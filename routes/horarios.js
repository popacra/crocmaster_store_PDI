import express from 'express'
import prisma from "../lib/prisma.js"

const router = express.Router();

router.get('/', async (req,res) =>{
    const horarios = await prisma.horarios.findMany()
    res.json(horarios)
});
router.get('/:id', async(req,res) =>{
    const { id } = req.params
    const horarios = await prisma.horarios.findFirst({
        where: {
            id: Number(id)
        }
    })
    res.json(horarios)
})
router.post('/', async (req,res) =>{
    const { fecha_cargada, descripcion} = req.body;
    const horarios = await prisma.horarios.create({
        data: {
            fecha_cargada,
            descripcion,
        },
    });
    res.json(horarios)
})
router.put('/:id', async (req,res) =>{
    const { id } = req.params
    const {fecha_cargada, descripcion} = req.body
    const horarios = await prisma.horarios.update({
        data:{
            fecha_cargada,
            descripcion,
        },
        where: {
            id: Number(id) 
        }
    })
    res.json(horarios)
})
router.delete('/:id', async(req,res) =>{
    const { id } = req.params
    const horarios = await prisma.horarios.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(horarios)
})

export default router