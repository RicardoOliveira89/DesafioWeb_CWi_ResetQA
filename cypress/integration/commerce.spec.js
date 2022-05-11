/// <reference types ="Cypress"/>

describe("Fluxo de cadastro de usuário do ecommerce", () => {
    it("Acessar o site e realizar cadastro de usuário", () => {
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

        cy.get(".login").click();
        cy.get("#email_create").type("jose.railsontur@mail.com");
        cy.get("#SubmitCreate").click();
        cy.get("#id_gender1").click();
        cy.get("#customer_firstname").type("José");
        cy.get("#customer_lastname").type("Railson");
        cy.get("#passwd").type("12345");
        cy.get("#days").select("26");
        cy.get("#months").select("November");
        cy.get("#years").select("1966");
        cy.get("#newsletter").click();
        cy.get("#optin").click();
        cy.get("#firstname").clear().type("José"); 
        cy.get("#lastname").clear().type("Railson");
        cy.get("#company").type("JRTur");
        cy.get("#address1").type("Avenida João Pessoa, 2004");
        cy.get("#address2").type("Ap 402");
        cy.get("#city").type("Cajazeiras");
        cy.get("#id_state").select("California");
        cy.get("#postcode").type("11111");
        cy.get("#id_country").select("United States");
        cy.get("#other").type("Próximo ao Hospital Regional");
        cy.get("#phone").type("8311111111");
        cy.get("#phone_mobile").type("83922222222");
        cy.clearLocalStorage("#alias");
        cy.get("#alias").clear().type("Rua José Américo, nº 1989"); 
        //cy.get("#submitAccount > span").click(); => Procurar como apagar o campo do seletor pra não escrever o nome junto com o que já existe

    })

    // Link para documentação do Cypress: https://docs.cypress.io/api/commands/clearlocalstorage#Command-Log
})