import { Link } from "react-router-dom"


export function Navigation() {

  //Navegacion Empresas
  return (
    <div className="flex justify-between py-3">
      <Link to="/empresas">
        <h1 className="font-bold text-3x1 mb-4" >Empresa App</h1>
      </Link>

      <button className="bg-indigo-500 px-3 py-2 rounded-lg ">
        <Link to="/crear-empresa">Crear empresa</Link>
      </button>
    </div>
  )

  //Navegacion Tipo Novedad
  return (
    <div className="flex justify-between py-3">
      <Link to="/tiponovedad">
        <h1 className="font-bold text-3x1 mb-4" >Tipo Novedad App</h1>
      </Link>

      <button className="bg-indigo-500 px-3 py-2 rounded-lg ">
        <Link to="/crear-tiponovedad">Crear Tipo de Novedad</Link>
      </button>
    </div>
  )    

  //Navegacion Ubicacion
  return (
    <div className="flex justify-between py-3">
      <Link to="/ubicacion">
        <h1 className="font-bold text-3x1 mb-4" >Ubicacion App</h1>
      </Link>

      <button className="bg-indigo-500 px-3 py-2 rounded-lg ">
        <Link to="/crear-ubicacion">Crear Ubicacion</Link>
      </button>
    </div>
  )

  //Navegacion Objetivo
  return (
    <div className="flex justify-between py-3">
      <Link to="/objetivo">
        <h1 className="font-bold text-3x1 mb-4" >Tipo Objetivo App</h1>
      </Link>

      <button className="bg-indigo-500 px-3 py-2 rounded-lg ">
        <Link to="/crear-objetivo">Crear Objetivo</Link>
      </button>
    </div>
  )
  
  //Navegacion Novedad
  return (
    <div className="flex justify-between py-3">
      <Link to="/novedad">
        <h1 className="font-bold text-3x1 mb-4" >Novedad App</h1>
      </Link>

      <button className="bg-indigo-500 px-3 py-2 rounded-lg ">
        <Link to="/crear-empresa">Crear Novedad</Link>
      </button>
    </div>
  )
}
