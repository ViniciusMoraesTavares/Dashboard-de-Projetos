#include <stdio.h>

int main()
{
    char operador = 'S';
    int num;

    while (operador == 'S' || operador == 's')
    {
        printf("Informe um numero: ");
        scanf("%d", &num);
        if (num > 10)
        {
            printf("O numero e maior que 10\n");
        }
        else if (num < 10)
        {
            printf("O numero e menor que 10\n");
        }
        else
        {
            printf("O numero e igual a 10\n");
        }        
        printf("Dejesa continuar (S/N)?: ");
        scanf(" %c", &operador);
    }
    return 0;
}