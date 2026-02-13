#include <stdio.h>

int main(){
    float base, area, altura;

    printf("\n Informe as medidas do triangulo para o calcula da area\n");
    printf("\n 1° - Informe a Base: ");
    scanf(" %f",&base);
    printf("\n 2° - Informe a Altura: ");
    scanf(" %f",&altura);

    area = (base * altura) / 2;

    printf("\n A area do trigulo é igual: %0.2f\n",area);
    printf("\nFim do programa!\n");

    return 0;
}