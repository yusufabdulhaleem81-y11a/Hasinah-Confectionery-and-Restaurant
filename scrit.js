
/* =====================================================================
   HASINAH — SITE CONFIGURATION
   ▸ Everything the restaurant owner may want to change lives here.
   ▸ To set a price later, replace  price: null  with e.g.  price: 1500.
   ▸ To use your own food photo for any item, set its  img: "…"  URL.
   ===================================================================== */
const RESTAURANT = {
  name: "Hasinah Confectionery and Restaurant",
  tagline: "Good Food. Great Moments.",
  // ── DEMO CONTACT NUMBER (as instructed for this demo) ──────────────
  // Call + WhatsApp + display all use this number so the demo behaves consistently.
  // When going live, change these three lines to the restaurant's number, e.g.:
  //    phoneDisplay: "0704 700 6060", phoneTel: "+2347047006060", whatsapp: "2347047006060",
  phoneDisplay: "0814 375 1471",
  phoneTel: "+2348143751471",          // tel: dialer links
  whatsapp: "2348143751471",           // WhatsApp orders (international format, no "+")
  addressFull: "Plot 44A, Nuhu Muhammadu Sanusi Way, Dutse 720101, Jigawa State, Nigeria",
  mapQuery: "Hasinah Confectionery and Restaurant, Nuhu Muhammadu Sanusi Way, Dutse, Jigawa State, Nigeria",
  waGreeting: "Hello Hasinah Confectionery & Restaurant!",
  heroImage: null,                     // e.g. "photos/hero.jpg" — shows as a soft hero background
  // Opening hours — CONFIRM the exact schedule with the owner and edit here.
  hours: [
    { day: "Monday",    open: "08:30", close: "22:30" },
    { day: "Tuesday",   open: "08:30", close: "22:30" },
    { day: "Wednesday", open: "08:30", close: "22:30" },
    { day: "Thursday",  open: "08:30", close: "22:30" },
    { day: "Friday",    open: "08:30", close: "22:30" },
    { day: "Saturday",  open: "08:30", close: "22:30" },
    { day: "Sunday",    open: "08:30", close: "22:30" }
  ],
  // Payment details — placeholders only. Never invent banking information.
  payment: {
    enabled: true, // set false to hide the payment card completely
    bankName: "[TO BE PROVIDED]",
    accountName: "[TO BE PROVIDED]",
    accountNumber: "[TO BE PROVIDED]",
    instructions: "Payment is arranged directly with the restaurant. Our team will confirm the total and payment method with you on WhatsApp when you order."
  }
};

/* ---- MENU ----
   img: null  → branded icon placeholder (clean, on-brand)
   img: "url" → real photo (royalty-free Unsplash links used in this demo).
   OWNER NOTE: replace any img value with your own menu photo URL/file when ready. */
