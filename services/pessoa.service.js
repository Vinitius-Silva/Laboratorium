import pessoaRepository from "../repositories/pessoa.repository.js";

async function insertPessoa(Pessoa){
    return await pessoaRepository.insertPessoa(Pessoa);
};

async function getPessoa(id){
    return await pessoaRepository.getPessoa(id);
};

async function updatePessoa(Pessoa){
    return await pessoaRepository.updatePessoa(Pessoa);
};

async function deletePessoa(id){
    return await pessoaRepository.deletePessoa(id);
};

export default {
    insertPessoa,
    getPessoa,
    updatePessoa,
    deletePessoa
};