const express = require('express'); 
const router = express.Router(); 
const AuthController = require('../controllers/AuthController');
const verificarToken = require('../middlewares/auth.middleware');

 
router.get('/', AuthController.getUsers)

router.post('/login', AuthController.login)
router.post('/cadastrar', AuthController.cadastro)

router.delete('/delete/:id', AuthController.deleteUser)

// Middleware
router.get('/token', verificarToken, async (req, res) => {
    const userId = req.user.userId;
    const username = req.user.username;

    res.json({ userId, username })
})

module.exports = router; 