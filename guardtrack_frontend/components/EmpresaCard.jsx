import {useNavigate} from "react-router-dom"


export function EmpresaCard({empresa}) {

  const navigate = useNavigate()



  return (
    <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"

      onClick={() => {
        navigate(`/empresas/${empresa.id}`)
      }}
      >

        <h1 className="font-bold uppercase">{empresa.nombre}</h1>
        <p className="text-slate-400">{empresa.direccion}</p>
        
        
    </div>
  )
}
