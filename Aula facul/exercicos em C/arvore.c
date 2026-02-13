#include <stdio.h>
#include <stdlib.h>

struct Node {
    int data;              
    struct Node* left;      
    struct Node* right;     
};

struct Node* newNode(int value) {
    struct Node* node = (struct Node*) malloc(sizeof(struct Node)); 
    node->left = NULL;          
    node->right = NULL;         
    return node;                
}

int main() {
    struct Node* root = newNode(1);

    root->left = newNode(2);    
    root->right = newNode(3);   
    root->left->left = newNode(4);
    root->left->right = newNode(5);
    root->right->left = newNode(6);
    root->right->right = newNode(7);

    printf("Raiz: %d\n", root->data);
    printf("Filho esquerdo da raiz: %d\n", root->left->data);
    printf("Filho direito da raiz: %d\n", root->right->data);

    return 0;
}
