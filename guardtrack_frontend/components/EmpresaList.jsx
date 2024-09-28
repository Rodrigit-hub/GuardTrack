import {useEffect, useState} from "react";
import { getAllEmpresas } from "../api/empresas.api";
import { EmpresaCard } from "./EmpresaCard";


export function EmpresaList() {
    
    const [empresas, setEmpresas] = useState([]);
    
    useEffect(() => {
        async function loadEmpresas(){
            const res = await getAllEmpresas();
            setEmpresas(res.data);
        }
        loadEmpresas();
      
    }, []);

  return <div className="grid grid-cols-4 gap-4"> 
      {empresas.map(empresa => (
        <EmpresaCard key={empresa.id} empresa={empresa} />
      ))}
    </div>
  
}
