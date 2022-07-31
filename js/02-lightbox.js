import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

function galleryItemsMarkup(arrayOfItems) {
    return arrayOfItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    }).join('');
}

const insertGalleryItems = arrayOfItems => {
    const markup = galleryItemsMarkup(arrayOfItems);
    gallery.innerHTML = markup;
}

insertGalleryItems(galleryItems);

const galleryLightBox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });
