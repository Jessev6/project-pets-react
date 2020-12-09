import { Button, Card, CardActions, CardContent, Container, Grid, makeStyles, TextField, Typography } from '@material-ui/core';
import React, { forwardRef, useState } from 'react'
import { deletePet, updatePet } from '../../data/pet-repository';
import { usePets } from '../../hooks/pets';


const useStyles = makeStyles({
  title: {
    fontSize: "1.4rem",
    fontWeight: "bold"
  },

  controls: {
    marginTop: 16
  }
})


const EditPetModal = forwardRef((props, ref) => {
  const classes = useStyles();
  const { pet, closeTrigger } = props;

  const [name, setName] = useState(pet.name);
  const [animal, setAnimal] = useState(pet.animal);
  const [birthday, setBirthday] = useState(pet.birthday);
  const [color, setColor] = useState(pet.color);

  const { loadPets } = usePets();

  const onDeletePressed = async (id) => {
    if (await deletePet(id)) {
      await loadPets()
      closeTrigger()
    }
  }
  
  const onSavePressed = async (id) => {
    if (await updatePet({ id, name, animal, birthday, color })) {
      await loadPets()
      closeTrigger()
    }
  }

  return (
    <Container ref={ref} >
      <Card>
        <CardContent>
          <Typography className={classes.title}>Update {pet.name}</Typography>
          <Grid container className={classes.controls}>
            
            <TextField variant="filled" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField variant="filled" label="Animal" value={animal} onChange={(e) => setAnimal(e.target.value)} />
            <TextField variant="filled" label="Birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            <TextField variant="filled" label="Color" value={color} onChange={(e) => setColor(e.target.value)} />

          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => closeTrigger()} >Close</Button>

          <Button size="small" onClick={() => onDeletePressed(pet.id)} >Delete</Button>
          <Button size="small" color="primary" onClick={() => onSavePressed(pet.id)} >Save</Button>
        </CardActions>
      </Card>
    </Container>
  );
})

export default EditPetModal;