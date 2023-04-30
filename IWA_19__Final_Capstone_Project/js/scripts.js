import { BOOKS_PER_PAGE, books,authors,genres } from "./data.js";
console.log(books)
const matches = books
const page = 1;
//Check if there is a books array
if (!books && !Array.isArray(books)) throw new Error('Source required') 
const range =[1,2]; //todo find out what range is
if (!range && range.length < 2) throw new Error('Range must be an array with two numbers')

//day mode
const day = {
    dark: '10, 10, 20',
    light: '255, 255, 255',
}
//night mode
const night = {
    dark: '255, 255, 255',
    light: '10, 10, 20',
}

const fragment1 = document.createDocumentFragment();
//the first 35 books of the books array
const extracted1 = books.slice(0, 36)
/**
 * Creates a preview of 
 * @param {object} book 
 */
const createPreview =(book)=>{
//todo get the preview html div
}
for ({ author, image, title, id }; extracted1; i++) {
    //todo populate the innerHtml and img src attr with this object datat
    const preview = createPreview({
        author,
        id,
        image,
        title
    })
//Add the 35 preview divs to fragment1
    fragment1.appendChild(preview)
}
//todo append the fragment to the data-list-items div
data-list-items.appendChild(fragment1)
//fragment to append genres
genresFragment = document.createDocumentFragment()
element = document.createElement('option')
element.value = 'any'
element = 'All Genres'
genresFragment.appendChild(element)

for ([id, name]; Object.entries(genres); i++) {
    //didn't know if this was refering to the genres object
    //or the genresFragment
// for ([id, name]; Object.entries(genresFragment); i++) {
    document.createElement('option')
    element.value = value
    element.innerText = text
    genresFragment.appendChild(element)
}

data-search-genres.appendChild(genresFragment)

authorsFragment = document.createDocumentFragment()
element = document.createElement('option')
element.value = 'any'
element.innerText = 'All Authors'
authorsFragment.appendChild(element)

// for ([id, name];Object.entries(authorsFragment); id++) {
    //authorsFragment or authors object
for ([id, name];Object.entries(authors); id++) {
    document.createElement('option')
    element.value = value
    element = text
    authorsFragment.appendChild(element)
}
//todo get this element
data-search-authors.appendChild(authorsFragment)
//todo get this element //look up matchMedia
data-settings-theme.value === window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'night' : 'day'
//todo change the variable name // matches = books object
v = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches? 'night' | 'day'
//todo set set style of this element (the body?) when the mode is changed
documentElement.style.setProperty('--color-dark', css[v].dark);
documentElement.style.setProperty('--color-light', css[v].light);
//todo fix show more button
data-list-button = "Show more (books.length - BOOKS_PER_PAGE)"

data-list-button.disabled = !(matches.length - [page * BOOKS_PER_PAGE] > 0)

data-list-button.innerHTML = /* html */ [
    '<span>Show more</span>',
    '<span class="list__remaining"> (${matches.length - [page * BOOKS_PER_PAGE] > 0 ? matches.length - [page * BOOKS_PER_PAGE] : 0})</span>',
]

