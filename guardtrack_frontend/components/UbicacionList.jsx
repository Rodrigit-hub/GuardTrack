import {useEffect, useState} from "react";
import { getAllUbicaiones } from "../api/ubicacion.api";
import { EmpresaCard } from "./UbicacionCard.jsx";


export function UbicacionList() {
    
    const [ubicacion, setUbicacion] = useState([]);
    
    useEffect(() => {
        async function loadUbicacion(){
            const res = await getAllUbicaiones();
            setUbicacion(res.data);
        }
        loadUbicacion();
      
    }, []);

  return (<div class="grid grid-cols-3 gap-3"> 
    
      {ubicacion.map(ubicacion => (
        <UbicacionCard key={ubicacion.id} ubicacion={ubicacion} />
      ))}
    
    </div>
  )
}
