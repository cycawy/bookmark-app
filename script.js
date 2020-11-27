const modal = document.getElementById('modal');
const modalShow = document.getElementById('show-modal');
const modalClose = document.getElementById('close-modal'); 
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-url');
const bookmarksContainer = document.getElementById('bookmarks-container');

//show modal, focus on Input
function showModal(){
    modal.classList.add('show-modal');
    websiteNameEl.focus();
}

//modal event listener
modalShow.addEventListener('click', showModal);
modalClose.addEventListener('click', () => modal.classList.remove('show-modal'));
window.addEventListener('click', (e)=> e.target === modal?modal.classList.remove('show-modal'):false);


// Form validate
function validate(nameValue, urlValue){
    const expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
   // const expression = /https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/g;
    const regexp = new RegExp(expression);
    
    if(!urlValue.match(regexp)){
        alert("please enter a valid web address!");
        return false;
    }
    return true;
}

//handle data from Form
function storeBookmark(e){
    e.preventDefault();
    const nameValue = websiteNameEl.value;
    let urlValue = websiteUrlEl.value;
    if(!nameValue || !urlValue){
        alert('please fill out both fields.');
        return false;
    }
    if(!urlValue.includes('http://', 'https://')){
        urlValue = `http://${urlValue}`;
    }
    console.log(nameValue, urlValue);
    if(!validate(nameValue, urlValue)){
        return false;
    };
}

//event listener
bookmarkForm.addEventListener('submit', storeBookmark);