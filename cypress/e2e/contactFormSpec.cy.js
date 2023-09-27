import FormElements from "../../pageObjects/formElements"
import DummyAPI from "../../restAPI/dummyAPI"

describe('Test formulaire de contact', () => {
  let userData
  before(() => {
    DummyAPI.getUserData().then((data) => {
      userData = data[0]
    })
  })

  beforeEach(() => {
    cy.visit('/fake-contact')
  })

  context('Cas passant', () => {
    it('Saisir correctement les champs obligatoires', () => {
      const formEl = new FormElements()
      let genre = userData.owner.title == 'ms' ? 'Femme' : 'Homme'
      formEl.selectGenre().select(genre)
      formEl.saisirPrenom().type(userData.owner.firstName).should('contain.value', userData.owner.firstName)
      formEl.saisirNom().type(userData.owner.lastName)
      formEl.saisirMsg().type(userData.text)
      formEl.clickButton().click()
      formEl.erroMsg()
        .should('have.text', 'Le message a été envoyé.')
        .and('have.css', 'color', 'rgb(0, 119, 0)')
      cy.log(userData)
    })
  })
  
  context("Cas non passant", () => {
    it('Ne pas saisir le champs prenom', () => {
      const formEl = new FormElements()
      let genre = userData.owner.title == 'ms' ? 'Femme' : 'Homme'
      formEl.selectGenre().select(genre).should('contain.text', genre)
      formEl.saisirPrenom()
      formEl.saisirNom().type(userData.owner.lastName)
      formEl.saisirMsg().type(userData.text)
      formEl.clickButton().click()
      formEl.erroMsg()
        .should('have.text', 'Veuillez remplir tous les champs obligatoires.')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
    })

    it('Ne pas saisir le champs nom', () => {
      const formEl = new FormElements()
      let genre = userData.owner.title == 'ms' ? 'Femme' : 'Homme'
      formEl.selectGenre().select(genre).should('contain.text', genre)
      formEl.saisirPrenom().type(userData.owner.firstName).should('contain.value', userData.owner.firstName)
      formEl.saisirNom()
      formEl.saisirMsg().type(userData.text)
      formEl.clickButton().click()
      formEl.erroMsg()
        .should('have.text', 'Veuillez remplir tous les champs obligatoires.')
        .and('have.css', 'color', 'rgb(255, 0, 0)')
    })

    // it.only('Faire une validation sur le champs phone', () => {
    //   cy.visit('https://testqa.purse.tech/fake-contact')
    //   cy.get("#gender").select('Homme').should('contain.text', 'Homme')
    //   cy.get("#first-name").type('Samba Dior').should('contain.value', 'Samba Dior')
    //   cy.get("#last-name").type('DIAGNE')
    //   cy.get("#phone").type('DIAGNE')
    //   .invoke('val')
    //   .then((valeur) => {
    //     Number.isNaN(+valeur, 'saisir nombre').
    //   })
    //   cy.get("#message").type('Hello World. Je déménage ce jeudi in sha Allah, je ne vais plus dormir sur le canapé')
    //   cy.get("#submit-button").click()
    //   cy.get("#popin-message")
    //     .should('have.text', 'Le message a été envoyé.')
    //     .and('have.css', 'color', 'rgb(0, 119, 0)')
    // })

  })

  

})