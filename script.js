'use strict'

//scroll
const nav = document.querySelector(".header__nav");
const header = document.querySelector(".header__main-tip");
const navHeight = nav.getBoundingClientRect().height;

//Tabs
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector(".operations__tab-container-cases");
const tabsContent = document.querySelectorAll(".operations__content");

//videoTabs

const videoTabs = document.querySelectorAll('.operations__videoTab')
const videoTabsContainer = document.querySelector('.operations__videoTab-container')
const videoContent = document.querySelectorAll('.operations__videoContent')


//Toggle

const linkBtns = document.querySelectorAll('#links__responsive')
const hamburgerBtn = document.getElementById('nav__button')

hamburgerBtn.addEventListener('click', (e) => {
  e.preventDefault()
  linkBtns.forEach(btns => {btns.classList.toggle('toggle')})
})



//scrolling
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  entry.isIntersecting
    ? nav.classList.remove("sticky")
    : nav.classList.add("sticky");
};

const headerObserver = new IntersectionObserver(stickyNav, {
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);



// ௹௹௹௹௹௹௹௹௹௹௹௹௹௹௹௹௹௹௹௹௹ Tab component here ௹௹௹௹௹௹௹௹௹௹௹௹௹௹௹௹௹௹௹௹௹௹௹

// let tabsArr = [];
// let tabsContentArr = [];
// let parentContainerClass = []

// const connectTabFunc = function(closestClass, tabActiveClass,contentActiveClass, tabActiveClass, dataTabClass ) {
//   parentContainerClass.addEventListener('click', function (e) {
//     const clicked = e.target.closest(closestClass)

//     if(!clicked) return
//     tabsArr.forEach(tab => tab.classList.remove(tabActiveClass));
//     tabsContentArr.forEach(content => content.classList.remove(contentActiveClass))

//     // activate tab.

//     clicked.classList.add(tabActiveClass)

//     // Activate content area
//   document
//     .querySelector(dataTabClass)
//     .classList.add(contentActiveClass);
//   })
// }





tabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__tab");
  // console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach((t) => t.classList.remove("operations__tab--active"));
  tabsContent.forEach((c) => c.classList.remove("operations__content--active"));

  // Activate tab
  clicked.classList.add("operations__tab--active");

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});



// second tab


videoTabsContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".operations__videoTab");
  // console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  videoTabs.forEach((t) => t.classList.remove("operations__videoTab--activeBtn"));
  videoContent.forEach((c) => c.classList.remove("operations__videoContent--activeVideo"));

  // Activate tab
  clicked.classList.add("operations__videoTab--activeBtn");

  // Activate content area
  document
    .querySelector(`.operations__videoContent--${clicked.dataset.tab}`)
    .classList.add("operations__videoContent--activeVideo");
});




// Third tab

const optionsTab = document.querySelectorAll('.options__tab')
const optionsTabContainer = document.querySelector('.options__tab-container')
const optionsFrame = document.querySelectorAll('.options__frame')
const optionTabContent = document.querySelectorAll('#options__textContent')


optionsTabContainer.addEventListener("click", function (e) {
  const clicked = e.target.closest(".options__tab ");
  // console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  optionsTab.forEach((t) => t.classList.remove("options__tab--active"));
  optionsFrame.forEach((frame) => frame.classList.remove("options__frame--active"));
  optionTabContent.forEach((t) => t.classList.remove("options__textContent--input--active"));

  // Activate tab
  clicked.classList.add("options__tab--active");

  // Activate content area
  document
    .querySelector(`.options__frame--${clicked.dataset.tab}`)
    .classList.add("options__frame--active");

  document
    .querySelector(`.options__textContent--${clicked.dataset.tab}`)
    .classList.add("options__textContent--input--active")

});




// Play selected Language video

const languageBtnContainer = document.querySelector('.ai__avatars-video-full-btns')
const languageBtns = document.querySelectorAll('.languages-btns')
const videoLanguage = document.querySelectorAll('.video__language')


languageBtnContainer.addEventListener("click", function (e) {
  e.preventDefault()
  const clicked = e.target.closest(".languages-btns");
  console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  languageBtns.forEach((button) => button.classList.remove("languages-btns-active"));
  videoLanguage.forEach((lang) => lang.classList.remove("video__language-active"));

  // Activate tab
  clicked.classList.add("languages-btns-active");

  // Activate content area
  document
    .querySelector(`.video__language-${clicked.dataset.btn}`)
    .classList.add("video__language-active");
});






document.addEventListener("DOMContentLoaded", function() {
  const video = document.querySelector('.header__main-video-hero');
  const playButton = document.querySelector('.play-button');

  const playText = document.querySelector('.play-btn-text')
  

  playButton.addEventListener('click', function(e) {
    if(video.muted) {
      video.muted = false;
      playButton.src = '/assets/Play-dark.svg';
      playText.textContent = 'mute'
    }else {
      video.muted = true;
      playButton.src = '/assets/muted-dark.svg';
      playText.textContent = 'listen'
    }


  })

  video.addEventListener('click', function() {
     if(video.muted) {
      video.muted = false;
      playButton.src = '/assets/Play-dark.svg';
      playText.textContent = 'mute'
    }else {
      video.muted = true;
      playButton.src = '/assets/muted-dark.svg';
      playText.textContent = 'listen'
    }
  })


})




