#include <stdio.h>
#include <ctype.h>

void mensagens(){
    printf("Mensagem 1: Java é muito chato\n");
    printf("Mensagem 2: Aprendi HTML, agora sou DEV\n");
    printf("Mensagem 3: Quero Ganhar em dolar\n");
    printf("Mensagem 4: Eu sou o milior\n");
    printf("Mensagem 5: ai q dlc o verão\n");
}

int main(){

    int escolha;

    while(1){
        printf("\n");
        printf("\n ============================== \n");
        printf("|1.         Mensagem 1         |\n");
        printf("|2.         Mensagem 2         |\n");
        printf("|3.         Mensagem 3         |\n");
        printf("|4.         Mensagem 4         |\n");
        printf("|5.         Mensagem 5         |\n");
        printf("|6. Mostrar todas mensagem 1-5 |\n");
        printf("|------------------------------|\n");
        printf("|0. Sair                       |\n");
        printf(" ============================== \n");

        printf("\nEscolha uma opção de 1 a 6: ");
        scanf(" %i", &escolha);

        switch(escolha){
        case 0:
            printf("0 - Saindo do programa.\n");
            printf("Obrigado por usar o programa. Até a próxima!\n");
            return 0;
        case 1:
            printf("\nMensagem 01: Java é muito chato");
            break;
        case 2:
            printf("\nMensagem 02: Aprendi HTML, agora sou DEV");
            break;
        case 3:
            printf("\nMensagem 03: Quero Ganhar em dolar");
            break;
        case 4:
            printf("\nMensagem 04: Eu sou o milior");
            break;
        case 5:
            printf("\nMensagem 05: ai q dlc o verão");
            break;
        case 6:
            printf("\n");
            mensagens();
            break;
        default:
            printf("\nPor favor infome um numero de 1 a 6");
            continue;
        }

        printf("\nDeseja fazer novamente? (S/N): ");
        scanf(" %c", &escolha);
        escolha = tolower(escolha);
        
        if(escolha == 'n'){
            printf("\nObrigado por usar o programa. Até a próxima!\n");
            break;
        }
        else if(escolha != 's'){
            printf("Resposta inválida. Por favor, responda com 's' ou 'n'.\n");
            printf("Repetindo o código...\n");
        }
    }

    printf("\nFim do programa\n");
    return 0;
}