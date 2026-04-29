console.log('APP JS LOADED');

const ROUTES = {
  home: '/',
  dashboard: '/dashboard',
  events: '/events',
  clubs: '/clubs',
  mentors: '/mentors',
  login: '/login',
  signup: '/signup'
};

const EVENTS_FALLBACK = [
  { id: 'ev1', title: 'Machine Learning Workshop', category: 'AI/ML', club: 'AI Club', location: 'CDT 101', day: 'Tuesday', start: 14, end: 16, seats: 18, branch: 'CSE', icon: 'brain', color: 'blue' },
  { id: 'ev2', title: 'Tech Career Fair 2024', category: 'Career', club: 'Placement Cell', location: 'Main Auditorium', day: 'Friday', start: 10, end: 16, seats: 200, branch: 'All', icon: 'briefcase', color: 'emerald' },
  { id: 'ev3', title: 'UX Design Sprint', category: 'Design', club: 'Design Hub', location: 'AB3 Studio', day: 'Tuesday', start: 16.5, end: 18, seats: 12, branch: 'All', icon: 'pen-tool', color: 'purple' },
  { id: 'ev4', title: 'Music Club Open Jam', category: 'Music', club: 'Music Club', location: 'Open Air Theatre', day: 'Wednesday', start: 18, end: 19.5, seats: 25, branch: 'All', icon: 'music', color: 'pink' },
  { id: 'ev5', title: 'Senior Mentor Mixer', category: 'Mentorship', club: 'Student Success Cell', location: 'SJT 402', day: 'Thursday', start: 17, end: 18.5, seats: 30, branch: 'All', icon: 'users', color: 'amber' },
  { id: 'ev6', title: 'Competitive Coding Contest', category: 'Coding', club: 'CP Club', location: 'Lab Complex', day: 'Saturday', start: 11, end: 13, seats: 20, branch: 'CSE', icon: 'code-2', color: 'cyan' },
  { id: 'ev7', title: 'Robotics Demo Day', category: 'Tech', club: 'Robotics Club', location: 'Workshop B', day: 'Monday', start: 15, end: 17, seats: 40, branch: 'All', icon: 'cpu', color: 'indigo' },
  { id: 'ev8', title: 'Photography Walk', category: 'Arts', club: 'Photography Club', location: 'VIT Gardens', day: 'Sunday', start: 7, end: 9, seats: 15, branch: 'All', icon: 'camera', color: 'rose' }
];

const CLUBS_FALLBACK = [
  { id: 'cl1', name: 'AI/ML Club', category: 'Technical', members: 247, desc: 'Build real ML projects, compete in Kaggle, host weekly workshops.', icon: 'brain', color: 'blue', branch: 'CSE' },
  { id: 'cl2', name: 'Competitive Programming', category: 'Technical', members: 189, desc: 'Weekly contests, ICPC prep, and problem-solving sessions.', icon: 'code-2', color: 'cyan', branch: 'CSE' },
  { id: 'cl3', name: 'Music Club', category: 'Cultural', members: 156, desc: 'Open jam nights, band formation, and live performance practice.', icon: 'music', color: 'pink', branch: 'All' },
  { id: 'cl4', name: 'Design Hub', category: 'Creative', members: 133, desc: 'UI/UX, branding, product design sprints and portfolio reviews.', icon: 'pen-tool', color: 'purple', branch: 'All' },
  { id: 'cl5', name: 'Career Growth Cell', category: 'Professional', members: 201, desc: 'Resume reviews, mock interviews, placement preparation.', icon: 'briefcase', color: 'emerald', branch: 'All' },
  { id: 'cl6', name: 'Robotics Club', category: 'Technical', members: 98, desc: 'Build robots, compete in national contests, hands-on hardware.', icon: 'cpu', color: 'indigo', branch: 'All' },
  { id: 'cl7', name: 'Photography Club', category: 'Creative', members: 112, desc: 'Photo walks, editing workshops, exhibition planning.', icon: 'camera', color: 'rose', branch: 'All' },
  { id: 'cl8', name: 'Entrepreneurship Cell', category: 'Professional', members: 175, desc: 'Startup pitches, founder talks, VIT incubator access.', icon: 'rocket', color: 'amber', branch: 'All' }
];

