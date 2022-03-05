class Mascota{
	constructor(nombre, categoria, fotos, descripcion, anunciante, ubicacion){
		this.nombre = nombre; // nombre de la mascota (o titulo del anuncio)
    this.categoria = categoria; // perro | gato | otro
    this.fotos = fotos; // links a las fotografías
    this.descripcion = descripcion; // descripción del anuncio
    this.anunciante = anunciante; // contacto con la persona que anuncia al animalito
    this.ubicacion = ubicacion; // muy importante
	}
	
	guardar(){
		// función para guardar un nuevo registro en la base de datos.
	}
	
}

class UsuarioAdoptante {
           constructor(nombre,ingreso,date_deleted,edad,domicilio,mascotas){
           this.nombre = nombre;
           this.ingreso = ingreso:
           this.date_deleted = date_deleted;
           this.edad = edad;
           this.domicilio = domicilio;
           this.mascotas = mascotas;
}

class UsuarioAnunciate {
            constructor(nombre,mascotas,historial)
            this.nombre = nombre;
            this.mascotas = mascotas;
            this.historial = historial;
            this.domicilio = domicilio;
}
