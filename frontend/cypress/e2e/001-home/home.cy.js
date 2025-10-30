describe("Home", () => {
  it("Deve exibir o titulo e redirecionar para login", () => {
    cy.visit("/");
    cy.get('[data-cy="home-title"]').should("contain", "LiftLy");
    cy.get('[data-cy="home-description"]').should(
      "contain",
      "Mais peso, mais séries, mais evolução."
    );
    cy.get('[data-cy="home-btn"]').click();
    cy.location("pathname").should("eq", "/login");
  });
});