const MENTORS_FALLBACK = [
  { id: 'mn1', name: 'Riya Sharma', branch: 'CSE', year: '4th Year', expertise: 'AI/ML Projects & Research', tags: ['AI/ML', 'Python', 'Research'], avatar: 'RS', avatarColor: 'from-blue-400 to-indigo-500', rating: 4.9, sessions: 34 },
  { id: 'mn2', name: 'Arjun Nair', branch: 'ECE', year: '4th Year', expertise: 'Placements & Resume Reviews', tags: ['Career', 'Interviews', 'VLSI'], avatar: 'AN', avatarColor: 'from-emerald-400 to-teal-500', rating: 4.8, sessions: 52 },
  { id: 'mn3', name: 'Nisha Gupta', branch: 'CSE', year: '3rd Year', expertise: 'Club Leadership & Event Management', tags: ['Leadership', 'Design', 'Events'], avatar: 'NG', avatarColor: 'from-purple-400 to-pink-500', rating: 4.7, sessions: 21 },
  { id: 'mn4', name: 'Kavin Raj', branch: 'CSE', year: '4th Year', expertise: 'Competitive Programming & Hackathons', tags: ['CP', 'Algorithms', 'Hackathons'], avatar: 'KR', avatarColor: 'from-amber-400 to-orange-500', rating: 4.9, sessions: 41 },
  { id: 'mn5', name: 'Priya Menon', branch: 'IT', year: '3rd Year', expertise: 'Web Dev & Open Source', tags: ['Web', 'React', 'OSS'], avatar: 'PM', avatarColor: 'from-cyan-400 to-blue-500', rating: 4.6, sessions: 18 },
  { id: 'mn6', name: 'Dev Sharma', branch: 'ECE', year: '4th Year', expertise: 'Core Electronics & Internships', tags: ['Electronics', 'Internships', 'PCB'], avatar: 'DS', avatarColor: 'from-rose-400 to-pink-500', rating: 4.7, sessions: 29 }
];

const COLOR_MAP = {
  blue: 'from-blue-500/20 to-indigo-500/20 text-blue-400',
  emerald: 'from-emerald-500/20 to-teal-500/20 text-emerald-400',
  purple: 'from-purple-500/20 to-pink-500/20 text-purple-400',
  pink: 'from-pink-500/20 to-rose-500/20 text-pink-400',
  amber: 'from-amber-500/20 to-orange-500/20 text-amber-400',
  cyan: 'from-cyan-500/20 to-teal-500/20 text-cyan-400',
  indigo: 'from-indigo-500/20 to-purple-500/20 text-indigo-400',
  rose: 'from-rose-500/20 to-pink-500/20 text-rose-400'
};

let EVENTS = [];
let CLUBS = [];
let MENTORS = [];
let dataLoadPromise = null;
let globalsBound = false;

function safeParse(json, fallback) {
  try {
    return JSON.parse(json);
  } catch (error) {
    return fallback;
  }
}

function getApiBaseUrl() {
  if (typeof window === 'undefined' || !window.location) {
    return '/api';
  }

  if (window.location.protocol === 'file:') {
    return 'http://localhost:5000/api';
  }

  return `${window.location.origin}/api`;
}

function setCollection(name, value) {
  const safeValue = Array.isArray(value) ? value : [];

  if (name === 'EVENTS') {
    EVENTS = safeValue;
  } else if (name === 'CLUBS') {
    CLUBS = safeValue;
  } else if (name === 'MENTORS') {
    MENTORS = safeValue;
  }
}

