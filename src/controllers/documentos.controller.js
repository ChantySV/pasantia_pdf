const conexion = require('../config/database')
const usuarios  = {}

usuarios.test = (req, res) => {
    res.json('Conexion exitosa')
}
usuarios.get = (req, res)=>{
    let sql = 'SELECT * FROM documentos'
    conexion.query(sql, (err, resul)=>{
        if(err){
            res.status(500).json({error: 'Error al obtener los documentos'})
            return
        }
        res.json(resul)
    })
}
module.exports = usuarios