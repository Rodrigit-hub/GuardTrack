import { get, useForm } from "react-hook-form";
import { useEffect } from "react";
import { createTipoNovedad, deleteTipoNovedad, updateTipoNovedad, getTipoNovedad } from "../api/tiponovedad.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";


export function TipoNovedadFormPage() {
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
      await updateTipoNovedad(params.id, data);
      toast.success("Tipo de Novedad Actualizada")
    } else {
      await createTipoNovedad(data);
      toast.success("Tipo de Novedad Creada")
    }
    navigate("/tiponovedad");
  });

  useEffect(() => {
    async function loadTipoNovedad() {
      if (params.id) {
        const { data: { nombre, descripcion } } = await getTipoNovedad(params.id)
        setValue('nombre', nombre)
        setValue('descripcion', descripcion)
        //setValue('') Otros atributos
      }
    }
    loadUbicacion()
  }, [])

  return (
    <div className="max-w-xl mx-auto">
    <form onSubmit={onSubmit}>
      {/* Nombre */}
      <input
        type="text"
        placeholder="Nombre"
        {...register("nombre", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.nombre && <span>Este campo es requerido</span>}

      {/* Descripción */}
      <input
        type="text"
        placeholder="Descripción"
        {...register("descripcion", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.descripcion && <span>Este campo es requerido</span>}

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
            const accepted = window.confirm("Are you sure?");
            if (accepted) {
              await deleteTipoNovedad(params.id);
              toast.success("Tipo de Novedad Eliminada")
            }
            navigate("/tiponovedad");
          }}
        >
          DELETE
        </button>
        </div>
      )}
    </div>
  );
}
