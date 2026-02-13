let dado = [1,2,3,4,5,6]
let numeroDado = Math.floor(Math.random() * dado.length)
let resultado = dado[numeroDado]


switch(resultado){
    case 1:
        console.log("  .")
    break;
    case 2:
        console.log(".\n  .")
    break;
    case 3:
        console.log(".\n  .\n    .")
    break;
    case 4:
        console.log(".  .\n.  .")
    break;
    case 5:
        console.log(".   .\n  .\n.   .")
    break;
    case 6:
        console.log(".   .\n.   .\n.   .")
}