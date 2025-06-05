const prisma = require('../models/PrismaService'); 
 
class ServicoController { 
  static async list(req, res) { 
    const servico = await prisma.servico.findMany(); 
    return res.json(servico);
  } 
 
  static async create(req, res) { 
    /* 
      model Servico {
        id Int @id @default(autoincrement())
        titulo String
        descricao String
        preco Float
        telefone String
      } 
    */
    const { titulo, descricao, preco, telefone } = req.body; 
 
    const servico = await prisma.servico.create({ 
      data: { titulo, descricao, preco: parseFloat(preco), telefone } 
    }); 
 
    res.json(servico); 
  }
  
  static async updateServico(req, res){
    const { id, titulo, descricao, preco, telefone } = req.body; 

    const updatedServico = await prisma.servico.update({
      where: {
        id: parseInt(id)
      },
      data: {
        titulo: titulo,
        descricao: descricao,
        preco: parseFloat(preco), 
        telefone: telefone
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