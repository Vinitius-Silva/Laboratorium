'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Button, Container, Grid } from '@mui/material';
import CheckboxesTags from './checkboxes';
import EnhancedTable from './table';
import SendIcon from '@mui/icons-material/Send';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import axios from 'axios';

export default function FormPropsTextFields() {
  const formik = useFormik({    
    validateOnBlur: false,
    validateOnChange: false,
    initialValues: {
      cpfPessoa: '',
      nmPessoa: '',
      telefonePessoa: '',
      emailPessoa: '',
      cargo: '',
      unidadeOperacional: ''
    },
    validationSchema: object({
      cpfPessoa: string().matches(/[0-9]{11}/, { message: 'O CPF deve conter apenas números e possuir 11 dígitos!', excludeEmptyString: true }).length(11),
      nmPessoa: string().trim().required('Campo obrigatório!'),  
      emailPessoa: string().lowercase().trim().email("Digite um e-mail válido!"),
      telefonePessoa: string().trim(),
      cargo: string().trim(),
      unidadeOperacional: string().trim()
    }).strict(true),
    onSubmit: async (values) => {
        const { ...data } = values;

        const response = await axios.post('http://localhost:3001/cadastro_operacao/', data)
        .catch(
          (err) => { if(err && err.response)
            console.log("Error: ", err)})

        if(response){ formik.resetForm() }
    },
  })
  
  return (
    <Box
      component="form" 
      sx={{
        backgroundColor: '#e1f5fe',
        boxShadow: 2,
      }}
      noValidate
      autoComplete="off"
      onSubmit={formik.handleSubmit}
      action='http://localhost:3001/cadastro_operacao/'
      method="POST"
      >
        <Container>
            <Grid container maxWidth='lg'>
              <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center" sx={{m: 2}}>
                  <Typography variant="h5" color="text.primary" gutterBottom sx={{letterSpacing: '.2rem',
                  textAlign: 'justify'}}>
                      FORMULÁRIO DE SOLICITAÇÃO DE OPERAÇÃO DE REPRESSÃO QUALIFICADA
                  </Typography>                      
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography m={2} variant="h6" color="text.primary" gutterBottom sx={{letterSpacing: '.2rem',
                textAlign: 'justify'}}>
                    1. Informações do Solicitante
                </Typography>
                <Grid container columns={{ xs: 12, sm: 12 }}>
                  <Grid item xs={6} sm={6}>
                    <TextField
                    fullWidth           
                    id='cpfPessoa'
                    name='cpfPessoa'
                    label="CPF"                  
                    sx={{ m: 1, pr: 1}}       
                    value={formik.values.cpfPessoa}                    
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error = {!!formik.errors.cpfPessoa}
                    helperText={formik.errors.cpfPessoa}
                    />
                  </Grid>
                  <Grid item xs={6} sm={6}>
                  <TextField
                  fullWidth           
                  id='nmPessoa'
                  name='nmPessoa'
                  label="Nome"                  
                  sx={{ m: 1}}       
                  value={formik.values.nmPessoa}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error = {!!formik.errors.nmPessoa}
                  helperText={formik.errors.nmPessoa}
                  />  
                  </Grid>
                </Grid>
              </Grid>              
              <Grid container columns={{ xs: 12, sm: 12 }}>                
                <Grid item xs={6} sm={6}>
                  <TextField
                  fullWidth           
                  id='emailPessoa'
                  name='emailPessoa'
                  label="E-mail"                  
                  sx={{ m: 1, pr: 1}}       
                  value={formik.values.emailPessoa}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error = {!!formik.errors.emailPessoa}
                  helperText={formik.errors.emailPessoa}
                  />
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                  fullWidth           
                  id='telefonePessoa'
                  name='telefonePessoa'
                  label="Telefone"                  
                  sx={{ m: 1}}       
                  value={formik.values.telefonePessoa}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error = {!!formik.errors.telefonePessoa}
                  helperText={formik.errors.telefonePessoa}
                  />
                </Grid>
              </Grid>
              <Grid container columns={{ xs: 12, sm: 12 }}>
                <Grid item xs={6} sm={6}>
                  <TextField
                  fullWidth           
                  id='cargo'
                  name='cargo'
                  label="Cargo"                  
                  sx={{ m: 1, pr: 1}}       
                  value={formik.values.cargo}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error = {!!formik.errors.cargo}
                  helperText={formik.errors.cargo}
                  />  
                </Grid>
                <Grid item xs={6} sm={6}>
                  <TextField
                  fullWidth           
                  id='unidadeOperacional'
                  name='unidadeOperacional'
                  label="Unidade Operacional"                  
                  sx={{ m: 1}}       
                  value={formik.values.unidadeOperacional}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error = {!!formik.errors.unidadeOperacional}
                  helperText={formik.errors.unidadeOperacional}
                  />
                </Grid>                
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography m={2} variant="h6" color="text.primary" gutterBottom sx={{letterSpacing: '.2rem',
                textAlign: 'justify'}}>
                    2. Tipos de Assessoria
                </Typography>
                <CheckboxesTags/>              
              </Grid>              
              <Grid item xs={12} sm={12}>
                <Typography m={2} variant="h6" color="text.primary" gutterBottom sx={{letterSpacing: '.2rem',
                textAlign: 'justify'}}>
                    3. Descrição do Caso
                </Typography>
                <Grid container columns={{ xs: 12, sm: 12 }}>
                  <Grid item xs={6} sm={6}>
                    <TextField
                    helperText="insira o número do inquérito"
                    id="inquerito"
                    label="Número do Inquérito"                  
                    sx={{ m: 1, pr: 1}}
                    fullWidth
                    />  
                  </Grid>
                  <Grid item xs={6} sm={6}>
                  <TextField
                  helperText="insira o nome do Caso"
                  id="caso"
                  label="Caso"
                  sx={{ m: 1}}
                  fullWidth
                  />  
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12}>                
                <TextField
                helperText="insira o resumo dos Fatos"
                id="resumo"
                label="Resumo dos Fatos"
                sx={{ m: 1}}
                fullWidth
                placeholder='Resumo dos Fatos'
                multiline
                />                     
              </Grid>
              <Grid item xs={12} sm={12}>                
                <TextField
                helperText="insira as medidas adotadas"
                id="medidas"
                label="Medidas Adotadas"
                sx={{ m: 1}}
                fullWidth
                placeholder='Medidas Adotadas'
                multiline
                />                     
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography m={2} variant="h6" color="text.primary" gutterBottom sx={{letterSpacing: '.2rem',
                textAlign: 'justify'}}>
                    4. Investigados
                </Typography>
                <Grid container columns={{ xs: 12, sm: 12 }}>
                  <Grid item xs={4} sm={4}>
                  <TextField
                  helperText="insira o CPF do investigado"
                  id="cpf_investigado"
                  label="CPF do Investigado"
                  sx={{ m: 1, pr: 1}}
                  fullWidth
                  /> 
                  </Grid> 
                  <Grid item xs={6} sm={6}>
                    <TextField
                    helperText="insira o nome do investigado"
                    id="nm_investigado"
                    label="Nome do Investigado"                  
                    sx={{ m: 1, pr: 2}}
                    fullWidth
                    />  
                  </Grid> 
                  <Grid item xs={2} sm={2} display="flex" justifyContent="center" alignItems="center">
                    <Button id='btnInserir' variant="outlined" color="success" size='small'>
                      Inserir
                    </Button> 
                  </Grid>                                              
                </Grid>
              </Grid>
              <Grid item xs={12} sm={12}>
                <EnhancedTable/>
              </Grid>
              <Grid item xs={12} sm={12} display='flex' justifyContent="center" alignItems="center" sx={{m: 2}}>
                <Button id='btnEnviar' type="submit" variant="outlined" color="success" size='large' endIcon={<SendIcon/>}>
                    Enviar
                </Button> 
              </Grid>
            </Grid>
        </Container>
    </Box>
  );
}
