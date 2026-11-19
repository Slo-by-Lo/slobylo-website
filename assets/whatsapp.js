/* Floating WhatsApp button — self-contained: markup, styles and behaviour all live here.
   Change the number and the message below. The number is country code + number,
   digits only (no +, spaces or dashes), e.g. Singapore 6591234567.
   While WA_NUMBER is empty the button is not shown at all. */
var WA_NUMBER = '6287797061371';
var WA_MESSAGE = "Hi Slo, I’d like to talk about a wellness experience for my brand.";

(function () {
  var number = String(WA_NUMBER).replace(/\D/g, '');
  if (!number) return;

  var css =
    '.wa{position:fixed;z-index:29;' +
      'right:calc(24px + env(safe-area-inset-right, 0px));' +
      'bottom:calc(24px + env(safe-area-inset-bottom, 0px));' +
      'width:56px;height:56px;display:grid;place-items:center;' +
      'border-radius:50%;background:var(--navy);color:var(--cream);' +
      'border:1px solid rgba(196,168,122,.55);' +
      'box-shadow:0 6px 18px rgba(15,24,32,.18);' +
      'opacity:0;visibility:hidden;pointer-events:none;' +
      'transition:opacity .6s ease,visibility 0s linear .6s,transform .25s ease,border-color .25s ease;}' +
    '.wa[data-show]{opacity:1;visibility:visible;pointer-events:auto;' +
      'transition:opacity .6s ease,visibility 0s,transform .25s ease,border-color .25s ease;}' +
    '.wa svg{width:26px;height:26px;fill:currentColor;}' +
    '.wa:hover{transform:translateY(-2px);border-color:var(--gold);}' +
    '.wa:focus-visible{outline:2px solid var(--goldD);outline-offset:3px;border-color:var(--gold);}' +
    '.wa__tip{display:none;}' +
    '@media (hover:hover) and (pointer:fine){' +
      '.wa__tip{display:block;position:absolute;right:calc(100% + 12px);top:50%;' +
        'transform:translateY(-50%);white-space:nowrap;padding:8px 12px;' +
        'background:var(--navy);color:var(--cream);border:1px solid rgba(196,168,122,.35);' +
        'font:400 0.875rem/1 var(--sans);opacity:0;pointer-events:none;transition:opacity .2s ease;}' +
      '.wa:hover .wa__tip,.wa:focus-visible .wa__tip{opacity:1;}' +
    '}' +
    '@media (max-width:760px){.wa{width:52px;height:52px;}.wa svg{width:24px;height:24px;}}' +
    '@media (prefers-reduced-motion:reduce){.wa,.wa[data-show],.wa__tip{transition:none;}.wa:hover{transform:none;}}';

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var a = document.createElement('a');
  a.className = 'wa';
  a.href = 'https://wa.me/' + number + '?text=' + encodeURIComponent(WA_MESSAGE);
  a.target = '_blank';
  a.rel = 'noopener noreferrer';
  a.setAttribute('aria-label', 'Chat with Slo on WhatsApp');
  a.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.41-.08-.13-.28-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41Z"/></svg>' +
    '<span class="wa__tip" aria-hidden="true">Message us</span>';
  document.body.appendChild(a);

  // Show after the hero has scrolled away or after 3 seconds, whichever comes first.
  // Hide while the contact section or footer is on screen, so it never covers
  // the email button or the footer links (the email button is the better route there anyway).
  var ready = false;
  var blocked = {};
  function update() {
    var hide = !ready || Object.keys(blocked).some(function (k) { return blocked[k]; });
    if (hide) a.removeAttribute('data-show'); else a.setAttribute('data-show', '');
  }
  function arm() { if (!ready) { ready = true; update(); } }
  setTimeout(arm, 3000);

  if (!('IntersectionObserver' in window)) { arm(); return; }

  var hero = document.querySelector('.hero');
  if (hero) {
    new IntersectionObserver(function (entries) {
      var e = entries[0];
      if (!e.isIntersecting && e.boundingClientRect.top < 0) arm();
    }).observe(hero);
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) { blocked[e.target.id || 'foot'] = e.isIntersecting; });
    update();
  });
  ['contact'].forEach(function (id) { var el = document.getElementById(id); if (el) io.observe(el); });
  var foot = document.querySelector('.foot');
  if (foot) io.observe(foot);
})();
