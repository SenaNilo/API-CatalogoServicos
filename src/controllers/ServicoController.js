const prisma = require('../models/PrismaService'); 
 
class ServicoController { 
  static async list(req, res) { 
    const servico = await prisma.servico.findMany(); 
    return res.json(servico);
  } 
 
  static async create(req, res) { 
    const { name, price, description } = req.body; 
 
    const servico = await prisma.servico.create({ 
      data: { name, price: parseFloat(price), description } 
    }); 
 
    res.json(servico); 
  }
  
  static async updateServico(req, res){
    const { id, name, price, description } = req.body; 

    const updatedServico = await prisma.servico.update({
      where: {
        id
      },
      data: {
        name,
        price: parseFloat(price), 
        description
      }
    })

    res.json(updatedServico)
  }

  static async deleteServico(req, res){
    const { id } = req.params
    const deleteServico = await prisma.servico.delete({
      where: {
        id: parseInt(id)
      }
    })

    res.json(deleteServico)
  }

} 

module.exports = ServicoController;