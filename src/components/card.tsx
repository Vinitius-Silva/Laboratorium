import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

export default function CardX(props: any) {
    return ( 
        <Card sx={{ width: 300,
            height: 400, }}>
            <CardMedia
                sx={{ height: 220, width: 300}}
                image={props.imagem}
                title={props.titulo}
                style={{borderRadius:"Spx"}}
            />
            <CardContent sx={{ height: 140, width: 300}}>
                <Typography gutterBottom variant="h5" component="div">
                {props.titulo}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                {props.descricao}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Compartilhe</Button>
                <Button size="small" href={props.link}>Leia Mais</Button>
            </CardActions>
        </Card>
    )
}