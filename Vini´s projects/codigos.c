#include <stdio.h>

double funcao_IMC(double num1, double num2){
    return num1 / (num2 * num2);
}

int main(){

    double peso, altura, resultado;

    printf("\nInforme seu peso: ");
    scanf("%lf", &peso);
    printf("Informe sua altura em metros (ex: 1.70): ");
    scanf("%lf", &altura);

    resultado = funcao_IMC(peso, altura);
    printf("Seu IMC e: %.2lf\n\n", resultado);

    return 0;
}