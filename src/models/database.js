const mysql = require('mysql2');

const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '2104',
    database: 'repositorio'
})
conexion.connect(function(err) {
    if(err){
        throw err;
    }else{
        console.log('Conexion exitosa !!!');
    }
});


module.exports = conexion