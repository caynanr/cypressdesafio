describe("DevFinace", ()=> {
    it("Adicionar uma nova transação de entrada", ()=> {
        cy.visit('https://devfinance-agilizei.netlify.app/')
        cy.get('a[onclick*=open]').click()
        cy.get('#description').type('Cafezin')
        cy.get('#amount').type('-4')
        cy.get("#date").type('2021-11-04')
        cy.contains('button', 'Salvar').click()
        cy.get('table tbody tr').should('have.length', 1)
        cy.wait(2000)
        cy.get('img[onclick*=remove]').click()
    });
});
