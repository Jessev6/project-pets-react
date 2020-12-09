import { useState } from 'react';
import { getAllPets } from '../data/pet-repository';


export const usePets = () => {
  // TODO: Implement usePets hook

  return { pets: null, loadPets: () => {
      throw Error("usePets hook not implemented!") 
    }
  }
}