function bindGlobals() {
  if (typeof window === 'undefined') {
    return;
  }

  window.Auth = Auth;
  window.UI = UI;
  window.apiFetch = apiFetch;
  window.renderNav = renderNav;
  window.openProfileModal = openProfileModal;
  window.loadAppData = loadAppData;
  window.loadEvents = loadEvents;
  window.loadClubs = loadClubs;
  window.loadMentors = loadMentors;

  if (!globalsBound) {
    Object.defineProperty(window, 'EVENTS', {
      configurable: true,
      get: function () {
        return EVENTS;
      },
      set: function (value) {
        setCollection('EVENTS', value);
      }
    });

    Object.defineProperty(window, 'CLUBS', {
      configurable: true,
      get: function () {
        return CLUBS;
      },
      set: function (value) {
        setCollection('CLUBS', value);
      }
    });

    Object.defineProperty(window, 'MENTORS', {
      configurable: true,
      get: function () {
        return MENTORS;
      },
      set: function (value) {
        setCollection('MENTORS', value);
      }
    });

    globalsBound = true;
  }
}

const Auth = {
  getToken: function () {
    try {
      return localStorage.getItem('cc_token');
    } catch (error) {
      return null;
    }
  },

  getUser: function () {
    try {
      return safeParse(localStorage.getItem('cc_user') || 'null', null);
    } catch (error) {
      return null;
    }
  },

  setSession: function (token, user) {
    try {
      localStorage.setItem('cc_token', token);
      localStorage.setItem('cc_user', JSON.stringify(user));
    } catch (error) {
      console.error('Failed to save session:', error);
    }
  },

  clearSession: function () {
    try {
      localStorage.removeItem('cc_token');
      localStorage.removeItem('cc_user');
    } catch (error) {
      console.error('Failed to clear session:', error);
    }
  },

  isLoggedIn: function () {
    return !!this.getToken();
  },

  logout: function () {
    this.clearSession();
    window.location.href = ROUTES.home;
  },

  requireAuth: function () {
    if (!this.isLoggedIn()) {
      window.location.href = ROUTES.login;
      return false;
    }

    return true;
  },

  redirectIfLoggedIn: function () {
    if (this.isLoggedIn()) {
      window.location.href = ROUTES.dashboard;
    }
  },

  refreshUser: async function () {
    const response = await apiFetch('/auth/me');
    if (response.success && response.user) {
      try {
        localStorage.setItem('cc_user', JSON.stringify(response.user));
      } catch (error) {
        console.error('Failed to refresh user:', error);
      }
      return response.user;
    }

    return this.getUser();
  }
};

const UI = {
  toast: function (message, type) {
    const variant = type || 'success';
    const existing = document.getElementById('cc-toast');

    if (existing) {
      existing.remove();
    }

    const toast = document.createElement('div');
    const colors = {
      success: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300',
      error: 'from-red-500/20 to-rose-500/20 border-red-500/30 text-red-300',
      info: 'from-blue-500/20 to-indigo-500/20 border-blue-500/30 text-blue-300'
    };
    const icons = {
      success: 'OK',
      error: 'X',
      info: 'i'
    };

    toast.id = 'cc-toast';
    toast.className = `fixed bottom-6 right-6 z-[9999] flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r ${colors[variant] || colors.success} border backdrop-blur-xl text-sm font-medium shadow-2xl`;
    toast.innerHTML = `<span class="font-bold text-base">${icons[variant] || icons.success}</span> ${message}`;
    toast.style.cssText = 'transform:translateY(20px);opacity:0;transition:all 0.3s ease';

    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      toast.style.transform = 'translateY(0)';
      toast.style.opacity = '1';
    });

    setTimeout(function () {
      toast.style.transform = 'translateY(20px)';
      toast.style.opacity = '0';
      setTimeout(function () {
        toast.remove();
      }, 300);
    }, 3000);
  },

  openModal: function (html) {
    let overlay = document.getElementById('cc-modal-overlay');

    if (!overlay) {
      overlay = document.createElement('div');
      overlay.id = 'cc-modal-overlay';
      overlay.className = 'fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm';
      overlay.innerHTML = `<div id="cc-modal-box" class="relative bg-[#0F172A] border border-white/10 rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl" onclick="event.stopPropagation()"><button onclick="UI.closeModal()" class="absolute top-4 right-4 p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/10 transition-all z-10"><svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><line x1='18' y1='6' x2='6' y2='18'></line><line x1='6' y1='6' x2='18' y2='18'></line></svg></button><div id="cc-modal-body" class="p-8"></div></div>`;
      overlay.addEventListener('click', function () {
        UI.closeModal();
      });
      document.body.appendChild(overlay);
    }

    const modalBody = document.getElementById('cc-modal-body');
    if (modalBody) {
      modalBody.innerHTML = html;
    }

    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    createIconsSafe();
  },

  closeModal: function () {
    const overlay = document.getElementById('cc-modal-overlay');
    if (overlay) {
      overlay.classList.add('hidden');
      document.body.style.overflow = '';
    }
  },

  formatHour: function (hour) {
    const minutes = Math.round(Number(hour || 0) * 60);
    const displayHour = Math.floor(minutes / 60);
    const displayMinutes = minutes % 60;
    return `${displayHour % 12 || 12}:${String(displayMinutes).padStart(2, '0')} ${displayHour >= 12 ? 'PM' : 'AM'}`;
  }
};

