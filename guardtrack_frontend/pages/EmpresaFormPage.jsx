import { get, useForm } from "react-hook-form";
import { useEffect } from "react";
import { createEmpresa, deleteEmpresa, updateEmpresa, getEmpresa } from "../api/empresas.api";
import { useNavigate, useParams } from "react-router-dom";

export function EmpresaFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue
    
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      //actualizando
      await updateEmpresa(params.id, data);
    } else {
    await createEmpresa(data);
  }
  navigate("/empresas");
  });

  useEffect (()=>{
    async function loadEmpresas() {
      if (params.id) {
        const {data: {nombre, direccion}} = await getEmpresa(params.id)  
        setValue('nombre', nombre)
        setValue('direccion', direccion)
        //setValue('') Otros atributos
      }
    }
    loadEmpresas()
  }, [])

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="nombre"
          {...register("nombre", { required: true })}
        />
        {errors.nombre && <span>This field is required</span>}

        <input
          type="text"
          placeholder="direccion"
          {...register("direccion", { required: true })}
        />
        {errors.direccion && <span>This field is required</span>}
        <textarea placeholder="Descripción" id="" rows="3"></textarea>
        <input type="boolean" placeholder="activo" />
        <button>Guardar</button>
      </form>

      {params.id && (
        <button
          onClick={async () => {
            const accepted = window.confirm("Are you sure?");
            if (accepted) {
              await deleteEmpresa(params.id);
              navigate("/empresas");
            }
          }}
        >
          DELETE
        </button>
      )}
    </div>
  );
}
