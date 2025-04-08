import { Veiculo } from "./Veiculo";  // Importa a classe Veiculo de outro arquivo (Veiculo.ts)
import prompt from "prompt-sync";     // Importa a biblioteca prompt-sync para entrada de dados


const teclado = prompt();           // Cria uma instância do prompt-sync para ler entradas do usuário

console.log('Criação de veículo:');            // Mensagem de criação de veículo 
const carro: Veiculo = criaVeiculo();       // Chama a função criaVeiculo para criar um novo veículo

while(true){              // Loop infinito para o menu de opções
    console.log("|------------- Menu ------------|");                 
    console.log("| 1 - Acelerar                  |");           
    console.log("| 2 - Frear                     |");
    console.log("| 3 - Subir marcha              |");
    console.log("| 4 - Descer marcha             |");
    console.log("| 5 - Imprimir dados do veículo |");
    console.log("| 6 - Ativar NITRO              |");
    console.log("| 0 - Sair                      |");
    console.log("|------------- Menu ------------|");

    const opcao = +teclado('Escolha uma opção: ');                 // Lê a opção do usuário
    if(opcao === 0){ // Se a opção for 0, sai do loop
        break;                   
    }                        // Executa a ação de acordo com a opção escolhida
    switch (opcao) {           
        case 1:
            acelerar(carro);   // Chama a função para acelerar o veículo
            break;
        case 2:
            frear(carro);
            break;
        case 6:
            ativarNitro(carro); // Chama a função para ativar o nitro
        default:
            break;
    }
}

console.table(carro);    // Exibe os dados do veículo em formato de tabela no console

/**
 * Função que acelera o veículo, aumentando a velocidade com base na potência,
 * apenas se ele não estiver em ponto morto (marcha 0)
 */
function acelerar(veiculo: Veiculo): void{
    if(veiculo.marchaAtual != 0){
    veiculo.velocidade += veiculo.potencia*0.1;
    console.log(veiculo.velocidade);
}}

function criaVeiculo(): Veiculo{
    const veiculo: Veiculo = new Veiculo();
    veiculo.marca = teclado('Marca: ');      // Solicita ao usuário os dados do veículo e armazena nas propriedades
    veiculo.modelo = teclado('Modelo: ');
    veiculo.potencia = +teclado('Potência: ');
    veiculo.numeroMarchas = +teclado('Número de marchas: ');
    return veiculo;
}

function frear(veiculo: Veiculo): void{
    veiculo.velocidade -= veiculo.potencia*0.25;      // Reduz a velocidade
    console.log(veiculo.velocidade);   // Mostra a nova velocidade no console
}

function ativarNitro(veiculo: Veiculo): void {
    const ganhoVelocidade = Math.floor(Math.random() * (80 - 40 + 1)) + 40;
    veiculo.velocidade += ganhoVelocidade;
    console.log(`Você ativou o NITRO e ganhou ${ganhoVelocidade} km/h de velocidade!`);
    console.log(`Velocidade atual: ${veiculo.velocidade} km/h`);
}