async function apiFetch(endpoint, options = {}) {
  const token = Auth.getToken();
  const method = options.method || 'GET';
  const headers = { ...(options.headers || {}) };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  if (!headers['Content-Type'] && options.body) {
    headers['Content-Type'] = 'application/json';
  }

  const controller = new AbortController();
  const timeout = setTimeout(function () {
    controller.abort();
  }, 10000);

  const url = `${getApiBaseUrl()}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;
  console.log('API REQUEST:', method, url);

  try {
    const response = await fetch(url, {
      ...options,
      headers,
      body: options.body ? JSON.stringify(options.body) : undefined,
      signal: controller.signal
    });

    const text = await response.text();
    const data = text ? safeParse(text, null) : null;

    console.log('API RESPONSE:', endpoint, data);

    if (!response.ok) {
      return {
        success: false,
        status: response.status,
        message: data && data.message ? data.message : `Request failed with status ${response.status}`
      };
    }

    return data || { success: true };
  } catch (error) {
    console.error('API ERROR:', endpoint, error);
    return {
      success: false,
      message: error.name === 'AbortError' ? 'Request timed out' : error.message
    };
  } finally {
    clearTimeout(timeout);
  }
}

function normalizeCollection(response, key, fallback) {
  if (response && Array.isArray(response[key]) && response[key].length > 0) {
    return response[key];
  }

  if (response && Array.isArray(response[key]) && response[key].length === 0) {
    console.warn(`Empty API response for ${key}. Using fallback sample data.`);
  }

  return fallback.slice();
}

async function loadEvents() {
  console.log('FETCHING EVENTS...');
  const response = await apiFetch('/events');
  EVENTS = normalizeCollection(response, 'events', EVENTS_FALLBACK);
  bindGlobals();
  return EVENTS;
}

async function loadClubs() {
  console.log('FETCHING CLUBS...');
  const response = await apiFetch('/clubs');
  CLUBS = normalizeCollection(response, 'clubs', CLUBS_FALLBACK);
  bindGlobals();
  return CLUBS;
}

async function loadMentors() {
  console.log('FETCHING MENTORS...');
  const response = await apiFetch('/mentors');
  MENTORS = normalizeCollection(response, 'mentors', MENTORS_FALLBACK);
  bindGlobals();
  return MENTORS;
}

async function loadAppData(forceReload) {
  if (!forceReload && dataLoadPromise) {
    return dataLoadPromise;
  }

  dataLoadPromise = Promise.all([loadEvents(), loadClubs(), loadMentors()])
    .then(function () {
      return { events: EVENTS, clubs: CLUBS, mentors: MENTORS };
    })
    .catch(function (error) {
      console.error('loadAppData error:', error);
      return { events: EVENTS_FALLBACK, clubs: CLUBS_FALLBACK, mentors: MENTORS_FALLBACK };
    });

  return dataLoadPromise;
}

function getCurrentPageKey() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';

  if (path === '/' || path === '/index.html') return 'home';
  if (path.includes('dashboard')) return 'dashboard';
  if (path.includes('events')) return 'events';
  if (path.includes('clubs')) return 'clubs';
  if (path.includes('mentors')) return 'mentors';
  if (path.includes('login')) return 'login';
  if (path.includes('signup')) return 'signup';
  return 'home';
}

function createIconsSafe() {
  if (typeof lucide !== 'undefined' && lucide && typeof lucide.createIcons === 'function') {
    lucide.createIcons();
  }
}

function renderNav(activePage) {
  const nav = document.getElementById('main-nav');
  if (!nav) {
    return;
  }

  const currentPage = activePage || getCurrentPageKey();
  const user = Auth.getUser();
  const links = [
    { href: ROUTES.dashboard, label: 'Dashboard', key: 'dashboard' },
    { href: ROUTES.events, label: 'Events', key: 'events' },
    { href: ROUTES.clubs, label: 'Clubs', key: 'clubs' },
    { href: ROUTES.mentors, label: 'Mentors', key: 'mentors' }
  ];

  const navLinksHtml = links.map(function (link) {
    const activeClass = currentPage === link.key ? 'text-blue-400' : 'text-gray-300 hover:text-white';
    return `<a href="${link.href}" class="nav-link text-sm font-medium transition-colors ${activeClass}">${link.label}</a>`;
  }).join('');

  const mobileLinksHtml = links.map(function (link) {
    const activeClass = currentPage === link.key ? 'text-blue-400' : 'text-gray-300 hover:text-white';
    return `<a href="${link.href}" class="block text-base font-medium transition-colors py-1 ${activeClass}">${link.label}</a>`;
  }).join('');

  const userHtml = user ? `
    <button onclick="openProfileModal()" class="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all">
      <div class="w-7 h-7 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-xs font-bold text-white">${user.name.charAt(0).toUpperCase()}</div>
      <span class="text-sm font-medium text-white hidden md:block">${user.name.split(' ')[0]}</span>
    </button>
    <button onclick="Auth.logout()" class="text-sm font-medium text-gray-400 hover:text-white transition-colors">Sign out</button>
  ` : `
    <a href="${ROUTES.login}" class="text-sm font-medium text-gray-300 hover:text-white transition-colors">Sign in</a>
    <a href="${ROUTES.signup}" class="btn-primary px-5 py-2.5 text-sm font-semibold">Get Started</a>
  `;

  nav.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <a href="${user ? ROUTES.dashboard : ROUTES.home}" class="flex items-center gap-2">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
            <i data-lucide="graduation-cap" class="w-5 h-5 text-white"></i>
          </div>
          <span class="text-xl font-bold">Campus Connect<span class="text-blue-400">+</span></span>
        </a>
        <div class="hidden md:flex items-center gap-8">${navLinksHtml}</div>
        <div class="hidden md:flex items-center gap-3">${userHtml}</div>
        <button id="mob-menu-btn" class="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors">
          <i data-lucide="menu" class="w-6 h-6 text-gray-300"></i>
        </button>
      </div>
    </div>
    <div id="mob-menu" class="hidden md:hidden bg-[#070D1B]/98 backdrop-blur-xl border-t border-white/5">
      <div class="px-4 py-5 space-y-2">
        ${mobileLinksHtml}
        <div class="pt-3 border-t border-white/10 flex flex-col gap-3 mt-2">
          ${user ? `
            <span class="text-sm text-gray-400">Signed in as <strong class="text-white">${user.name}</strong></span>
            <button onclick="openProfileModal()" class="text-left text-sm text-blue-400">Edit Profile</button>
            <button onclick="Auth.logout()" class="text-left text-sm font-medium text-red-400">Sign out</button>
          ` : `
            <a href="${ROUTES.login}" class="text-base font-medium text-gray-300">Sign in</a>
            <a href="${ROUTES.signup}" class="btn-primary px-5 py-3 text-base font-semibold text-center block">Get Started</a>
          `}
        </div>
      </div>
    </div>
  `;

  const menuButton = document.getElementById('mob-menu-btn');
  const mobileMenu = document.getElementById('mob-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden');
    });
  }

  createIconsSafe();
}

