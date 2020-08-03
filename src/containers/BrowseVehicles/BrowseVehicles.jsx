import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Cart from '../Cart/Cart';
import Filter from '../Filter/Filter';
import VehicleCards from '../../components/VehicleCards/VehicleCards';
import { getAllVehicles } from '../store/actions/fetchVehicles';
import { addVehicleToCart, toggleCart } from '../store/actions/cart';
import CustomModal from '../../hoc/CustomModal/CustomModal';
import CustomBackdrop from '../../components/CustomBackdrop/CustomBackdrop';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(2),
  }
}));

const BrowseVehicles = () => {
  const classes = useStyles();
  const isLoading = useSelector(state => state.fetchVehicles.loading);
  const filteredVehicles = useSelector(state => state.filter.filteredVehicles);
  const cartItems = useSelector(state => state.cart.cartItems);
  const showCart = useSelector(state => state.cart.showCart);
  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllVehicles()), [dispatch]);

  const cartAlreadyContainsVehicle = vehicle => cartItems.findIndex(item => item.id === vehicle.id) !== -1;

  return (
    <div className={classes.wrapper}>
      <CustomBackdrop isLoading={isLoading} />
      <Grid container direction='row' justify='center' alignItems='flex-start' spacing={2}>
        <Grid container direction='column' item xs={12} spacing={2}>
          <Grid item><Typography gutterBottom variant='h3'>Browse Vehicles</Typography></Grid>
          <Grid container direction='row' item>
            <Grid item xs={3}><Filter /></Grid>
            <Grid item xs={9}>
              <VehicleCards
                vehicles={filteredVehicles}
                addToCart={vehicle => dispatch(addVehicleToCart(vehicle))}
                cartAlreadyContainsVehicle={cartAlreadyContainsVehicle} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <CustomModal open={showCart} toggle={() => dispatch(toggleCart())}>
        <Cart />
      </CustomModal>
    </div>
  );
}

export default BrowseVehicles;
