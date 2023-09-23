import ResponsiveAppBar from '@/components/appbar';
import DrawerAppBar from '@/components/drawer';
import Grid from '@mui/material/Unstable_Grid2';
import Caroussel from '@/components/caroussel';
import CardX from '@/components/card';
import BoxX from '@/components/box';
import Footer from '@/components/footer';

export default function Home() {
    return (
<Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
    <Grid sm={0} md={2}>
    </Grid>
    <Grid xs={4} sm={8}>     
        <ResponsiveAppBar/> 
        <DrawerAppBar/>
        <Caroussel/>
        <Grid container padding={2} spacing={4} rowSpacing={2} display="flex" justifyContent="center" alignItems="center">
            <Grid >
                <CardX titulo='Dicas de Segurança' descricao='Importante se manter seguro da ação criminosa.' link='https://cartilha.cert.br/' imagem='/images/privacidade.png'/>
            </Grid>
            <Grid>
                <CardX titulo='Doutrina Nacional de Inteligência de Segurança Pública' descricao='A DNISP é um conjunto de conceitos, características, princípios, valores, normas, métodos, procedimentos, ações e técnicas que orientam e disciplinam a atividade de ISP.' link='https://dspace.mj.gov.br/bitstream/1/3749/1/5estudo-exposicao-de-motivo-e-proposta-para-uma-matriz-doutrinaria-a-ser-aplicada-aos-operadores-do-subsistema-de-inteligencia-de-seguranca-publica-sisp_403-511.pdf' imagem='/images/int.jpg'/>
            </Grid>  
            <Grid>
                <CardX titulo='Escola Segura' descricao='O Ministério da Justiça e Segurança Pública, em parceria com SaferNet Brasil, criou um canal exclusivo para recebimento de informações de ameaças e ataques contra as escolas.' link='https://www.gov.br/mj/pt-br/canais-de-denuncias/escolasegura' imagem='/images/escola.jpg'/>
            </Grid>                      
        </Grid> 
        <BoxX/>  
        <Footer/> 
    </Grid>
    <Grid sm={0} md={2}>
    </Grid>
</Grid>
)
}