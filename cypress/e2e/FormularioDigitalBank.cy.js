describe('Registro', () => {
    it('Registrar Datos Personales', () => {
    cy.visit('http://dbankdemo.com/bank/login')
    cy.get("#username").type('user1')
    cy.get("a[href='/bank/signup']").click()
    cy.get("#title").select ('Ms.')//Seleccionar una opción del combobox
   cy.get("#firstName").type('Yoselin')
   cy.get("#lastName").type('Rodriguez')
   cy.get("input[value='F']").click()
   cy.get("#dob").type('14/3/1993')
   cy.get("#ssn").type('126-58-8965')
   cy.get("#emailAddress").type('prueba154@gmail.com')
   cy.wait(3000)
   cy.go("back") //volver a la pagina anterior
   cy.wait(3000)
   cy.go("forward")// vuelve a la nueva pagina


    })
})