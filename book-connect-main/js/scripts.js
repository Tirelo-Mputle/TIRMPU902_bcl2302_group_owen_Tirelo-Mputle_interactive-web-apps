import { books, genres, authors, BOOKS_PER_PAGE } from "./data.js";
import { html } from "./view.js";
/** Object containing the global variables of the app */
const appStatus = {
  matches: books,
  page: 1,
  range: [0, BOOKS_PER_PAGE],
  extracted: books.slice(0, BOOKS_PER_PAGE),
  booksRemaining: books.length,
  results: [],
};
//DISPLAY INTITIAL BOOKS CONTENT
//clear the innerHtml of the list div
html.list.itemsContainer.innerHTML = "";

/**Creates a fragment containing book preview buttons. It uses a list
 * of books that are extracted from the books array or any list of books
 * if otherArray is used.
 * @param {number} bookSliceStart - The starting index of slice to be taken out of the books array
 * @param {number} bookSliceEnd - The ending index of slice to be taken out of the books array
 * @param {array} otherArray - An array to be used instead of the books array. It will be used in
 * its entirely (no slices taken)
 * @returns {fragment} - contains book button previews
 */
const createPreviewsFragment = (
  bookSliceStart,
  bookSliceEnd,
  otherArray = null
) => {
  const fragment = document.createDocumentFragment();
  if (otherArray === null) {
    if (appStatus.booksRemaining <= BOOKS_PER_PAGE)
      return (appStatus.extracted = appStatus.matches.slice(bookSliceStart));

    appStatus.extracted = appStatus.matches.slice(bookSliceStart, bookSliceEnd);
  }
  for (let book of otherArray ?? appStatus.extracted) {
    const { author: authorId, id, image, title } = book;

    const element = document.createElement("button");
    element.classList = "preview";
    element.setAttribute("id", id);

    element.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${image}"
            />
  
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authorId]}</div>
            </div>
        `;

    fragment.appendChild(element);
  }

  appStatus.page = appStatus.page + 1;
  return fragment;
};
/**
 * Updated the number of books that haven't been displayed yet
 * @returns - changes the innerHtml of the show more button
 * and updates the number of books remaining
 */
const updateRemainingBooks = () => {
  /**Initial number of books that have not been displayed yet */
  const remainingToDisplay =
    appStatus.matches.length - [appStatus.page * BOOKS_PER_PAGE];
  /**If there are remaining books in the books array that have not been
   * displayed yet
   */
  const hasRemaining = remainingToDisplay > 0;
  /**Number of books remaining to be displayed */
  const remaining = hasRemaining ? remainingToDisplay : 0;
  appStatus.booksRemaining = remainingToDisplay;
  if (remainingToDisplay < 0) {
    html.list.button.disabled = true;
  }
  return (html.list.button.innerHTML = /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (${
          remaining ? appStatus.booksRemaining : 0
        })</span>`);
};
//append the fragment containing book preview buttons to the list
//div element that should contain the books. Update the number of books
//remaining. This creates what is seen when the page first loads
html.list.itemsContainer.appendChild(
  createPreviewsFragment(appStatus.range[0], appStatus.range[1])
);
updateRemainingBooks();

//SHOW MORE BUTTON
/**
 * Creates a fragment contain book button preview and then updates
 * the number of remaining books and displays it in the show more button.
 */
const showMoreBooks = () => {
  html.list.itemsContainer.appendChild(
    createPreviewsFragment(
      appStatus.page * BOOKS_PER_PAGE,
      (appStatus.page + 1) * BOOKS_PER_PAGE
    )
  );
  updateRemainingBooks();
};
//TOGGLE OVERLAYS
/**
 * Toggles the open and close state dialog modal html elements.
 * @param {"html element"} element - the dialog modal element to target.
 * @param {*} focusElement - the element to focus on when the modal is open
 */
const toggleOverlay = (element, focusElement = element) => {
  if (element.open) {
    element.close();
  } else {
    element.showModal();
    focusElement.focus();
  }
};
const handleToggleSearchOverlay = () => {
  toggleOverlay(html.search.overlay, html.search.title);
};
//EVENT LISTENERS
html.list.button.addEventListener("click", showMoreBooks);
html.search.icon.addEventListener("click", handleToggleSearchOverlay);
html.search.cancel.addEventListener("click", handleToggleSearchOverlay);
//SEARCH
const createSelectOption = (valueText, fragment) => {
  const element = document.createElement("option");
  element.value = valueText;
  element.innerHTML = valueText;
  fragment.appendChild(element);
};
const genresFragment = document.createDocumentFragment();
createSelectOption("All genres", genresFragment);

for (let [id, genreNam] of Object.entries(genres)) {
  createSelectOption(genreNam, genresFragment);
}

html.search.genres.appendChild(genresFragment);

const authorsFragment = document.createDocumentFragment();
createSelectOption("All authors", authorsFragment);

for (let [id, authorNam] of Object.entries(authors)) {
  createSelectOption(authorNam, authorsFragment);
}

html.search.authors.appendChild(authorsFragment);

const handleSearch = (event) => {
  event.preventDefault();
  toggleOverlay(html.search.overlay);
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  html.search.form.reset();
  const titleInput = filters.title.trim().toLowerCase();

  let titleMatch = null;
  let authorMatch = null;
  let genreMatch = null;
  for (let book of books) {
    const {
      id,
      genres: bookGenres,
      title,
      description,
      author: authorId,
    } = book;

    titleMatch = title.includes(titleInput) ? title : null;
    authorMatch =
      authors[authorId] === filters.author ? authors[authorId] : null;

    if (filters.genre !== "All genres") {
      const genreArray = Object.entries(genres).filter((item) => {
        return item[1] === filters.genre;
      });
      const genreId = genreArray[0][0];
      for (let singleGenre of bookGenres) {
        genreMatch = genreId === singleGenre ? singleGenre : null;
      }
    }
    if (authorMatch) {
      appStatus.results.push(book);
    }
    if (genreMatch) {
      appStatus.results.push(book);
    }
    if (titleMatch) {
      appStatus.results.push(book);
    }
  }

  if (appStatus.results.length > 0) {
    html.list.itemsContainer.innerHTML = "";
    html.list.message.classList.remove("list__message_show");
    html.list.button.disabled = true;
    html.list.itemsContainer.appendChild(
      createPreviewsFragment(0, appStatus.results.length, appStatus.results)
    );
    appStatus.results = [];
  } else if (appStatus.results.length === 0) {
    html.list.itemsContainer.innerHTML = "";
    html.list.message.classList.add("list__message_show");
  }
};

html.search.form.addEventListener("submit", handleSearch);

//BOOKS SUMMARY OVERLAY
const handletoggleBookSummaryOverlay = () => {
  toggleOverlay(html.active.overlay, html.active.close);
};
const handleSummayOverlay = (event) => {
  const activeBook = event.target.closest(".preview");
  if (!activeBook) return;

  handletoggleBookSummaryOverlay();

  for (let book of books) {
    if (book.id === activeBook.id) {
      const { title, image, author, description, published } = book;
      const bookAuthor = authors[author];
      const date = new Date(published);
      const year = date.getFullYear();
      html.active.image.src = image;
      html.active.blur.src = image;
      html.active.title.innerHTML = title;
      html.active.subtitle.innerHTML = `${bookAuthor} (${year})`;
      html.active.description.innerHTML = description;
    }
  }
};
html.list.itemsContainer.addEventListener("click", handleSummayOverlay);
html.active.close.addEventListener("click", handletoggleBookSummaryOverlay);

window.scrollTo({ top: 0, behavior: "smooth" });
