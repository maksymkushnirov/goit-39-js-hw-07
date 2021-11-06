import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");

const arrayEl = galleryItems
  .map(
    ({ preview, original, description }) => `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>
`
  )
  .join("");
galleryEl.insertAdjacentHTML("afterbegin", arrayEl);

galleryEl.addEventListener("click", onGetLargeImage);

function onGetLargeImage(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const currentImageUrl = event.target.dataset.source;
  openModal(currentImageUrl);
}
const optionsForModal = {
  captionsData: "alt",
  captionDelay: 250,
};

function openModal(currentImageUrl) {
  const modalFromLib = new SimpleLightbox(".gallery__item", optionsForModal);
  modalFromLib.on("closed.simplelightbox", function () {
    modalFromLib.refresh();
  });
}