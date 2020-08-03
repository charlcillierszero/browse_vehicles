import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: '80%',
  },
  image: {
    width: 256,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    width: '100%',
    maxHeight: '100%',
  },
}));

const VehicleCard = props => {
  const { vehicle, addToCart, isAlreadyInCart } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={4}>
          <Grid container justify='center' item xs={12} sm={6}>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt={`${vehicle.manufacturer} ${vehicle.model}`} src={`https://warpfrontendtestserver.herokuapp.com/public/${vehicle.manufacturer}_${vehicle.model}.jpg`} />
            </ButtonBase>
          </Grid>
          <Grid container spacing={2} item xs={12} sm={6}>
            <Grid container direction='column' spacing={2} item xs={12} >
              <Typography gutterBottom variant='subtitle1'>Price: R{vehicle.price}</Typography>
              <Typography gutterBottom variant='subtitle1'>Make: {vehicle.manufacturer}</Typography>
              <Typography gutterBottom variant='subtitle1'>Model: {vehicle.model}</Typography>
              <Typography gutterBottom variant='subtitle1'>Body: {vehicle.body}</Typography>
            </Grid>
            <Grid container justify='flex-end' item xs={12}>
              <Button
                variant='contained'
                color='primary'
                onClick={() => isAlreadyInCart ? null : addToCart(vehicle)}
                disabled={isAlreadyInCart}
              >Add to Cart</Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default VehicleCard;
