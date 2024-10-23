import {useEffect, useState} from "react";
import { getAllObjetivos } from "../api/objetivo.api";
import { ObjetivoCard } from "./ObjetivoCard";


export function ObjetivoList() {
    
    const [objetivo, setObjetivo] = useState([]);
    
    useEffect(() => {
        async function loadObjetivo(){
            const res = await getAllObjetivos();
            setObjetivo(res.data);
        }
        loadObjetivo();
      
    }, []);

  return (<div class="grid grid-cols-3 gap-3"> 
    
      {objetivo.map(objetivo => (
        <ObjetivoCard key={objetivo.id} objetivo={objetivo} />
      ))}
    
    </div>
  )
}