function openProfileModal() {
  const user = Auth.getUser();
  if (!user) {
    UI.toast('Please sign in first.', 'info');
    return;
  }

  UI.openModal(`
    <h2 class="text-xl font-bold mb-1">Edit Profile</h2>
    <p class="text-gray-400 text-sm mb-5">Update your info for better recommendations.</p>
    <form id="profile-edit-form" class="space-y-4">
      <label class="block text-sm text-gray-300">Full Name<input name="name" class="form-input mt-1.5" value="${user.name || ''}"></label>
      <div class="grid grid-cols-2 gap-3">
        <label class="block text-sm text-gray-300">Branch
          <select name="branch" class="form-input mt-1.5">
            ${['CSE', 'ECE', 'IT', 'Mech', 'Civil', 'EEE'].map(function (branch) {
              return `<option value="${branch}"${user.branch === branch ? ' selected' : ''}>${branch}</option>`;
            }).join('')}
          </select>
        </label>
        <label class="block text-sm text-gray-300">Year
          <select name="year" class="form-input mt-1.5">
            ${['1', '2', '3', '4'].map(function (year) {
              return `<option value="${year}"${String(user.year) === year ? ' selected' : ''}>${year}${['st', 'nd', 'rd', 'th'][Number(year) - 1]} Year</option>`;
            }).join('')}
          </select>
        </label>
      </div>
      <label class="block text-sm text-gray-300">Interests (comma separated)
        <input name="interests" class="form-input mt-1.5" value="${Array.isArray(user.interests) ? user.interests.join(', ') : ''}">
      </label>
      <button type="submit" class="btn-primary w-full py-3 text-sm font-semibold">Save Changes</button>
    </form>
  `);

  setTimeout(function () {
    const form = document.getElementById('profile-edit-form');
    if (!form) {
      return;
    }

    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      const formData = new FormData(form);
      const button = form.querySelector('button[type="submit"]');
      const interests = String(formData.get('interests') || '')
        .split(',')
        .map(function (item) {
          return item.trim();
        })
        .filter(Boolean);

      button.disabled = true;
      button.textContent = 'Saving...';

      const response = await apiFetch('/user/profile', {
        method: 'PUT',
        body: {
          name: formData.get('name'),
          branch: formData.get('branch'),
          year: formData.get('year'),
          interests
        }
      });

      if (response.success && response.user) {
        Auth.setSession(Auth.getToken(), response.user);
        UI.closeModal();
        UI.toast('Profile updated!');
        window.location.reload();
        return;
      }

      button.disabled = false;
      button.textContent = 'Save Changes';
      UI.toast(response.message || 'Update failed', 'error');
    });
  }, 0);
}

