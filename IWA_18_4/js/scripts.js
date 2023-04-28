import {
  createOrderHtml,
  html,
  updateDraggingHtml,
  moveToColumn,
} from "./view.js";
import {
  TABLES,
  COLUMNS,
  state,
  createOrderData,
  updateDragging,
} from "./data.js";

const { other, help, add, edit } = html;
//changing state.orders to an array because it is easier to
//work with
state.orders = [];
//focus the add button on page load
other.add.setAttribute("autofocus", true);
//adding the orders to the correct column
const reRenderColumns = () => {
  for (const column of COLUMNS) {
    html.columns[`${column}`].innerHTML = "";
    const fragment = document.createDocumentFragment();

    for (let order of state.orders) {
      if (order.column === column) {
        fragment.appendChild(createOrderHtml(order));
        console.log(order);
        console.log(column);
      }
    }
    html.columns[`${column}`].appendChild(fragment);
  }
};
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
};
/**
 * Will add/remove the open attribute to the element based
 * on whether it is present or not. The open attribute is
 * linked to a css selector that will display the overlay when
 * open attribute is present. It will also focus on the add button
 * when open attribute is absent.
 * @param {element} element - html element
 */
const handleToggleOverlay = (element) => {
  if (element.hasAttribute("open")) {
    element.removeAttribute("open");
    html.other.add.focus();
  } else {
    element.setAttribute("open", "open");
  }
};
const handleDragStart = (event) => {};
const handleDragEnd = (event) => {};
const handleHelpToggle = (event) => {
  handleToggleOverlay(help.overlay);
};
const handleAddToggle = (event) => {
  handleToggleOverlay(add.overlay);
  //reset the form data
  add.form.reset();
};

const handleAddSubmit = (event) => {
  event.preventDefault();

  const order = createOrderData({
    title: add.title.value,
    table: add.table.value,
    column: "ordered",
  });

  html.columns["ordered"].appendChild(createOrderHtml(order));
  //add order to the orders array
  state.orders.push(order);
  console.log(state.orders);

  handleToggleOverlay(add.overlay);
};
/**
 * Order div element selected when order is clicked for edit
 */
let orderSelected;
let orderMatch;
const handleEditToggle = (event) => {
  //looks at the element and its parents to find the elemen
  //that has the css selector ".order". So that if you click
  //the order div or any text inside it the handleEditToggle
  //event will run for that specific order.
  orderSelected = event.target.closest(".order");

  if (orderSelected || event.target.hasAttribute("data-edit-cancel"))
    handleToggleOverlay(edit.overlay);

  // loop through the state orders to find the order
  //when closing the edit overlay, there will be no orderSelected
  //so do nothing
  orderMatch = orderSelected
    ? state.orders.find((item) => {
        return item.id === orderSelected.dataset.id;
      })
    : "";
  console.log("orderMatch", orderMatch);
  edit.title.value = orderMatch.title;
  edit.table.value = orderMatch.table;
  edit.column.value = orderMatch.column;
  //remove event listener
  // html.other.grid.removeEventListener("click", handleEditToggle);
};

const handleEditSubmit = (event) => {
  event.preventDefault();

  const edittedOrder = {
    ...orderMatch,
    title: edit.title.value,
    table: edit.table.value,
    column: edit.column.value,
  };

  const edittedStateOrders = state.orders.map((item) => {
    if (item.id === edittedOrder.id) {
      return edittedOrder;
    } else return item;
  });
  state.orders = edittedStateOrders;
  console.log(state.orders);

  handleToggleOverlay(edit.overlay);
  //adding the orders to the correct column
  reRenderColumns();
};
const handleDelete = (event) => {
  const editedOrders = state.orders.filter((item) => {
    return item.id !== orderSelected.dataset.id;
  });
  state.orders = editedOrders;

  handleToggleOverlay(edit.overlay);
  reRenderColumns();
  // html.columns[`${orderMatch.column}`].innerHTML = "";
  // const fragment = document.createDocumentFragment();
  // for (let order of state.orders) {
  //   fragment.appendChild(createOrderHtml(order));
  // }
  // html.columns[`${orderMatch.column}`].appendChild(fragment);
};

html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);

html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);

html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
}
