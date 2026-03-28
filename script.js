// Portfolio Animations & Interactivity for Sayali Kadam

document.addEventListener('DOMContentLoaded', () => {
  // Animated skill reveal
  const skillGroups = document.querySelectorAll('.skill-group');
  skillGroups.forEach((el, i) => {
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.transition = 'opacity 0.7s cubic-bezier(.77,0,.18,1)';
      el.style.opacity = 1;
    }, 400 + i * 200);
  });

  // Floating profile image effect
  const profileImg = document.querySelector('.profile-img img');
  if (profileImg) {
    profileImg.addEventListener('mousemove', (e) => {
      const rect = profileImg.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      profileImg.style.transform = `scale(1.05) rotate(${(x-rect.width/2)/20}deg)`;
    });
    profileImg.addEventListener('mouseleave', () => {
      profileImg.style.transform = 'scale(1) rotate(0deg)';
    });
  }

  // Animated social links
  const socialLinks = document.querySelectorAll('.social-links a');
  socialLinks.forEach((link, i) => {
    link.style.opacity = 0;
    setTimeout(() => {
      link.style.transition = 'opacity 0.6s cubic-bezier(.77,0,.18,1)';
      link.style.opacity = 1;
    }, 600 + i * 200);
  });

  // Contact info copy functionality
  const emailLink = document.querySelector('.contact a');
  if (emailLink) {
    emailLink.addEventListener('click', (e) => {
      e.preventDefault();
      navigator.clipboard.writeText(emailLink.textContent);
      emailLink.textContent = 'Copied!';
      setTimeout(() => {
        emailLink.textContent = 'sayalikadam600@gmail.com';
      }, 1200);
    });
  }

  // Card and project reveal on scroll
  const revealOnScroll = () => {
    const cards = document.querySelectorAll('.card');
    const projects = document.querySelectorAll('.project-card');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        card.classList.add('visible');
      }
    });
    projects.forEach(project => {
      const rect = project.getBoundingClientRect();
      if (rect.top < window.innerHeight - 60) {
        project.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll();
  // Scroll indicator bounce effect
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      window.scrollBy({ top: 300, behavior: 'smooth' });
    });
  }
});
