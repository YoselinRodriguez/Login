describe('Login de Panel', () => {
    it('Validar el ingreso de credenciales correctos', () => {
        cy.visit('https://pa-panel-channel-test.culqi.me/')
        cy.get("input[data-test-id='email-input']").type('gary.ayala@culqi.com')
        cy.get("input[data-test-id='password-input']").type('fMexvA4OI?')
        cy.get("button[type='submit']").click()

    })
    it('Validar el ingreso de credenciales incorrectos', () => {
        cy.visit('https://pa-panel-channel-test.culqi.me/')
        cy.get("input[data-test-id='email-input']").type('gary.ayala@culqi.com')
        cy.get("input[data-test-id='password-input']").type('Limaperu24?')
        cy.get("button[type='submit']").click()

    })
    

    
})