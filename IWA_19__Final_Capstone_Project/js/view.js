import { BOOKS_PER_PAGE, books, authors, genres } from "./data.js";
/** An object containing references the specific html elements */
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
 * Creates a preview of a book. The preview will display the book
 * image,name and authour name.
 * @param {object} book - a book object containing the name, id, title
 * etc of the book
 */
export const createPreview = (book) => {
  /**The individual book div element */
  const previewItem = document.createElement("div");
  previewItem.classList.add("preview");
  const { id, image, title, author } = book;
  previewItem.setAttribute("id", id);
  //   set the innerHTML to an image and title and author text
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
/**
 *Appends a section of the books array to the book list already
 *displayed on the page.
 * @param {array} booksToPreveiw - a section of the books array
 * @param {fragment} frag - the created book preview will be appended
 * to the fragment
 */
export const displayPreview = (booksToPreveiw, frag) => {
  for (const book of booksToPreveiw) {
    //create preview
    const preview = createPreview(book);
    //Add the 36 preview divs to fragment1
    frag.appendChild(preview);
  }
  // append the fragment to the data-list-items div
  list.itemsContainer.appendChild(frag);
};

export const handleBookSummaryOverlay = (book) => {
  const summaryBook = books.find((item) => {
    return item.id === book.id;
  });
  const { title, image, author, description, published } = summaryBook;
  const bookAuthor = authors[author];
  const date = new Date(published);
  const year = date.getFullYear();
  active.image.src = image;
  active.blur.src = image;
  active.title.innerHTML = title;
  active.subtitle.innerHTML = `${bookAuthor} (${year})`;
  active.description.innerHTML = description;
};
