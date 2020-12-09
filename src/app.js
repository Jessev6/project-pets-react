import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import { Container, Fab } from '@material-ui/core';
import { Add } from "@material-ui/icons";
import { Fragment, useState } from 'react';

import PetList from './components/pet-list/pet-list';
import PetModal from './components/pet-modal/pet-modal';
import { getPet } from './data/pet-repository';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 480
  },

  fab: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2)
  }
}))

function App() {
  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState("create");
  const [pet, setPet] = useState(null);

  

  const onPetSelected = async (id) => {
    setPet(await getPet(id))
    setMode("edit")
    setIsOpen(true)
  }
  
  const openModal = () => {
    setMode("create");
    setIsOpen(true);
  }
  
  const closeModal = () => {
    setIsOpen(false);
  }

  return (
    <Fragment>
      <PetModal pet={pet} mode={mode} isOpen={isOpen} close={closeModal} > </PetModal>

      <Container className={classes.list}>
        <PetList onPetSelected={onPetSelected} />
      </Container>

      <Fab onClick={openModal} className={classes.fab} color="primary" aria-label="add">
        <Add />
      </Fab>
    </Fragment>
  );
}

export default App;
