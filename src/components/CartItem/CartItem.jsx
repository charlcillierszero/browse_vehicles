import React from 'react';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const CartItem = props => {
  const { name, onClick } = props;
  return (
    <Grid container direction='row' justify='space-around' alignItems='center'>
      <Grid item xs={10}>{name}</Grid>
      <Grid item xs={2}><IconButton onClick={onClick} aria-label='delete'><DeleteIcon /></IconButton></Grid>
    </Grid>
  );
}

export default CartItem;