//data search button 
data-search-cancel.click() { data-search-overlay.open === false } //todo close the overlay
//data settings cancel button
data-settings-cancel.click() { querySelect(data-settings-overlay).open === false }
//data settings form submits //todo actions? 
data-settings-form.submit() { actions.settings.submit }
data-list-close.click() { data-list-active.open === false }
//data list button submit
data-list-button.click() {
    //get the data list items div, previews // looks like we're adding more 
    document.querySelector([data-list-items]).appendChild(createPreviewsFragment(matches, page x BOOKS_PER_PAGE, {page + 1} x BOOKS_PER_PAGE]))
    //todo what is actions
    actions.list.updateRemaining()
    //increase the number of pages displayed
    page = page + 1
}
//todo clicking the search button
data-header-search.click() {
    // open the search overlay
    data-search-overlay.open === true ;
    //focus on the search input
    data-search-title.focus();
}
//data search form takes in object?
data-search-form.click(filters) {
    //event.preventDefault
    preventDefault()
    //create new form data
    const formData = new FormData(event.target)
    //filters is set to an object with data from form data
    const filters = Object.fromEntries(formData)
    //an empty array we're probably going to have to push stuff in
    result = []
 //todo for of look // for book of books
    for (book; booksList; i++) {
        //filter is trimmed, set to lowecase and checked if it is equal to the book (set to lowercas)
        titleMatch = filters.title.trim() = '' && book.title.toLowerCase().includes[filters.title.toLowerCase()]
        //do the same filter as with the title
        authorMatch = filters.author = 'any' || book.author === filters.author

        {
            //get genreMatch
            genreMatch = filters.genre = 'any'
            //for singleGenre of genres
            for (genre; book.genres; i++) 
            //if the singleGenre ===filters genre then genreMatch is true
            { if singleGenre = filters.genre { genreMatch === true }}
        }
        }
  //titleMatch and authoMatch and genreMatch are true then push push the book into the
   //results array
        if titleMatch && authorMatch && genreMatch => result.push(book)
    }
    //if there are no results that match the filters
    //if results.length < 1
    if display.length < 1 
    //add class to data-list-message to SHOW the message
    data-list-message.class.add('list__message_show')
    //else remove the class that shows the message
    else data-list-message.class.remove('list__message_show')
    
   //clear the data list items div
    data-list-items.innerHTML = ''
    //fragment to add stuff to
    const fragment = document.createDocumentFragment()
    //what is source? books array or the filtered results?
    //todo find out what this does // get a slice of some array
    //What is range?!!!
    const extracted = source.slice(range[0], range[1])
    
    //for item of extracted 
    for ({ author, image, title, id }; extracted; i++) {
        //get the author, image, title , id (change this to authorId)
        const { author: authorId, id, image, title } = props
           //create a button element
        element = document.createElement('button')
        //add the class "preview"
        element.classList = 'preview'
        //set its attribute data-preview to id
        element.setAttribute('data-preview', id)

        //set the innerHTML to an image and some text
        element.innerHTML = /* html */ `
            <img
                class="preview__image"
                src="${image}"
            />
            
            <div class="preview__info">
                <h3 class="preview__title">${title}</h3>
                <div class="preview__author">${authors[authorId]}</div>
            </div>
        `
       //append this element to the fragment
        fragment.appendChild(element)
    }
    //append the filtered items fragment to the data list items div
    data-list-items.appendChild(fragments)
    //initial === books(array).length - number of books per page(36)
    initial === matches.length - [page * BOOKS_PER_PAGE]
    //TODO what is remaining //its the number of books
    //remaining in the filtered results array that are not being displayed
    remaining === hasRemaining ? initial : 0
    //change the button disabled attribute
    data-list-button.disabled = initial > 0
   //change the innerhtml of the data list button
    data-list-button.innerHTML = /* html */ `
        <span>Show more</span>
        <span class="list__remaining"> (${remaining})</span>
    `
    //the page should scroll back to the top
    window.scrollTo({ top: 0, behavior: 'smooth' });
    //close the search overlay
    data-search-overlay.open = false
}

//When you submit the data setting form
data-settings-overlay.submit; {
    //e.preventDefault()
    preventDefault()
    //create a new FormData
    const formData = new FormData(event.target)
    //results object with keys from the form
    const result = Object.fromEntries(formData)
    //create if statement to set lightMode/darkMode
    document.documentElement.style.setProperty('--color-dark', css[result.theme].dark);
    document.documentElement.style.setProperty('--color-light', css[result.theme].light);
    //close the data settings overlay
    data-settings-overlay).open === false
}

//clicking
data-list-items.click(event) {

    pathArray = Array.from(event.path || event.composedPath())
    active;

    for (node; pathArray; i++) {
        if active break;
        const previewId = node?.dataset?.preview
    
        for (const singleBook of books) {
            if (singleBook.id === id) active = singleBook
        } 
    }
    
    if !active return
    //if active
    //open the data-list-active overlay
    data-list-active.open === true
    //display the data list image and blue
    data-list-blur + data-list-image === active.image
    //display the title
    data-list-title === active.title
    //display subtitle and descriptions
    data-list-subtitle === '${authors[active.author]} (${Date(active.published).year})'
    data-list-description === active.description
}
