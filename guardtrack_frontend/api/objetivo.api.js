import axios from "axios"

const objetivoApi = axios.create({
  baseURL:'http://localhost:8000/guardias/guardias_api/objetivo'
})

//Forma abreviada de funcion, al ser simple no necesita return
export const getAllObjetivos = () => objetivoApi.get('/'); 

export const getObjetivoss = (id) => objetivoApi.get(`/${id}/`)

//Forma no abreviada de funcion
export const createUbjetivo = (objetivo) => {
    return ubicacionApi.post('/', ubicacion)
}

export const deleteObjetivo = (id) =>
  objetivoApi.delete(`/${id}/`)

export const updateObjetivo = (id, objetivo) => 
  objetivoApi.put(`/${id}/`, objetivo);


