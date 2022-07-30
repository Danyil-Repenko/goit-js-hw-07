import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function galleryItemsMarkup(arrayOfItems) {
    return arrayOfItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`
    }).join('');
}

const insertGalleryItems = arrayOfItems => {
    const markup = galleryItemsMarkup(arrayOfItems);
    gallery.innerHTML = markup;
}

insertGalleryItems(galleryItems);

gallery.addEventListener('click', onImageClick)

function onImageClick(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const link = event.target.dataset.source;
}

const preventDefaultLinkBehavior = (ansestor) => {
    const linksArray = ansestor.querySelectorAll('a');
    return linksArray.forEach(link => {
        link.addEventListener('click', event => event.preventDefault())
    })
}

preventDefaultLinkBehavior(gallery);