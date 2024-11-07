import {useNavigate} from "react-router-dom"


export function ObjetivoCard({objetivo}) {

  const navigate = useNavigate()



  return (
    <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"

      onClick={() => {
        navigate(`/objetivo/${objetivo.id}`)
      }}
      >

        <h1 className="font-bold uppercase">{objetivo.nombre}</h1>
        <p className="text-slate-400">{objetivo.direccion}</p>
        
        
    </div>
  )
}
