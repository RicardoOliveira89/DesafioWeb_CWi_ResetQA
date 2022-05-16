/// <reference types ="Cypress"/>

const el = require("./elements").ELEMENTS;

class Authentication {
    inserirEmail(){
        //cy.get(el.email).type("jrturismo@mail.com");
        const randomString = Math.random().toString(36).replace(/[^a-z]+/g,'').substring(0,5);
        const randomMail = randomString + "@mail.com"
        cy.get(el.email).type(randomMail);
    }
    clicarNoBotaoCreateAnAccount(){
        cy.get(el.botaoCriar).click();
    }
}

export default new Authentication();

