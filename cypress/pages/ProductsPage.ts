export default class ProductsPage {
  private readonly productsTitle = "div[class='inventory_item_name ']";
  private readonly productSortSelector = "select[class='product_sort_container']";
  private readonly productPrice = "div[class='inventory_item_price']";
  private readonly cartBadge = "span[class='shopping_cart_badge']";

  verifyProductsDisplayed(): void {
    //choose a random to atleast have 4 products showing on the page
    cy.get(this.productsTitle).should("have.length.greaterThan", 4);
  }

  //wasn't sure how i can put the locator for this one in the locator variables
  addProductToCart(count: number): void {
    for (let i = 0; i < count; i++) {
      cy.contains("button", "Add to cart").first().click();
    }
  }

  removeProductFromCart(): void {
    cy.contains("button", "Remove").first().click();
  }

  clickcartIcon(): void {
    cy.get(this.cartBadge).click();
  }

  verifyProductAddedToCart(expectedValue: string): void {
    cy.get(this.cartBadge).should("have.text", expectedValue);
  }

  selectSortOption(option: string): void {
    cy.get(this.productSortSelector).select(option);
  }

  //It's one of those codes you find it works and never touch it again
  verifyProductsSortedAlp(option: string): void {
    cy.get(this.productsTitle).each(($product, index, $list) => {
      if (index < $list.length - 1) {
        const currentProduct = $product.text();
        const nextProduct = $list[index + 1].textContent;
        if (option === "Name (Z to A)") {
          expect(currentProduct.toLowerCase() > nextProduct.toLowerCase()).to.be.true;
        } else if (option === "Name (A to Z)") {
          expect(currentProduct.toLowerCase() < nextProduct.toLowerCase()).to.be.true;
        }
      }
    });
  }

  verifyProductsSortedPrice(option: string): void {
    cy.get(this.productPrice).each(($product, index, $list) => {
      if (index < $list.length - 1) {
        const currentProduct = $product.text();
        const nextProduct = $list[index + 1].textContent;
        const currentPrice = parseFloat(currentProduct.replace("$", ""));
        const nextPrice = parseFloat(nextProduct.replace("$", ""));
        if (option === "Price (low to high)") {
          expect(currentPrice).to.be.lte(nextPrice);
        } else if (option === "Price (high to low)") {
          expect(currentPrice).to.be.gte(nextPrice);
        }
      }
    });
  }
}
