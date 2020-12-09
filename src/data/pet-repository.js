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
  const response = await Axios.get(`http://localhost:8080/api/pets/${id}`);

  if (response.status !== 200) {
    throw Error("Could not fetch pets from 'http://localhost:8080/api/pets'.")
  }

  return response.data
}

export const createPet = async (pet) => {
  const response = await Axios.post(`http://localhost:8080/api/pets`, pet);

  if (response.status !== 201) {
    console.error("Could not create pet due to unkown error")
    return false
  }

  return true
}

export const updatePet = async (pet) => {
  const response = await Axios.put(`http://localhost:8080/api/pets/${pet.id}`, pet);

  if (response.status !== 202) {
    console.error("Could not update pet due to unkown error")
    return false
  }

  return true
}

export const deletePet = async (id) => {
  // TODO: Implement deletePet
  throw Error("createPet is not implemented!")
}