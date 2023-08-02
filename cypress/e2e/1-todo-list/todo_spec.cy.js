import todoPage from "../../pages/todo_page";

describe("TODO page", () => {
  beforeEach(function () {
    cy.fixture("todo_test_data").as("todo_items");
    cy.visit(Cypress.config().baseUrl);
    todoPage.assertIsDisplayed();
  });

  it("gets filled with two items", function () {
    let items = this.todo_items["items"];
    todoPage.factorAddItems(items);
    items.forEach(function (item, index) {
      todoPage.assertItemAddedToList(index + 1, item);
    });
    todoPage.assertTotalItemsCount(2);
  });

  it("checks elements as done", function () {
    todoPage.factorAddItems(this.todo_items["items"]);
    todoPage.checkItemDone(1);
    todoPage.assertItemCheckedDone(1);
  });
});
