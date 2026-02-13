#include <stdio.h>

void ordenar(int arr[], int tamanho){
    for(int i = 0; i < tamanho - 1; i++){
        for(int j = 0; j < tamanho - i - 1; j++){
            if(arr[j] > arr[j+1]){
                int troca = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = troca;
            }
        }
    }
}

int main(){
    int arr[] = {10,5,7,4,2,1,6,3,8,9};
    int tamanho = sizeof(arr) / sizeof(arr[0]);

    printf("\n Array original: ");
    for(int i = 0; i < tamanho; i++){
        printf("%d ", arr[i]);
    }
    printf("\n");
    ordenar(arr, tamanho);
    printf("\n Array ordenado: ");

    for(int i = 0; i < tamanho; i++){
        printf("%d ", arr[i]);
    }

    return 0;
}