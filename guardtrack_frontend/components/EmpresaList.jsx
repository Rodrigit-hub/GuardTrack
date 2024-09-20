import {useEffect} from "react";
import { getAllEmpresas } from "../api/empresas.api";



export function EmpresaList() {
    
    
    useEffect(() => {
        async function loadEmpresas(){
            const res = await getAllEmpresas();
            console.log(res)
        }
        loadEmpresas();
      
    }, []);

  return (
    <div>EmpresaList</div>
  )
}
