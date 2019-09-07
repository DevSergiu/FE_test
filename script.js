// Change Active State on Cards

const changeCardState = (e) => {
  const target = e.target.parentElement;

  if (target.className === 'card__block' || target.className === 'card__description') {
    e.currentTarget.querySelector('.active').classList.remove('active');
    target.classList.add('active');
  }
}

document.querySelector('.card_area').addEventListener('click', changeCardState);


// Navigation Tab

const changeTab = (e) => {
  const target = e.target;

  if (target.className === 'nav__btn') {
    e.currentTarget.querySelector('.nav__btn--active').classList.remove('nav__btn--active')
    target.classList.add('nav__btn--active');
  }
}

document.querySelector('.nav').addEventListener('click', changeTab);
