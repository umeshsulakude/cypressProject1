describe('demoqa spec', () => {

  Cypress.on('uncaught:exception', (err, runnable) => {
    // returning false here prevents Cypress from
    // failing the test
    return false
})

  let randomText=""
  let testEmail=""

  it('DemoQA', () => {

    var pattern="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < 10; i++)
    randomText += pattern.charAt(Math.floor(Math.random() * pattern.length));
    testEmail=randomText + '@gmail.com'

    cy.visit('https://demoqa.com')
    cy.wait(4000)
    cy.get('.category-cards > :nth-child(1)').should('have.text','Elements')
    cy.wait(1000)
    cy.get('.category-cards > :nth-child(2)').should('have.text','Forms')
    cy.wait(1000)
    cy.get('.category-cards > :nth-child(3)').should('have.text','Alerts, Frame & Windows')
    cy.wait(1000)
    cy.get('.category-cards > :nth-child(4)').should('have.text','Widgets')
    cy.wait(1000)
    cy.get('.category-cards > :nth-child(5)').should('have.text','Interactions')
    cy.wait(1000)
    cy.get('.category-cards > :nth-child(6)').should('have.text','Book Store Application')
    cy.wait(1000)
    //element click
    cy.get('.category-cards > :nth-child(1)').click();
    cy.wait(2000)
   cy.url().should('include', '/elements');
    cy.wait(1000);

    //Click On Text Box Test-1//
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click()
    cy.wait(1000);
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click()
    cy.wait(1000);
    cy.get('#userName').type('Demo QA')
    cy.wait(1000);
    cy.get('#userEmail').type(testEmail)
    cy.wait(1000);
    cy.get('#currentAddress').type('Hyderabad')
    cy.wait(1000);
    cy.get('#permanentAddress').type('Hyderabad')
    cy.wait(1000);
    cy.get('#submit').contains('Submit').click()
    cy.wait(1000);

    //Click On Check Box Test-2//
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text').click()
    cy.wait(1000);
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-1 > .text').click()
    cy.wait(1000);
    cy.get('.rct-collapse > .rct-icon').click()
    cy.wait(1000);
    //cy.get(':nth-child(2) > .rct-text> label > .rct-checkbox > .rct-icon > path').check()
    cy.get('.rct-title').contains('Documents').click()
    cy.wait(1000);
    // cy.get('.rct-title').should('have.prop','checked')
    // cy.get('svg.rct-icon.rct-icon-check').should('be.checked')//.should('have.prop','checked')
    // cy.wait(1000);

    //Select the Radio Button Test-3//
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2 > .text').click()
    cy.wait(1000);
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-2 > .text').click()
    cy.wait(1000);
    cy.get('#impressiveRadio').click({force : true})
    cy.wait(1000);
    cy.get('#impressiveRadio').should('be.checked')
    cy.wait(1000);

    
    //Click on Web Tables Test-4//
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-3 > .text').click()
    cy.wait(1000);
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-3 > .text').click()
    cy.wait(1000);
    cy.get('#addNewRecordButton').contains('Add').click({force : true})
    cy.wait(1000);
    cy.get('#firstName').type('Demo')
    cy.wait(1000);
    cy.get('#lastName').type('QA')
    cy.wait(1000);
    cy.get('#userEmail').type(testEmail)
    cy.wait(1000);
    cy.get('#age').type('30')
    cy.wait(1000);
    cy.get('#salary').type('30000')
    cy.wait(1000);
    cy.get('#department').type('Insurance')
    cy.wait(1000);
    cy.get('#submit').contains('Submit').click()
    cy.wait(1000);
    cy.get('.rt-td').contains('Demo').should('have.text','Demo')
    cy.wait(1000);
    cy.get('.rt-tr > :nth-child(2)').contains('QA').should('have.text','QA')
    cy.wait(1000);
    cy.get('.rt-tr > :nth-child(2)').contains('QA').should('have.text','QA')
    cy.wait(1000);
    cy.get('.rt-tr > :nth-child(3)').contains('30').should('have.text','30')
    cy.wait(1000);
    cy.get('.rt-tr > :nth-child(4)').contains(testEmail).should('have.text',testEmail)
    cy.wait(2000);
    cy.get('#delete-record-4').click()
    cy.wait(2000);
    cy.get('.rt-tr > :nth-child(2)').contains('QA').should('not.exist')
    cy.wait(2000);

    //Click on Links Test-5//
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-5 > .text').click()
    cy.wait(1000);
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-5 > .text').click()
    cy.wait(1000);

    cy.get('#linkWrapper').get('a').each(htref => {
      const a= Cypress.$(htref).length;
      expect(htref).to.have.length(a);
    })
  
  })
})