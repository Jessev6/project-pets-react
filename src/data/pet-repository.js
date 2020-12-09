import "axios";
import Axios from "axios";

export const getAllPets = async () => {
  const response = await Axios.get(`http://localhost:8080/api/pets`);

  if (response.status !== 200) {
    throw Error("Could not fetch pets from 'http://localhost:8080/api/pets'.")
  }

  return response.data
}

export const getPet = async (id) => {
  // TODO: Implement getPet
  throw Error("getPet is not implemented!")
}

export const createPet = async (pet) => {
  // TODO: Implement createPet
  throw Error("createPet is not implemented!")
}

export const updatePet = async (pet) => {
  // TODO: Implement updatePet
  throw Error("updatePet is not implemented!")
}

export const deletePet = async (id) => {
  // TODO: Implement deletePet
  throw Error("createPet is not implemented!")
}