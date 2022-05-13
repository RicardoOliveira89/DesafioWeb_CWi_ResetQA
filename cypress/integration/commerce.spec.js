/// <reference types ="Cypress"/>

import { 
  homePage,
  authenticationPage,
  registerPage,
  myAccountPage 
} from "../support/pages"

describe("Fluxo de cadastro de usuário do ecommerce", () => {
    it("Acessar o site e realizar cadastro de usuário", () => {
      homePage.acessarSignIn();
      authenticationPage.inserirEmail();
      //A cada teste rodado um novo email válido do usuário deverá ser inserido
      //pois uma vez registrado, o email não poderá mais ser utilizado para um 
      //novo cadastro.
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
})