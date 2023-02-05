<template>
   <div class="wrapper d-flex align-items-stretch">
			<nav id="sidebar">
				<div class="custom-menu">
					<button type="button" id="sidebarCollapse" class="btn btn-primary">
	          <i class="fa fa-bars"></i>
	          <span class="sr-only">Toggle Menu</span>
	        </button>
        </div>
				<div class="p-4">
		  		<h1><a href="index.html" class="logo">Gestion de Equipos</a></h1>
	        <ul class="list-unstyled components mb-5">
	          <li class="active">

	            <!-- <a href="#"><span class="fa-brands fa-font-awesome"></span>   Paises</a> -->
                <router-link exact-active-class="active" to="/pais" class="nav-link" ><span class="fa-brands fa-font-awesome"></span> Paises</router-link>
	          </li>
	          <li>
	              <!-- <a href="#"><span class="fa fa-user mr-3"></span> Ciudades</a> -->
                  <router-link exact-active-class="active" to="/ciudad" class="nav-link" ><span class="fa fa-user mr-3"></span> Ciudades</router-link>
	          </li>
	          <li>
              <a href="#"><span class="fa fa-briefcase mr-3"></span> Equipos</a>
	          </li>


	          <li>
              <a href="#"><span class="fa fa-paper-plane mr-3"></span> Contacts</a>
	          </li>
	        </ul>

	        <div class="mb-5">
						<h3 class="h6 mb-3">Subscribe for newsletter</h3>
						<form action="#" class="subscribe-form">
	            <div class="form-group d-flex">
	            	<div class="icon"><span class="icon-paper-plane"></span></div>
	              <input type="text" class="form-control" placeholder="Enter Email Address">
	            </div>
	          </form>
					</div>



	      </div>
    	</nav>

        <!-- Page Content  -->
      <div id="content" class="p-4 p-md-5 pt-5">
        <router-view>

        </router-view>
      </div>
		</div>
</template>
