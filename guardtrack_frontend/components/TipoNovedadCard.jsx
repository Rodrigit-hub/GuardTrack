import {useNavigate} from "react-router-dom"


export function TipoNovedadCard({tiponovedad}) {

  const navigate = useNavigate()



  return (
    <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"

      onClick={() => {
        navigate(`/tiponovedad/${tiponovedad.id}`)
      }}
      >

        <h1 className="font-bold uppercase">{tiponovedad.nombre}</h1>
        <p className="text-slate-400">{tiponovedad.descripcion}</p>
        
        
    </div>
  )
}
