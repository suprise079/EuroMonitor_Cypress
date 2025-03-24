import ProductsPage from "../pages/ProductsPage";

describe("Products List", () => {
  const productsPg = new ProductsPage();

  beforeEach(() => {
    cy.login();
  });

  it("Verify that the inventory page displays a list of products", () => {
    productsPg.verifyProductsDisplayed();
  });

  it("Verify that a product can be added to the cart", () => {
    let randomProductCount = Math.floor(Math.random() * 6);
    productsPg.addProductToCart(randomProductCount);

    productsPg.verifyProductAddedToCart(randomProductCount.toString());
  });

  it("Verify that products can be removed from the cart", () => {
    let randomProductCount = Math.floor(Math.random() * 6);
    let expectedProductCount = randomProductCount - 1;

    productsPg.addProductToCart(randomProductCount);
    productsPg.removeProductFromCart();

    productsPg.verifyProductAddedToCart(expectedProductCount.toString());
  });

  it("Verify that products can be sorted by name from A to Z", () => {
    let nameOption = "Name (A to Z)";
    productsPg.selectSortOption(nameOption);
    productsPg.verifyProductsSortedAlp(nameOption);
  });

  it("Verify that products can be sorted by name from Z to A", () => {
    let nameOption = "Name (Z to A)";
    productsPg.selectSortOption(nameOption);
    productsPg.verifyProductsSortedAlp(nameOption);
  });

  it("Verify that products can be sorted by price", () => {
    let priceOption = "Price (low to high)";
    productsPg.selectSortOption(priceOption);
    productsPg.verifyProductsSortedPrice(priceOption);
  });

  it("Verify that products can be sorted by price", () => {
    let priceOption = "Price (high to low)";
    productsPg.selectSortOption(priceOption);
    productsPg.verifyProductsSortedPrice(priceOption);
  });
});
