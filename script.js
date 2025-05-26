// Initialize AOS
AOS.init({
  duration: 1000,
  once: true
});

// ______________
const postsSlider = document.querySelector('.posts-slider');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

// Amount to scroll per click - equal to one post width + gap
const postStyle = getComputedStyle(postsSlider.querySelector('.post'));
const postWidth = postsSlider.querySelector('.post').offsetWidth;
const gap = parseInt(postStyle.marginRight) || 24; // fallback gap
const scrollAmount = postWidth + gap;

nextBtn.addEventListener('click', () => {
  postsSlider.scrollBy({ left: scrollAmount, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
  postsSlider.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
});

// Optional: Disable buttons if at ends (nice UX)
function updateButtons() {
  prevBtn.disabled = postsSlider.scrollLeft === 0;
  const maxScrollLeft = postsSlider.scrollWidth - postsSlider.clientWidth;
  nextBtn.disabled = postsSlider.scrollLeft >= maxScrollLeft - 1;
}

postsSlider.addEventListener('scroll', updateButtons);
window.addEventListener('load', updateButtons);
window.addEventListener('resize', updateButtons);
// _____________________



const darkToggle = document.getElementById('darkToggle');
const body = document.body;
const icon = darkToggle.querySelector('i');

// Load saved theme on page load
if(localStorage.getItem('darkMode') === 'enabled'){
  body.classList.add('dark-mode');
  icon.classList.replace('bx-moon', 'bx-sun');
}

darkToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');

  const darkModeEnabled = body.classList.contains('dark-mode');

  // Toggle icon
  if (darkModeEnabled) {
    icon.classList.replace('bx-moon', 'bx-sun');
    localStorage.setItem('darkMode', 'enabled');
  } else {
    icon.classList.replace('bx-sun', 'bx-moon');
    localStorage.setItem('darkMode', 'disabled');
  }
});

