import database from './repositories/db.js'
import pessoaRouter from './routes/cadOperacao.route.js'
import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())

app.use(express.json()) // { teste: 1}
app.use(express.urlencoded()) // ?teste=1

app.use('/cadastro_operacao', pessoaRouter)

const port = process.env.PORT || 3001

app.listen(port, (err) => {
    if(err){
   console.log('erro ao iniciar o servidor na porta', port, err)
} else {
    console.log('Servidor funcionando na porta', port)
}
})

try {
    await database.authenticate();
    console.log('Conexão com o Banco de Dados foi realizada com sucesso.');
  } catch (error) {
    console.error('Falha ao conectar com o Banco de Dados:', error);
  }
