#include <stdio.h>
#include <string.h>
#include <math.h>

#define TEXTO_MAX 1000

int main(void){
    char texto[TEXTO_MAX];

    printf("\nDigite um texto: ");
    fgets(texto, sizeof(texto), stdin);

    int contLetras = 0, contPalavras = 0, contFrases = 0;
    int tamTexto = strlen(texto);

    for(int i = 0; i < tamTexto; i++){
        if((texto[i] >= 'a' && texto[i] <= 'z') || (texto[i] >= 'A' && texto[i] <= 'Z')){
            contLetras++;
        }

        if(texto[i] == ' ' || texto[i] == '\0'){
            contPalavras++;
        }

        if(texto[i] == '.' || texto[i] == '!' || texto[i] == '?'){
            contFrases++;
        }
    }

    float mediaLetras = (100 / (float)contPalavras) * (float)contLetras;
    float mediaFrases = (100 / (float)contPalavras) * (float)contFrases;
    int indiceEscolarilidade = round(0.0588 * mediaLetras - 0.296 * mediaFrases - 15.8);

    if(indiceEscolarilidade < 1){
        indiceEscolarilidade = 1;
    }
    else if (indiceEscolarilidade > 16){
        indiceEscolarilidade = 16;
    }

    switch (indiceEscolarilidade){
        case 1 ... 3:
            printf("\nNivel de escolaridade do texto: Pré-escola\n");
            break;
        case 4 ... 5:
            printf("\nNivel de escolaridade do texto: Ensino Fundamental 1\n");
            break;
        case 6 ... 9:
            printf("\nNivel de escolaridade do texto: Ensino Fundamental 2\n");
            break;
        case 10 ... 13:
            printf("\nNivel de escolaridade do texto: Ensino Médio\n");
            break;
        case 14 ... 16:
            printf("\nNivel de escolaridade do texto: Ensino Superior\n");
            break;
        default:
            printf("Erro\n");
            break;
    }

    printf("Indice da Escolaridade: %i\n", indiceEscolarilidade);
    printf("Frases: %i\n", contFrases);
    printf("Palavras: %i\n", contPalavras);
    printf("Letras: %i\n", contLetras);
    printf("\n");

    return 0;
}