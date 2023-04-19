from aux import *
import random as Random

def encrypt():
    # São inicializadas duas flags para verificar se os números inseridos são válidos
    flagP = 0
    flagQ = 0

    while(flagP == 0):
        # É usado um try/except para garantir que o valor inserido seja numérico
        try:
            p = int(input("Digite um número primo para P: "))
            # Verifica se o número é primo
            if(not verificaPrimo(p)):
                print("P não é primo\n")
            else:
            # Se o número for primo, a flag é alterada para 1, quebrando o loop
                flagP = 1
        except:
            print("P não é numérico\n")

    while(flagQ == 0):
        # É usado um try/except para garantir que o valor inserido seja numérico
        try:
            q = int(input("Digite um número primo para Q: "))
            # Verifica se o número é primo
            if(not verificaPrimo(q)):
                print("Q não é primo\n")
            else:
            # Se o número for primo, a flag é alterada para 1, quebrando o loop
                flagQ = 1
        except:
            print("Q não é numérico\n")

    # Calcula N e Z
    n = p * q
    # Aqui é usado o totiente de Euler para calcular Z
    z = (p - 1) * (q - 1)

    # Imprime os valores de P e Q na tela
    print("\n --- Valores ---")
    print("P = " + str(p))
    print("Q = " + str(q))

    # Imprime os valores de N e Z na tela
    print("N = " + str(n))
    print("Z = " + str(z))

    # Calcula os números coprimos de Z
    coprimos = calculaCoprimos(z)
    # Escolhe um número coprimo de Z aleatoriamente
    coprimoEscolhido = Random.choice(coprimos)
    # Imprime o número coprimo de Z escolhido
    print("D = " + str(coprimoEscolhido))

    # Calcula E
    e = calculaE(coprimoEscolhido, z)
    # Imprime o valor de E na tela
    print("E = " + str(e))

    # O usuário insere o texto a ser criptografado
    text = input("\nInsira o texto a ser criptografado: ")
    # O texto é criptografado usando uma função auxiliar
    textoCriptografado = encryptText(text, coprimoEscolhido, n)

    # Imprime o texto criptografado na tela
    print("\n --- Resultado ---")
    print("Texto criptografado: " + textoCriptografado)
    print("\n")

def decrypt():
    flagE = 0
    flagN = 0
    # O usuário insere o texto a ser descriptografado
    text = input("Insira o texto a ser descriptografado: ")

    # O usuário insere o valor de E
    while(flagE == 0):
        # É usado um try/except para garantir que o valor inserido seja numérico
        try:
            e = int(input("Insira o valor de E: "))
            flagE = 1
        except:
            print("E não é numérico\n")

    # O usuário insere o valor de N
    while(flagN == 0):
        # É usado um try/except para garantir que o valor inserido seja numérico
        try:
            n = int(input("Insira o valor de n: "))
            flagN = 1
        except:
            print("N não é numérico\n")

    # O texto é descriptografado usando uma função auxiliar
    textoDescriptografado = decryptText(text, e, n)

    # Imprime o texto descriptografado na tela
    print("\n --- Resultado ---")
    print("Texto descriptografado: " + textoDescriptografado)

def main():
    flag=0
    while(flag==0):
        # O usuário escolhe a opção desejada
        print("--- RSA ---")
        print("1 - Criptografar")
        print("2 - Descriptografar")
        print("3 - Sair")
        option = input("Insira a opção desejada: ")
        print('\n')
        # O sistema redireciona para a função desejada
        if(option == "1"):
            encrypt()
        elif(option == "2"):
            decrypt()
        elif(option == "3"):
            flag=1
            exit()
        else:
            print("Opção inválida, tente novamente")


main()