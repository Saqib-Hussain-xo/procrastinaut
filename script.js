(() => {
  const dateElement = document.getElementById('current-date');
  const navButtons = document.querySelectorAll('.nav-link, .quick-link');
  const sidebarToggle = document.getElementById('sidebar-toggle');
  const sectionViews = {
    dashboard: document.getElementById('view-dashboard'),
    classes: document.getElementById('view-classes'),
    assessments: document.getElementById('view-assessments'),
    todo: document.getElementById('view-todo'),
    breaks: document.getElementById('view-breaks'),
    focus: document.getElementById('view-focus')
  };

  const renderCurrentDate = () => {
    if (!dateElement) return;
    const today = new Date();
    const formattedDate = today.toLocaleDateString(undefined, {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    });
    dateElement.textContent = formattedDate;
  };

  const setActiveSection = (sectionName) => {
    const targetView = sectionViews[sectionName] || sectionViews.dashboard;

    Object.values(sectionViews).forEach((view) => {
      const isVisible = view === targetView;
      view.hidden = !isVisible;
      view.classList.toggle('is-visible', isVisible);
    });

    document.querySelectorAll('.nav-link').forEach((button) => {
      const isCurrent = button.dataset.section === sectionName;
      button.classList.toggle('is-active', isCurrent);
      if (isCurrent) {
        button.setAttribute('aria-current', 'page');
      } else {
        button.removeAttribute('aria-current');
      }
    });

    if (window.matchMedia('(max-width: 700px)').matches) {
      document.body.classList.remove('sidebar-open');
      if (sidebarToggle) {
        sidebarToggle.setAttribute('aria-expanded', 'false');
        sidebarToggle.setAttribute('aria-label', 'Open navigation');
      }
    }
  };

  const initializeNavigation = () => {
    navButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const nextSection = button.dataset.section;
        setActiveSection(nextSection);
      });
    });

    if (sidebarToggle) {
      sidebarToggle.addEventListener('click', () => {
        const isOpen = document.body.classList.toggle('sidebar-open');
        sidebarToggle.setAttribute('aria-expanded', String(isOpen));
        sidebarToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
      });
    }
  };

  renderCurrentDate();
  initializeNavigation();
  setActiveSection('dashboard');
})();
