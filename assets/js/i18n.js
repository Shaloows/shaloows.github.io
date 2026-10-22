/* Motor de idioma ES/EN compartido por todas las páginas.
   Cada página define `window.I18N = { es: {...}, en: {...} }` antes de cargar este archivo.
   - data-i18n="clave"          → reemplaza textContent
   - data-i18n-html="clave"     → reemplaza innerHTML (para texto con <strong>, <code>, enlaces)
   - data-i18n-aria="clave"     → reemplaza aria-label
   - data-i18n-content="clave"  → reemplaza el atributo content (meta description)
   La elección se guarda en localStorage["lang"]. */
(function () {
  "use strict";
  var I18N = window.I18N || { es: {}, en: {} };

  function apply(lang) {
    var dict = I18N[lang] || I18N.es;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-aria");
      if (dict[k] != null) el.setAttribute("aria-label", dict[k]);
    });
    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-content");
      if (dict[k] != null) el.setAttribute("content", dict[k]);
    });
    document.querySelectorAll(".lang button").forEach(function (b) {
      b.setAttribute("aria-pressed", String(b.getAttribute("data-lang") === lang));
    });
    try { localStorage.setItem("lang", lang); } catch (e) {}
  }

  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  apply(saved === "en" ? "en" : "es");

  document.querySelectorAll(".lang button").forEach(function (b) {
    b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
  });

  document.querySelectorAll('a[aria-disabled="true"]').forEach(function (a) {
    a.addEventListener("click", function (e) { e.preventDefault(); });
  });
})();
