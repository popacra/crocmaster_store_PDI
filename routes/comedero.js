import express from 'express'
import prisma from '../lib/prisma.js'

const router = express.Router();

router.get('/', async (req, res) => {
    const comedero = await prisma.comedero.findMany()
    res.json(comedero);
});

// POST
router.post('/', async (req, res) => {
    const {username, descripcion} = req.body 
    const comedero = await prisma.comedero.create({
        data: {
            username,
            descripcion, 
        },
    });
    res.json(comedero);
});

// PUT
router.put('/:id', async (req, res) => {
    const { id } = req.params
    const {username, descripcion} = req.body
    const comedero = await prisma.comedero.update({
        data:{
            username,
            descripcion,
        },
        where: {
            id: Number(id)
        },
    });
    res.json(comedero);
});

// DELETE
router.delete('/:id', async(req, res) => {
    const { id } = req.params
    const comedero = await prisma.comedero.delete({
        where: {
            id: Number(id)
        }
    })
    res.json(comedero);
});

// GET con ID
router.get('/:id', async(req, res) => {
    const { id }= req.params
    const comedero = await prisma.comedero.findFirst({
        where: {
            id: Number(id)
        }
    })
    res.json(comedero);
});

export default router