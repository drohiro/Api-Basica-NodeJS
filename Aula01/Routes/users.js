const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    return res.send({message:'Tudo Ok Metodo GET da ROTA DE USUARIOS!'});
})
router.post('/', (req,res) => {
    return res.send({message:'Tudo Ok Metodo POST da ROTA DE USUARIOS!'});
})

router.post('/create', (req,res) => {
    return res.send({message:'O seu usuario foi criado =)!'});
})


module.exports = router;