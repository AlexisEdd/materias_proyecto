import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';


export const Materias = () => {

    const [names, setNames] = useState([]);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search)
    const usuario = searchParams.get('name') || 'Invitado';
    const [materia, setMateria] = useState([]);
    const [horarios, setHorarios] = useState([]);

    useEffect(() => {
        const getName = async () => {
            try {
                const response = await axios.get('http://localhost:4000/users')
                setNames(response.data);
            } catch (error) {
                console.error('No se pudo obtener el nombre', error)
            }
        };
        getName();
    }, []);

const getMat = async () => {
            const {data} =  await axios.get('http://localhost:4000/materias')
            setMateria(data)
            const [{horarios}] = data
            setHorarios(horarios) 
        }
    useEffect(() => {
        getMat()
    }, []);

    return (
        <div>
            <div className='container mx-auto mt-3 text-center border border-5 border-bottom-0 border-info-subtle'>
                <h1>Bienvenido, {usuario}</h1>
            </div>

            <div className="container text-center mt-5">
                <div className=" mt-5 row align-items-start table-responsive">
                    <table className="table table-bordered table-borderless">
                        <thead>
                            <tr className=' table-light'>
                                <th>Clave de materia</th>
                                <th>Materia</th>
                                <th>Profesor</th>
                                <th>Horarios</th>

                            </tr>
                        </thead>
                        <tbody>
                            {materia.map(item => (
                                <tr key={item.id}>
                                    <td>{item.clave}</td>
                                    <td>{item.nombre}</td>
                                    <td>{item.profesor}</td>
                                    <td>
                                <ul>
                                    <select name="" id="">
                                     {horarios.map((horario, index) => (
                                        <option value=""> <li key={index}>{horario}</li></option>
                                    ))}
                                    </select>
                                   
                                </ul>
                            </td>
                                </tr>
                            ))}
                            

                        </tbody>
                    </table>

                    <form className=' d-flex flex-column'>

                    </form>
                </div>
            </div>
        </div>
    )
}
