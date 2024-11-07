import {useEffect, useState} from "react";
import { getAllTipoNovedades } from "../api/tiponovedad.api";
import { TipoNovedadCard } from "./TipoNovedadCard";


export function TipoNovedadList() {
    
    const [tiponovedad, setTipoNovedad] = useState([]);
    
    useEffect(() => {
        async function loadTipoNovedad(){
            const res = await getAllTipoNovedades();
            setTipoNovedad(res.data);
        }
        loadTipoNovedad();
      
    }, []);

  return (<div class="grid grid-cols-3 gap-3"> 
    
      {tiponovedad.map(tiponovedad => (
        <TipoNovedadCard key={tiponovedad.id} tiponovedad={tiponovedad} />
      ))}
    
    </div>
  )
}
