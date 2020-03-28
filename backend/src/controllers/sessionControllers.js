const connection = require('../database/connection')

module.exports = {
  async create(request, responce) {
    const { id } = request.body

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first()
 if (!ong) {
     return responce.status(400).json({error:"Nenhuma ONG localizada com esse id"})
 }

return responce.json(ong)

  },
}
