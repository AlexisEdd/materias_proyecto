import { createBrowserRouter, } from "react-router-dom";
import { Materias } from "./components/Materias";
import { Barra } from "./components/Barra";
import { RegistroMaterias } from "./components/RegistroMaterias";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Barra/>
    },
    {
        path: "/Materia",
        element: <Materias/>

    },
    {
        path: "/RegistroMaterias",
        element: <RegistroMaterias/>
    }
])

export default router