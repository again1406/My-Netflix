const tabItems = document.querySelectorAll('.tab-item');
const tabcontentItems = document.querySelectorAll('.tab-content-item');

// function to select tab content item
function selectItem(e){
    removeBorder();
    removeShow();
    // add border to current tab
    this.classList.add('tab-border');
    // grab content item from DOM
    const currentId = `#${this.id}-content`;
    const tabContentItem = document.querySelector(currentId);
    tabContentItem.classList.add('show');
 
}

function removeBorder(){
    tabItems.forEach(item => item.classList.remove('tab-border'));
}
function removeShow(){
    tabcontentItems.forEach(item => item.classList.remove('show'));
}

// listen for tab click
tabItems.forEach(item => item.addEventListener('click', selectItem));