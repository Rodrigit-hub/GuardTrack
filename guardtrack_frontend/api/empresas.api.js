import axios from "axios"

const empresaApi = axios.create({
    baseURL:'http://localhost:8000/empresa/api/v1/empresa/'
})

//Forma abreviada de funcion, al ser simple no necesita return
export const getAllEmpresas = () => empresaApi.get('/'); 

export const getEmpresa = (id) => empresaApi.get(`/${id}/`)

//Forma no abreviada de funcion
export const createEmpresa = (empresa) => {
    return empresaApi.post('/', empresa)
}

export const deleteEmpresa = (id) =>
    empresaApi.delete(`/${id}/`)

export const updateEmpresa = (id, empresa) => empresaApi.put(`/${id}/`, empresa); 
