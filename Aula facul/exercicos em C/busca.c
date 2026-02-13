#include <stdio.h>

int busca(int arr[], int tamanho, int alvo){
    for(int i = 0; i < tamanho; i++){
        if(arr[i] == alvo){
            return i;
        }
    }
    return -1;
}

int main(){
        int arr[] = {1,3,5,7,9,11};
        int tamanho = sizeof(arr) / sizeof(arr[0]);
        int alvo;

        printf("\nnforme o valor para a busca: ");
        scanf("%i",&alvo);

        int resultado = busca(arr, tamanho, alvo);
        if(resultado != -1){
            printf("\nValor encontrado na lista\n");
        }
        else{
            printf("\nValor nao encontrado na lista\n");
        }

        return 0;
}