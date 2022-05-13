/// <reference types ="Cypress"/>

const el = require("./elements").ELEMENTS;

class Authentication {
    inserirEmail(){
        cy.get(el.email).type("jrturismo1234@mail.com");
    }
    clicarNoBotaoCreateAnAccount(){
        cy.get(el.botaoCriar).click();
    }
}

export default new Authentication();