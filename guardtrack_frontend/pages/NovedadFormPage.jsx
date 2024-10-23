import { get, useForm } from "react-hook-form";
import { useEffect } from "react";
import { createNovedad, deleteNovedad, updateNovedad, getNovedad } from "../api/novedad.api.js";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";


export function NovedadFormPage() {
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
      await updateNovedad(params.id, data);
      toast.success("Novedad Actualizada")
    } else {
      await createNovedad(data);
      toast.success("Novedad Creada")
    }
    navigate("/novedad");
  });

  useEffect(() => {
    async function loadObjetivo() {
      if (params.id) {
        const { data: { fechaHoraAlta, fechaNovedad, horaNovedad, tipoNovedad, descripcion } } = await getObjetivo(params.id)
        setValue('fechaHoraAlta', fechaHoraAlta)
        setValue('fechaNovedad', fechaNovedad)
        setValue('horaNovedad', horaNovedad)
        setValue('tipoNovedad', tipoNovedad)
        setValue('descripcion', descripcion)
        //setValue('') Otros atributos
      }
    }
    loadNovedad()
  }, [])

  return (
    <div className="max-w-xl mx-auto">
    <form onSubmit={onSubmit}>

      {/* Fecha Hora Alta */}
      <input
        type="datetime-local"
        placeholder="Fecha Hora Alta"
        {...register("fechaHoraAlta", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.fechaHoraAlta && <span>Este campo es requerido</span>}

      {/* Fecha de Novedad */}
      <input
        type="date"
        placeholder="Fecha de Novedad"
        {...register("fechaNovedad", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.direccion && <span>Este campo es requerido</span>}

      {/* Hora de Novedad */}
      <input
        type="time"
        placeholder="Hora de Novedad"
        {...register("horaNovedad", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.horaNovedad && <span>Este campo es requerido</span>}

      {/* Tipo de Novedad */}
      <input
        type="text"
        placeholder="Tipo de Novedad"
        {...register("tipoNovedad", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.tipoNovedad && <span>Este campo es requerido</span>}

      {/* Descripcion */}
      <input
        type="text"
        placeholder="Descripcion"
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
            const accepted = window.confirm("Estás seguro?");
            if (accepted) {
              await deleteNovedad(params.id);
              toast.success("Novedad Eliminada")
            }
            navigate("/novedad");
          }}
        >
          DELETE
        </button>
        </div>
      )}
    </div>
  );
}
