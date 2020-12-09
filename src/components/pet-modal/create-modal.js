import React, { forwardRef, useState } from 'react'
import { Button, Card, CardActions, CardContent, Container, Grid, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { createPet } from '../../data/pet-repository';
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

const CreatePetModal = forwardRef((props, ref) => {
  const { closeTrigger } = props;
  const classes = useStyles();

  const [name, setName] = useState("");
  const [animal, setAnimal] = useState("");
  const [birthday, setBirthday] = useState("");
  const [color, setColor] = useState("");

  const { loadPets } = usePets();

  const onCreatePressed = async () => {
    if (await createPet({name, animal, birthday, color})) {
      await loadPets();
      closeTrigger();
    }
  }

  return (
    <Container ref={ref} >
      <Card>
        <CardContent>
          <Typography className={classes.title}>Create Pet</Typography>
          <Grid container className={classes.controls}>
            
            <TextField variant="filled" label="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <TextField variant="filled" label="Animal" value={animal} onChange={(e) => setAnimal(e.target.value)} />
            <TextField variant="filled" label="Birthday" value={birthday} onChange={(e) => setBirthday(e.target.value)} />
            <TextField variant="filled" label="Color" value={color} onChange={(e) => setColor(e.target.value)} />

          </Grid>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => closeTrigger()}>Close</Button>

          <Button size="small" color="primary" onClick={() => onCreatePressed()}>Create</Button>
        </CardActions>
      </Card>
    </Container>
  );
})

export default CreatePetModal;