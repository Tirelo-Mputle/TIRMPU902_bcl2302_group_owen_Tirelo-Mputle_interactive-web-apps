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

const createPreviewsFragment = (booksArray, bookSliceStart, bookSliceEnd) => {
  // appStatus.extracted = appStatus.matches.slice
  const fragment = document.createDocumentFragment();
  if (appStatus.booksRemaining >= 36) {
    appStatus.extracted = appStatus.matches.slice(bookSliceStart, bookSliceEnd);
  }
  if (appStatus.booksRemaining <= 36) {
    appStatus.extracted = appStatus.matches.slice(bookSliceStart);
    // list.button.disabled = true;
  }
  for (let book of appStatus.extracted) {
    const { author: authorId, id, image, title } = book;

    const element = document.createElement("button");
    element.classList = "preview";
    element.setAttribute("book-id", id);

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

//append the fragment containing book preview buttons to the list
//div element that should contain the books
html.list.itemsContainer.appendChild(
  createPreviewsFragment(
    appStatus.extracted,
    appStatus.range[0],
    appStatus.range[1]
  )
);

//SHOW MORE BUTTON
const updateRemaining = () => {
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
updateRemaining();
// const createPreviewsFragment(booksArray, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]){
//     booksArray, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]
// }
// html.list.itemsContainer.appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))

const showMoreBooks = () => {
  console.log(appStatus.extracted);
  console.log("page", appStatus.page);
  html.list.itemsContainer.appendChild(
    createPreviewsFragment(
      appStatus.extracted,
      appStatus.page * BOOKS_PER_PAGE,
      (appStatus.page + 1) * BOOKS_PER_PAGE
    )
  );
  updateRemaining();
};

//EVENT LISTENERS
html.list.button.addEventListener("click", showMoreBooks);

// data-search-overlay.open = false
// fragment = document.createDocumentFragment()
// // const extracted = books.slice(0, 36)

// for ({ author, image, title, id }; extracted; i++) {
//   const preview = createPreview({
//     author,
//     id,
//     image,
//     title,
//   });

//   fragment.appendChild(preview);
// }

// data-list-items.appendChild(fragment)

// data-list-button = "Show more (books.length - BOOKS_PER_PAGE)"

// data-list-button.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)

// data-list-button.innerHTML = /* html */ [
//     '<span>Show more</span>',
//     '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
// ]
// data-list-button.click() {
//     document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
//     actions.list.updateRemaining()
//     page = page + 1
// }

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
// html.list.button.innerHTML = /* html */ `
//     <span>Show more</span>
//     <span class="list__remaining"> (${remaining})</span>
// `;
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
//OPEN THE BOOKS SUMMARY OVERLAY
// data-list-items.click() {
//     pathArray = Array.from(event.path || event.composedPath())
//     active;

//     for (node; pathArray; i++) {
//         if active break;
//         const previewId = node?.dataset?.preview

//         for (const singleBook of books) {
//             if (singleBook.id === id) active = singleBook
//         }
//     }

//     if !active return
//     data-list-active.open === true
//     data-list-blur + data-list-image === active.image
//     data-list-title === active.title

//     data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
//     data-list-description === active.description
// }
