const db = require('./db')

const Post = db.sequelize.define('cadastro', {
    nome:{
        type: db.Sequelize.TEXT
    },
    sobrenome: {
        type: db.Sequelize.TEXT
    },
    login:{
        type: db.Sequelize.TEXT 
    },
    senha:{
        type: db.Sequelize.TEXT
    }

})

module.exports = Post

//Post.sync({force: true})