const U = id => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=700&q=70`;

const MENU = [
  /* ---- SNACKS ---- */
  { id:"meatpie",  name:"Meat Pie",        cats:["snack"],           icon:"i-pie",     img:null,  price:null, popular:true, desc:"Golden, flaky pastry with a rich savoury filling." },
  { id:"fishroll", name:"Fish Roll",       cats:["snack"],           icon:"i-roll",    img:null,  price:null, desc:"Crisp rolled pastry with well-seasoned fish filling." },
  { id:"burger",   name:"Burger",          cats:["snack","fast"],    icon:"i-burger",  img:U("1568901346375-23c9450c58cd"), price:null, desc:"Soft bun, juicy patty and fresh toppings." },
  { id:"shawarma", name:"Shawarma",        cats:["snack","fast"],    icon:"i-wrap",    img:U("1561651823-34feb02250e4"), price:null, desc:"Grilled wrap loaded with creamy sauce and fillings." },
  { id:"beefshawarma", name:"Beef Shawarma", cats:["snack"],         icon:"i-wrap",    img:null,  price:null, desc:"Seasoned beef wrapped in warm flatbread with sauce." },
  { id:"samosa",   name:"Samosa",          cats:["snack","fast"],    icon:"i-samosa",  img:U("1601050690597-df0568f70950"), price:null, desc:"Crisp triangular pastry with a spicy savoury centre." },
  { id:"springroll",name:"Spring Rolls",   cats:["snack","fast"],    icon:"i-springroll", img:U("1603894584373-5ac82b2ae398"), price:null, desc:"Crunchy vegetable rolls, fried till golden." },
  { id:"chickshawarma", name:"Chicken Shawarma", cats:["snack"],  icon:"i-wrap",    img:U("1585032226651-759b368d7246"), price:null, popular:true, desc:"Slow-seasoned chicken wrapped with garlic sauce." },
  { id:"cupcake",  name:"Cup Cake",        cats:["snack","desserts"],icon:"i-cupcake", img:U("1464349095431-e9a21285b5f3"), price:null, desc:"Soft sponge topped with swirled frosting." },
  { id:"popcorn",  name:"Pop Corn",        cats:["snack"],           icon:"i-popcorn", img:U("1578849278619-e73505e9610f"), price:null, desc:"Freshly popped and lightly salted." },
  { id:"doughnut", name:"Doughnut",        cats:["snack","desserts"],icon:"i-doughnut",img:U("1551024601-bec78aea704b"), price:null, desc:"Fluffy ring, glazed and ready to go." },
  /* ---- MAIN MEALS ---- */
  { id:"friedrice",name:"Fried Rice & Chicken", cats:["main"],       icon:"i-rice",    img:U("1512058564366-18510be2db19"), price:null, popular:true, desc:"Wok-fried rice served with tender chicken." },
  { id:"ricedish", name:"Rice Dishes",     cats:["main"],            icon:"i-cloche",  img:U("1563379091339-03b21ab4a4f8"), price:null, desc:"Ask for today's rice specials — cooked fresh daily." },
  { id:"localdish",name:"Local Dishes",    cats:["main"],            icon:"i-bowlspoon",img:null, price:null, desc:"Traditional favourites — availability changes daily, so ask our staff." },
  { id:"chickenmeal",name:"Chicken Meals", cats:["main"],            icon:"i-drum",    img:U("1532550907401-a500c9a57435"), price:null, desc:"Well-seasoned chicken served with sides of your choice." },
  /* ---- DRINKS ---- */
  { id:"coke",     name:"Coca-Cola",       cats:["drinks"],          icon:"i-bottle",  img:U("1554866585-cd94860890b7"), price:null, desc:"Chilled classic soft drink." },
  { id:"fayrouz",  name:"Fayrouz",         cats:["drinks"],          icon:"i-can",     img:null,  price:null, desc:"Sparkling fruit-flavoured soft drink." },
  { id:"maltina",  name:"Maltina",         cats:["drinks"],          icon:"i-bottle",  img:null,  price:null, desc:"Smooth, creamy malt drink." },
  { id:"exotic",   name:"Exotic",          cats:["drinks"],          icon:"i-carton",  img:null,  price:null, desc:"Chilled exotic fruit drink." },
  { id:"bigpack",  name:"Big Pack Juice",  cats:["drinks"],          icon:"i-jug",     img:null,  price:null, desc:"Family-size juice — perfect for sharing." },
  { id:"water",    name:"Water",           cats:["drinks"],          icon:"i-bottle",  img:U("1548839140-29a749e1cf4d"), price:null, desc:"Still bottled water, served chilled." },
  { id:"freshjuice",name:"Fresh Juice",    cats:["drinks"],          icon:"i-glass",   img:U("1600271886742-f049cd451bba"), price:null, popular:true, desc:"Freshly extracted fruit juice." },
  { id:"smoothie", name:"Smoothie",        cats:["drinks"],          icon:"i-smoothie",img:U("1553530666-ba11a7da3888"), price:null, desc:"Blended fruit smoothie — thick and refreshing." },
  { id:"tea",      name:"Tea",             cats:["drinks"],          icon:"i-teacup",  img:U("1544787219-7f47ccb76574"), price:null, desc:"Hot tea, brewed to order." },
  { id:"coffee",   name:"Coffee",          cats:["drinks"],          icon:"i-mug",     img:U("1509042239860-f550ce710b93"), price:null, desc:"Freshly prepared coffee." },
  { id:"softdrinks",name:"Soft Drinks",    cats:["drinks"],          icon:"i-can",     img:null,  price:null, desc:"Assorted chilled soft drinks — ask what's available." },
  /* ---- DESSERTS ---- */
  { id:"icecream", name:"Ice Cream",       cats:["desserts"],        icon:"i-cone",    img:U("1567206563064-6f60f40a2b57"), price:null, desc:"Creamy scoops in the day's available flavours." },
  { id:"fruitsalad",name:"Fruit Salad",    cats:["desserts"],        icon:"i-salad",   img:U("1490474418585-ba9bad8fd0ea"), price:null, desc:"A fresh mix of seasonal fruits." },
  { id:"cakes",    name:"Cakes",           cats:["desserts"],        icon:"i-cake",    img:U("1578985545062-69928b1d9587"), price:null, desc:"Soft, delicious cakes — ask for today's selection." },
  { id:"confectionery",name:"Assorted Confectionery",cats:["desserts"],icon:"i-candy",   img:U("1558326567-98ae2405596b"), price:null, desc:"Sweets, pastries and treats from our counter." },
  /* ---- FAST FOOD ---- */
  { id:"indomie",  name:"Indomie",         cats:["fast"],            icon:"i-noodles", img:U("1569718212165-3a8278d5f624"), price:null, desc:"Hot noodle plate, made your way." },
  { id:"chipsegg", name:"Chips & Egg",     cats:["fast"],            icon:"i-friesegg",img:U("1482049016688-2d3e1b311543"), price:null, desc:"Golden fries served with fried eggs." },
  { id:"chipschick",name:"Chips & Chicken",cats:["fast"],            icon:"i-frieschick",img:U("1541592106381-b31e9677c0e5"), price:null, desc:"Crispy fries with well-seasoned chicken." },
  { id:"crispychick",name:"Crispy Chicken",cats:["fast"],            icon:"i-drumspark",img:U("1562967914-608f82629710"), price:null, popular:true, desc:"Crunchy golden chicken, freshly fried." },
  { id:"sandwich", name:"Sandwich",        cats:["fast"],            icon:"i-sandwich",img:U("1528735602780-2552fd46c7af"), price:null, desc:"Toasted sandwich with fresh fillings." }
];

const CATS = [
  { id:"all",      label:"All" },
  { id:"snack",    label:"Snacks" },
  { id:"main",     label:"Main Meals" },
  { id:"drinks",   label:"Drinks" },
  { id:"desserts", label:"Desserts" },
  { id:"fast",     label:"Fast Food" }
];
const CAT_LABEL = { snack:"Snacks", main:"Main Meals", drinks:"Drinks", desserts:"Desserts", fast:"Fast Food" };

/* GALLERY — OWNER NOTE: swap each picsum placeholder URL for the real Hasinah photos. */
const GALLERY = [
  { img:"https://picsum.photos/seed/hasinah-front/900/1100.jpg",    cap:"Restaurant exterior",            cls:"tall" },
  { img:"https://picsum.photos/seed/hasinah-entrance/900/700.jpg",  cap:"Welcome entrance" },
  { img:"https://picsum.photos/seed/hasinah-interior/900/700.jpg",  cap:"Dining area" },
  { img:"https://picsum.photos/seed/hasinah-counter/1200/700.jpg",  cap:"Service counter & menu board",   cls:"wide" },
  { img:"https://picsum.photos/seed/hasinah-seating/900/700.jpg",   cap:"Comfortable seating" },
  { img:"https://picsum.photos/seed/hasinah-food/900/700.jpg",      cap:"Fresh from our kitchen" }
];

/* =====================================================================
   ENGINE
   ===================================================================== */
const $  = (s, c=document) => c.querySelector(s);
const $$ = (s, c=document) => [...c.querySelectorAll(s)];
const naira = n => "₦" + n.toLocaleString("en-NG");
const esc = s => String(s).replace(/[&<>"']/g, m => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
const byId = id => MENU.find(m => m.id === id);
const store = {
  get(k){ try { return JSON.parse(localStorage.getItem(k)); } catch(e){ return null; } },
  set(k,v){ try { localStorage.setItem(k, JSON.stringify(v)); } catch(e){} },
  del(k){ try { localStorage.removeItem(k); } catch(e){} }
};

/* ---------- Media helpers (photo + automatic icon fallback) ---------- */
function iconSVG(m){ return `<svg class="ic ph-ic" aria-hidden="true"><use href="#${m.icon}"/></svg>`; }
function imgTag(m, eager){
  if (!m.img) return "";
  return `<img src="${m.img}" alt="${esc(m.name)}" ${eager?"":'loading="lazy"'} decoding="async"
    onerror="this.remove()" referrerpolicy="no-referrer">`;
}
function mediaInner(m, eager){
  return iconSVG(m) + `<svg class="ic leaf-deco" aria-hidden="true"><use href="#i-leaf"/></svg>` + imgTag(m, eager);
}
function thumbInner(m){
  return iconSVG(m) + imgTag(m);
}

/* ---------- Inject restaurant info ---------- */
function fillInfo(){
  $$('[data-r="phone"]').forEach(e => e.textContent = RESTAURANT.phoneDisplay);
  $$('[data-r="address"]').forEach(e => e.textContent = RESTAURANT.addressFull);
  $$('a[data-r="tel"]').forEach(a => a.href = "tel:" + RESTAURANT.phoneTel);
  $$('a[data-r="wa"]').forEach(a => a.href = "https://wa.me/" + RESTAURANT.whatsapp + "?text=" + encodeURIComponent(RESTAURANT.waGreeting));
  $$('[data-r="hoursShort"]').forEach(e => e.textContent = fmtRange(RESTAURANT.hours[0]));
  $("#mapFrame").src = "https://www.google.com/maps?q=" + encodeURIComponent(RESTAURANT.mapQuery) + "&output=embed";
  const dir = "https://www.google.com/maps/dir/?api=1&destination=" + encodeURIComponent(RESTAURANT.mapQuery);
  $$(".js-dir").forEach(a => { a.href = dir; a.target = "_blank"; a.rel = "noopener"; });
  if (RESTAURANT.heroImage){
    const img = document.createElement("img");
    img.className = "hero-bg"; img.alt = ""; img.src = RESTAURANT.heroImage;
    $(".hero").prepend(img);
  }
}

/* ---------- Opening hours ---------- */
const toMin = t => { const [h,m] = t.split(":").map(Number); return h*60 + m; };
function fmt12(t){ if(!t) return "—"; let [h,m] = t.split(":").map(Number); const ap = h >= 12 ? "PM" : "AM"; h = h % 12 || 12; return `${h}:${String(m).padStart(2,"0")} ${ap}`; }
function fmtRange(d){ return d.open ? `${fmt12(d.open)} – ${fmt12(d.close)}` : "Closed"; }
function openState(d = new Date()){
  const idx = (d.getDay() + 6) % 7;                 // Monday = 0
  const tod = RESTAURANT.hours[idx] || {};
  const t = d.getHours()*60 + d.getMinutes();
  if (!tod.open) return { open:false, idx, detail:"Closed today" };
  const o = toMin(tod.open), c = toMin(tod.close);
  const isOpen = t >= o && t < c;
  let detail;
  if (isOpen) detail = "Closes " + fmt12(tod.close);
  else if (t < o) detail = "Opens " + fmt12(tod.open);
  else { const nd = RESTAURANT.hours[(idx+1) % 7]; detail = "Opens " + (nd.open ? fmt12(nd.open) : "soon") + " tomorrow"; }
  return { open: isOpen, idx, detail };
}
function renderHours(){
  const st = openState();
  $("#hoursList").innerHTML = RESTAURANT.hours.map((h,i) =>
    `<div class="h-row ${i===st.idx?"today":""}"><span>${h.day}${i===st.idx?" · Today":""}</span><span>${fmtRange(h)}</span></div>`).join("");
  $$("[data-open-chip]").forEach(chip => {
    chip.classList.toggle("yes", st.open); chip.classList.toggle("no", !st.open);
    chip.querySelector("span:last-child").textContent = (st.open ? "Open now" : "Closed now") + " · " + st.detail;
  });
  $("#heroNow").textContent = st.open ? "Open now" : "Closed now";
  $("#heroDot").classList.toggle("open", st.open);
  $("#heroHours").textContent = fmtRange(RESTAURANT.hours[st.idx]);
}
setInterval(renderHours, 30000);

/* ---------- Marquee ---------- */
(function(){
  const items = ["Dine-in","Takeaway","Delivery","Drive-through","Outdoor Seating","Catering","Fresh Juice","Cakes & Confectionery"];
  const half = items.map(t => `<span>${t}</span><svg class="ic"><use href="#i-leaf"/></svg>`).join("");
  $("#mqTrack").innerHTML = `<span>${half}</span><span>${half}</span>`;
})();

/* ---------- Menu rendering ---------- */
let curCat = "all", curQ = "";
function priceHTML(m){
  return m.price != null ? `<strong>${naira(m.price)}</strong>` : `<span class="onreq">Price on request</span>`;
}
function cardHTML(m){
  return `<article class="m-card" data-id="${m.id}" tabindex="0" role="button" aria-label="View ${esc(m.name)}">
    <div class="m-media c-${m.cats[0]}">
      ${m.popular ? `<span class="m-tag">Popular</span>` : ""}
      ${mediaInner(m)}
    </div>
    <div class="m-body">
      <h3>${esc(m.name)}</h3><p>${esc(m.desc)}</p>
      <div class="m-foot">
        <div class="m-price">${priceHTML(m)}</div>
        <button class="add-pill" data-add="${m.id}" aria-label="Add ${esc(m.name)} to cart"><svg class="ic"><use href="#i-plus"/></svg> Add</button>
      </div>
    </div>
  </article>`;
}
function renderPills(){
  $("#catPills").innerHTML = CATS.map(c => `<button class="pill ${c.id===curCat?"active":""}" data-cat="${c.id}" role="tab" aria-selected="${c.id===curCat}">${c.label}</button>`).join("");
}
function renderMenu(){
  const list = MENU.filter(m =>
    (curCat === "all" || m.cats.includes(curCat)) &&
    (m.name + " " + m.desc).toLowerCase().includes(curQ)
  );
  $("#menuGrid").innerHTML = list.map(cardHTML).join("");
  $("#menuEmpty").classList.toggle("show", list.length === 0);
}

/* ---------- Toast ---------- */
let toastTimer;
function toast(msg){
  $("#toastMsg").textContent = msg;
  const t = $("#toast"); t.classList.add("show");
  clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ---------- Overlay/scroll management ---------- */
function refreshLock(){
  const open = $("#cartDrawer").classList.contains("open") ||
               $("#mNav").classList.contains("open") ||
               $("#foodModal").classList.contains("open") ||
               $("#checkout").classList.contains("open") ||
               $("#lightbox").classList.contains("open");
  document.body.classList.toggle("no-scroll", open);
}
function syncScrim(){
  const on = $("#cartDrawer").classList.contains("open") || $("#mNav").classList.contains("open");
  $("#scrim").classList.toggle("show", on);
  refreshLock();
}

/* ---------- Cart ---------- */
const CART_KEY = "hasinah_cart_v1";
let cart = store.get(CART_KEY) || [];
const saveCart = () => store.set(CART_KEY, cart);
function cartTotals(){
  let count = 0, sub = 0, unpriced = false;
  cart.forEach(c => { const m = byId(c.id); if(!m) return; count += c.qty;
    if (m.price != null) sub += m.price * c.qty; else unpriced = true; });
  return { count, sub, unpriced };
}
function addToCart(id, qty = 1){
  const row = cart.find(c => c.id === id);
  if (row) row.qty = Math.min(99, row.qty + qty); else cart.push({ id, qty });
  saveCart(); syncCartUI();
}
function setQty(id, qty){
  const row = cart.find(c => c.id === id); if (!row) return;
  row.qty = qty;
  if (row.qty <= 0) cart = cart.filter(c => c.id !== id);
  saveCart(); syncCartUI();
}
function clearCart(){ cart = []; saveCart(); syncCartUI(); }

function syncCartUI(){
  const { count, sub, unpriced } = cartTotals();
  const badge = $("#cartCount");
  badge.hidden = count === 0; badge.textContent = count;
  badge.classList.remove("pop"); void badge.offsetWidth; badge.classList.add("pop");
  $("#cartCountTxt").textContent = count + (count === 1 ? " item" : " items");
  const totalTxt = unpriced ? "Prices on request" : naira(sub);

  /* drawer */
  $("#cartEmpty").classList.toggle("show", count === 0);
  $("#cartFoot").style.display = count === 0 ? "none" : "block";
  $("#cartItems").innerHTML = cart.map(c => {
    const m = byId(c.id); if (!m) return "";
    const unit = m.price != null ? naira(m.price) : "Price on request";
    const line = m.price != null ? naira(m.price * c.qty) : "—";
    return `<div class="c-item">
      <div class="c-thumb c-${m.cats[0]}">${thumbInner(m)}</div>
      <div class="c-info"><b>${esc(m.name)}</b><span class="c-unit">${unit}</span>
        <div class="qty">
          <button data-act="dec" data-id="${m.id}" aria-label="Decrease"><svg class="ic"><use href="#i-minus"/></svg></button>
          <b>${c.qty}</b>
          <button data-act="inc" data-id="${m.id}" aria-label="Increase"><svg class="ic"><use href="#i-plus"/></svg></button>
        </div>
      </div>
      <div class="c-right"><b class="c-line">${line}</b>
        <button class="c-del" data-act="rem" data-id="${m.id}" aria-label="Remove ${esc(m.name)}"><svg class="ic"><use href="#i-trash"/></svg></button>
      </div>
    </div>`;
  }).join("");
  $("#cartSubtotal").textContent = unpriced ? "To be confirmed" : naira(sub);
  $("#cartNote").textContent = unpriced
    ? "Items marked “on request” are priced when our team confirms your order on WhatsApp."
    : "Delivery fee (if any) is confirmed by the restaurant after you send your order.";

  /* sticky mobile bar — 🛒 VIEW CART — ₦XX,XXX */
  const bar = $("#mcartBar");
  const showBar = count > 0 && !$("#cartDrawer").classList.contains("open") && !$("#checkout").classList.contains("open");
  bar.classList.toggle("show", showBar);
  document.body.classList.toggle("has-bar", showBar);
  $("#mcartCount").textContent = count + (count === 1 ? " item in cart" : " items in cart");
  $("#mcartTotal").textContent = count ? "Total: " + totalTxt : "";
}

/* ---------- Drawer ---------- */
function openDrawer(){
  toggleNav(false);
  $("#cartDrawer").classList.add("open"); syncScrim(); syncCartUI();
}
function closeDrawer(){ $("#cartDrawer").classList.remove("open"); syncScrim(); syncCartUI(); }

/* ---------- Mobile nav (hamburger dropdown) ---------- */
function toggleNav(force){
  const open = force !== undefined ? force : !$("#mNav").classList.contains("open");
  $("#mNav").classList.toggle("open", open);
  document.body.classList.toggle("nav-open", open);
  $("#btnHamb").setAttribute("aria-expanded", open);
  $("#btnHamb").setAttribute("aria-label", open ? "Close menu" : "Open menu");
  syncScrim();
}

/* ---------- Food modal ---------- */
let fmId = null, fmQty = 1;
function openFood(id){
  const m = byId(id); if (!m) return;
  fmId = id; fmQty = 1;
  const media = $("#fmMedia");
  media.className = "fm-media c-" + m.cats[0];
  media.innerHTML = iconSVG(m) + imgTag(m, true);
  $("#fmName").textContent = m.name;
  $("#fmDesc").textContent = m.desc;
  $("#fmTags").innerHTML = `<span>${CAT_LABEL[m.cats[0]] || ""}</span>` + (m.popular ? `<span class="hot">Popular</span>` : "");
  $("#fmPriceWrap").innerHTML = m.price != null
    ? `<span class="big">${naira(m.price)}</span>`
    : `<span class="fm-req">Price available on request</span>`;
  $("#fmQty").textContent = fmQty;
  updateFmTotal();
  $("#foodModal").classList.add("open"); refreshLock();
  $("#fmClose").focus();
}
function updateFmTotal(){
  const m = byId(fmId); if (!m) return;
  const el = $("#fmTotal");
  if (m.price != null){ el.hidden = false; el.textContent = naira(m.price * fmQty); }
  else el.hidden = true;
}
function closeFood(){ $("#foodModal").classList.remove("open"); refreshLock(); }

/* ---------- Checkout ---------- */
let orderType = null, lastWA = "#";
function openCheckout(){
  if (cartTotals().count === 0){ toast("Your cart is empty — add some items first."); return; }
  closeDrawer();
  $("#ckSuccess").classList.remove("show");
  $("#ckBody").style.display = "grid";
  $("#ckHead").style.display = "flex";
  renderSummary(); restoreCustomer();
  $("#checkout").classList.add("open"); refreshLock();
  $("#checkout").scrollTop = 0;
}
function closeCheckout(){ $("#checkout").classList.remove("open"); refreshLock(); syncCartUI(); }
function setType(t){
  orderType = t;
  $("#otypeDelivery").classList.toggle("sel", t === "delivery");
  $("#otypePickup").classList.toggle("sel", t === "pickup");
  $("#otypeDelivery").setAttribute("aria-pressed", t === "delivery");
  $("#otypePickup").setAttribute("aria-pressed", t === "pickup");
  $("#otypeDelivery").classList.remove("err"); $("#otypePickup").classList.remove("err");
  $("#fieldsDelivery").hidden = t !== "delivery";
  $("#fieldsPickup").hidden = t !== "pickup";
  $("#sumFeeRow").hidden = t !== "delivery";
  renderSummary();
}
function renderSummary(){
  const { sub, unpriced } = cartTotals();
  $("#sumList").innerHTML = cart.map(c => {
    const m = byId(c.id); if (!m) return "";
    const line = m.price != null ? naira(m.price * c.qty) : `<span class="onreq">On request</span>`;
    return `<div class="sum-row"><div class="l"><b>${c.qty} × ${esc(m.name)}</b><span>${CAT_LABEL[m.cats[0]] || ""}</span></div><div>${line}</div></div>`;
  }).join("");
  $("#sumSubtotal").textContent = unpriced ? "To be confirmed" : naira(sub);
  $("#sumTotal").textContent = unpriced ? "To be confirmed" : naira(sub);
}
function restoreCustomer(){
  const c = store.get("hasinah_customer");
  if (c){ $("#fName").value = c.name || ""; $("#fPhone").value = c.phone || ""; }
}
function validate(){
  let ok = true; const firstBad = [];
  const mark = (w, bad) => { $(w).classList.toggle("err", bad); if (bad){ ok = false; firstBad.push(w); } };
  if (!orderType){ $("#otypeDelivery").classList.add("err"); $("#otypePickup").classList.add("err"); ok = false; firstBad.push("#otypeDelivery"); }
  mark("#wName", $("#fName").value.trim().length < 2);
  const digits = $("#fPhone").value.replace(/[^\d]/g, "");
  mark("#wPhone", digits.length < 7 || digits.length > 15);
  if (orderType === "delivery") mark("#wAddr", $("#fAddr").value.trim().length < 6);
  if (!ok){
    const el = $(firstBad[0]); el.scrollIntoView({ behavior:"smooth", block:"center" });
    toast("Please complete the highlighted fields.");
  }
  return ok;
}
function buildMessage(d){
  const { sub, unpriced } = cartTotals();
  const L = [];
  L.push(`Hello ${RESTAURANT.name},`, "", "I would like to place an order.", "", "*ORDER:*");
  cart.forEach(c => { const m = byId(c.id); if (m) L.push(`• ${c.qty} × ${m.name}${m.price != null ? " — " + naira(m.price * c.qty) : ""}`); });
  L.push("", "*FOOD TOTAL:*", unpriced ? "To be confirmed (prices on request)" : naira(sub));
  L.push("", "*ORDER TYPE:*", d.type === "delivery" ? "Delivery" : "Pickup");
  if (d.type === "delivery"){
    L.push("", "*CUSTOMER:*", d.name, "", "*PHONE:*", d.phone, "", "*DELIVERY ADDRESS:*", d.addr);
    if (d.note) L.push("", "*ADDITIONAL INSTRUCTIONS:*", d.note);
    L.push("", "(Delivery charges depend on my location — kindly confirm.)");
  } else {
    L.push("", "*CUSTOMER:*", d.name, "", "*PHONE:*", d.phone, "", "*PICKUP FROM:*", RESTAURANT.addressFull);
    if (d.note) L.push("", "*PICKUP INSTRUCTIONS:*", d.note);
  }
  L.push("", "Please confirm my order. Thank you!");
  return L.join("\n");
}

/* ---------- Gallery & lightbox ---------- */
let lbIdx = 0;
function renderGallery(){
  $("#galleryGrid").innerHTML = GALLERY.map((g,i) =>
    `<button class="gal-item ${g.cls||""}" data-lb="${i}" aria-label="Open photo: ${esc(g.cap)}">
       <img src="${g.img}" alt="${esc(g.cap)}" loading="lazy">
       <figcaption>${esc(g.cap)}</figcaption>
     </button>`).join("");
}
function openLb(i){ lbIdx = i; renderLb(); $("#lightbox").classList.add("open"); refreshLock(); }
function renderLb(){
  const g = GALLERY[lbIdx];
  $("#lbImg").src = g.img; $("#lbImg").alt = g.cap;
  $("#lbCap").textContent = g.cap;
  $("#lbCount").textContent = (lbIdx+1) + " / " + GALLERY.length;
}
function closeLb(){ $("#lightbox").classList.remove("open"); refreshLock(); }

/* ---------- Events ---------- */
document.addEventListener("click", e => {
  const pill = e.target.closest("[data-cat]");
  if (pill){ curCat = pill.dataset.cat; renderPills(); renderMenu(); return; }

  const addBtn = e.target.closest("[data-add]");
  if (addBtn){ e.stopPropagation(); addToCart(addBtn.dataset.add, 1); toast("Added to cart"); return; }

  const card = e.target.closest(".m-card");
  if (card){ openFood(card.dataset.id); return; }

  const act = e.target.closest("[data-act]");
  if (act){
    const row = cart.find(c => c.id === act.dataset.id); if (!row) return;
    if (act.dataset.act === "inc") setQty(act.dataset.id, row.qty + 1);
    if (act.dataset.act === "dec") setQty(act.dataset.id, row.qty - 1);
    if (act.dataset.act === "rem"){ setQty(act.dataset.id, 0); toast("Removed from cart"); }
    return;
  }
  const lb = e.target.closest("[data-lb]");
  if (lb){ openLb(+lb.dataset.lb); return; }
});
document.addEventListener("keydown", e => {
  if (e.key === "Enter" && e.target.classList?.contains("m-card")) openFood(e.target.dataset.id);
  if (e.key === "Escape"){
    if ($("#lightbox").classList.contains("open")) return closeLb();
    if ($("#checkout").classList.contains("open")) return closeCheckout();
    if ($("#foodModal").classList.contains("open")) return closeFood();
    if ($("#cartDrawer").classList.contains("open")) return closeDrawer();
    if ($("#mNav").classList.contains("open")) return toggleNav(false);
  }
  if ($("#lightbox").classList.contains("open")){
    if (e.key === "ArrowRight"){ lbIdx = (lbIdx+1) % GALLERY.length; renderLb(); }
    if (e.key === "ArrowLeft"){ lbIdx = (lbIdx-1+GALLERY.length) % GALLERY.length; renderLb(); }
  }
});

/* header / mobile nav */
 $("#cartBtn").addEventListener("click", openDrawer);
 $("#cartClose").addEventListener("click", closeDrawer);
 $("#scrim").addEventListener("click", () => {
  if ($("#mNav").classList.contains("open")) toggleNav(false);
  else closeDrawer();
});
 $("#btnHamb").addEventListener("click", () => toggleNav());
 $$("[data-mnav]").forEach(a => a.addEventListener("click", () => toggleNav(false)));
window.addEventListener("resize", () => { if (window.innerWidth >= 900) toggleNav(false); });
window.addEventListener("scroll", () => {
  $("#siteHeader").classList.toggle("scrolled", window.scrollY > 30);
}, { passive:true });

/* cart drawer buttons */
 $("#btnBrowse").addEventListener("click", closeDrawer);
 $("#btnContinue").addEventListener("click", closeDrawer);
 $("#btnClearCart").addEventListener("click", () => { clearCart(); toast("Cart cleared"); });
 $("#btnProceed").addEventListener("click", openCheckout);
 $("#mcartBar").addEventListener("click", openDrawer);

/* menu search (lightly debounced) */
let searchT;
 $("#menuSearch").addEventListener("input", e => {
  clearTimeout(searchT);
  const v = e.target.value;
  searchT = setTimeout(() => { curQ = v.trim().toLowerCase(); renderMenu(); }, 140);
});
 $("#btnResetSearch").addEventListener("click", () => { curQ = ""; $("#menuSearch").value = ""; renderMenu(); });

/* food modal */
 $("#fmClose").addEventListener("click", closeFood);
 $("#foodModal").addEventListener("click", e => { if (e.target === e.currentTarget) closeFood(); });
 $("#fmPlus").addEventListener("click", () => { fmQty = Math.min(99, fmQty + 1); $("#fmQty").textContent = fmQty; updateFmTotal(); });
 $("#fmMinus").addEventListener("click", () => { fmQty = Math.max(1, fmQty - 1); $("#fmQty").textContent = fmQty; updateFmTotal(); });
 $("#fmAdd").addEventListener("click", () => { addToCart(fmId, fmQty); closeFood(); toast("Added to cart"); });

/* checkout */
 $("#otypeDelivery").addEventListener("click", () => setType("delivery"));
 $("#otypePickup").addEventListener("click", () => setType("pickup"));
 $("#otypeDelivery").addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setType("delivery"); } });
 $("#otypePickup").addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setType("pickup"); } });
 $("#ckClose").addEventListener("click", closeCheckout);
 $("#ckBack").addEventListener("click", () => { closeCheckout(); openDrawer(); });
 $("#btnWA").addEventListener("click", () => {
  if (!validate()) return;
  const d = {
    type: orderType,
    name: $("#fName").value.trim(),
    phone: $("#fPhone").value.trim(),
    addr: $("#fAddr").value.trim(),
    note: orderType === "delivery" ? $("#fNote").value.trim() : $("#fPickNote").value.trim()
  };
  store.set("hasinah_customer", { name: d.name, phone: d.phone });
  lastWA = "https://wa.me/" + RESTAURANT.whatsapp + "?text=" + encodeURIComponent(buildMessage(d));
  window.open(lastWA, "_blank", "noopener");
  $("#ckBody").style.display = "none";
  $("#ckHead").style.display = "none";
  $("#ckSuccess").classList.add("show");
  toast("WhatsApp opened — press Send to place your order");
});
 $("#succReopen").addEventListener("click", () => window.open(lastWA, "_blank", "noopener"));
 $("#succDone").addEventListener("click", () => { clearCart(); closeCheckout(); toast("Thank you! Your order was sent via WhatsApp."); });
["#fName","#fPhone","#fAddr"].forEach(s => $(s).addEventListener("input", e => e.target.closest(".field").classList.remove("err")));

/* lightbox */
 $("#lbClose").addEventListener("click", closeLb);
 $("#lbPrev").addEventListener("click", () => { lbIdx = (lbIdx-1+GALLERY.length) % GALLERY.length; renderLb(); });
 $("#lbNext").addEventListener("click", () => { lbIdx = (lbIdx+1) % GALLERY.length; renderLb(); });
 $("#lightbox").addEventListener("click", e => { if (e.target === e.currentTarget) closeLb(); });

/* reveal on scroll */
const io = new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting){ en.target.classList.add("in"); io.unobserve(en.target); } });
}, { threshold: .12 });
 $$(".rv").forEach(el => io.observe(el));

/* ---------- init ---------- */
fillInfo();
renderPills();
renderMenu();
renderGallery();
renderHours();
syncCartUI();
 $("#year").textContent = new Date().getFullYear();