const el = require("./elements").ELEMENTS;

class Home {
    acessarSignIn(){
        cy.get(".login").click();
    }
}

export default new Home();