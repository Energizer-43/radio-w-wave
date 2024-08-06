// FORM SEARCH

const form = document.querySelector(".header__top-search-form");
const search = document.querySelector(".header__top-search");
const body = document.querySelector("body");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

search.addEventListener("click", function (e) {
  e.stopPropagation();
  this.classList.add("--active");
});

body.addEventListener("click", function () {
  search.classList.remove("--active");
});

// PLAY/PAUSE BTNS

const playBtnOne = document.querySelector(".header__bottom-btn-previously");
const playBtnTwo = document.querySelector(".header__bottom-btn-now");
const podcastsBtns = document.querySelectorAll(".podcasts__item-btn");

playBtnOne.onclick = function () {
  playBtnOne.classList.toggle("active-btn");
  if (playBtnTwo.classList.contains("active-btn")) {
    playBtnTwo.classList.remove("active-btn");
  }
};

playBtnTwo.onclick = function () {
  playBtnTwo.classList.toggle("active-btn");
  if (playBtnOne.classList.contains("active-btn")) {
    playBtnOne.classList.remove("active-btn");
  }
};

podcastsBtns.forEach(function (el) {
  el.addEventListener("click", function () {
    podcastsBtns.forEach((el) => {
      if (el != this) {
        el.classList.remove("active-btn");
      }
    });
    this.classList.toggle("active-btn");
  });
});

// ADD CARDS

const btnMore = document.querySelector(".podcasts__btn");
const hiddenItems = document.querySelectorAll(".--hidden-card");

btnMore.addEventListener("click", () => {
  hiddenItems.forEach((el) => {
    el.classList.toggle("--visible-card");
  });
  btnMore.innerHTML =
    btnMore.innerHTML === "Скрыть"
      ? (btnMore.innerHTML = "Еще подкасты")
      : (btnMore.innerHTML = "Скрыть");
});

// SELECTOR

const element = document.querySelector(".js-choice");
const choices = new Choices(element, {
  searchEnabled: false,
  itemSelectText: "",
  shouldSort: false,
  position: "bottom",
});

// ACCORDION AND TABS

new Accordion(".accordion-container");

const tabsBtn = document.querySelectorAll(".guests__btn-accordion");
const tabsItems = document.querySelectorAll(".guests__block-bottom-right");

tabsBtn.forEach(function (item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active-tab")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active-tab");
      });

      tabsItems.forEach(function (item) {
        item.classList.remove("active-tab");
      });

      currentBtn.classList.add("active-tab");
      currentTab.classList.add("active-tab");
    }
  });
});

// SWIPER

const swiper = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  keyboard: {
    enabled: true,
  },

  breakpoints: {
    1300: {
      slidesPerView: 4,
    },

    650: {
      slidesPerView: 2,
    },

    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
  },

  spaceBetween: 30,
});

// VALIDATE

let validation = new JustValidate("#form");

validation

  .addField("#comment", [
    {
      rule: "required",
      errorMessage: "Напишите что-нибудь",
    },
  ])

  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Вы не ввели имя",
    },
    {
      rule: "minLength",
      value: 2,
      errorMessage: "Минимум два символа",
    },
    {
      rule: "maxLength",
      value: 15,
      errorMessage: "Максимум 15 символов",
    },
  ])

  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Вы не ввели e-mail",
    },
    {
      rule: "email",
      errorMessage: "Введите правильный e-mail",
    },
  ])

  .addField("#agreement", [
    {
      rule: "required",
      errorMessage: "Вы должны дать согласие",
    },
  ]);

// MODAL WINDOW

document
  .getElementById("open-modal-btn")
  .addEventListener("click", function () {
    document.getElementById("modal-window").classList.add("open");
  });

document
  .getElementById("close-modal-window-btn")
  .addEventListener("click", function () {
    document.getElementById("modal-window").classList.remove("open");
  });

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.getElementById("modal-window").classList.remove("open");
  }
});

document
  .querySelector("#modal-window .modal__box")
  .addEventListener("click", (event) => {
    event._isClickWithInModal = true;
  });

document.getElementById("modal-window").addEventListener("click", (event) => {
  if (event._isClickWithInModal) return;
  event.currentTarget.classList.remove("open");
});

// MOBILE MODAL

document
  .getElementById("open-modal-btn-mobile")
  .addEventListener("click", function () {
    document.getElementById("modal-window").classList.add("open");
  });

// BURGER

document.getElementById("burger").addEventListener("click", function () {
  document.querySelector("header").classList.toggle("open");
});

// MOBILE MENU

document.getElementById("mobile-btn").addEventListener("click", function () {
  document.querySelector("header").classList.toggle("active-btn-mobile");
});
