/// <reference types ="Cypress"/>

import homePage from "../support/pages/Home";
import authenticationPage from "../support/pages/Authentication";
import registerPage from "../support/pages/Register";
import myAccountPage from "../support/pages/MyAccount";

describe("Fluxo de cadastro de usuário do ecommerce", () => {
    it("Acessar o site e realizar cadastro de usuário", () => {
      homePage.acessarSignIn();
      authenticationPage.inserirEmail();
      authenticationPage.clicarNoBotaoCreateAnAccount();
      registerPage.escolherTitulo();
      registerPage.inserirNome();
      registerPage.inserirSobrenome();
      registerPage.inserirSenha();
      registerPage.escolherDiaDeNascimento();
      registerPage.escolherMesDeNascimento();
      registerPage.escolherAnoDeNascimento();
      registerPage.receberBoletimDeNoticias();
      registerPage.receberOfertasEspeciais();
      registerPage.reinserirNome();
      registerPage.reinserirSobrenome();
      registerPage.inserirEmpresa();   
      registerPage.inserirEndereco();
      registerPage.inserirComplementoEndereco();
      registerPage.inserirCidade();
      registerPage.escolherEstado();
      registerPage.inserirCep();
      registerPage.escolherPais();
      registerPage.inserirInformacoesAdicionais();
      registerPage.inserirTelefone();
      registerPage.inserirCelular();
      registerPage.inserirEnderecoAlternativo();
      registerPage.clicarNoBotaoRegister();
      myAccountPage.validarMinhaConta();
    })

// 1º Teste
        // página home (Criar posteriormente)
                    // Acessar a página inicial
                    // mapear e clicar no botão sign in
                    // preencher o campo email adress com o email do usuário
                    // clicar no botão create an account
                    // clicar em Mr no campo title
                    // preencher o campo first name com o primeiro nome do usuário
                    // preencher o campo last name com o sobrenome do usuário
                    // preencher o campo password com a senha do usuário
                    // preencher o campo Date of Birth com o dia, mês e ano de nascimento do usuário
                    // preencher o campo Sign up for our newsletter! com um click
                    // preencher o campo Receive special offers from our partners! com um click
                    // preencher o campo city com a cidade do usuário
                    // preencher o campo State com o Estado do usuário
                    // preencher o campo Zip/Postal Code com CEP do usuário
                    // preencher o campo Country com o País do usuário
                    // preencher o campo Additional Information com informações do usuário
                    // preencher o campo Home phone com o número de telefone do usuário
                    // preencher o campo Mobile phone como o número do telefone celular do usuário
                    // preencher o campo Assign an address alias for future reference com endereço de referência do usuário
                    // Mapear e clicar no botão Register 
            // Validar o cenário com o identificador de login na pagina My account


    // Link para documentação do Cypress: https://docs.cypress.io/api/commands/clearlocalstorage#Command-Log
})