import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useSelector, dispatch, useDispatch } from 'react-redux';
import { REMOVE_FROM_CART } from '../store/productSlice';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export const Products = () => {
  const classes = useStyles();
  const products = useSelector(({ product }) => product);
  const dispatch = useDispatch();
  return (
    <Card className={classes.root}>
      {products.filter((product) =>
        product.added).map((product) => {
          return (
            <div>
              <CardMedia
                className={classes.media}
                image="/static/images/cards/contemplative-reptile.jpg"
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.title}
          </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {product.description}
          </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary">
                  {product.price}
        </Button>
                <Button size="small" color="primary" onClick={()=>dispatch(REMOVE_FROM_CART(product.id))}>
                  Delete
        </Button>
              </CardActions>
            </div>
          )
        })}
    </Card>
  );
}
