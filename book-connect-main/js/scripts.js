import { books, genres, authors, BOOKS_PER_PAGE } from "./data.js";
import { html } from "./view.js";
/** Object of the global variables of the app */
const appStatus = {
  matches: books,
  page: 1,
  range: [0, BOOKS_PER_PAGE],
  extracted: books.slice(0, BOOKS_PER_PAGE),
  booksRemaining: books.length,
};
//DISPLAY INTITIAL BOOKS CONTENT
html.list.itemsContainer.innerHTML = "";

const createPreviewsFragment = (bookSliceStart, bookSliceEnd) => {
  // appStatus.extracted = appStatus.matches.slice
  const fragment = document.createDocumentFragment();
  if (appStatus.booksRemaining <= 36)
    return (appStatus.extracted = appStatus.matches.slice(bookSliceStart));

  appStatus.extracted = appStatus.matches.slice(bookSliceStart, bookSliceEnd);

  for (let book of appStatus.extracted) {
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
//div element that should contain the books
html.list.itemsContainer.appendChild(
  createPreviewsFragment(appStatus.range[0], appStatus.range[1])
);
updateRemainingBooks();
// const createPreviewsFragment(booksArray, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]){
//     booksArray, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]
// }
// html.list.itemsContainer.appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
//SHOW MORE BUTTON
const showMoreBooks = () => {
  html.list.itemsContainer.appendChild(
    createPreviewsFragment(
      appStatus.page * BOOKS_PER_PAGE,
      (appStatus.page + 1) * BOOKS_PER_PAGE
    )
  );
  updateRemainingBooks();
};

//EVENT LISTENERS
html.list.button.addEventListener("click", showMoreBooks);

//SEARCH
// data-search-overlay.open = false
// genres = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element = 'All Genres'
// genres.appendChild(element)

// for ([id, name]; Object.entries(genres); i++) {
//     document.createElement('option')
//     element.value = value
//     element.innerText = text
//     genres.appendChild(element)
// }

// data-search-genres.appendChild(genres)

// authors = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element.innerText = 'All Authors'
// authors.appendChild(element)

// for ([id, name];Object.entries(authors); id++) {
//     document.createElement('option')
//     element.value = value
//     element = text
//     authors.appendChild(element)
// }

// data-search-authors.appendChild(authors)

// data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
// v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'

// documentElement.style.setProperty('--color-dark', css[v].dark);
// documentElement.style.setProperty('--color-light', css[v].light);

// data-search-cancel.click() { data-search-overlay.open === false }
// data-settings-cancel.click() { querySelect(data-settings-overlay).open === false }
// data-settings-form.submit() { actions.settings.submit }
// data-list-close.click() { data-list-active.open === false }

// data-header-search.click() {
//     data-search-overlay.open === true ;
//     data-search-title.focus();
// }

// data-search-form.click(filters) {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const filters = Object.fromEntries(formData)
//     result = []

//     for (book; booksList; i++) {
//         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
//         authorMatch = filters.author = 'any' || book.author === filters.author

//         {
//             genreMatch = filters.genre = 'any'
//             for (genre; book.genres; i++) { if singleGenre = filters.genre { genreMatch === true }}}
//         }

//         if titleMatch && authorMatch && genreMatch => result.push(book)
//     }

//     if display.length < 1
//     data-list-message.class.add('list__message_show')
//     else data-list-message.class.remove('list__message_show')

//
// data-settings-overlay.submit; {
//     preventDefault()
//     const formData = new FormData(event.target)
//     const result = Object.fromEntries(formData)
//     document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
//     document.documentElement.style.setProperty('--color-light', css[result.theme].light);
//     data-settings-overlay).open === false
// }
//TOGGLE OVERLAYS
const toggleOverlay = (element) => {
  if (element.open) {
    element.close();
  } else {
    element.showModal();
  }
};
const handletoggleBookSummaryOverlay = () => {
  toggleOverlay(html.active.overlay);
};
//BOOKS SUMMARY OVERLAY
const handleSummayOverlay = (event) => {
  const activeBook = event.target.closest(".preview");
  if (!activeBook) return;
  html.active.close.autofocus = true;

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
// if (!books && !Array.isArray(books)) throw new Error('Source required')
// if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')

// day = {
//     dark: '10, 10, 20',
//     light: '255, 255, 255',
// }

// night = {
//     dark: '255, 255, 255',
//     light: '10, 10, 20',
// }

window.scrollTo({ top: 0, behavior: "smooth" });
