import { BOOKS_PER_PAGE, books, authors, genres } from "./data.js";
export const html = {
  header: {
    search: document.querySelector("[data-header-search]"),
    settings: document.querySelector("[data-header-settings]"),
  },
  list: {
    itemsContainer: document.querySelector("[data-list-items]"),
    message: document.querySelector("[data-list-message]"),
    button: document.querySelector("[data-list-button]"),
  },
  active: {
    overlay: document.querySelector("[data-list-active]"),
    blur: document.querySelector("[data-list-blur]"),
    image: document.querySelector("[data-list-image]"),
    title: document.querySelector("[data-list-title]"),
    subtitle: document.querySelector("[data-list-subtitle]"),
    description: document.querySelector("[data-list-description]"),
    close: document.querySelector("[data-list-close]"),
  },
  search: {
    overlay: document.querySelector("[data-search-overlay]"),
    form: document.querySelector("[data-search-form]"),
    title: document.querySelector("[data-search-title]"),
    genres: document.querySelector("[data-search-genres]"),
    authors: document.querySelector("[data-search-authors]"),
    cancel: document.querySelector("[data-search-cancel]"),
    //todo add attribute to index.html
    // submit: document.querySelector("[data-search-submit]"),
  },
  settings: {
    overlay: document.querySelector("[data-settings-overlay]"),
    form: document.querySelector("[data-settings-form]"),
    theme: document.querySelector("[data-settings-theme]"),
    cancel: document.querySelector("[data-settings-cancel]"),
    //todo add attribute to index.html
    // save: document.querySelector("[data-settings-save]"),
  },
};

const { header, list, active, search, settings } = html;

/**
 * Creates a preview of a book
 * @param {object} book
 */
export const createPreview = (book) => {
  //todo get the list html div
  const previewItem = document.createElement("div");
  previewItem.classList.add("preview"); //todo preview_hidden to hide initially
  const { id, image, title, author } = book;
  //set its attribute data-preview to id
  previewItem.setAttribute("id", id);
  //   set the innerHTML to an image and some text
  previewItem.innerHTML = /* html */ `
                  <img
                      class="preview__image"
                      src="${image}"
                  />

                  <div class="preview__info">
                      <h3 class="preview__title">${title}</h3>
                      <div class="preview__author">${authors[author]}</div>
                  </div>
              `;

  return previewItem;
};
