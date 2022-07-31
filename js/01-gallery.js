import { galleryItems } from './gallery-items.js';
// Change code below this line
const gallery = document.querySelector('.gallery');
const body = document.querySelector('body');


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
};

const insertGalleryItems = arrayOfItems => {
    const markup = galleryItemsMarkup(arrayOfItems);
    gallery.innerHTML = markup;
};

insertGalleryItems(galleryItems);

gallery.addEventListener('click', onImageClick);
let instance;

function onImageClick(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return;
    }
    const link = event.target.dataset.source;
    instance = basicLightbox.create(`<img src="${link}"/>`, {
        closable: true,
        onShow() {
            document.addEventListener("keydown", onEscClick);
        },
        onClose() {
            document.removeEventListener("keydown", onEscClick);
        },
    });
    instance.show();

};

function onEscClick(event) {
    if (event.code === "Escape") {
        instance.close();
    };
}