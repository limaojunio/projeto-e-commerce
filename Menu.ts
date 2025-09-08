import readlinesync = require('readline-sync');

export function main(){
    let opcao: number;
    while(true){
    console.log("*********************************************");
    console.log("                                             ");
    console.log("            Gift Card System                 ");
    console.log("                                             ");
    console.log("*********************************************");
    console.log("                                             ");
    console.log("       1 - Cadastrar Produto                 ");
    console.log("       2 - Listar todos os Produtos          ");
    console.log("       3 - Consultar Produto por ID          ");
    console.log("       4 - Atualizar Produto                 ");
    console.log("       5 - Deletar Produto                   ");
    console.log("       6 - Sair                              ");
    console.log("                                             ");
    console.log("*********************************************");
    console.log("                                             ");

    console.log("Entre com a opção desejada: ");
    opcao = readlinesync.questionInt("");

    if (opcao == 6) {
      console.log("\nGift Card System - Sistema de Gestão de Produtos");
      sobre();
      console.log("");
      process.exit(0);
    }
    switch (opcao) {
      case 1:
        console.log("\nCadastrar Produto");
        keyPress();
        break;
      case 2:
        console.log("\nListar todos os Produtos");  
        keyPress();
        break;
        case 3:     
        console.log("\nConsultar Produto por ID");
        keyPress();
        break;
        case 4:
        console.log("\nAtualizar Produto");
        keyPress();
        break;
        case 5:
        console.log("\nDeletar Produto");
        keyPress();
        break;
      default:
        console.log("\nOpção Inválida!");
    }
}

}

export function sobre(){
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Junior Lima - ecjrcl@gmail.com");
    console.log("https://github.com/limaojunio");
    console.log("*****************************************************");
}

function keyPress(): void{
    console.log("\nPressione enter para continuar...")
    readlinesync.prompt();
}

main();
