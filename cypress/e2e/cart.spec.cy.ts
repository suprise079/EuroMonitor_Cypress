import CartPage from "../pages/CartPage";
import ProductsPage from "../pages/ProductsPage";

describe("Cart Tests", () => {
  const productPg = new ProductsPage();
  const cartPg = new CartPage();

  beforeEach(() => {
    cy.login();
  });

  it("Verify that a product can be added to the cart", () => {
    //I have noted that i used counts instead of product names (bad practice)
    //Maily because in real life scenario the will be a way to filter the products
    //and i will be able to get the product name and use it to verify
    //Putting a static name will make the test fail if the product name changes
    productPg.addProductToCart(1);
    productPg.clickcartIcon();
    cartPg.verifyItemInCart();
  });

  it("Verify that a product can be removed from the cart", () => {
    productPg.addProductToCart(1);
    productPg.clickcartIcon();
    cartPg.removeItem();
    cartPg.verifyCartEmpty();
  });
});
