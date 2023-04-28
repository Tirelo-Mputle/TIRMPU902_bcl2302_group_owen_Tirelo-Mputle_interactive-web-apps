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

//focus the add button on page load
other.add.setAttribute("autofocus", true);

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
  add.title.value = "";
  add.table.value = 1;
};

const handleAddSubmit = (event) => {
  event.preventDefault();
  const orderedGrid = document.querySelector(`[data-column="ordered"]`);

  const order = createOrderData({
    title: add.title.value,
    table: add.table.value,
    column: "ordered",
  });

  html.columns["ordered"].appendChild(createOrderHtml(order));

  handleToggleOverlay(add.overlay);
};
const handleEditToggle = (event) => {};
const handleEditSubmit = (event) => {};
const handleDelete = (event) => {};

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
