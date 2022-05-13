/// <reference types ="Cypress"/>

const el = require("./elements").ELEMENTS;

class Register {
    escolherTitulo(){
        cy.get(el.titulo).click();
    }
    inserirNome(){
        cy.get(el.nome).type("José");
    }
    inserirSobrenome(){
        cy.get(el.sobrenome).type("Railson");
    }
    inserirSenha(){
        cy.get(el.senha).type("12345");
    }
    escolherDiaDeNascimento(){
        cy.get(el.diaNascimento).select("26");
    }
    escolherMesDeNascimento(){
        cy.get(el.mesNascimento).select("November");
    }
    escolherAnoDeNascimento(){
        cy.get(el.anoNascimento).select("1966");
    }
    receberBoletimDeNoticias(){
        cy.get(el.boletimNoticias).click();
    }
    receberOfertasEspeciais(){
        cy.get(el.ofertasEspeciais).click();
    }
    reinserirNome(){
        cy.get(el.primeiroNome).clear().type("José"); 
    }
    reinserirSobrenome(){
        cy.get(el.segundoNome).clear().type("Railson");
    }
    inserirEmpresa(){
        cy.get(el.nomeEmpresa).type("JRTur");
    }
    inserirEndereco(){
        cy.get(el.endereco).type("Avenida João Pessoa, 2004");
    }
    inserirComplementoEndereco(){
        cy.get(el.complementoEndereco).type("Ap 402");
    }
    inserirCidade(){
        cy.get(el.cidade).type("Cajazeiras");
    }
    escolherEstado(){
        cy.get(el.estado).select("California");
    }
    inserirCep(){
        cy.get(el.cep).type("11111");
    }
    escolherPais(){
        cy.get(el.pais).select("United States");
    }
    inserirInformacoesAdicionais(){
        cy.get(el.informacoesAdicionais).type("Próximo ao Hospital Regional");
    }
    inserirTelefone(){
        cy.get(el.telefone).type("8311111111");
    }
    inserirCelular(){
        cy.get(el.celular).type("83922222222");
    }
    inserirEnderecoAlternativo(){
        cy.get(el.enderecoAlternativo).clear().type("Rua José Américo, nº 1989");
    }
    clicarNoBotaoRegister(){
        cy.get(el.botaoRegistrar).click();
    }
}

export default new Register();