function renderEmptyState(element, message) {
  if (!element) {
    return;
  }

  element.innerHTML = `<p class="text-sm text-gray-500">${message || 'No data available'}</p>`;
}

function renderEventsSummary(items) {
  const container = document.getElementById('events-list');
  if (!container) {
    return;
  }

  if (!items.length) {
    renderEmptyState(container, 'No data available');
    return;
  }

  container.innerHTML = items.slice(0, 4).map(function (event) {
    return `
      <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${COLOR_MAP[event.color] || COLOR_MAP.blue} flex items-center justify-center flex-shrink-0">
          <i data-lucide="${event.icon || 'calendar'}" class="w-4 h-4"></i>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium truncate">${event.title || 'Untitled Event'}</p>
          <p class="text-xs text-gray-500">${event.day || 'TBA'} Â· ${UI.formatHour(event.start || 0)} Â· ${event.location || 'Location TBA'}</p>
        </div>
      </div>
    `;
  }).join('');
}

function renderClubsSummary(items) {
  const container = document.getElementById('clubs-list');
  if (!container) {
    return;
  }

  if (!items.length) {
    renderEmptyState(container, 'No data available');
    return;
  }

  container.innerHTML = items.slice(0, 4).map(function (club) {
    return `
      <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${COLOR_MAP[club.color] || COLOR_MAP.indigo} flex items-center justify-center flex-shrink-0">
          <i data-lucide="${club.icon || 'users'}" class="w-4 h-4"></i>
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium truncate">${club.name || 'Unnamed Club'}</p>
          <p class="text-xs text-gray-500">${club.members || 0} members</p>
        </div>
      </div>
    `;
  }).join('');
}

