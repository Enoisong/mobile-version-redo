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
    name: 'Tonic',
    pic: './images/desktop-images/img1.png',
    companyId: 'CANOPY',
    work: 'Back End Dev',
    date: 2015,
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    techUse: ['html', 'css', 'javaScript', 'github', 'ruby', 'Bootstrap'],
    projectDemo: 'https://enoisong.github.io/Mobile-First-Portfolio/',
    projectSource: 'https://github.com/Enoisong/Mobile-First-Portfolio',
  },

  {
    id: 2,
    name: 'Multi-Post Stories',
    pic: './images/desktop-images/img2.png',
    companyId: 'FACEBOOK',
    work: 'Full Stack Dev',
    date: 2015,
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming <br> their friends.',
    techUse: ['html', 'Ruby on rails', 'css', 'javaScript'],
    projectDemo: 'https://enoisong.github.io/Mobile-First-Portfolio/',
    projectSource: 'https://github.com/Enoisong/Mobile-First-Portfolio',
  },

  {
    id: 3,
    name: 'Facebook 360',
    pic: './images/desktop-images/img3.png',
    companyId: 'FACEBOOK',
    work: 'Full Stack Dev',
    date: 2015,
    description: 'Exploring the future of media in Facebook first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    descriptions: `Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essent`,
    techUse: ['html', 'Ruby on rails', 'css', 'javaScript'],
    projectDemo: 'https://enoisong.github.io/Mobile-First-Portfolio/',
    projectSource: 'https://github.com/Enoisong/Mobile-First-Portfolio',
  },

  {
    id: 4,
    name: 'Uber Navigation',
    pic: './images/desktop-images/img4.png',
    companyId: 'Uber',
    work: 'Lead Developer',
    date: 2015,
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    techUse: ['html', 'Ruby on rails', 'css', 'javaScript'],
    projectDemo: 'https://enoisong.github.io/Mobile-First-Portfolio/',
    projectSource: 'https://github.com/Enoisong/Mobile-First-Portfolio',
  },
];
const mainContainer = document.getElementById('workscontainer');
const popup = document.getElementById('popup');
const windowPopup = document.querySelector('.winUp');
function popupFunc(id) {
  if (id === null) return;
  let oneCard = projects.filter((el) => el.id === id);
  oneCard = oneCard.shift();
  const popupContent = ` <div class="container windowPopup popup">
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
                        <form action=${oneCard.projectDemo} class="btnSource">
                            <span class="popup-link-icon">
                              <input  type="submit" value="See live" />
                              <img src="./images/Icon-Export.png" alt="See live">
                            </span>
                        </form>
                        <form action=${oneCard.projectSource} class="btnSource">
                            <span class="popup-link-icon">
                              <input  type="submit" value="See Source" />
                              <img src="./images/Icon-GitHub.png" alt="See source">
                            </span>
                        </form>
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
navigationBarClose.style.display = 'flex';
document.body.style.overflow = 'scroll';
}
function worksContainer() {
  const element = projects.map((val, index) => {
    const cards = index % 2 === 0 ? `<div class="container">
    <img class="work-pic" src="./images/Portoflio_Card/work.png" alt="nature image" />
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
    ${val.techUse.map((el) => `<li class="lang">${el}</li>`).join('')}
    </ul><br>
    <button class="btn openPopup" id="firstBtn" type="submit" onclick="popupFunc(${val.id})">See Project</button>
    </div>
    </div>`
    : ` <div class="container">
      <img class="work-pic" src="./images/Portoflio_Card/work1.png" alt="multi-post stories image" />
                
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
                       ${val.techUse.map((el) => `<li class="lang">${el}</li>`).join('')}
                    </ul><br>
                    <button class="btn openPopup" id="secondBtn" onclick="popupFunc(${val.id})" type="submit">See
                        Project</button>
                </div>
                <img class="work-pic-1" src=${val.pic} alt="professional art printing image" />
</div>`;
return cards;
});
return element;
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
  const strEmailInput = emailInputValidation.value;

  if (/[A-Z]/.test(strEmailInput)) {
    entryTextMessage.innerHTML = 'Your form is not sent because the email address is not correct; Email must contain only lowercase character.';
    entryTextMessage.style.fontSize = '16px';
    entryTextMessage.style.fontStyle = 'italic';
    entryTextMessage.style.color = 'yellow';

    window.addEventListener('load', () => {
      mainContainer.innerHTML = worksContainer();
    return mainContainer;
  });
  

    event.preventDefault();
  }
});
