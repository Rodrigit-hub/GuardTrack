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
        const { data: { nombre, direccion } } = await getEmpresa(params.id)
        setValue('nombre', nombre)
        setValue('direccion', direccion)
        //setValue('') Otros atributos
      }
    }
    loadEmpresas()
  }, [])

  return (
    <div className="max-w-xl mx-auto">
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="nombre"
          {...register("nombre", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.nombre && <span>This field is required</span>}

        <input
          type="text"
          placeholder="direccion"
          {...register("direccion", { required: true })}
          className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        />
        {errors.direccion && <span>This field is required</span>}
        <textarea placeholder="Descripción" id="" rows="3"
                  className="bg-zinc-700 p-3 rounded-lg block w-full mb-3"
        ></textarea>
        <h1 className="flex items-center">Activo <input type="checkbox"
            className="px-3 ml-2 h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"/></h1>
        
        <button className="bg-indigo-500 p-3 px-1 rounded-lg block w-full mt-3">Guardar</button>
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
