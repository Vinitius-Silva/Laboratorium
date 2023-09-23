import * as React from 'react';
import Box from '@mui/material/Box';
import { Button, Container, Grid, Typography } from '@mui/material';

export default function BoxX() {
  return (
    <Box component="span" display="flex" flexDirection="row" justifyContent="center" alignItems="center" 
    sx={{ boxShadow: 3,
      gap: 4, 
      '&:hover': {
        backgroundColor: 'info.light',}
      }}>
      <Box sx={{ width: '85%', m: 2 }}>
        <Typography variant="h6"
                  sx={{
                    mr: 2,
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    fontStyle: 'oblique',
                    letterSpacing: '.2rem',
                    color: 'inherit',
                    textDecoration: 'none',
                    textAlign: 'justify'
                  }}>                    
                    A Polícia Civil de Pernambuco disponibiliza vários canais para recebimento de denúncias. <br />
Por esses canais, você pode denunciar foragidos da justiça e crimes que já ocorreram, que estão em andamento ou que tenha conhecimento que estão sendo planejados. <br />
Não é necessário se identificar. <br />
          </Typography>
      </Box>
      <Box sx={{ width: '15%' }}>
      <Button variant="outlined" color="success" size="medium" href='http://servicos.sds.pe.gov.br/delegacia/'>
          Denuncie
      </Button>
      </Box>
    </Box>
  );
}