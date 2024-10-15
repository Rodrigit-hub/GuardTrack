import axios from "axios"

const novedadApi = axios.create({
  baseURL:'http://localhost:8000/guardias/guardias_api/novedad'
})

//Forma abreviada de funcion, al ser simple no necesita return
export const getAllNovedades = () => novedadApi.get('/'); 

export const getNovedades = (id) => novedadApi.get(`/${id}/`)

//Forma no abreviada de funcion
export const createNovedad = (novedad) => {
    return ubicacionApi.post('/', ubicacion)
}

export const deleteNovedad = (id) =>
  novedadApi.delete(`/${id}/`)

export const updateNovedad = (id, novedad) => 
  novedadApi.put(`/${id}/`, novedad);


