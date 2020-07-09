var triangulo1 = {
  lado1 : 20,
  lado2 : 20,
  base : 10
}

var triangulo2 = {
  lado1 : 15,
  lado2 : 15,
  base : 15
}

var triangulo3 = {
  lado1 : 15,
  lado2 : 20,
  base : 10
}



function areaTriangulo(){
  area1 = (triangulo1.lado1 * triangulo1.base)/2
  console.log(`El area del primer triangulo es ${area1}`)
  area2 = (triangulo2.lado1 * triangulo2.base)/2
  console.log(`El area del segundo triangulo es ${area2}`)
  area3 = (triangulo3.lado1 * triangulo3.base)/2
  console.log(`El area del segundo triangulo es ${area3}`)
}

const tri = 'triangulo:id1'

function tipoDeTriangulo(){
  switch('triangulos'){
    case tri.replace(':id',1).lado1 === tri.replace(':id',1).lado2 && tri.replace(':id',1).lado1 != tri.replace(':id',1).base:
      console.log(`Es un triangulo Isosceles!`)
      break
  }
}
