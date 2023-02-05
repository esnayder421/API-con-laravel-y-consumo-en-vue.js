<template>
    <div class="container">
        <div>
            <center>
            <h1><span class=" badge bg-dark" > GESTION DE PAISES </span></h1>

             </center>
        </div>
<br>

        <div>
            <!-- Button trigger modal -->
            <center>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Ingresar Nuevo
                </button>
            </center>

<br>
<br>

<!-- Modal -->
<form v-on:submit.prevent="crear">
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="card">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nombre del Pais:</label>
                        <input type="text" class="form-control" name="nombre" v-model="pais.nombre" id="" placeholder="Ingrese Un Nombre">
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">

            <button type="submit" data-bs-dismiss="modal" class="btn btn-outline-success">Guardar</button>
        </div>
        </div>
    </div>
    </div>
</form>







<!-- Modal -->
<form v-on:submit.prevent="crear">
    <div class="modal fade" id="exampleModa2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <div class="card">
                <div class="card-body">
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Nombre del Pais:</label>
                        <input type="text" class="form-control" name="nombre" v-model="pais.nombre" id="" placeholder="Ingrese Un Nombre">
                    </div>
                </div>
            </div>
        </div>
        <div class="modal-footer">

            <button type="submit" data-bs-dismiss="modal" class="btn btn-outline-success">Guardar</button>
        </div>
        </div>
    </div>
    </div>
</form>




        </div>


        <div class="table-responsive">
            <table class="table table-bordered border-primary">
                <thead class="table-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">NOMBRE</th>
                        <th scope="col">ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for=" pais in paises" :key="pais.id" class="">
                        <td scope="row">{{ pais.id }}</td>
                        <td>{{ pais.nombre }}</td>
                        <td>
                            <button data-bs-toggle="modal" data-bs-target="#exampleModa2" class="btn btn-outline-info">Editar</button>
                            <button @click="eliminar_pais(pais.id)" class="btn btn-outline-danger"><i class="fa-solid fa-trash"></i></button>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>



    </div>

</template>
<script>

    export default{

        name:"paises",
        data(){
            return{
                paises:[],
                pais:{},
                mensaje:[],
                actualizar:{
                    nombre:""
                }
            }
        },
        mounted(){
            this.mostrar_paises()
            toastr["success"]("My name is Inigo Montoya. You killed my father. Prepare to die!")
        },
        methods:{
            async mostrar_paises(){
                await this.axios.get('/api/pais')
                    .then(response=>{
                        this.paises = response.data
                    })
                    .catch(error=>{
                        this.pais = []
                    })
            },
            crear(){
                console.log(this.pais)
                this.axios.post('/api/pais', this.pais)
                .then(response=>{
                    Swal.fire({
                        position: 'top-end',
                        width:'300px',
                        icon: 'success',
                        title: 'Pais guardado exitosamente',
                        showConfirmButton: false,
                        timer: 1500
                        })
                    this.mostrar_paises()
                })
                .catch(error=>{
                    console.log(error)
                })

            },
            eliminar_pais(id){


                    Swal.fire({
                        title: 'Are you sure?',
                        text: "You won't be able to revert this!",
                        icon: 'warning',
                        showCancelButton: true,
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                        confirmButtonText: 'Yes, delete it!'
                        }).then((result) => {
                        if (result.isConfirmed) {
                            this.axios.delete('api/pais/'+id)
                            Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'

                            )
                            this.mostrar_paises()
                        }
                 })
            }

        }
    }
</script>
