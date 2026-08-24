/* Shared chrome for Despachos híbrido prototypes. Uses kit.css classes only. */
(function () {
  var LOGO =
    '<svg viewBox="0 0 331.029 331.029" xmlns="http://www.w3.org/2000/svg"><path d="M 331 101.249 L 331 10.769 C 331 4.821 326.179 0 320.231 0 L 229.751 0 C 223.804 0 218.983 4.821 218.983 10.769 L 218.983 72.176 C 218.983 79.076 216.24 85.688 211.361 90.567 C 201.198 100.729 184.742 100.729 174.58 90.567 L 87.189 3.147 C 85.168 1.126 82.425 0 79.567 0 L 10.769 0 C 4.821 0 0 4.821 0 10.769 L 0 79.567 C 0 82.425 1.126 85.168 3.147 87.189 L 90.567 174.609 C 100.729 184.771 100.729 201.227 90.567 211.39 C 85.688 216.269 79.076 219.011 72.176 219.011 L 10.769 219.011 C 4.821 219.011 0 223.833 0 229.78 L 0 320.26 C 0 326.207 4.821 331.029 10.769 331.029 L 101.249 331.029 C 107.196 331.029 112.017 326.207 112.017 320.26 L 112.017 258.853 C 112.017 251.953 114.76 245.341 119.639 240.462 C 129.802 230.3 146.258 230.3 156.42 240.462 L 243.84 327.882 C 245.861 329.903 248.604 331.029 251.462 331.029 L 320.26 331.029 C 326.207 331.029 331.029 326.207 331.029 320.26 L 331.029 251.462 C 331.029 248.604 329.903 245.861 327.882 243.84 L 240.462 156.42 C 230.3 146.258 230.3 129.802 240.462 119.639 C 245.341 114.76 251.953 112.017 258.853 112.017 L 320.26 112.017 C 326.207 112.017 331.029 107.196 331.029 101.249 L 331 101.249 Z" fill="currentColor" fill-rule="nonzero"></path></svg>';

  function ic(name, size) {
    return window.nexuIconSVG(name, size || 20);
  }

  var FLOW = [
    { id: "whatsapp", n: "1", label: "Agente" },
    { id: "cartera", n: "2", label: "Cartera" },
    { id: "entrega", n: "3", label: "Entrega" },
    { id: "hitl", n: "4", label: "Validar" },
    { id: "solicitud", n: "5", label: "Solicitar" },
    { id: "pool", n: "6", label: "Pool" },
    { id: "preparar", n: "7", label: "Preparar" },
    { id: "asignacion", n: "8", label: "Asignación" },
  ];

  var ROLES = {
    nexu: { name: "Araceli Sánchez", initials: "AS" },
    gestor: { name: "Edwin López", initials: "EL" },
    despacho: { name: "Seprocob", initials: "SE" },
  };

  function topbar(title, role) {
    var m = ROLES[role] || ROLES.nexu;
    return (
      '<header class="topbar">' +
      '<span class="tb-mark">' + LOGO + "</span>" +
      '<span class="tb-word">nexu</span>' +
      '<div class="title">' +
      title +
      '</div><div class="topbar-spacer"></div>' +
      '<div class="cell-client"><div class="av">' +
      m.initials +
      '</div><div><div class="nm">' +
      m.name +
      "</div></div></div></header>"
    );
  }

  function banner(text) {
    if (!text) return "";
    return (
      '<div class="proto-banner"><span class="ic">' +
      ic("info", 18) +
      "</span><p>" +
      text +
      "</p></div>"
    );
  }

  function flowBar(active) {
    var idx = -1;
    var pills = FLOW.map(function (s, i) {
      if (s.id === active) idx = i;
      return (
        '<button type="button" class="flow-pill' +
        (s.id === active ? " on" : "") +
        '" data-go="' +
        s.id +
        '"><span>' +
        s.n +
        "</span>" +
        s.label +
        "</button>"
      );
    }).join("");
    var prev = idx > 0 ? FLOW[idx - 1] : null;
    var next = idx >= 0 && idx < FLOW.length - 1 ? FLOW[idx + 1] : null;
    var step = FLOW[idx];
    var back = deckUrl(step ? step.n : "");
    return (
      '<div class="flow-bar">' +
      '<div class="flow-bar-top">' +
      '<a class="btn btn-tertiary btn-sm" href="' +
      back +
      '" data-back-deck="' +
      (step ? step.n : "") +
      '">' +
      ic("back-arrow", 16) +
      " Volver al flujo</a>" +
      '<div class="flow-nav-btns">' +
      (prev
        ? '<button type="button" class="icon-btn icon-btn-sm" data-go="' + prev.id + '" aria-label="Paso anterior"><span class="ic">' + ic("chevron-left", 20) + "</span></button>"
        : '<button type="button" class="icon-btn icon-btn-sm" disabled aria-label="Paso anterior"><span class="ic">' + ic("chevron-left", 20) + "</span></button>") +
      (next
        ? '<button type="button" class="icon-btn icon-btn-sm" data-go="' + next.id + '" aria-label="Siguiente paso"><span class="ic">' + ic("chevron-right", 20) + "</span></button>"
        : '<a class="icon-btn icon-btn-sm" href="' + back + '" data-back-deck="' + (step ? step.n : "") + '" aria-label="Terminé el recorrido"><span class="ic">' + ic("check", 20) + "</span></a>") +
      "</div></div>" +
      '<div class="flow-pills">' +
      pills +
      "</div></div>"
    );
  }

  function deckUrl(stepN) {
    var hash = "#flujo";
    var page = String(window.location.href || "").replace(/#.*$/, "");
    var deck;
    if (/\/prototipos\//i.test(page)) {
      deck = page.replace(/\/prototipos\/[^/?#]*/i, "/index.html");
    } else {
      try {
        deck = new URL("../index.html", page || window.location.href).href.replace(/#.*$/, "");
      } catch (err) {
        return "../index.html" + hash;
      }
    }
    return deck + hash;
  }

  function goDeck(stepN) {
    var url = deckUrl(stepN);
    try {
      if (window.top && window.top !== window) {
        window.top.location.assign(url);
        return;
      }
    } catch (err) {}
    window.location.assign(url);
  }

  function bindBack(root) {
    root.querySelectorAll("[data-back-deck]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        e.stopPropagation();
        goDeck(el.getAttribute("data-back-deck"));
      });
    });
  }

  function bindGo(root) {
    root.querySelectorAll("[data-go]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        window.NexuProto.go(el.getAttribute("data-go"));
      });
    });
  }

  window.NexuProto = {
    ic: ic,
    logo: LOGO,
    FLOW: FLOW,
    go: function (id) {
      if (!id) return;
      history.replaceState(null, "", "#" + id);
      if (typeof window.renderRoute === "function") window.renderRoute();
    },
    bind: bindGo,
    mount: function (opts) {
      var root = document.getElementById("app");
      root.className = "app";
      var showFlow = opts.flowId;
      root.innerHTML =
        '<div class="main">' +
        topbar(opts.title, opts.role || "nexu") +
        (showFlow ? flowBar(showFlow) : "") +
        '<div class="content"><div class="content-inner">' +
        banner(opts.banner || "") +
        '<div id="screen"></div></div></div></div>';
      bindGo(root);
      bindBack(root);
      return document.getElementById("screen");
    },
  };
})();
