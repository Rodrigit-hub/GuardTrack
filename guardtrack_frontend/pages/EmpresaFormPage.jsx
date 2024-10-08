import { get, useForm } from "react-hook-form";
import { useEffect } from "react";
import { createEmpresa, deleteEmpresa, updateEmpresa, getEmpresa } from "../api/empresas.api";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-hot-toast";


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
      toast.success("Empresa actualizada")
    } else {
      await createEmpresa(data);
      toast.success("Empresa creada")
    }
    navigate("/empresas");
  });

  useEffect(() => {
    async function loadEmpresas() {
      if (params.id) {
        const { data: { titular, direccion, razonSocial, cuit, contacto, descripcion, activo} } = await getEmpresa(params.id)
        setValue('titular', titular)
        setValue('direccion', direccion)
        setValue('descripcion', descripcion)
        setValue('razonSocial', razonSocial)
        setValue('cuit', cuit)
        setValue('contacto', contacto)
        setValue('activo', activo)
        //setValue('') Otros atributos
      }
    }
    loadEmpresas()
  }, [])

  return (
    <div className="max-w-xl mx-auto">
    <form onSubmit={onSubmit}>
      {/* Titular */}
      <input
        type="text"
        placeholder="Titular"
        {...register("titular", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.titular && <span>Este campo es requerido</span>}

      {/* Razon Social */}
      <input
        type="text"
        placeholder="Razón Social"
        {...register("razonSocial", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.razonSocial && <span>Este campo es requerido</span>}

      {/* CUIT */}
      <input
        type="text"
        placeholder="CUIT"
        {...register("cuit", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.cuit && <span>Este campo es requerido</span>}

      {/* Dirección */}
      <input
        type="text"
        placeholder="Dirección"
        {...register("direccion", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.direccion && <span>Este campo es requerido</span>}

      {/* Contacto */}
      <input
        type="text"
        placeholder="Contacto"
        {...register("contacto", { required: true })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
      />
      {errors.contacto && <span>Este campo es requerido</span>}

      {/* Descripción */}
      <textarea
        placeholder="Descripción"
        {...register("descripcion", { required: false })}
        className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        rows="3"
      ></textarea>

      {/* Activo */}
      <h1 className="flex items-center">
        Activo
        <input
          type="checkbox"
          {...register("activo")}
          className="px-3 ml-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
        />
      </h1>

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
              await deleteEmpresa(params.id);
              toast.success("Empresa eliminada")
            }
            navigate("/empresas");
          }}
        >
          DELETE
        </button>
        </div>
      )}
    </div>
  );
}
