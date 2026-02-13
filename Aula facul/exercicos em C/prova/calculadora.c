#include <stdio.h>

int main(){
    float num1, num2, resultado;
    char operador;

    printf("\nInforme o numero 1: ");
    scanf(" %f", &num1);
    printf("\nInforme o numero 2: ");
    scanf(" %f", &num2);
    printf("\nDigite o operador: ");
    scanf(" %c", &operador);

    if (operador == '+'){
        resultado = num1 + num2;
        printf("\nO resultado da soma é igual a: %0.2f\n", resultado);
    }
    else if (operador == '-'){
        resultado = num1 - num2;
        printf("\nO resultado da subtração é igual a: %0.2f\n", resultado);
    }
    else if (operador == '*'){
        resultado = num1 * num2;
        printf("\nO resultado da multiplicação é igual a: %0.2f\n", resultado);
    }
    else if (operador == '/'){
        if (num2 == 0){
            printf("\nErro, divisão por zero\n");
        }
        else{
            resultado = num1 / num2;
            printf("\nO resultado da divisão é igual a: %0.2f\n", resultado);
        }
    }
    else{
        printf("\nInforme um operador matematico (+ - / *)\n");
    }

    return 0;
}