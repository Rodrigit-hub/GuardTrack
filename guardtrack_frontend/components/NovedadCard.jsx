import {useNavigate} from "react-router-dom"


export function NovedadCard({empresa}) {

  const navigate = useNavigate()



  return (
    <div className="bg-zinc-800 p-3 hover:bg-zinc-700 hover:cursor-pointer"

      onClick={() => {
        navigate(`/novedad/${novedad.id}`)
      }}
      >

        <h1 className="font-bold uppercase">{novedad.fechaHoraAlta}</h1>
        <p className="text-slate-400">{novedad.fechaNovedad}</p>
        <p className="text-slate-400">{novedad.horaNovedad}</p>
        <p className="text-slate-400">{novedad.tipoNovedad}</p>
        <p className="text-slate-400">{novedad.descripcion}</p>
        
        
    </div>
  )
}
