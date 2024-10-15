import axios from "axios"

const tiponovedadApi = axios.create({
  baseURL:'http://localhost:8000/guardias/guardias_api/tipoNovedad'
})

//Forma abreviada de funcion, al ser simple no necesita return
export const getAllTipoNovedades = () => tiponovedadApi.get('/'); 

export const getTipoNovedades = (id) => tiponovedadApi.get(`/${id}/`)

//Forma no abreviada de funcion
export const createTipoNovedad = (tipoNovedad) => {
    return tiponovedadApi.post('/', tipoNovedad)
}

export const deleteTipoNovedad = (id) =>
  tiponovedadApi.delete(`/${id}/`)

export const updateTipoNovedad = (id, tipoNovedad) => 
  tiponovedadApi.put(`/${id}/`, tipoNovedad);


