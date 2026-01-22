/// <reference types="cypress" />

Cypress.Commands.add("getByTestId", (testId, options) => {
  return cy.get(`[data-testid="${testId}"]`, options)
})

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      getByTestId(
        testId: string,
        options?: Partial<Loggable & Timeoutable & Withinable & Shadow>,
      ): Chainable<JQuery<HTMLElement>>
    }
  }
}

export {}
