import express from 'express';
import pessoaController from '../controllers/pessoa.controller.js';

const router = express.Router();

router.post('/', pessoaController.insertPessoa)
router.get('/:id', pessoaController.getPessoa)
router.put('/', pessoaController.updatePessoa)
router.delete('/:id', pessoaController.deletePessoa)

export default router;