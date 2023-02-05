const Mostrar_pais = ()=> import('./components/paises/Mostrar.vue')
const Editar_pais = ()=> import('./components/paises/Editar.vue')

const Mostrar_ciudad = ()=> import('./components/ciudades/Mostrar.vue')
const Editar_ciudad = ()=> import('./components/ciudades/Editar.vue')

const Mostrar_equipo = ()=> import('./components/equipos/Mostrar.vue')
const Editar_equipo = ()=> import('./components/equipos/Editar.vue')

export const routes =[
    {
        name:'mostrar_pais',
        path:'/pais',
        component: Mostrar_pais
    },
    {
        name:'editar_pais',
        path:'/editar/:id',
        component: Editar_pais
    },
    {
        name:'mostrar_ciudad',
        path:'/ciudad',
        component: Mostrar_ciudad
    },
    {
        name:'editar_ciudad',
        path:'/editar/:id',
        component: Editar_ciudad
    }
    // {
    //     name:'mostrar_equipo',
    //     path:'/equipo',
    //     component: Mostrar_equipo
    // },
    // {
    //     name:'editar_equipo',
    //     path:'/editar/:id',
    //     component: Editar_equipo
    // },
]
