#include <stdio.h>

int main(){
    
    // variaveis
    float num1, num2, resultado;
    char operador;
    char pergunta = 'S';

    // repetição do codigo
    while (pergunta == 'S' || pergunta == 's')
    {
        printf("Informe o primeiro numero: ");
        scanf("%f", &num1);

        printf("Informe o segundo numero: ");
        scanf("%f", &num2);

        printf("Informe a operacao: ");
        scanf(" %c", &operador);

        // Contas
        if (operador == '+')
        {
            resultado = num1 + num2;
            printf("Resultado: %.2f\n", resultado);
        }

        else if (operador == '-')
        {
            resultado = num1 - num2;
            printf("Resultado: %.2f\n", resultado);
        }

        else if (operador == '*')
        {
            resultado = num1 * num2;
            printf("Resultado: %.2f\n", resultado);
        }

        else if (operador == '/')
        {
            if (num2 != 0)
            {
                resultado = num1 / num2;
                printf("Resultado: %.2f\n", resultado);
            }

            else
            {
                printf("Divisao por zero\n");
            }
        }

        else
        {
            printf("\nInforme um operador valido\n");
        }

        printf("\n Deseja continuar (S/N)?: ");
        scanf(" %c", &pergunta);
    }
    return 0;
}