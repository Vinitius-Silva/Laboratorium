import ResponsiveAppBar from '@/components/appbar';
import DrawerAppBar from '@/components/drawer';
import Grid from '@mui/material/Unstable_Grid2';
import Footer from '@/components/footer';
import FormPropsTextFields from '@/components/form';

export default function cadOperacao() {
    return (
<Grid container columns={{ xs: 4, sm: 8, md: 12 }}>
    <Grid sm={0} md={2}>
    </Grid>
    <Grid xs={4} sm={8}>     
        <ResponsiveAppBar/> 
        <DrawerAppBar/>        
        <FormPropsTextFields/>          
        <Footer/> 
    </Grid>
    <Grid sm={0} md={2}>
    </Grid>
</Grid>
)
}