// AVRIXXX - Digital Greeting Collection Application Logic

document.addEventListener('DOMContentLoaded', () => {
  // DOM Elements
  const templatesGrid = document.getElementById('templatesGrid');
  const noResults = document.getElementById('noResults');
  const searchInput = document.getElementById('searchInput');
  const searchClear = document.getElementById('searchClear');
  const categoryChips = document.querySelectorAll('.category-chips .chip');
  const modalBackdrop = document.getElementById('templateModal');
  const modalClose = document.getElementById('modalClose');
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');
  const navBackdrop = document.getElementById('navBackdrop');
  const navMenuClose = document.getElementById('navMenuClose');
  const navbar = document.getElementById('navbar');
  const faqItems = document.querySelectorAll('.faq-item');

  // Modal Specific Elements
  const modalTitle = document.getElementById('modalTitle');
  const modalCategory = document.getElementById('modalCategory');
  const modalDesc = document.getElementById('modalDesc');
  const modalTags = document.getElementById('modalTags');
  const modalImage = document.getElementById('modalImage');
  const modalOpenBtn = document.getElementById('modalOpenBtn');
  const viewportFrame = document.getElementById('viewportFrame');
  const deviceBtns = document.querySelectorAll('.device-btn');

  // WhatsApp Admin Number
  const whatsappNumber = "6285704925946";

  // State Management
  let currentSearchQuery = "";
  let currentCategory = "Semua";

  // 1. Render Templates
  function renderTemplates() {
    if (!templatesGrid) return;

    // Filter templates based on Search Query and Category
    const filteredTemplates = templatesData.filter(template => {
      const matchesCategory = (currentCategory === "Semua" || currentCategory === "All") || 
                              (template.category.toLowerCase() === currentCategory.toLowerCase()) ||
                              (currentCategory === "Momen Spesial" && (template.category === "Kejutan" || template.category === "Cinta" || template.category === "Kenangan"));

      const query = currentSearchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
                            template.name.toLowerCase().includes(query) || 
                            template.description.toLowerCase().includes(query) ||
                            template.category.toLowerCase().includes(query) ||
                            template.tags.some(tag => tag.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });

    // Handle Empty State
    if (filteredTemplates.length === 0) {
      templatesGrid.style.display = 'none';
      if (noResults) noResults.style.display = 'block';
      return;
    }

    templatesGrid.style.display = 'grid';
    if (noResults) noResults.style.display = 'none';

    // Populate Cards HTML
    templatesGrid.innerHTML = filteredTemplates.map(template => `
      <article class="template-card" data-id="${template.id}">
        <div class="card-preview-wrapper">
          <img src="${template.image}" alt="${template.name}" class="card-img" loading="lazy">
          <div class="card-overlay"></div>
          <span class="card-badge">${template.category}</span>
        </div>
        <div class="card-body">
          <h3 class="card-title">${template.name}</h3>
          <p class="card-desc">${template.description}</p>
          <div class="card-actions">
            <a href="${template.url}" target="_blank" class="btn-card-preview" rel="noopener noreferrer">
              Lihat Demo ↗
            </a>
            <button class="btn-card-details" onclick="openTemplateModal('${template.id}')">
              Detail Template
            </button>
          </div>
        </div>
      </article>
    `).join('');
  }

  // 2. Search Logic
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      if (searchClear) {
        searchClear.style.display = currentSearchQuery ? 'block' : 'none';
      }
      renderTemplates();
    });
  }

  if (searchClear) {
    searchClear.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      currentSearchQuery = '';
      searchClear.style.display = 'none';
      renderTemplates();
    });
  }

  // 3. Category Chip Filtering
  categoryChips.forEach(chip => {
    chip.addEventListener('click', () => {
      categoryChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      currentCategory = chip.getAttribute('data-category') || "Semua";
      renderTemplates();

      // Smooth scroll chip into view on mobile
      chip.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    });
  });

  // 4. Modal Window Functions
  window.openTemplateModal = function(templateId) {
    const template = templatesData.find(t => t.id === templateId);
    if (!template) return;

    if (modalTitle) modalTitle.textContent = template.name;
    if (modalCategory) modalCategory.textContent = template.category;
    if (modalDesc) modalDesc.textContent = template.description;
    if (modalImage) modalImage.src = template.image;
    if (modalOpenBtn) modalOpenBtn.href = template.url;

    // Render Tags
    if (modalTags) {
      modalTags.innerHTML = template.tags.map(tag => `
        <span class="tag-pill">✦ ${tag}</span>
      `).join('');
    }

    // Reset Viewport Frame to Desktop
    resetViewportFrame();

    // Show Modal
    if (modalBackdrop) {
      modalBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  function closeModal() {
    if (modalBackdrop) {
      modalBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);

  if (modalBackdrop) {
    modalBackdrop.addEventListener('click', (e) => {
      if (e.target === modalBackdrop) closeModal();
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modalBackdrop && modalBackdrop.classList.contains('active')) {
      closeModal();
    }
  });

  // 5. Device Frame Viewport Switcher
  function resetViewportFrame() {
    deviceBtns.forEach(btn => btn.classList.remove('active'));
    const desktopBtn = document.querySelector('.device-btn[data-device="desktop"]');
    if (desktopBtn) desktopBtn.classList.add('active');

    if (viewportFrame) {
      viewportFrame.className = 'viewport-frame desktop';
    }
  }

  deviceBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      deviceBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const device = btn.getAttribute('data-device');
      if (viewportFrame) {
        viewportFrame.className = `viewport-frame ${device}`;
      }
    });
  });

  // 6. Mobile Navigation Menu Drawer & Backdrop Control
  function openNavMenu() {
    if (navMenu) navMenu.classList.add('active');
    if (navBackdrop) navBackdrop.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (mobileToggle) {
      const icon = mobileToggle.querySelector('i');
      if (icon) icon.className = 'fas fa-times';
    }
  }

  function closeNavMenu() {
    if (navMenu) navMenu.classList.remove('active');
    if (navBackdrop) navBackdrop.classList.remove('active');
    document.body.style.overflow = '';
    if (mobileToggle) {
      const icon = mobileToggle.querySelector('i');
      if (icon) icon.className = 'fas fa-bars';
    }
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      if (navMenu && navMenu.classList.contains('active')) {
        closeNavMenu();
      } else {
        openNavMenu();
      }
    });
  }

  if (navMenuClose) navMenuClose.addEventListener('click', closeNavMenu);
  if (navBackdrop) navBackdrop.addEventListener('click', closeNavMenu);

  // Close menu when clicking nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', closeNavMenu);
  });

  // Navbar Scroll Effect
  window.addEventListener('scroll', () => {
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // 7. FAQ Accordion Toggle
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      
      // Close all active items
      faqItems.forEach(i => i.classList.remove('active'));

      // Toggle current item
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // 8. WhatsApp Link Prefill helper
  window.openWhatsApp = function(customMsg) {
    const defaultMsg = "Halo AVRIXXX, saya tertarik untuk membuat website ucapan digital. Mohon info selengkapnya ya!";
    const msg = encodeURIComponent(customMsg || defaultMsg);
    window.open(`https://wa.me/${whatsappNumber}?text=${msg}`, '_blank');
  };

  // 9. Logo Typewriter Text Writing Animation (AVRIXXX)
  function initTypewriter() {
    const logoElement = document.getElementById('logoTypewriter');
    if (!logoElement) return;

    const logoText = "AVRIXXX";
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;

    function type() {
      if (isDeleting) {
        logoElement.textContent = logoText.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 80;
      } else {
        logoElement.textContent = logoText.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 150;
      }

      if (!isDeleting && charIndex === logoText.length) {
        typeSpeed = 3500; // Pause 3.5s at full AVRIXXX logo
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        typeSpeed = 500;
      }

      setTimeout(type, typeSpeed);
    }

    type();
  }

  // Initial Render & Animations
  renderTemplates();
  initTypewriter();
});
