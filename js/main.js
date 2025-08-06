const header = document.querySelector(".header");
const sections = document.querySelectorAll("section");
const headLinks = document.querySelectorAll(".menu__link");

window.addEventListener("scroll", () => {
  const headerHeight = header.offsetHeight;
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - headerHeight;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      current = section.getAttribute("id");
    }
  });

  headLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});


const buttons = document.querySelectorAll('.hero__btn');

buttons.forEach(btn => {
  btn.addEventListener('mouseenter', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });

  btn.addEventListener('mouseleave', () => {
  });
});


const hoverPortrait = document.querySelector('.hero__bottom-block');

const animationsClasses = [
  document.querySelector('.hero__top-block'),
  document.querySelector('.hero__texture'),
  document.querySelector('.hero__horizontal-block')
];

hoverPortrait.addEventListener('mouseenter', () => {
  animationsClasses.forEach(el => el.classList.add('animation'));
});

hoverPortrait.addEventListener('mouseleave', () => {
  animationsClasses.forEach(el => el.classList.remove('animation'));
});


document.querySelector('.burger-btn').addEventListener('click', () => {
  document.querySelector('.header').classList.toggle('active');
  document.querySelector('.burger-btn').classList.toggle('active');
});


document.querySelectorAll('.smart-touch').forEach(icon => {
  icon.addEventListener('touchstart', () => { }, { passive: true });
});

document.querySelectorAll('.contact__form-input').forEach(input => {
  function check() {
    if (input.value.trim()) {
      input.classList.add('filled');
    }
    else {
      input.classList.remove('filled');
    }
  };

  check();
  input.addEventListener('input', check);
});
