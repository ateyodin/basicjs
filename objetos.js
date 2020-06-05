var miAuto = {
    marca: "tesla",
    color: "negro",
    modelo: "s3",
    annio: 2020,
    detalleDelAuto: function(){
        console.log(`Auto ${this.modelo} ${this.annio}`) //this hace referencia a su padre, miAuto
    }
};

miAuto.detalleDelAuto() // Acceder a la funcion dentro del objeto
miAuto.marca //para llamar cualquier elemento del objeto lo hacemos con el nombre de variable . y el elemento que queremos



