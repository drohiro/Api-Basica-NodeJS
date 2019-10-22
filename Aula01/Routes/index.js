const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    return res.send({message:'Tudo Ok Metodo GET da RAIZ!'});
})
router.post('/', (req,res) => {
    return res.send({message:'Tudo Ok Metodo POST da RAIZ!'});
})

module.exports = router;