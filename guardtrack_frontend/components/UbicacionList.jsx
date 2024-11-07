import {useEffect, useState} from "react";
import { UbicacionCard } from "./UbicacionCard.jsx";
import { getAllUbicacion } from "../api/ubicacion.api.js";


export function UbicacionList() {
    
    const [ubicacion, setUbicacion] = useState([]);
    
    useEffect(() => {
        async function loadUbicacion(){
            const res = await getAllUbicacion();
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
