#include <stdio.h>

int calcular_fatorial (int num1){
    if(num1 < 0){
        printf("Erro: Fatorial nao e definido para numeros negativos.");
        return 1;
    }
    else if(num1 == 0){
        printf("O fatorial de 0 e 1");
    }
    else if(num1 > 0){
        int fatorial = 1;
        for(int i = 1; i <= num1; i++){
           fatorial = fatorial * i;
        }
        printf("fatorial: %i", fatorial);
    }
}

int main(){

    int num1, resultado;
    printf("\nCalcular fatorial\n");
    printf("Informe o numero: ");
    scanf("%i",&num1);

    resultado = calcular_fatorial(num1);
   

    return 0;

}