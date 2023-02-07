const Sequelize = require('sequelize');

const sequelize = new Sequelize("projeto", "root", "",{
    host: 'localhost',
    dialect: 'mysql',
    query:{raw:true}
});

sequelize.authenticate().then(function(){
    console.log("Banco de dados conectado com sucesso.");

}).catch(function(err){

        console.log("Erro: não foi possível conectar ao banco de dados.");
});

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}