document.addEventListener("DOMContentLoaded", function() {
  const videos = document.querySelectorAll('.video_play');
  const playIconBtns = document.querySelectorAll('.play__icon-btn');
  // const controlContainer = document.querySelector('.video-control-btn')


  playIconBtns.forEach((iconBtn, index) => {
    const video = videos[index];

    iconBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            iconBtn.src = '/assets/Pause-dark.svg';
            // controlContainer.style.visibility = 'hidden'
        } else {
            video.pause();
            iconBtn.src = '/assets/Play-dark.svg';
            // controlContainer.style.visibility = 'visible'

        }
    });
  });
});

document.addEventListener("DOMContentLoaded", function() {
  const quoteVideo = document.querySelector('.quote_video');
  const quoteBtn = document.querySelector('.quote__play-btn');

  quoteBtn.addEventListener('click', () => {
    if (quoteVideo.paused) {
        quoteVideo.play();
        quoteBtn.src = '/assets/Pause-dark.svg';
        // controlContainer.style.visibility = 'hidden'
    } else {
        quoteVideo.pause();
        quoteBtn.src = '/assets/Play-dark.svg';
        // controlContainer.style.visibility = 'visible'

    }
  });
 
});







// Template section

document.addEventListener("DOMContentLoaded", function() {
  const videos = document.querySelectorAll('.template_video_play');
  const playIconBtns = document.querySelectorAll('.video__template-button');
  // const controlContainer = document.querySelector('.bx-pause')


  playIconBtns.forEach((iconBtn, index) => {
    const video = videos[index];

    iconBtn.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            iconBtn.innerHTML = `<i class='bx bx-pause'></i>`;
            // controlContainer.style.visibility = 'hidden'
        } else {
            video.pause();
            iconBtn.innerHTML = ''
            iconBtn.innerHTML = `<i class='bx bxs-right-arrow'></i>`;
            // controlContainer.style.visibility = 'visible'

        }
    });
  });
});







// &&&&&&&&&&&&&&&&&&&&&& Accordion==> FAQ section &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

document.addEventListener('DOMContentLoaded', function() {
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const questionButton = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const toggleIcon = item.querySelector('.faq-toggle');

    questionButton.addEventListener('click', () => {
      const isOpen = answer.style.display === 'block';

      // Close all FAQ answers
      // document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
      document.querySelectorAll('.faq-toggle').forEach(icon => icon.style.transform = 'rotate(0deg)');

      // Toggle the current FAQ answer
      if (isOpen) {
          answer.style.display = 'none';
          toggleIcon.style.transform = 'rotate(0deg)';
      } else {
          answer.style.display = 'block';
          toggleIcon.style.transform = 'rotate(-90deg)';
      }
    });
  });
});





// Drop down

const dropDownBtns = document.querySelectorAll('.bxs-chevron-down')
const infoDrops = document.querySelectorAll('.additional-info')

dropDownBtns.forEach((btn, index) => {
  btn.addEventListener('click', function(e) {
    e.preventDefault()
    
    // Close all dropdowns except the one that was clicked
    infoDrops.forEach((infoDrop, i) => {
      if (i !== index) {
        infoDrop.style.display = 'none'
        dropDownBtns[i].style.transform = 'rotate(0deg)'
      }
    })

    // Toggle the display of the corresponding additional-info section
    const infoDrop = infoDrops[index]
    if (infoDrop.style.display === 'block') {
      infoDrop.style.display = 'none'
      btn.style.transform = 'rotate(0deg)'
    } else {
      infoDrop.style.display = 'block'
      btn.style.transform = 'rotate(-180deg)'
    }
  })
  
})












// link1 = 'https://stream.mux.com/zq9f02nIveNTRPcxl01YvN7015uTi0001uzYUPHJzESzSKTk.m3u8?redundant_streams=true'
// link2 = 'https://stream.mux.com/8o73m9hlPWG4g2xNsC4MNxVHtBiF99jSIWfLme01RjEM.m3u8?redundant_streams=true'
// link3 = 'https://stream.mux.com/a4TBahVeigY2jZm6eJcYoCDPFbmFNYGXliMWjjDM5N4.m3u8?redundant_streams=true'
// link4 = 'https://stream.mux.com/T4Thrlt01At6R01WzLwsBrh4oJoXIaIQS1434DBSk8BQQ.m3u8?redundant_streams=true'


// English = 'https://stream.mux.com/YwJllT202OqZutB01oBgkJvJwVoUQU75B900Xa5nOQ1t01g.m3u8?redundant_streams=true'
// German = 'https://stream.mux.com/KzdCnkH7uJFn5sVNs02rjREIWGQQDcPH9YX2D7YmgPV4.m3u8?redundant_streams=true'
// French = 'https://stream.mux.com/4A4x748eUUlT00PdBZBSQUIsDwR01ZfSb2IvftqToWpuU.m3u8?redundant_streams=true'
// Spanish = 'https://stream.mux.com/lIQE5sPFkH3024nJ1CUrs8bSARLZq2M1pgnVTU6hUsHQ.m3u8?redundant_streams=true'
