import axios from "axios"

export const getAllEmpresas = () => {
    return axios.get('http://localhost:8000/empresa/api/v1/empresa/')
}
