const express = require('express'); 
const cors = require('cors'); 
 
const authRoutes = require('./routes/auth.routes'); 
const servicosRoutes = require('./routes/servico.routes');  
 
const app = express(); 
 
app.use(cors()); 
app.use(express.json()); 
 
app.use('/auth', authRoutes); 
app.use('/servicos', servicosRoutes); 
 
module.exports = app; 