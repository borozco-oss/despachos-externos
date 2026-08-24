/* ============================================================================
   Nexu icon system — Google Material Symbols (Outlined).
   We use Material Symbols Outlined as the icon library. The stylesheet is
   @imported in colors_and_type.css; the base ".material-symbols-outlined"
   class (outlined, wght 300, currentColor) lives there too.

   nexuIconSVG(name, size) keeps its original name/signature for compatibility,
   but now returns a Material Symbols <span> (ligature glyph) instead of inline
   SVG. It maps the design-system's semantic names → Material glyph names.
   Sizes: 16px inline · 20px UI · 24px navigation.
   ============================================================================ */

/* DS semantic name → Material Symbols (outlined) glyph name */
window.NEXU_ICON_MAP = {
  barchart:        "bar_chart",
  "dollar-circle": "paid",
  dollar:          "attach_money",
  cash:            "payments",
  "credit-card":   "credit_card",
  bank:            "account_balance",
  users:           "group",
  user:            "person",
  file:            "description",
  invoice:         "receipt_long",
  search:          "search",
  calendar:        "calendar_today",
  bell:            "notifications",
  settings:        "settings",
  check:           "check",
  warning:         "warning",
  info:            "info",
  eye:             "visibility",
  upload:          "upload",
  download:        "download",
  score:           "monitoring",
  edit:            "edit",
  "back-arrow":    "arrow_back",
  trash:           "delete",
  logout:          "logout",
  "dots-vertical": "more_vert",
  cross:           "close",
  "chevron-down":  "expand_more",
  "chevron-right": "chevron_right",
  "chevron-left":  "chevron_left",
  filter:          "filter_list",

  /* credit-platform additions */
  "account-circle": "account_circle",
  expediente:       "assignment",
  solicitud:        "request_quote",
  home:             "home",
  menu:             "menu",
  add:              "add",
  remove:           "remove",
  "done-all":       "done_all",
  lock:             "lock",
  "lock-open":      "lock_open",
  phone:            "phone",
  mail:             "mail",
  location:         "location_on",
  percent:          "percent",
  schedule:         "schedule",
  "trending-up":    "trending_up",
  "trending-down":  "trending_down",
  "file-present":   "file_present",
  badge:            "badge",
  "smart-toy":      "smart_toy",
  "directions-car": "directions_car",

  /* platform gaps closed in 0.2.4 (IMP-008) */
  groups:           "group",
  fingerprint:      "fingerprint",
  list:             "view_list",
  grid:             "grid_view",
  "link_off":       "link_off",
  calculate:        "calculate",
  monitoring:       "monitoring",
  whatsapp:         "chat",
  bookmark:         "bookmark",
  "bookmark-filled": "bookmark",
  comment:          "chat_bubble",
  "event-available": "event_available",
  "content_copy":   "content_copy",
  "open_in_new":    "open_in_new",
  "chevron-up":     "expand_less",
  inventory_2:      "inventory_2",
  thumb_up:         "thumb_up",
  thumb_down:       "thumb_down",
  more_horiz:       "more_horiz",
};

/* keep NEXU_ICONS as an iterable of available names (used by the icon card) */
window.NEXU_ICONS = window.NEXU_ICON_MAP;

window.nexuIconSVG = function (name, size) {
  size = size || 24;
  var glyph = window.NEXU_ICON_MAP[name] || name;
  return (
    '<span class="material-symbols-outlined" style="font-size:' + size +
    "px;width:" + size + "px;height:" + size +
    "px;font-variation-settings:'FILL' 0,'wght' 400,'GRAD' 0,'opsz' " + size + '">' +
    glyph + "</span>"
  );
};
