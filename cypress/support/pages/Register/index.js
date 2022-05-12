const el = require("./elements").ELEMENTS;

class Register {
    escolherTitulo(){
        cy.get("#id_gender1").click();
    }
    inserirNome(){
        cy.get("#customer_firstname").type("José");
    }
    inserirSobrenome(){
        cy.get("#customer_lastname").type("Railson");
    }
    inserirSenha(){
        cy.get("#passwd").type("12345");
    }
    escolherDiaDeNascimento(){
        cy.get("#days").select("26");
    }
    escolherMesDeNascimento(){
        cy.get("#months").select("November");
    }
    escolherAnoDeNascimento(){
        cy.get("#years").select("1966");
    }
    receberBoletimDeNoticias(){
        cy.get("#newsletter").click();
    }
    receberOfertasEspeciais(){
        cy.get("#optin").click();
    }
    reinserirNome(){
        cy.get("#firstname").clear().type("José"); 
    }
    reinserirSobrenome(){
        cy.get("#lastname").clear().type("Railson");
    }
    inserirEmpresa(){
        cy.get("#company").type("JRTur");
    }
    inserirEndereco(){
        cy.get("#address1").type("Avenida João Pessoa, 2004");
    }
    inserirComplementoEndereco(){
        cy.get("#address2").type("Ap 402");
    }
    inserirCidade(){
        cy.get("#city").type("Cajazeiras");
    }
    escolherEstado(){
        cy.get("#id_state").select("California");
    }
    inserirCep(){
        cy.get("#postcode").type("11111");
    }
    escolherPais(){
        cy.get("#id_country").select("United States");
    }
    inserirInformacoesAdicionais(){
        cy.get("#other").type("Próximo ao Hospital Regional");
    }
    inserirTelefone(){
        cy.get("#phone").type("8311111111");
    }
    inserirCelular(){
        cy.get("#phone_mobile").type("83922222222");
    }
    inserirEnderecoAlternativo(){
        cy.get("#alias").clear().type("Rua José Américo, nº 1989");
    }
    clicarNoBotaoRegister(){
        cy.get("#submitAccount > span").click();
    }
}

export default new Register();