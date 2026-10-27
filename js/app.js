/**
 * NAYZA VOCAB — CLIENT LOGIC & GITHUB RELEASE FETCHER
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DYNAMIC GITHUB RELEASE FETCHER
  fetchLatestRelease();

  // 2. INTERACTIVE MOCKUP TABS
  initMockupTabs();

  // 3. FAQ ACCORDION
  initFaqAccordion();

  // 4. MOBILE MENU
  initMobileMenu();

  // 5. CURRENT YEAR
  const yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});

/**
 * Fetch latest release from NayzaVocab/android
 */
async function fetchLatestRelease() {
  const GITHUB_REPO = 'NayzaVocab/android';
  const API_URL = `https://api.github.com/repos/${GITHUB_REPO}/releases/latest`;
  const DEFAULT_TAG = 'v1.0.4';
  const DEFAULT_URL = `https://github.com/${GITHUB_REPO}/releases/download/${DEFAULT_TAG}/NayzaVocab-${DEFAULT_TAG}.apk`;

  const downloadBtn = document.getElementById('primary-download-btn');
  const ctaBtn = document.getElementById('cta-download-btn');
  const releaseTagEl = document.getElementById('release-tag');
  const releaseSizeEl = document.getElementById('release-size');

  try {
    const res = await fetch(API_URL);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const data = await res.json();

    const tag = data.tag_name || DEFAULT_TAG;
    let apkAsset = null;

    if (data.assets && Array.isArray(data.assets)) {
      apkAsset = data.assets.find(a => a.name && a.name.endsWith('.apk'));
    }

    const downloadUrl = apkAsset ? apkAsset.browser_download_url : DEFAULT_URL;
    let sizeStr = '62.9 MB';
    if (apkAsset && apkAsset.size) {
      sizeStr = `${(apkAsset.size / (1024 * 1024)).toFixed(1)} MB`;
    }

    if (downloadBtn) {
      downloadBtn.href = downloadUrl;
      downloadBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span>APK-ni yuklab olish (${tag})</span>
      `;
    }

    if (ctaBtn) {
      ctaBtn.href = downloadUrl;
      ctaBtn.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
          <polyline points="7 10 12 15 17 10"></polyline>
          <line x1="12" y1="15" x2="12" y2="3"></line>
        </svg>
        <span>Nayza Vocab (${tag}) ni yuklab olish</span>
      `;
    }

    if (releaseTagEl) releaseTagEl.textContent = tag;
    if (releaseSizeEl) releaseSizeEl.textContent = sizeStr;
  } catch (err) {
    console.warn('Could not fetch latest release from GitHub API, using fallback:', err);
    if (downloadBtn) downloadBtn.href = DEFAULT_URL;
    if (ctaBtn) ctaBtn.href = DEFAULT_URL;
  }
}

/**
 * Interactive Phone Mockup Screenshot Switcher
 */
function initMockupTabs() {
  const tabs = document.querySelectorAll('.mockup-tab-btn');
  const screenImg = document.getElementById('mockup-screen-img');
  if (!tabs.length || !screenImg) return;

  const screens = {
    dashboard: 'assets/screenshots/dashboard.png',
    library: 'assets/screenshots/library.png',
    installer: 'assets/screenshots/installer.png',
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const target = tab.dataset.screen;
      if (screens[target]) {
        screenImg.style.opacity = '0';
        setTimeout(() => {
          screenImg.src = screens[target];
          screenImg.style.opacity = '1';
        }, 150);
      }
    });
  });
}

/**
 * FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    if (!question || !answer) return;

    question.addEventListener('click', () => {
      const isOpen = item.classList.contains('active');
      faqItems.forEach(i => {
        i.classList.remove('active');
        const a = i.querySelector('.faq-answer');
        if (a) a.style.maxHeight = null;
      });

      if (!isOpen) {
        item.classList.add('active');
        answer.style.maxHeight = `${answer.scrollHeight + 30}px`;
      }
    });
  });
}

/**
 * Mobile Navigation Drawer Toggle
 */
function initMobileMenu() {
  const toggleBtn = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (!toggleBtn || !navMenu) return;

  toggleBtn.addEventListener('click', () => {
    const isVisible = navMenu.style.display === 'flex';
    if (isVisible) {
      navMenu.style.display = '';
    } else {
      navMenu.style.display = 'flex';
      navMenu.style.flexDirection = 'column';
      navMenu.style.position = 'absolute';
      navMenu.style.top = '80px';
      navMenu.style.left = '0';
      navMenu.style.width = '100%';
      navMenu.style.background = 'rgba(7, 11, 20, 0.98)';
      navMenu.style.padding = '24px';
      navMenu.style.borderBottom = '1px solid rgba(255, 200, 55, 0.15)';
    }
  });
}
