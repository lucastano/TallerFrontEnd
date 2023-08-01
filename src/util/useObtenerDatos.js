import { useSelector } from "react-redux/";

export const useObtenerNombreDepartamento=()=>{
    const departamentos=useSelector(state=>state.listaDepartamentos);

    const obtenerDepartamento=(id)=>{
        const departamento=departamentos.find(d=>d.id==id);
        return departamento.nombre;
    }
    return obtenerDepartamento;

}

export const useObtenerNombreCiudad=()=>{
    const ciudades=useSelector(state=>state.listaCiudades);

    const obtenerCiudad=(id)=>{
        const ciudad=ciudades.find(c=>c.id==id);
        return ciudad.nombre;
    }
    return obtenerCiudad;
}

export const useObtenerNombreOcupacion=()=>{
    const ocupaciones=useSelector(state=>state.listaOcupaciones);

    const obtenerOcupacion=(id)=>{
        const ocupacion=ocupaciones.find(c=>c.id==id);
        return ocupacion.ocupacion;
    }
    return obtenerOcupacion;
}