import axios from "axios"

const ubicacionApi = axios.create({
  baseURL:'http://localhost:8000/guardias/guardias_api/ubicacion'
})

//Forma abreviada de funcion, al ser simple no necesita return
export const getAllUbicaciones = () => ubicacionApi.get('/'); 

export const getUbicaciones = (id) => ubicacionApi.get(`/${id}/`)

//Forma no abreviada de funcion
export const createUbicacion = (ubicacion) => {
    return ubicacionApi.post('/', ubicacion)
}

export const deleteUbicacion = (id) =>
  ubicacionApi.delete(`/${id}/`)

export const updateUbicacion = (id, ubicacion) => 
  ubicacionApi.put(`/${id}/`, ubicacion);


