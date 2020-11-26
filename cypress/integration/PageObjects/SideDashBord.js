/// <reference types='cypress' />

class SideDashBord {

    openCustomerSubMenu(option) {
        cy.get('.treeview:nth-child(4)').click();
        cy.get('.menu-open>ul>li').each(($element, index, $list) => {
            if ($element.text().includes(option)) {
                cy.log(index);
                cy.wrap($element).click();
            }
        })
    }
}
export default SideDashBord;