describe('Pruebas de Login', () => {
  it('Ingreso de credenciales exitoso', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get("input[name='username']").type('Admin')
    cy.get("input[name='password']").type('admin123')
    cy.get("button[type='submit']").click()
  })
})