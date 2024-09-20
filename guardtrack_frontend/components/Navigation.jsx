import { Link } from "react-router-dom"


export function Navigation() {
  return (
    <div>
        <Link to="/empresas"><h1>Empresa App</h1></Link>
        
        <Link to="/crear-empresa">Crear empresa</Link>
    </div>
  )
}
