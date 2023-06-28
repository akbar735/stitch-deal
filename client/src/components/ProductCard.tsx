import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import ProductRating from './ProductRating';
import { ProductPropsType } from '../types/ProductTypes';
import { numberToCurrency } from '../utils/common';

const StyledCard = styled(Card)(( { theme } ) => ({
    margin: theme.spacing(2),
}))

export default function ProductCard({productDetail, ...props }: ProductPropsType) {
  return (
    <StyledCard sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="180"
        sx = {{objectFit: 'contain'}}
        image= {productDetail.imgUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {productDetail.name}
        </Typography>
        <Typography gutterBottom variant="h6" component="div">
            {numberToCurrency(productDetail.price, 'INR')}
        </Typography>
        <ProductRating  value={productDetail.rating}/>
        <Typography variant="body2" color="text.secondary" sx = {{mt: 1}}>
            {productDetail.description.split(" ").slice(0, 20).join(" ")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => props.onEdit(productDetail.productuctId)}>Edit</Button>
        <Button size="small" color="secondary" onClick={() => props.onDelete(productDetail.productuctId)}>Remove</Button>
      </CardActions>
    </StyledCard>
  );
}