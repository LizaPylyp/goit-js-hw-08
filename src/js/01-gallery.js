// Add imports above this line

// Change code below this line
import { galleryItems } from './gallery-items.js';

const galleryList = document.querySelector('.gallery');

function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const link = document.createElement('a');
  link.classList.add('gallery__link');
  link.href = item.original;

  const image = document.createElement('img');
  image.classList.add('gallery__image');
  image.src = item.preview;
  image.alt = item.description;
  image.setAttribute('data-source', item.original);

  link.appendChild(image);
  galleryItem.appendChild(link);

  return galleryItem;
}

function openModal(event) {
  event.preventDefault();

  const target = event.target;
  if (target.classList.contains('gallery__image')) {
    const imageSource = target.dataset.source;

    const instance = basicLightbox.create(`<img src="${imageSource}">`);
    instance.show();
  }
}

galleryList.addEventListener('click', openModal);

function renderGalleryItems(items) {
  const galleryItems = items.map((item) => createGalleryItem(item));
  galleryList.append(...galleryItems);
}

renderGalleryItems(galleryItems);
console.log(galleryItems);