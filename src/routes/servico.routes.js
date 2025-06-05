const express = require('express'); 
const router = express.Router();

const ServicosController = require('../controllers/ServicoController'); 
 
router.get('/', ServicosController.list); 
router.post('/', ServicosController.create); 
 
router.delete('/delete/:id', ServicosController.deleteServico)
router.put('/update', ServicosController.updateServico)

module.exports = router; 