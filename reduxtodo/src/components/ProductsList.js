import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { ADD_TO_CART, REMOVE_FROM_CART } from '../store/productSlice';
import { useSelector, useDispatch } from 'react-redux';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignItems: "center"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export const ProductList = () => {
    const classes = useStyles();
    const count = useSelector((state)=> {return state});
    const dispatch = useDispatch();
    return (
        <div className={classes.root}>
            <Grid container>

                {/* <button onClick={()=>dispatch(ADD_TO_CART())}>increment</button> */}
                {
                    count.product.map((product, ind) => {
                        
                        return (
                            <Grid item xs={8} spacing={2} >
                                <Card className={classes.root}>
                                    <CardActionArea>
                                        <CardMedia
                                            className={classes.media}
                                            image={product.imageUrl}
                                            title={product.title}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {product.title}
                                            </Typography>
                                            <Typography variant="body2" color="textSecondary" component="p">
                                                {product.description}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">
                                            ${product.price}
                                        </Button>
                                        <Button size="small" color="primary" onClick={()=>dispatch(ADD_TO_CART({payload: product.id}))}>
                                            Add To Cart
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>

                        )
                    })
                }
            </Grid>
        </div>
    );
}
