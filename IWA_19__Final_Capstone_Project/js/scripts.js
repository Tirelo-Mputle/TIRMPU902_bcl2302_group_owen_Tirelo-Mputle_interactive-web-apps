import { BOOKS_PER_PAGE, books, authors, genres } from "./data.js";
import {
  html,
  createPreview,
  displayPreview,
  handleBookSummaryOverlay,
} from "./view.js";
const { header, list, active, search, settings } = html;
const state = {
  isBookSummaryOpen: false,
};
const matches = books;
/**Number of pages curently being displayed. 1 page contains 36
 * books if not they will contain the remaining amount of books in
 * the books array.
 */
let page = 1;
//if books is falsey or  is not an array, throw error
if (!books || !Array.isArray(books)) throw new Error("Source required");
// assuming that range is first book to the last book

let range = [1, books.length]; //todo find out what range is
//if range is falsy or its length is smaller than 2 throw error
if (!range && range.length < 2)
  throw new Error("Range must be an array with two numbers");

/**day mode settings*/
const day = {
  dark: "10, 10, 20",
  light: "255, 255, 255",
};
/**night mode settings*/
const night = {
  dark: "255, 255, 255",
  light: "10, 10, 20",
};

/**Fragment that will contain initial book content displayed when page loads */
const initialFragment = document.createDocumentFragment();
/**the first 36 books of the books array*/
let extractedBooks = books.slice(0, BOOKS_PER_PAGE);
//display the first 36 books
displayPreview(extractedBooks, initialFragment);
let booksDisplayed = [...extractedBooks];
let remainingToDisplay = books.length - booksDisplayed.length;
list.button.innerHTML = `<span>Show more </span> <span class="list__remaining">${remainingToDisplay}</span>`;

const handleShowMore = () => {
  const fragmentMore = document.createDocumentFragment();
  const startOfExtractedBooks = BOOKS_PER_PAGE * page;
  if (remainingToDisplay >= 36) {
    extractedBooks = books.slice(
      startOfExtractedBooks,
      startOfExtractedBooks + BOOKS_PER_PAGE
    );
  } else {
    extractedBooks = books.slice(startOfExtractedBooks);
    list.button.disabled = true;
  }

  booksDisplayed = [...booksDisplayed, ...extractedBooks];
  remainingToDisplay = books.length - booksDisplayed.length;
  displayPreview(extractedBooks, fragmentMore);
  //empty out the fragment
  fragmentMore.innerHTML = "";
  page = page + 1;
  list.button.innerHTML = `<span>Show more </span> <span class="list__remaining">${remainingToDisplay}</span>`;
};
//clicking

let chosenBook;

const handleToggleBookSummaryPreview = (event) => {
  const bookSelected = event.target.closest(".preview");
  chosenBook = bookSelected;
  if (bookSelected) {
    active.overlay.setAttribute("open", "open");
    state.isBookSummaryOpen = true;
    handleBookSummaryOverlay(chosenBook);
  } else {
    active.overlay.removeAttribute("open");
    state.isBookSummaryOpen = false;
  }
};

//event listeners
list.button.addEventListener("click", handleShowMore);
list.itemsContainer.addEventListener("click", handleToggleBookSummaryPreview);
active.close.addEventListener("click", handleToggleBookSummaryPreview);

// //fragment to append genres
// genresFragment = document.createDocumentFragment();
// element = document.createElement("option");
// element.value = "any";
// element = "All Genres";
// genresFragment.appendChild(element);

// for ([id, name]; Object.entries(genres); i++) {
//   //didn't know if this was refering to the genres object
//   //or the genresFragment
//   // for ([id, name]; Object.entries(genresFragment); i++) {
//   document.createElement("option");
//   element.value = value;
//   element.innerText = text;
//   genresFragment.appendChild(element);
// }

// data-search-genres.appendChild(genresFragment)

// authorsFragment = document.createDocumentFragment()
// element = document.createElement('option')
// element.value = 'any'
// element.innerText = 'All Authors'
// authorsFragment.appendChild(element)

// // for ([id, name];Object.entries(authorsFragment); id++) {
//     //authorsFragment or authors object
// for ([id, name];Object.entries(authors); id++) {
//     document.createElement('option')
//     element.value = value
//     element = text
//     authorsFragment.appendChild(element)
// }
// //todo get this element
// data-search-authors.appendChild(authorsFragment)
// //todo get this element //look up matchMedia
// data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
// //todo change the variable name // matches = books object
// v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'
// //todo set set style of this element (the body?) when the mode is changed
// documentElement.style.setProperty('--color-dark', css[v].dark);
// documentElement.style.setProperty('--color-light', css[v].light);

// //data search button
// data-search-cancel.click() { data-search-overlay.open === false } //todo close the overlay
// //data settings cancel button
// data-settings-cancel.click() { querySelect(data-settings-overlay).open === false }
// //data settings form submits //todo actions?
// data-settings-form.submit() { actions.settings.submit }
// data-list-close.click() { data-list-active.open === false }
// //data list button submit

// //todo clicking the search button
// data-header-search.click() {
//     // open the search overlay
//     data-search-overlay.open === true ;
//     //focus on the search input
//     data-search-title.focus();
// }
// //data search form takes in object?
// data-search-form.click(filters) {
//     //event.preventDefault
//     preventDefault()
//     //create new form data
//     const formData = new FormData(event.target)
//     //filters is set to an object with data from form data
//     const filters = Object.fromEntries(formData)
//     //an empty array we're probably going to have to push stuff in
//     result = []
//  //todo for of look // for book of books
//     for (book; booksList; i++) {
//         //filter is trimmed, set to lowecase and checked if it is equal to the book (set to lowercas)
//         titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
//         //do the same filter as with the title
//         authorMatch = filters.author = 'any' || book.author === filters.author

//         {
//             //get genreMatch
//             genreMatch = filters.genre = 'any'
//             //for singleGenre of genres
//             for (genre; book.genres; i++)
//             //if the singleGenre ===filters genre then genreMatch is true
//             { if singleGenre = filters.genre { genreMatch === true }}
//         }
//         }
//   //titleMatch and authoMatch and genreMatch are true then push push the book into the
//    //results array
//         if titleMatch && authorMatch && genreMatch => result.push(book)
//     }
//     //if there are no results that match the filters
//     //if results.length < 1
//     if display.length < 1
//     //add class to data-list-message to SHOW the message
//     data-list-message.class.add('list__message_show')
//     //else remove the class that shows the message
//     else data-list-message.class.remove('list__message_show')

//    //change the innerhtml of the data list button
//     data-list-button.innerHTML = /* html */ `
//         <span>Show more</span>
//         <span class="list__remaining"> (${remaining})</span>
//     `
//     //the page should scroll back to the top
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//     //close the search overlay
//     data-search-overlay.open = false
// }

// //When you submit the data setting form
// data-settings-overlay.submit; {
//     //e.preventDefault()
//     preventDefault()
//     //create a new FormData
//     const formData = new FormData(event.target)
//     //results object with keys from the form
//     const result = Object.fromEntries(formData)
//     //create if statement to set lightMode/darkMode
//     document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
//     document.documentElement.style.setProperty('--color-light', css[result.theme].light);
//     //close the data settings overlay
//     data-settings-overlay).open === false
// }
