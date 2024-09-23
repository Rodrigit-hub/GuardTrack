import {useEffect, useState} from "react";
import { getAllEmpresas } from "../api/empresas.api";
import {EmpresaCard} from "./EmpresaCard";


export function EmpresaList() {
    
    const [empresas, setEmpresas] = useState([]);
    
    useEffect(() => {
        async function loadEmpresas(){
            const res = await getAllEmpresas();
            setEmpresas(res.data);
        }
        loadEmpresas();
      
    }, []);

  return <div>
      {empresas.map(empresa => (
        <EmpresaCard key={empresa.id} empresa={empresa} />
      ))}
    </div>
  
}
