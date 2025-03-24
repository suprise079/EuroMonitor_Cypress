export default class CartPage {
  private readonly cartItem = "div[class='cart_item']";
  private readonly checkoutButton = "#checkout";

  removeItem(): void {
    cy.contains("button", "Remove").click();
  }

  checkout(): void {
    cy.get(this.checkoutButton).click();
  }

  verifyItemInCart(): void {
    cy.get(this.cartItem).should("be.visible");
  }

  verifyCartEmpty(): void {
    cy.get(this.cartItem).should("not.exist");
  }
}
