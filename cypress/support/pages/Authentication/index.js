const el = require("./elements").ELEMENTS;

class Authentication {
    inserirEmail(){
        cy.get("#email_create").type("jose.railsontur@mail.com");
    }
    clicarNoBotaoCreateAnAccount(){
        cy.get("#SubmitCreate").click();
    }
}

export default new Authentication();