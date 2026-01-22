const getViewDetailsButtons = () => cy.getByTestId("view-details-button")

describe("Dashboard", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("renders the user list", () => {
    getViewDetailsButtons().its("length").should("be.gte", 1)
  })

  it("filters by search query", () => {
    cy.getByTestId("search-input").clear().type("George")
    cy.getByTestId("search-button").click()

    cy.url().should("include", "q=George")
    cy.contains("George Harris").should("be.visible")
    cy.contains("Arianna Russo").should("not.exist")
  })

  it("filters by role", () => {
    cy.getByTestId("role-badge-admin").click()

    cy.url().should("include", "role=admin")
    cy.contains("George Harris").should("be.visible")
    cy.contains("Arianna Russo").should("not.exist")
  })
})
