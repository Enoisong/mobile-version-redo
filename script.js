const navItems = document.querySelector('.nav-items');
const openMenu = document.querySelector('.openMenu');
const closeMenu = document.querySelector('.closeMenu');
const navigationBarClose = document.querySelector('.navbar');

function show() {
  navItems.style.display = 'flex';
  navItems.style.right = '0';
}

function close() {
  navItems.style.right = '100%';
}

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

document.querySelectorAll('.item');
navItems.addEventListener('click', () => {
  navItems.style.right = '100%';
});

const projects = [
  {
    id: 1,
    name: 'CuisineConnect',
    pic: './images/desktop-images/meal.png',
    companyId: 'Front End Dev',
    work: 'Back End Dev',
    date: 2023,
    description: 'A mobile app built on an external API that displays a list of food dishes with likes and comments functionality.',
    descriptions: `CuisineConnect is a web app built on an external API. It fetches data from the API and displays a list of food dishes with likes and comments functionality.`,
    techUse: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    techUses: ['html', 'css', 'javaScript'],
    projectDemo: 'https://enoisong.github.io/Module2-Capstone/',
    projectSource: 'https://github.com/Enoisong/Module2-Capstone.git',
  },
  {
    id: 2,
    name: 'Population Metrics',
    pic: './images/desktop-images/pop3.png',
    companyId: 'Front End Dev',
    work: 'Back End Dev',
    date: 2023,
    description: 'A web app that allows users to explore population by country and view details of an individual country from an API.',
    descriptions: `A web app that provides information about the population in different countries around the world. It allows users to explore the population by country and view details of an individual country`,
    techUse: ['React', 'Redux', 'CSS'],
    techUses: ['React', 'Redux', 'CSS'],
    projectDemo: 'https://metric-app-7uio.onrender.com/',
    projectSource: 'https://github.com/Enoisong/metric_app.git',
  },
  {
    id: 3,
    name: 'KitchenCompass',
    pic: './images/desktop-images/recipe.png',
    companyId: 'Front End Dev',
    work: 'Back End Dev',
    date: 2023,
    description: 'A web application that allows users to easily store, organize, and share recipes.',
    descriptions: `A web application that allows users to easily store, organize, and share recipes. Users can create personalized recipe boxes to save their favorite recipes for quick access.`,
    techUse: ['Ruby on Rails', 'Postgresql, TailwindCSS'],
    techUses: ['Ruby on Rails', 'Postgresql', 'TailwindCSS'],
    projectDemo: 'http://127.0.0.1:3000/',
    projectSource: 'https://github.com/Enoisong/Recipe-app.git',
  },
  {
    id: 4,
    name: 'WalletWise',
    pic: './images/desktop-images/bills.png',
    companyId: 'Front end',
    work: 'Back end',
    date: 2023,
    description: 'Empower your journey towards financial wellness with WalletWise.',
    descriptions: `Empower your journey towards financial wellness with WalletWise. WalletWise makes budgeting a breeze as users are well equipped to take charge of and keep track of their finances, make informed decisions, and achieve financial goals`,
    techUse: ['Ruby', 'Ruby on Rails', 'Bootstrap'],
    techUses: ['Ruby', 'Ruby on Rails', 'Bootstrap'],
    projectDemo: 'https://eno-s9dz.onrender.com/',
    projectSource: 'https://github.com/Enoisong/budget_tracker.git',
  },
];

const mainContainer = document.getElementById('workscontainer');
const popup = document.getElementById('popup');
const windowPopup = document.querySelector('.winUp');

