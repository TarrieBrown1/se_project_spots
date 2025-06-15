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
const nameInput = addCardFormEl.querySelector("#card-name-input");
const linkInput = addCardFormEl.querySelector("#card-link-input");

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

newPostBtn.addEventListener("click", function () {
  newPostLinkInput.value = addCardFormEl.textContent;
  newPostNameInput.value = addCardFormEl.textContent;
  newPostModal.classList.add("modal_opened");
});

editProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_opened");
});

newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_opened");
});

newPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_opened");
});

function closeModal() {
  modal.classList.remove("modal_opened");
}

function openModal() {
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
  profileName.textContent = editProfileNameInput.value;
  cardLink.textContent = linkInput.value;
  newPostModal.classList.remove("modal_opened");
  closeModal();
}

addCardFormEl.addEventListener("submit", handleAddCardFormSubmit);
