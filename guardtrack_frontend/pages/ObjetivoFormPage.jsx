import { get, useForm } from "react-hook-form";
import { useEffect } from "react";
import { createObjetivo, deleteObjetivo, updateObjetivo, getObjetivo } from "../api/objetivo.api.js";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";


export function ObjetivoFormPage() {
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
      await updateObjetivo(params.id, data);
      toast.success("Objetivo Actualizada")
    } else {
      await createObjetivo(data);
      toast.success("Objetivo Creada")
    }
    navigate("/objetivo");
  });

  useEffect(() => {
    async function loadObjetivo() {
      if (params.id) {
        const { data: { nombre, direccion, descripcion, ubicacion, empresa } } = await getObjetivo(params.id)
        setValue('nombre', titular)
        setValue('direccion', direccion)
        setValue('descripcion', descripcion)
        setValue('ubicacion', ubicacion)
        setValue('empresa', empresa)
        //setValue('') Otros atributos
      }
    }
    loadObjetivo()
  }, [])

  return (
    <div className="max-w-xl mx-auto">
    <form onSubmit={onSubmit}>

      {/* Nombre */}
      <input
        type="text"
        placeholder="Nombre"
        {...register("titular", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.nombre && <span>Este campo es requerido</span>}

      {/* Dirección */}
      <input
        type="text"
        placeholder="Dirección"
        {...register("direccion", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.direccion && <span>Este campo es requerido</span>}

      {/* Descripción */}
      <input
        type="text"
        placeholder="Descripción"
        {...register("descripcion", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.descripcion && <span>Este campo es requerido</span>}

      {/* Ubicación */}
      <input
        type="text"
        placeholder="Ubicación"
        {...register("ubicacion", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.ubicacion && <span>Este campo es requerido</span>}

      {/* Empresa */}
      <input
        type="text"
        placeholder="Empresa"
        {...register("contacto", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.contacto && <span>Este campo es requerido</span>}

      {/* Botón Guardar */}
      <button className="bg-indigo-500 p-3 px-1 rounded-lg block w-full mt-3">
        Guardar
      </button>
    </form>

      {params.id && (
        <div className="flex justify-end">
          <button
          className="bg-red-700 p-3 px-1 rounded-lg w-48 mt-3"
          onClick={async () => {
            const accepted = window.confirm("Estás seguro?");
            if (accepted) {
              await deleteObjetivo(params.id);
              toast.success("Objetivo Eliminado")
            }
            navigate("/objetivo");
          }}
        >
          DELETE
        </button>
        </div>
      )}
    </div>
  );
}
