import { useState } from 'react';
import { getAllPets } from '../data/pet-repository';


export const usePets = () => {
  const [pets, setPets] = useState(null);

  const loadPets = async () => {
    setPets(await getAllPets())
  }

  return { pets, loadPets }
}
