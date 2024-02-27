import React from 'react'

export const RegistroMaterias = () => {
  
  // form registro de materia 
  // boton que redirija a registro  Mater
  // obtener datos en state

  return (
    <>
      <div className=' container mx-auto text-center mt-5'>
        <h1>REGISTRO DE MATERIAS</h1>
      </div>
      <div className='container text-center border border-5 border-primary-subtle mt-3'>

        <div className='row'>
          <form action="" className=' col-md-6 mx-auto mt-5'>

            <div className=' form-group'>
              <label htmlFor="">Nombre:</label>
              <input className='form-control' type="text" placeholder='Escribe el nombre de la materia' />
            </div>
            <div className=' form-group'>
              <label htmlFor="">Clave:</label>
              <input className='form-control' type="text" placeholder='Escribe la clave de la materia' />
            </div>
            <div className=' form-group'>
              <label htmlFor="">Profesor:</label>
              <input className='form-control' type="text" placeholder='Escribe el nombre del profesor' />
            </div>
            <div className=' form-group'>
              <label htmlFor="">Horario:</label>
              <input className='form-control' type="time" />
            </div>

            <div className=' mt-4 mb-5' >
              <input className=' btn btn-outline-success' type="button" value="Registrar Materia" />
            </div>
          </form>
        </div>
      </div>
    </>

  )
}
