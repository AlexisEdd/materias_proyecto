import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios'


export const Barra = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [ocultarLink, setOcultarLink] = useState(true);
  const [datos, setDatos] = useState([]);
  const navigate = useNavigate()
  const [error, setError] = useState('')

  const [cargaDatos, setCargaDatos] = useState({
    email: '',
    password: ''
  });

  const getData = async () => {
    const response = await axios.get("http://localhost:4000/users")
    setDatos(response.data)
  }

  // Comparacion de datos
  const handleSubmit = (event) => {
    event.preventDefault();
    datos.forEach((dato) => {
      if (dato.email == cargaDatos.email && dato.password == cargaDatos.password) {
        navigate(`/Materia?name=${dato.name}`)
        console.log('Correcto')
        return
      } else {
        setError('Datos incorrectos')
      }
    })

  }

  const showFunction = () => {
    setOcultarLink(!ocultarLink)
    setMostrarFormulario(!mostrarFormulario)
    getData()
  }

  // Verificar datos
  const handleChange = (carga) => {
    const { name, value } = carga.target
    setCargaDatos(cargaDatos => ({
      ...cargaDatos,
      [name]: value
    }))
  };

  // STATE ERROR Y MUESTRA SI ERR




  // P1: Crear State para almacenar datos form
  // P2: crea funcion p almacenar datos en el state cuando se haga clic en Acceder
  // P3: Sobre la misma funcion verificar datos de form con datos obtenidos del API
  // P4: Redireccionar a Materias si el Login es correcto

  return (
    <div className='contenedor h-100'>
      <div className='portada'>
        <img className=' mx-5 figure-img' src="https://pinotepa.tecnm.mx/wp-content/uploads/2020/03/LOGO_TECNM_GRIS-421x180.png" alt="" />
        <h1 className=' mx-4 d-inline-block text-primary '>SELECCION DE MATERIAS</h1>
        <br />

        {ocultarLink && (
          <Link onClick={() => showFunction()}>Ingresar</Link>
        )}



        {mostrarFormulario && (
          <div className=' d-flex align-items-center justify-content-center '>

            {
              <form onSubmit={handleSubmit} className=' col-4 container-fluid border border-opacity-100'>
                <div >
                  <div className='mt-3'>
                    <h1>Inicia sesion</h1>
                  </div>
                  <div class="mb-3 row">
                    <label for="inputUser" class=" mt-3 col-sm-2 col-form-label">Correo</label>
                    <div class="col-sm-10 mt-3">
                      <input onChange={handleChange} name='email' type='text' class="form-control" id="inputUser" placeholder='Correo electronico' />
                    </div>
                  </div>
                  <div class="mb-3 row">
                    <label for="inputPassword" class="col-sm-2 col-form-label">Contraseña</label>
                    <div class="col-sm-10">
                      <input onChange={handleChange} name='password' type="password" class="form-control" id="inputPassword" placeholder='Ingresar contraseña' />
                    </div>
                  </div>
                  <button type='submit' className='btn mt-3 mb-lg-2 btn-success'>
                    Acceder
                  </button>
                </div>
              </form>


            }


          </div>)}
        {
          datos.map(dato => (
            <p key={dato.id}>{dato.email}</p>
          ))
        }

        {error &&
          <p className=' bg-warning'>{error}</p>
        }


      </div>
    </div>
  )
}
