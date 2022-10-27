describe("todo - test1", () => {
    beforeEach(() => {
      cy.visit("https://www.cryptohunt.it/learn");
    });
    it('check done an todo item', () => { 
        let x = Math.floor(Math.random() * 100000);
        cy.contains('Join now').click();
        cy.get('#email').type('cuongquep'+x+'@gmail.com');
        cy.get('#password').type("Brolab123456@");

        cy.wait(20000);
        cy.get('.c93926433').click();
        cy.wait(3000);
        cy.get('[name=username]').type('cuongquep'+x);
        cy.get('[name=firstName]').type('cuong');
        cy.get('[name=lastName]').type('pham');
        cy.contains("Continue").click();
        cy.wait(3000);

        // cy.get('[name=interest]').click();
        // cy.contains("Select an option").click();
        // cy.wait(1000);
        // cy.get('.sc-3fd04e0e-0 sc-ec542f0f-2 hdkcgN hvSUDE').click();

        cy.contains("Skip").click();
        cy.visit('https://www.cryptohunt.it/lessons/why-was-crypto-invented');
        cy.wait(3000);
        cy.contains("Let's do this!").click();
        cy.contains("Next").click();
        cy.contains("Next").click();
        cy.contains("Next").click();
        cy.contains("Next").click();
        cy.contains("Next").click();
        cy.contains("Next").click();
        cy.contains("I am ready").click();
        cy.contains("B. Governments bailed out banks, at a steep cost for the public.").click();
        cy.contains("Check").click();
        cy.contains("Next").click();
        cy.contains("B. Bitcoin is controlled by code, meaning governments or banks can't change the rules.").click();
        cy.contains("Check").click();
        cy.contains("Next").click();
        cy.contains("B. No single actor, like a government, can make decisions by themselves, for example to print money.").click();
        cy.contains("Check").click();
        cy.contains("Next").click();
        cy.contains("Submit").click();
    })
})


