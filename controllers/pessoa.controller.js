import pessoaService from "../services/pessoa.service.js";

async function insertPessoa(req, res, next){
    try{
        let pessoa = req.body;
        if (!pessoa.nmPessoa){
            throw new Error("O campo NOME é obrigatório!")
        }
        res.send(await pessoaService.insertPessoa(pessoa))
    } catch(err){
        next(err)
    }
}

async function getPessoa(req, res, next){
    try{
        res.send(await pessoaService.getPessoa(req.params.id))        
    } catch(err){
        next(err)
    }
}

async function updatePessoa(req, res, next){
    try{
        let pessoa = req.body;
        if (!pessoa.idPessoa || !pessoa.nmPessoa){
            throw new Error("O campo Identificação e NOME são obrigatórios!")
        }
        pessoa = await pessoaService.updatePessoa(pessoa)
        res.send(pessoa)
    } catch(err){
        next(err)
    }
}

async function deletePessoa(req, res, next){
    try{
        await pessoaService.deletePessoa(req.params.id)
        res.end()
    } catch(err){
        next(err)
    }
}

export default {
    insertPessoa,
    getPessoa,
    updatePessoa,
    deletePessoa
};