function popupFunc(id) {
  if (id === null) return;
  let oneCard = projects.filter((el) => el.id === id);
  oneCard = oneCard.shift();
  const popupContent = `
    <div class="container windowPopup popup">
      <div class="pop-header">
        <h4 class="h-4">${oneCard.name}</h4>
        <span class="closePopup" onclick="closePopupFunc()"><i class="fa fa-times"></i></span>
        <ul class="pop-description-element">
          <li class="element" id="companyID">${oneCard.companyId}</li>
          <li class="element">
            <img class="bullet" src="./images/bullet.png" alt="bullet" />
          </li>
          <li class="element" id="workType">${oneCard.work}</li>
          <li class="element">
            <img class="bullet" src="./images/bullet.png" alt="bullet" />
          </li>
          <li class="element" id="date">${oneCard.date}</li>
        </ul>
      </div>
      <img class="work-pic" src=${oneCard.pic} alt="landing page view" />
      <img class="work-pic pop-img" src=${oneCard.pic} alt="nature image" />
      <div class="pop-element">
        <p class="description-text">
          ${oneCard.descriptions}
        </p>
        <div class="pop-items">
          <ul class="languages">
            ${oneCard.techUse.map((el) => `<li class="lang">${el}</li>`).join('')}
          </ul>
          <div class="bottom-bar"></div>
          <div class="navigation-links">
          <a href="${oneCard.projectDemo}" class="btnSource" target="_blank">
              <span class="popup-link-icon">
                  <input type="button" value="See live" />
                  <img src="./images/Icon-Export.png" alt="See live">
              </span>
          </a>
          <a href="${oneCard.projectSource}" class="btnSource" target="_blank">
              <span class="popup-link-icon">
                  <input type="button" value="See Source" />
                  <img src="./images/Icon-GitHub.png" alt="See source">
              </span>
          </a>
      </div>      
        </div>
      </div>
    </div>`;
  windowPopup.style.display = 'flex';
  navigationBarClose.style.display = 'none';
  document.body.style.overflow = 'hidden';
  popup.innerHTML = popupContent;
}

function closePopupFunc(status) {
  if (status === null) return;
  windowPopup.style.display = 'none';
  navigationBarClose.style. display = 'flex';
  document.body.style.overflow = 'scroll';
}

function worksContainer() {
  const element = projects.map((val, index) => {
    const cards = index % 2 === 0 ? `<div class="container">
      <img class="work-pic" src=${val.pic} alt="nature image" />
      <img class="work-pic" src=${val.pic} alt="landing page view" />
      <div class="work-description">
        <h4>${val.name}</h4>
        <ul class="description-element">
          <li>${val.companyId}</li>
          <li class="element">
            <img class="bullet" src="./images/bullet.png" alt="bullet" />
          </li>
          <li class="element">${val.work}</li>
          <li class="element">
            <img class="bullet" src="./images/bullet.png" alt="bullet" />
          </li>
          <li class="element">${val.date}</li>
        </ul>
        <p class="description-text">${val.description}</p>
        <ul class="languages">
          ${val.techUses.map((el) => `<li class="lang">${el}</li>`).join('')}
        </ul><br>
        <button class="btn openPopup" id="firstBtn" type="submit" onclick="popupFunc(${val.id})">See Project</button>
      </div>
    </div>` : ` <div class="container">
      <img class="work-pic" src=${val.pic} alt="multi-post stories  image" />
      <div class="work-description">
        <h4>${val.name}</h4>
        <ul class="description-element">
          <li>${val.companyId}</li>
          <li class="element">
            <img class="bullet" src="./images/bullet.png" alt="bullet" />
          </li>
          <li class="element">${val.work}</li>
          <li class="element">
            <img class="bullet" src="./images/bullet.png" alt="bullet" />
          </li>
          <li class="element">${val.date}</li>
        </ul>
        <p class="description-text">${val.description}</p>
        <ul class="languages">
          ${val.techUses.map((el) => `<li class="lang">${el}</li>`).join('')}
        </ul><br>
        <button class="btn openPopup" id="secondBtn" onclick="popupFunc(${val.id})" type="submit">See Project</button>
      </div>
      <img class="work-pic-1" src=${val.pic} alt="professional art printing image" />
    </div>`;
    return cards;
  });
  return element.join('');
}

window.addEventListener('load', () => {
  mainContainer.innerHTML = worksContainer();
  return mainContainer;
});

popupFunc(null);
closePopupFunc(null);

const formValidation = document.querySelector('#inputcontactbox');
const emailInputValidation = document.querySelector('#email');
const entryTextMessage = document.querySelector('#inputmessage');
formValidation.addEventListener('submit', (event) => {
  const stremailinput = emailInputValidation.value;

  if (/[A-Z]/.test(stremailinput)) {
    entryTextMessage.innerHTML = 'Your form is not sent; email must be in lower case.';
    entryTextMessage.style.fontSize = '12px';
    entryTextMessage.style.fontStyle = 'italic';
    entryTextMessage.style.color = 'tomato';

    window.addEventListener('load', () => {
      mainContainer.innerHTML = worksContainer();
      return mainContainer;
    });

    event.preventDefault();
  }
});
