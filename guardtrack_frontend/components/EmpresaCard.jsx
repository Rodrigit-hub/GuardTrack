import {useNavigate} from "react-router-dom"

export function EmpresaCard({empresa}) {

  const navigate = useNavigate()



  return (
    <div style={{background: "black"}}

      onClick={() => {
        navigate(`/empresas/${empresa.id}`)
      }}
      >

        <h1>{empresa.nombre}</h1>
        <p>{empresa.direccion}</p>
        <hr/>
    </div>
  )
}
