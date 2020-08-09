//Exportando um módulo criado

function areaCirculo(raio){
    return 3.14 * (raio ** 2);
}

const areaQuadrado = (lado) => lado * 2;

export {areaCirculo, areaQuadrado};//necessita para ser exportado