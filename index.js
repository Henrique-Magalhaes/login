const express = require('express');
const app = express();
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');
const db = require('./models/db');
const port = 3000;
const Post = require('./models/Post')


//config    
 // template engine
 app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
 app.set('view engine', 'handlebars');
 app.use(express.static('public'));
 app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css'));

 //bodyparser
 app.use(bodyParser.urlencoded({extended: false}))
 app.use(bodyParser.json())

//rotas

app.get("/adm",  (req, res) => {
    Post.findAll().then(function(posts){
        res.render('adm', {posts: posts})
    })
});

app.get("/",  (req, res) => {
    res.render('cadastro');
});

app.get("/cadastro",  (req, res) => {
    res.render('cadastro');
});

app.get("/login",  (req, res) => {
    res.render('login');
});

app.get("/adm",  (req, res) => {
    res.render('adm');
});

app.post("/cadastro", (req, res) => {
    const nome = req.body.nome
    Post.create({
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      login: req.body.login,
      senha: req.body.senha,  
    }).then(function(){
        res.redirect('/login')
    }).catch(function(erro){
        res.send("Houve um erro:" + erro)
    })
});

app.get("/adm/:id",  (req, res) =>{
    Post.destroy({where: {'id': req.params.id}}).then(function(){
        res.redirect('/adm')
    }).catch(function(erro){
        res.send("Usuário não encontrado")
    })
})

 

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

