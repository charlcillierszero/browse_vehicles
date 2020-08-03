import React from 'react';
import Grid from '@material-ui/core/Grid';
import VehicleCard from './VehicleCard/VehicleCard';

const VehicleCards = props => {
  const { vehicles, addToCart, cartAlreadyContainsVehicle } = props;

  return (
    <Grid container spacing={2} direction='column' justify='flex-start' alignItems='stretch'>
      {
        vehicles.map(vehicle => (
          <Grid key={vehicle.id} item>
            <VehicleCard
              vehicle={vehicle}
              addToCart={addToCart}
              isAlreadyInCart={cartAlreadyContainsVehicle(vehicle)} />
          </Grid>
        ))
      }
    </Grid>
  );
}

export default VehicleCards;
