'use client';

import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.info.light[200]
            : theme.palette.info.light[800],
        p: 6,
      }}
      >
      <Container maxWidth="lg">
        <Grid container spacing={6}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Sobre nós
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Nós somos um órgão dedicado a assessorar o decisor com conhecimento de inteligência de segurança pública.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Nos Contate
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Governo de Pernambuco Praça da República, Bairro de Santo Antônio, Recife - PE, CEP 50.010-928 

            </Typography>
            <Typography variant="body2" color="text.secondary">
              Email: pcpe@policiacivil.pe.gov.br
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Telefone: +55 81 3181.2100
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              Siga-nos
            </Typography>
            <Link href="" color="inherit">
              <Facebook />
            </Link>
            <Link
              href=""
              color="inherit"
              sx={{ pl: 1, pr: 1 }}
            >
              <Instagram />
            </Link>
            <Link href="" color="inherit">
              <Twitter />
            </Link>
          </Grid>
        </Grid>
        <Box mt={5}>
          <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="">
              Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}