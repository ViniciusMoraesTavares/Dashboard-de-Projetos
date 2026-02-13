interface Valores { b?: number; h?: number; a?: number; r?: number; l?: number; d?: number; p?: number; }

let area: number = 0;

let triangulo: Valores = {
    b: 20,
    h: 10
}

let quadrado: Valores = {
    a: 40
}

let circulo: Valores = {
    r: 33
}

let trapezio: Valores = {
    l: 5,
    b: 6,
    h: 3
}

let losango: Valores = {
    d: 4,
    p: 7
}

function areaTriangulo(b: number, h: number): string {
    if(b > 0 && h > 0){
       area = b*h/2;
       return `A área do triângulo é ${area} centrimetros `;
    }
    else{
        return "Informe valores maiores que zero";
    }
}

function areaQuadrado(a: number): string {
    if(a>0){
        area = a*a;
        return `A área do quadrado é: ${area} centimetros`;
    }
    else{
        return "Informe valores maiores que zero";
    } 
}

function areaCirculo(r: number): string {
    if(r>0){
        area = 3.14 * (r*r);
        return `A área do circulo é: ${area} centimetros`;
    }
    else{
        return "Informe valores maior que zero";
    }
    
}

function areaTrapezio(l: number, b: number, h: number): string {
    if(b>0 && h>0 && l>0){
        area = ((b+l) * h)/2
        return `A área do trapézio é: ${area} centimetros`;
    }
    else{
        return "Informe valores maiores que zero";
    }
    
}

function areaLosango(d: number, p: number): string {
    if(d>0 && p>0){
        area = (d * p)/2
        return `A área do losango é: ${area} centimetros`;
    }
    else{
       return "Informe valores maiores que zero";
    }
}

console.log(areaTriangulo(triangulo.b || 0, triangulo.h || 0))
console.log(areaQuadrado(quadrado.a || 0))
console.log(areaCirculo(circulo.r || 0))
console.log(areaTrapezio(trapezio.l || 0, trapezio.b || 0, trapezio.h || 0))
console.log(areaLosango(losango.d || 0, losango.p || 0))