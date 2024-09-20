import {userForm} from "react-hook-form"

export function EmpresaFormPage() {

    const {register, handleSubmit} = userForm()

    const onSubmit = handleSubmit(data => {
      console.log(data)
    })

    return (
      <div>
        <form onSubmit={handleSubmit(data)}>
          <input type="text" placeholder="nombre" 
          {...register("nombre", {required: true})}
          />
          <input type="text" placeholder="direccion"
          {...register("direccion", {required: true})}
          />
          <textarea placeholder="Descripción" id="" rows="3"></textarea>
          <input type="boolean" placeholder="activo"/>
          <button>Guardar</button>
        </form>
      </div>
    )
  }
  