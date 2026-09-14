(function () {
  'use strict';

  var measurementId = 'G-Z57V7YWLP9';
  var storageKey = 'bianalytic_analytics_consent';

  function loadAnalytics() {
    if (window.__bianalyticAnalyticsLoaded) return;
    window.__bianalyticAnalyticsLoaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { window.dataLayer.push(arguments); };
    window.gtag('consent', 'default', { analytics_storage: 'granted' });
    window.gtag('js', new Date());
    window.gtag('config', measurementId, { anonymize_ip: true });

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(measurementId);
    document.head.appendChild(script);
  }

  function getPreference() {
    try { return window.localStorage.getItem(storageKey); } catch (_) { return null; }
  }

  function setPreference(value) {
    try { window.localStorage.setItem(storageKey, value); } catch (_) { /* no-op */ }
  }

  function createBanner() {
    if (document.getElementById('analytics-consent-banner')) return;

    var banner = document.createElement('section');
    banner.id = 'analytics-consent-banner';
    banner.setAttribute('role', 'dialog');
    banner.setAttribute('aria-label', 'Analitik çerez tercihi');
    banner.style.cssText = 'position:fixed;z-index:9999;left:16px;right:16px;bottom:16px;max-width:760px;margin:0 auto;padding:18px 20px;border:1px solid rgba(148,163,184,.35);border-radius:18px;background:#082f49;color:#fff;box-shadow:0 20px 45px rgba(2,6,23,.35);font:14px/1.55 system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif';
    banner.innerHTML = '<strong style="display:block;margin-bottom:5px;font-size:16px">Analitik çerez tercihiniz</strong>' +
      '<span>Siteyi geliştirebilmek için Google Analytics kullanmak istiyoruz. Yalnızca kabul ederseniz analitik etiketi yüklenir. Ayrıntılar için <a href="/gizlilik-politikasi" style="color:#5eead4;text-decoration:underline">Gizlilik ve Çerez Politikası</a> sayfasını inceleyebilirsiniz.</span>' +
      '<div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:14px">' +
      '<button type="button" data-consent="accept" style="cursor:pointer;border:0;border-radius:999px;background:#14b8a6;color:#042f2e;padding:10px 18px;font-weight:700">Kabul et</button>' +
      '<button type="button" data-consent="reject" style="cursor:pointer;border:1px solid #94a3b8;border-radius:999px;background:transparent;color:#fff;padding:10px 18px;font-weight:700">Reddet</button>' +
      '</div>';

    banner.addEventListener('click', function (event) {
      var button = event.target.closest('[data-consent]');
      if (!button) return;
      var choice = button.getAttribute('data-consent');
      setPreference(choice);
      banner.remove();
      if (choice === 'accept') loadAnalytics();
    });

    document.body.appendChild(banner);
  }

  function initialise() {
    var preference = getPreference();
    if (preference === 'accept') loadAnalytics();
    else if (preference !== 'reject') createBanner();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialise);
  else initialise();
})();
