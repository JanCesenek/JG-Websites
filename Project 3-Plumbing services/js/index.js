// const header = document.querySelector('.nav');
// const nav = document.querySelector('.biggerSize');
// const navHeight = nav.getBoundingClientRect().height;

// const stickyNav = function (entries) {
//   const [entry] = entries;
//   // console.log(entry);

//   if (!entry.isIntersecting) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// };

// const headerObserver = new IntersectionObserver(stickyNav, {
//   root: null,
//   threshold: 0,
//   rootMargin: `-${navHeight}px`,
// });

// headerObserver.observe(header);

const chapters = document.querySelectorAll('.main-content__chapter');

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

chapters.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

$('.dropdown-btn').click(function () {
  $('.hidden-dropdown').toggleClass('hidden');
});
