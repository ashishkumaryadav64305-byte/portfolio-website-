/**
 * Ashish Yadav Portfolio - Client JavaScript
 * Lightweight, zero dependencies, accessible interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile Navigation Toggle
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });

    // Close menu when clicking links
    document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
      });
    });
  }

  // CV Modal Functionality
  const cvBtn = document.getElementById('cvBtn');
  const cvModal = document.getElementById('cvModal');
  const cvCloseBtn = document.getElementById('cvCloseBtn');
  const cvCloseFooterBtn = document.getElementById('cvCloseFooterBtn');

  const openModal = () => {
    if (cvModal) {
      cvModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  const closeModal = () => {
    if (cvModal) {
      cvModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  };

  if (cvBtn) cvBtn.addEventListener('click', openModal);
  if (cvCloseBtn) cvCloseBtn.addEventListener('click', closeModal);
  if (cvCloseFooterBtn) cvCloseFooterBtn.addEventListener('click', closeModal);

  if (cvModal) {
    cvModal.addEventListener('click', (e) => {
      if (e.target === cvModal) closeModal();
    });
  }

  // Interactive Motor Simulator
  const simToggleBtn = document.getElementById('simToggleBtn');
  const simTemp = document.getElementById('simTemp');
  const simVib = document.getElementById('simVib');
  const simStatus = document.getElementById('simStatus');
  let isHighLoad = false;

  if (simToggleBtn && simTemp && simVib && simStatus) {
    simToggleBtn.addEventListener('click', () => {
      isHighLoad = !isHighLoad;
      if (isHighLoad) {
        simTemp.textContent = '74.6';
        simVib.textContent = '4.2';
        simStatus.textContent = 'Overload Warning';
        simStatus.className = 'status-warn';
        simToggleBtn.textContent = 'Reset to Normal';
      } else {
        simTemp.textContent = '48.2';
        simVib.textContent = '1.8';
        simStatus.textContent = 'Normal';
        simStatus.className = 'status-good';
        simToggleBtn.textContent = 'Simulate High Load';
      }
    });

    // Subtle realistic sensor jitter
    setInterval(() => {
      if (!isHighLoad) {
        const jitter = (Math.random() - 0.5) * 0.4;
        simTemp.textContent = (48.0 + jitter).toFixed(1);
        simVib.textContent = (1.8 + jitter * 0.2).toFixed(1);
      }
    }, 2000);
  }

  // Contact Form Handling
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for reaching out! Ashish has received your message and will reply shortly.');
      contactForm.reset();
    });
  }
});
