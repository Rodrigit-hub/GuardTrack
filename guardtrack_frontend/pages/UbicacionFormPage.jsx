import { get, useForm } from "react-hook-form";
import { useEffect } from "react";
import { createUbicacion, deleteUbicacion, updateUbicacion, getUbicacion } from "../api/ubicacion.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";


export function UbicacionFormPage() {
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
      await updateUbicacion(params.id, data);
      toast.success("Ubicacion Actualizada")
    } else {
      await createUbicacion(data);
      toast.success("Ubicacion Creada")
    }
    navigate("/ubicacion");
  });

  useEffect(() => {
    async function loadUbicacion() {
      if (params.id) {
        const { data: { direccion, barrio, telefono} } = await getUbicacion(params.id)
        setValue('direccion', direccion)
        setValue('barrio', barrio)
        setValue('telefono', telefono)
        //setValue('') Otros atributos
      }
    }
    loadUbicacion()
  }, [])

  return (
    <div className="max-w-xl mx-auto">
    <form onSubmit={onSubmit}>
      {/* Direccion */}
      <input
        type="text"
        placeholder="Direccion"
        {...register("direccion", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.direccion && <span>Este campo es requerido</span>}

      {/* Barrio */}
      <input
        type="text"
        placeholder="Barrio"
        {...register("barrio", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.barrio && <span>Este campo es requerido</span>}

      {/* Teléfono */}
      <input
        type="text"
        placeholder="Teléfono"
        {...register("cuit", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.telefono && <span>Este campo es requerido</span>}


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
              await deleteUbicacion(params.id);
              toast.success("Ubicacion Eliminada")
            }
            navigate("/ubicacion");
          }}
        >
          DELETE
        </button>
        </div>
      )}
    </div>
  );
}
