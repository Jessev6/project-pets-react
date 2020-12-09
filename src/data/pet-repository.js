import "axios";
import Axios from "axios";
import { config } from "../conf/config";

export const getAllPets = async () => {
  const response = await Axios.get(`${config.API_URL}/api/pets`);

  if (response.status !== 200) {
    throw Error(`Could not fetch pets from '${config.API_URL}/api/pets'.`)
  }

  return response.data
}

export const getPet = async (id) => {
  const response = await Axios.get(`${config.API_URL}/api/pets/${id}`);

  if (response.status !== 200) {
    throw Error(`Could not fetch pets from '${config.API_URL}/api/pets'.`)
  }

  return response.data
}

export const createPet = async (pet) => {
  const response = await Axios.post(`${config.API_URL}/api/pets`, pet);

  if (response.status !== 201) {
    console.error("Could not create pet due to unkown error")
    return false
  }

  return true
}

export const updatePet = async (pet) => {
  const response = await Axios.put(`${config.API_URL}/api/pets/${pet.id}`, pet);

  if (response.status !== 202) {
    console.error("Could not update pet due to unkown error")
    return false
  }

  return true
}

export const deletePet = async (id) => {
  const response = await Axios.delete(`${config.API_URL}/api/pets/${id}`)

  if (response.status !== 204) {
    console.error("Could not delete pet due to unkown error")
    return false
  }

  return true
}