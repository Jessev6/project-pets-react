import React, { Fragment, useEffect } from 'react'
import { CircularProgress, Typography } from '@material-ui/core'
import { makeStyles } from "@material-ui/styles";

import PetCard from "./pet-card";
import { usePets } from '../../hooks/pets';

const useStyles = makeStyles({
  card: {
    margin: 10
  }

})
const PetList = (props) => {
  const { onPetSelected } = props;

  const classes = useStyles();
  const { pets, loadPets } = usePets();

  useEffect(() => {
    setInterval(() => loadPets(), 100);
  }, []);

  if (!pets) {
    return (
      <div>
        <CircularProgress />
      </div>
    )
  }

  if (pets.length === 0) {
    return (
      <Typography>No pets found</Typography>
    )
  }

  return (<Fragment>
    {pets.map((pet) => 
      <div onClick={() => onPetSelected(pet.id)} key={pet.id} className={classes.card}>
        <PetCard pet={pet} />
      </div>
    )}
  </Fragment>) 
}

export default PetList;