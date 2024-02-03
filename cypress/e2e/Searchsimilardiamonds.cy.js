cy.get('[data-kendo-grid-item-index="0"] > [data-kendo-grid-column-index="4"]').invoke('text').then(returnedCutGradeText => {
    cy.get('[data-kendo-grid-item-index="0"] > [data-kendo-grid-column-index="4"]').invoke('text').then(returnedPerformanceText => {
      cy.get('[data-kendo-grid-item-index="0"] > [data-kendo-grid-column-index="4"]').invoke('text').then(returnedProportionText => {

   
    const cutGrade = returnedCutGradeText.trim();
    let cutGradeValue;
    let cutGradeName;
    const performance = returnedPerformanceText.trim();
    let performanceName;
    const proportion = returnedProportionText.trim();
    let proportioName;

   
    for (var key in descriptionValue) {
        if (cutGrade === "EX") {
            cy.log("inif " + cutGrade)
            if (descriptionValue[key] === "Excellent") {
                cy.log("key " + key + " has value " + descriptionValue[key]);
                cutGradeValue = key;
                cutGradeName = descriptionValue[key]
                cy.get('[data-kendo-grid-item-index="0"] > .k-expand-column > .no-selection > .dripicons-chevron-down').click();
                cy.get('.item-id > :nth-child(3) > .ml-1').invoke('text').then(text => {
                    const actualCG = text.replace(' ', '').trim();
                    expect(actualCG).to.equal(cutGradeName + "(" + cutGradeValue + ")"); //validating cutgrade in diamond expand view
                });
            }
          }        
            if (key=== performance) {
                cy.log("key " + key + " has value " + descriptionValue[key]);
                performanceName = descriptionValue[key]
                cy.get('[data-kendo-grid-item-index="0"] > .k-expand-column > .no-selection > .dripicons-chevron-down').click();
                cy.get('.item-id > :nth-child(3) > .ml-1').invoke('text').then(text => {
                    const actualPerfomance = text.replace(' ', '').trim();
                    expect(actualPerfomance).to.equal(performanceName + "(" + key + ")"); //validating cutgrade in diamond expand view
                });
            
          }
          if (key=== proportion) {
            cy.log("key " + key + " has value " + descriptionValue[key]);
            proportioName = descriptionValue[key]
            cy.get('[data-kendo-grid-item-index="0"] > .k-expand-column > .no-selection > .dripicons-chevron-down').click();
            cy.get('.item-id > :nth-child(3) > .ml-1').invoke('text').then(text => {
                const actualProportion = text.replace(' ', '').trim();
                expect(actualProportion).to.equal(proportioName + "(" + key + ")"); //validating cutgrade in diamond expand view
            });
        
      }
        }
      });
    });
  });