function renderMentorsSummary(items) {
  const container = document.getElementById('mentors-list');
  if (!container) {
    return;
  }

  if (!items.length) {
    renderEmptyState(container, 'No data available');
    return;
  }

  container.innerHTML = items.slice(0, 4).map(function (mentor) {
    return `
      <div class="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-br ${mentor.avatarColor || 'from-blue-400 to-indigo-500'} flex items-center justify-center flex-shrink-0 text-xs font-bold">
          ${mentor.avatar || (mentor.name || 'M').charAt(0)}
        </div>
        <div class="flex-1 min-w-0">
          <p class="text-sm font-medium truncate">${mentor.name || 'Unnamed Mentor'}</p>
          <p class="text-xs text-gray-500">${mentor.branch || 'General'} Â· ${mentor.expertise || 'Mentor'}</p>
        </div>
      </div>
    `;
  }).join('');
}

function renderEventsPage(items) {
  const container = document.getElementById('events-container');
  const noResults = document.getElementById('no-results');

  if (!container) {
    return;
  }

  if (!items.length) {
    container.innerHTML = '';
    if (noResults) {
      noResults.textContent = 'No data available';
      noResults.classList.remove('hidden');
    }
    return;
  }

  if (noResults) {
    noResults.classList.add('hidden');
  }

  container.innerHTML = items.map(function (event) {
    return `
      <div class="glass-card item-card rounded-3xl p-5">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-br ${COLOR_MAP[event.color] || COLOR_MAP.blue} flex items-center justify-center flex-shrink-0">
            <i data-lucide="${event.icon || 'calendar'}" class="w-6 h-6"></i>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="font-semibold text-lg">${event.title || 'Untitled Event'}</h3>
            <p class="text-sm text-gray-400 mb-2">${event.club || 'Campus Connect'} Â· ${event.category || 'General'}</p>
            <div class="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
              <span>${event.day || 'TBA'} Â· ${UI.formatHour(event.start || 0)} - ${UI.formatHour(event.end || 0)}</span>
              <span>${event.location || 'Location TBA'}</span>
              <span>${event.seats || 0} seats</span>
            </div>
            <button onclick="toggleEvent('${event.id}')" class="mt-3 px-3 py-2 text-xs bg-blue-500 text-white rounded-lg">
              RSVP
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderClubsPage(items) {
  const container = document.getElementById('clubs-container');
  const noResults = document.getElementById('no-results');

  if (!container) {
    return;
  }

  if (!items.length) {
    container.innerHTML = '';
    if (noResults) {
      noResults.textContent = 'No data available';
      noResults.classList.remove('hidden');
    }
    return;
  }

  if (noResults) {
    noResults.classList.add('hidden');
  }

  container.innerHTML = items.map(function (club) {
    return `
      <div class="glass-card item-card rounded-3xl p-5">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-br ${COLOR_MAP[club.color] || COLOR_MAP.indigo} flex items-center justify-center flex-shrink-0">
            <i data-lucide="${club.icon || 'users'}" class="w-6 h-6"></i>
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="font-semibold text-lg">${club.name || 'Unnamed Club'}</h3>
            <p class="text-sm text-gray-400 mb-2">${club.category || 'General'} Â· ${club.members || 0} members</p>
            <p class="text-sm text-gray-500">${club.desc || 'No description available.'}</p>
            <button onclick="toggleClub('${club.id}')" class="mt-3 px-3 py-2 text-xs bg-green-500 text-white rounded-lg">
              Join
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderMentorsPage(items) {
  const container = document.getElementById('mentors-container');
  const noResults = document.getElementById('no-results');

  if (!container) {
    return;
  }

  if (!items.length) {
    container.innerHTML = '';
    if (noResults) {
      noResults.textContent = 'No data available';
      noResults.classList.remove('hidden');
    }
    return;
  }

  if (noResults) {
    noResults.classList.add('hidden');
  }

  container.innerHTML = items.map(function (mentor) {
    return `
      <div class="glass-card item-card rounded-3xl p-5">
        <div class="flex items-start gap-4">
          <div class="w-12 h-12 rounded-2xl bg-gradient-to-br ${mentor.avatarColor || 'from-blue-400 to-indigo-500'} flex items-center justify-center flex-shrink-0 font-bold text-sm">
            ${mentor.avatar || (mentor.name || 'M').charAt(0)}
          </div>
          <div class="flex-1 min-w-0">
            <h3 class="font-semibold text-lg">${mentor.name || 'Unnamed Mentor'}</h3>
            <p class="text-sm text-gray-400 mb-2">${mentor.year || 'Senior'} Â· ${mentor.branch || 'General'}</p>
            <p class="text-sm text-purple-300 mb-2">${mentor.expertise || 'Mentorship'}</p>
            <p class="text-xs text-gray-500">${Array.isArray(mentor.tags) ? mentor.tags.join(', ') : 'No tags available'}</p>
            <button onclick="toggleMentor('${mentor.id}')" class="mt-3 px-3 py-2 text-xs bg-purple-500 text-white rounded-lg">
              Connect
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function renderFallbackData() {
  renderEventsSummary(EVENTS);
  renderClubsSummary(CLUBS);
  renderMentorsSummary(MENTORS);
  renderEventsPage(EVENTS);
  renderClubsPage(CLUBS);
  renderMentorsPage(MENTORS);
  createIconsSafe();
}

async function bootstrapPage() {
  console.log('DOM LOADED');
  bindGlobals();
  renderNav(getCurrentPageKey());

  const needsData = Boolean(
    document.getElementById('events-list') ||
    document.getElementById('clubs-list') ||
    document.getElementById('mentors-list') ||
    document.getElementById('events-container') ||
    document.getElementById('clubs-container') ||
    document.getElementById('mentors-container')
  );

  if (!needsData) {
    createIconsSafe();
    return;
  }

  await loadAppData();
  renderFallbackData();
}

document.addEventListener('DOMContentLoaded', function () {
  bootstrapPage().catch(function (error) {
    console.error('Bootstrap error:', error);
    renderEmptyState(document.getElementById('events-list'), 'No data available');
    renderEmptyState(document.getElementById('clubs-list'), 'No data available');
    renderEmptyState(document.getElementById('mentors-list'), 'No data available');
  });
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    UI.closeModal();
  }
});

bindGlobals();

async function toggleEvent(id) {
  if (!Auth.requireAuth()) return;

  const res = await apiFetch('/user/rsvp/' + id, { method: 'POST' });

  if (res.success) {
    UI.toast('Event updated 🎉');
  } else {
    UI.toast(res.message || 'Error', 'error');
  }
}

async function toggleClub(id) {
  if (!Auth.requireAuth()) return;

  const res = await apiFetch('/user/club/' + id, { method: 'POST' });

  if (res.success) {
    UI.toast('Club updated 🚀');
  } else {
    UI.toast(res.message || 'Error', 'error');
  }
}

async function toggleMentor(id) {
  if (!Auth.requireAuth()) return;

  const res = await apiFetch('/user/mentor/' + id, { method: 'POST' });

  if (res.success) {
    UI.toast('Mentor connected 🤝');
  } else {
    UI.toast(res.message || 'Error', 'error');
  }
}

window.toggleEvent = toggleEvent;
window.toggleClub = toggleClub;
window.toggleMentor = toggleMentor;
