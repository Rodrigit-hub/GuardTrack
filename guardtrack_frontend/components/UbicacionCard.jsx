import {useNavigate} from "react-router-dom"


export function UbicacionCard({ubicacion}) {

  const navigate = useNavigate()



  return (
    <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"

      onClick={() => {
        navigate(`/ubicacion/${ubicacion.id}`)
      }}
      >

        <h1 className="font-bold uppercase">{ubicacion.direccion}</h1>
        <p className="text-slate-400">{ubicacion.barrio}</p>
        <p className="text-slate-400">{ubicacion.barrio}</p>
        
        
    </div>
  )
}
