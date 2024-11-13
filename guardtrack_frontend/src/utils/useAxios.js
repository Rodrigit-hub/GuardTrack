import axios from "axios"              
import jwt_decode from "jwt-decode"    
import dayjs from "dayjs"              
import { useContext } from "react"     
import AuthContext from "../context/AuthContext" 

// Definimos la URL base del backend para los usuarios
const baseUrl = "http://127.0.0.1:8000/usuario"

// Custom hook para crear una instancia de axios con autenticación JWT
const useAxios = () => {
    // Obtenemos los tokens de autenticación, setUser y setAuthTokens del contexto
    const [authTokens, setUser, setAuthTokens] = useContext(AuthContext)

    // Creamos una instancia de axios con la URL base y el encabezado de autorización
    const axiosInstance = axios.create({
        baseURL, // URL base del servidor
        headers: {Authorization: `Bearer ${authTokens?.access}`} // JWT en el header
    })

    // Interceptor para manejar la renovación del token antes de cada solicitud
    axiosInstance.interceptors.request.use(async req => {
        // Decodificamos el token JWT para obtener la información del usuario y su tiempo de expiración
        const user = jwt_decode(authTokens)
        
        // Verificamos si el token ha expirado usando la diferencia entre el tiempo actual y la expiración
        const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1

        // Si el token aún es válido, retornamos la solicitud sin hacer cambios
        if(!isExpired) return req

        // Si el token ha expirado, solicitamos un nuevo token usando el refresh token
        const response = await axios.post(`${baseUrl}/token/refresh`,{
            refresh: authTokens.refresh // Refresh token enviado al backend
        })

        // Guardamos el nuevo token en el almacenamiento local
        localStorage.setItem("authToken", JSON.stringify(response.data))

        // Actualizamos el token y el usuario en el contexto
        setAuthTokens(response.data)
        setUser(jwt_decode(response.data.access))

        // Actualizamos el header de autorización con el nuevo token de acceso
        req.headers.Authorization = `Bearer ${response.data.access}`
        return req
    })

    // Retornamos la instancia de axios para usarla en el resto de la aplicación
    return axiosInstance
}

export default useAxios
