import modelPessoa from "../models/pessoa.model.js";

async function insertPessoa(pessoa){
    try {
        return await modelPessoa.create(pessoa);
    } catch(err){
        throw err;
    }  
}

async function getPessoa(id){
    try {
        return await modelPessoa.findByPk(id);
    } catch(err){
        throw err;
    }    
}

async function updatePessoa(pessoa){
    try {
        await modelPessoa.update(pessoa, {
            where:{
                idPessoa: pessoa.idPessoa
            }
        })
        return await getPessoa(pessoa.idPessoa)
    } catch(err){
        throw err;
    }  
}

async function deletePessoa(id){
    try {
        return await modelPessoa.destroy({
            where:{
                idPessoa: id
            }
        });
    } catch(err){
        throw err;
    }  
}

export default {
    insertPessoa,
    getPessoa,
    updatePessoa,
    deletePessoa
}