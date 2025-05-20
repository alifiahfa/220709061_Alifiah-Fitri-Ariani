function showCookieConsent() {
  const path = window.location.pathname;
  const isHomepage = (path === '/' || path.endsWith('/index.html'));

  // Muncul hanya di homepage dan hanya sekali
  if (!isHomepage || localStorage.getItem('cookieConsentShown') === 'true') return;

  const overlay = document.getElementById('cookieConsentOverlay');
  const popup = document.getElementById('cookieConsent');
  if (overlay && popup) {
    overlay.style.display = 'block';
    popup.style.display = 'block';
    localStorage.setItem('cookieConsentShown', 'true'); // tandai sudah muncul
  }
}

function hideCookieConsent() {
  const overlay = document.getElementById('cookieConsentOverlay');
  const popup = document.getElementById('cookieConsent');
  if (overlay) overlay.style.display = 'none';
  if (popup) popup.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', () => {
  showCookieConsent();

  const acceptBtn = document.getElementById('acceptCookiesBtn');
  const rejectBtn = document.getElementById('rejectCookiesBtn');

  if (acceptBtn) {
    acceptBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsentStatus', 'accepted');
      hideCookieConsent();
    });
  }

  if (rejectBtn) {
    rejectBtn.addEventListener('click', () => {
      localStorage.setItem('cookieConsentStatus', 'rejected');
      hideCookieConsent();
    });
  }
});
