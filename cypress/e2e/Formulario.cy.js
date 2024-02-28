describe('LLenar Formulario', () => {
    it('Ingreso de datos', () => {
      cy.visit('https://demoqa.com/text-box')
      cy.get("input[id='userName']").type('Yoselin Rodriguez')
      cy.get("input[id='userEmail']").type('prueba124@gmail.com')
      cy.get("textarea[id='currentAddress']").type('Av. Las Palmeras 254')
      cy.get("textarea[id='permanentAddress']").type('Av. Las Palmeras 254')
      cy.get("button[id='submit']").click ()
    })
})
