import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import DropDown from '../../components/Seletectors/DropDown/DropDown';
import NumberInput from '../../components/Seletectors/NumberInput/NumberInput';
import { updateFromValue, updateToValue, updateManufacturer, updateBody } from '../store/actions/filter';

const useStyles = makeStyles((theme) => ({
  paper: {
    width: '100%',
    height: 450,
  },
  priceTitle: {
    textAlign: 'center'
  },
  filterItem: {
    margin: theme.spacing(1),
    minWidth: '90%',
  },
}));

const Filter = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  const manufacturers = useSelector(state => state.filter.manufacturers);
  const bodies = useSelector(state => state.filter.bodies);
  const prices = useSelector(state => state.filter.prices);
  const vehicles = useSelector(state => state.fetchVehicles.vehicles);

  return (
    <Paper className={classes.paper}>
      <Grid container direction='column' justify='center' alignItems='stretch'>
        <Grid item>
          <DropDown
            label={'Manufacturer'}
            values={manufacturers.values}
            defaultValue={manufacturers.currentValue}
            styling={classes.filterItem}
            onValueChange={value => dispatch(updateManufacturer(value, vehicles))} />
        </Grid>
        <Grid item>
          <DropDown
            label={'Body Style'}
            values={bodies.values}
            defaultValue={bodies.currentValue}
            styling={classes.filterItem}
            onValueChange={value => dispatch(updateBody(value, vehicles))} />
        </Grid>
        <Grid item>
          <Typography
            gutterBottom
            variant='subtitle1'
            className={classes.priceTitle}
          >Price Range (R)</Typography>
        </Grid>
        <Grid item>
          <NumberInput
            label={'From'}
            defaultValue={prices.currentFrom}
            styling={classes.filterItem}
            min={prices.fromMin}
            max={prices.fromMax}
            onValueChange={value => dispatch(updateFromValue(value, vehicles))} />
        </Grid>
        <Grid item>
          <NumberInput
            label={'To'}
            defaultValue={prices.currentTo}
            styling={classes.filterItem}
            min={prices.toMin}
            max={prices.toMax}
            onValueChange={value => dispatch(updateToValue(value, vehicles))} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default Filter;
