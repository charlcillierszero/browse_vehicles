import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CartItem from '../../components/CartItem/CartItem';
import { removeVehicleFromCart } from '../store/actions/cart';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(1),
    width: 250,
    minHeight: 300,
    backgroundColor: '#DBDBDB',
  },
  title: {
    margin: theme.spacing(1),
    textAlign: 'center',
  },
  cartItem: {
    marginLeft: theme.spacing(2),
  },
}));

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.cartItems);
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <Grid container direction='column'>
        <Grid item className={classes.title}>
          <Typography gutterBottom variant='h5'>Cart</Typography>
        </Grid>
        {cartItems.map(i => (
          <Grid item key={i.id} className={classes.cartItem}>
            <CartItem name={`${i.manufacturer} ${i.model}`} onClick={() => dispatch(removeVehicleFromCart(i))} />
          </Grid>
        ))}

      </Grid>
    </Paper>
  );
}

export default Cart;
