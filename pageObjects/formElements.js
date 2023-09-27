class FormElements {

    selectGenre() {
        return cy.get("#gender")
    }

    saisirPrenom() {
        return cy.get("#first-name")
    }

    saisirNom() {
        return cy.get("#last-name")
    }

    saisirMsg() {
        return cy.get("#message")
    }

    clickButton() {
        return cy.get("#submit-button")
    }

    erroMsg() {
        return cy.get("#popin-message")
    }

}
export default FormElements
