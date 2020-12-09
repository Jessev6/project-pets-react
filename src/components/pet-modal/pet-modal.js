import { Modal, Typography } from '@material-ui/core';
import React from 'react'
import CreatePetModal from './create-modal';
import EditPetModal from './edit-modal';


const PetModal = (props) => {
  const { pet, mode, isOpen, close } = props;

  if (isOpen) { 
    if (mode === "edit" && pet) {
      return (
        <Modal open={isOpen} onClose={close} disableAutoFocus>
          <EditPetModal pet={pet} closeTrigger={close} />
        </Modal>
      )
    }
    
    if (mode === "create") {
      return (
        <Modal open={isOpen} onClose={close} disableAutoFocus>
          <CreatePetModal closeTrigger={close} />
        </Modal>
      )
    }

    return (
      <Modal open={isOpen} onClose={close} disableAutoFocus>
        <Typography>Unknown mode: {mode}</Typography>
      </Modal>
    )
  }

  return <div></div>
}

export default PetModal;