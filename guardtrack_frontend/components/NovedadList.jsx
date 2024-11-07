import {useEffect, useState} from "react";
import { getAllNovedades } from "../api/novedad.api.js";
import { NovedadCard } from "./NovedadCard";


export function NovedadList() {
    
    const [novedad, setNovedad] = useState([]);
    
    useEffect(() => {
        async function loadNovedades(){
            const res = await getAllNovedades();
            setNovedades(res.data);
        }
        loadNovedades();
      
    }, []);

  return (<div class="grid grid-cols-3 gap-3"> 
    
      {novedad.map(novedad => (
        <NovedadCard key={Novedad.id} novedad={novedad} />
      ))}
    
    </div>
  )
}
