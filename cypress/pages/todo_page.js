import Page from "./page";
class HomePage extends Page {
  elements = {
    newTodoInputField: () => {
      return cy.get(".todoapp .new-todo");
    },
    todoList: () => {
      return cy.get("ul.todo-list");
    },
    todoListItems: () => {
      return this.elements.todoList().find("li");
    },
    todoListItem: (position) => {
      return this.elements.todoList().find(`li:nth-child(${position})`);
    },
    todoListItemLabel: (position) => {
      return this.elements.todoListItem(position).find(`label`);
    },
    todoListItemToggle: (position) => {
      return this.elements.todoListItem(position).find(".toggle");
    },
  };

  // actions

  addItem(text) {
    this.elements.newTodoInputField().type(text).type("{enter}");
  }

  checkItemDone(position) {
    this.elements.todoListItemToggle(position).click();
  }

  // assertions

  assertIsDisplayed() {
    cy.should("be.visible", [this.elements.newTodoInputField()]);
    return this;
  }

  assertItemAddedToList(position, item) {
    this.elements.todoListItem(position).should("contain", item);
    return this;
  }

  assertTotalItemsCount(count) {
    this.elements.todoListItems().should("have.length", count);
  }

  assertItemCheckedDone(position) {
    this.elements.todoListItem(position).should("have.class", "completed");
    this.elements
      .todoListItemLabel(position)
      .should(
        "have.css",
        "text-decoration",
        "line-through solid rgb(217, 217, 217)",
      );
  }

  // factory

  factorAddItems(items) {
    items.forEach((item) => {
      this.addItem(item);
    });
  }
}

export default new HomePage();
