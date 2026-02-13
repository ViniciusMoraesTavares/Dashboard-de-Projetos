#include <stdio.h>

int main(){
    float peso, altura, imc;

    printf("\nInforme os valores para o calculo do IMC abaixo\n");
    printf("\n 1° - Informe seu Peso: ");
    scanf(" %f",&peso);
    printf("\n2° Informe sua Altura (Em metros ex: 1.70): ");
    scanf(" %f",&altura);

    imc = peso / (altura * altura);

    printf("\n Seu IMC é igual a: %0.2f\n",imc);
    printf("\nFim do programa!\n");

    return 0;
}