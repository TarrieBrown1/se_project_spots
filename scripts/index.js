const editProfileBtn = document.querySelector(".profile__edit-btn");
const editProfileModal = document.querySelector("#edit-profile-modal");
const editProfileForm = editProfileModal.querySelector(".modal__form");
const editProfileCloseBtn = editProfileModal.querySelector(".modal__close-btn");
const editProfileNameInput = editProfileModal.querySelector(
  "#profile-name-input"
);

const editProfileDescriptionInput = editProfileModal.querySelector(
  "#profile-description-input"
);

const addCardFormEl = document.querySelector("#add-card-form");
const linkInput = addCardFormEl.querySelector("#card-image-input");
const captionInput = addCardFormEl.querySelector("#caption-input");

const newPostBtn = document.querySelector(".profile__new-post-btn");
const newPostModal = document.querySelector("#new-post-modal");
const newPostCloseBtn = newPostModal.querySelector(".modal__close-btn");

const profileNameEl = document.querySelector(".profile__name");
const profileDescriptionEl = document.querySelector(".profile__description");

editProfileBtn.addEventListener("click", function () {
  editProfileNameInput.value = profileNameEl.textContent;
  editProfileDescriptionInput.value = profileDescriptionEl.textContent;
  editProfileModal.classList.add("modal_opened");
});


editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_opened");
});

newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
});

newPostCloseBtn.addEventListener("click", function () {
 closeModal(newPostModal);
});

function closeModal(modal) {
  modal.classList.remove("modal_opened");
}

function openModal(modal) {
  modal.classList.add("modal_opened");
}


function handleEditProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = editProfileNameInput.value;
  profileDescriptionEl.textContent = editProfileDescriptionInput.value;
  editProfileModal.classList.remove("modal_opened");
}

editProfileForm.addEventListener("submit", handleEditProfileFormSubmit);

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  console.log(captionInput.value);
  console.log(linkInput.value);

  closeModal(newPostModal);
}

addCardFormEl.addEventListener("submit", handleAddCardFormSubmit);
