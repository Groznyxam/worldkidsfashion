// ═══════════════════════════════════════
//  WKF — WorldKidsFashion
//  Main Application Script
// ═══════════════════════════════════════

// ── PRODUCT DATA ──────────────────────
const PRODUCTS = [
  {
    id:1, name:'Organic Newborn Gift Set 5pcs', brand:'PureOrganic', cat:'newborn',
    price:24.90, moq:'Min. 3 sets', badge:'gots', sizes:['50','56','62'], colors:['White','Beige','Mint'],
    img:'https://picsum.photos/seed/wkf-newborn1/400/400',
    desc:'5-piece GOTS certified organic cotton set. Includes 2 bodysuits, 1 romper, 1 hat and 1 mittens. Ultra-soft, pre-washed. Safe for sensitive newborn skin.'
  },
  {
    id:2, name:'Baby Girl Floral Summer Dress', brand:'TurkishKids', cat:'baby',
    price:8.50, moq:'Min. 6 pcs', badge:'new', sizes:['68','74','80','86'], colors:['Pink','White'],
    img:'https://picsum.photos/seed/wkf-babygirl/400/400',
    desc:'Lightweight cotton summer dress with floral print. Elasticated waist, comfortable fit. Machine washable at 30°C.'
  },
  {
    id:3, name:'Boy Sport Tracksuit Set 2pcs', brand:'ActiveKids', cat:'boys',
    price:15.90, moq:'Min. 6 pcs', badge:'hot', sizes:['92','98','104','110','116'], colors:['Navy','Black','Red'],
    img:'https://picsum.photos/seed/wkf-boytrack/400/400',
    desc:'Cotton fleece tracksuit with zip hoodie and matching joggers. Ribbed cuffs and waistband. Perfect for everyday active wear.'
  },
  {
    id:4, name:'Girl Denim Jacket + Skirt Set', brand:'TurkishKids', cat:'girls',
    price:22.90, moq:'Min. 4 pcs', badge:'new', sizes:['98','104','110','116','122'], colors:['Blue','Pink'],
    img:'https://picsum.photos/seed/wkf-girldenim/400/400',
    desc:'Soft denim jacket with matching A-line skirt. Embroidered details, snap button closure. A versatile set for any season.'
  },
  {
    id:5, name:'Baby Knit Romper Organic', brand:'PureOrganic', cat:'baby',
    price:11.90, moq:'Min. 6 pcs', badge:'gots', sizes:['62','68','74','80'], colors:['Beige','Gray'],
    img:'https://picsum.photos/seed/wkf-romper/400/400',
    desc:'Hand-knit organic cotton romper. Snap button legs for easy changing. GOTS certified. Perfect gift for newborns and babies.'
  },
  {
    id:6, name:'Boy Linen Summer Set 2pcs', brand:'NaturalKids', cat:'boys',
    price:13.50, moq:'Min. 6 pcs', badge:null, sizes:['86','92','98','104'], colors:['Beige','White'],
    img:'https://picsum.photos/seed/wkf-linen/400/400',
    desc:'100% linen shirt and shorts set. Breathable and lightweight for hot summers. Relaxed fit, easy-care fabric.'
  },
  {
    id:7, name:'Girl Party Dress Tulle', brand:'LittlePrincess', cat:'girls',
    price:18.90, moq:'Min. 4 pcs', badge:'new', sizes:['92','98','104','110','116'], colors:['Pink','Gold','White'],
    img:'https://picsum.photos/seed/wkf-party/400/400',
    desc:'Elegant tulle party dress with satin bodice. Hidden zip back, soft lining. Perfect for birthdays and special occasions.'
  },
  {
    id:8, name:'Boy Winter Puffer Jacket', brand:'ActiveKids', cat:'boys',
    price:28.50, moq:'Min. 3 pcs', badge:null, sizes:['104','110','116','122','128'], colors:['Navy','Black'],
    img:'https://picsum.photos/seed/wkf-jacket/400/400',
    desc:'Water-resistant puffer jacket with fleece lining. Warm to -15°C. Hood with faux-fur trim. 2 zippered pockets.'
  },
  {
    id:9, name:'Newborn Hospital Outfit Set', brand:'BabyCosy', cat:'newborn',
    price:16.90, moq:'Min. 4 sets', badge:'hot', sizes:['50','56'], colors:['White','Mint','Pink'],
    img:'https://picsum.photos/seed/wkf-hospital/400/400',
    desc:'Complete hospital outfit: hat, bodysuit, scratch mittens, booties and blanket. Ultra-soft interlock cotton. Our bestseller.'
  },
  {
    id:10, name:'Baby Girl Tutu Dress', brand:'LittlePrincess', cat:'baby',
    price:9.90, moq:'Min. 6 pcs', badge:null, sizes:['68','74','80','86'], colors:['Pink','Lilac'],
    img:'https://picsum.photos/seed/wkf-tutu/400/400',
    desc:'Adorable tutu dress with cotton bodice and tulle skirt. Snap closure at back. Perfect for photos and celebrations.'
  },
  {
    id:11, name:'Unisex Muslin Swaddle 3pcs', brand:'PureOrganic', cat:'newborn',
    price:19.50, moq:'Min. 5 sets', badge:'gots', sizes:['Universal'], colors:['White','Mint'],
    img:'https://picsum.photos/seed/wkf-swaddle/400/400',
    desc:'Set of 3 GOTS organic muslin swaddle blankets. 120x120cm each. Breathable, gets softer with each wash. Gender neutral.'
  },
  {
    id:12, name:'Girl Embroidered Blouse', brand:'TurkishKids', cat:'girls',
    price:7.90, moq:'Min. 6 pcs', badge:'sale', sizes:['98','104','110','116'], colors:['White','Powder'],
    img:'https://picsum.photos/seed/wkf-blouse/400/400',
    desc:'Cotton blouse with hand-embroidered floral details. Button back, relaxed fit. Pairs beautifully with any bottom.'
  },
  {
    id:13, name:'Boy Cargo Shorts + Tee Set', brand:'ActiveKids', cat:'boys',
    price:12.50, moq:'Min. 6 pcs', badge:'sale', sizes:['86','92','98','104','110'], colors:['Khaki','Navy'],
    img:'https://picsum.photos/seed/wkf-cargo/400/400',
    desc:'Cotton cargo shorts with matching graphic tee. 4 functional pockets, elastic waistband. Cool and practical for summer.'
  },
  {
    id:14, name:'Newborn Organic Bodysuits 5pcs', brand:'PureOrganic', cat:'newborn',
    price:21.90, moq:'Min. 3 sets', badge:'gots', sizes:['50','56','62'], colors:['White','Ecru'],
    img:'https://picsum.photos/seed/wkf-bodysuit/400/400',
    desc:'5 GOTS organic cotton bodysuits in coordinating colours. Envelope neck for easy dressing. Snap closure, pre-washed.'
  },
  {
    id:15, name:'Baby Boy Dino Set 3pcs', brand:'BabyCosy', cat:'baby',
    price:12.90, moq:'Min. 12 pcs', badge:'new', sizes:['62','68','74','80'], colors:['Blue','Gray'],
    img:'https://picsum.photos/seed/wkf-dino/400/400',
    desc:'3-piece dinosaur print set: bodysuit, leggings and bib. Soft jersey cotton. Great for gifting or daily wear.'
  },
  {
    id:16, name:'Girl Hoodie + Jogger Set', brand:'TurkishKids', cat:'girls',
    price:17.50, moq:'Min. 4 pcs', badge:null, sizes:['104','110','116','122','128'], colors:['Lilac','Pink'],
    img:'https://picsum.photos/seed/wkf-hoodie/400/400',
    desc:'Soft cotton fleece hoodie with matching jogger pants. Kangaroo pocket, flat waistband. Cosy and stylish.'
  },
  {
    id:17, name:'Baby Organic Sleep Sack', brand:'PureOrganic', cat:'baby',
    price:14.90, moq:'Min. 6 pcs', badge:'gots', sizes:['68','80','92'], colors:['White','Gray','Mint'],
    img:'https://picsum.photos/seed/wkf-sleep/400/400',
    desc:'GOTS organic cotton sleep sack. 1.0 TOG rating. 2-way zip for easy night changes. Shoulder snaps, sleeveless design.'
  },
  {
    id:18, name:'Girl Floral Jumpsuit', brand:'LittlePrincess', cat:'girls',
    price:14.90, moq:'Min. 6 pcs', badge:'new', sizes:['98','104','110','116','122'], colors:['Rose','Yellow'],
    img:'https://picsum.photos/seed/wkf-boytrack/400/400',
    desc:'Floral print cotton jumpsuit with button front and wide-leg. Adjustable shoulder straps. Effortless summer style.'
  },
  {
    id:19, name:'Boy Swim Shorts UV50+', brand:'ActiveKids', cat:'boys',
    price:6.90, moq:'Min. 12 pcs', badge:'new', sizes:['86','92','98','104','110','116'], colors:['Blue','Orange','Green'],
    img:'https://picsum.photos/seed/wkf-swim/400/400',
    desc:'Quick-dry swim shorts with UV50+ protection. Mesh lining, elasticated waistband with drawstring. Perfect for beach & pool.'
  },
  {
    id:20, name:'Newborn Bear Velour Onesie', brand:'BabyCosy', cat:'newborn',
    price:13.90, moq:'Min. 6 pcs', badge:'hot', sizes:['50','56','62'], colors:['Beige','Brown','Gray'],
    img:'https://picsum.photos/seed/wkf-bear/400/400',
    desc:'Super soft velour all-in-one with bear ear hood. Full zip front for easy dressing. Machine washable, keeps shape.'
  },
  {
    id:21, name:'Girl School Uniform Set', brand:'TurkishKids', cat:'girls',
    price:19.90, moq:'Min. 6 pcs', badge:null, sizes:['104','110','116','122','128','134'], colors:['Navy','Burgundy'],
    img:'https://picsum.photos/seed/wkf-jacket/400/400',
    desc:'Classic school uniform: pleated skirt and cotton blouse. Durable fabric, easy-iron. Available in navy and burgundy.'
  },
  {
    id:22, name:'Boy Knit Winter Set', brand:'NaturalKids', cat:'boys',
    price:23.50, moq:'Min. 4 pcs', badge:null, sizes:['92','98','104','110','116'], colors:['Camel','Gray','Green'],
    img:'https://picsum.photos/seed/wkf-romper/400/400',
    desc:'Wool-blend knit sweater and matching trousers. Ribbed collar and cuffs. Warm and stylish for autumn/winter.'
  },
  {
    id:23, name:'Baby Girl Ruffle Romper', brand:'LittlePrincess', cat:'baby',
    price:8.90, moq:'Min. 6 pcs', badge:'sale', sizes:['62','68','74','80','86'], colors:['Pink','Peach','White'],
    img:'https://picsum.photos/seed/wkf-babygirl/400/400',
    desc:'Cotton romper with ruffle collar and sleeves. Snap buttons at leg, bow detail. Perfect for photos and everyday wear.'
  },
  {
    id:24, name:'Unisex Organic Starter Pack 10pcs', brand:'PureOrganic', cat:'newborn',
    price:49.90, moq:'Min. 2 sets', badge:'gots', sizes:['50-56','56-62','62-68'], colors:['Neutral Mix'],
    img:'https://picsum.photos/seed/wkf-newborn1/400/400',
    desc:'Complete newborn starter kit: 3 bodysuits, 2 rompers, 2 leggings, 1 hat, 1 mittens, 1 blanket. 100% GOTS organic. Best value.'
  },
];

const BADGE_LABELS = { new:'New', sale:'Sale', gots:'Organic', hot:'Bestseller' };

// ── STATE ──────────────────────────────
let cart     = JSON.parse(localStorage.getItem('wkf_cart')     || '[]');
let wishlist = JSON.parse(localStorage.getItem('wkf_wish')     || '[]');
let user     = JSON.parse(localStorage.getItem('wkf_user')     || 'null');

function saveCart()     { localStorage.setItem('wkf_cart', JSON.stringify(cart));     updateCartBadge(); }
function saveWishlist() { localStorage.setItem('wkf_wish', JSON.stringify(wishlist)); }
function saveUser(u)    { user = u; localStorage.setItem('wkf_user', JSON.stringify(u)); }

// ── CART BADGE ─────────────────────────
function updateCartBadge() {
  const total = cart.reduce((s,i) => s + i.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = total);
}

// ── ADD TO CART ─────────────────────────
function addToCart(id, qty = 1) {
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) return;
  const ex = cart.find(i => i.id === id);
  if (ex) ex.qty += qty;
  else cart.push({ ...p, qty });
  saveCart();
  showToast(`✓ ${p.name} added to cart`, 'success');
}
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  renderCart();
}
function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  renderCart();
}

// ── WISHLIST ────────────────────────────
function toggleWish(id) {
  const idx = wishlist.indexOf(id);
  if (idx > -1) wishlist.splice(idx, 1);
  else wishlist.push(id);
  saveWishlist();
  document.querySelectorAll(`[data-wish="${id}"]`).forEach(btn => {
    btn.textContent = wishlist.includes(id) ? '❤️' : '🤍';
  });
}

// ── TOAST ───────────────────────────────
function showToast(msg, type = 'success') {
  let t = document.getElementById('wkf-toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'wkf-toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.className = `toast ${type} show`;
  clearTimeout(t._timer);
  t._timer = setTimeout(() => t.classList.remove('show'), 3000);
}

// ── PRODUCT CARD ────────────────────────
function renderCard(p) {
  const isWished = wishlist.includes(p.id);
  const badgeHtml = p.badge
    ? `<div class="pbadge pbadge-${p.badge}">${BADGE_LABELS[p.badge]}</div>` : '';
  const priceHtml = user
    ? `<div class="pcard-price">$${p.price.toFixed(2)}</div>`
    : `<div class="pcard-price locked"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg> Login to see price</div>`;
  const addBtn = user
    ? `<button class="btn-add" onclick="event.stopPropagation();addToCart(${p.id})">Add to Cart</button>`
    : `<button class="btn-add locked" onclick="event.stopPropagation();location.href='login.html'">Register to Order</button>`;

  const imgContent = p.img
    ? `<img src="${p.img}" alt="${p.name}" style="width:100%;height:100%;object-fit:cover;display:block;border-radius:inherit" loading="lazy">`
    : `<div style="font-size:3rem;display:flex;align-items:center;justify-content:center;height:100%">${p.emoji||'👕'}</div>`;

  return `
    <div class="pcard" onclick="location.href='product.html?id=${p.id}'">
      <div class="pcard-img ${p.bg||'pcard-img-bg1'}" style="overflow:hidden;padding:0;height:196px">
        ${badgeHtml}
        ${imgContent}
        <button class="pwish-btn" data-wish="${p.id}" onclick="event.stopPropagation();toggleWish(${p.id})">${isWished?'❤️':'🤍'}</button>
      </div>
      <div class="pcard-body">
        <div class="pcard-brand">${p.brand}</div>
        <div class="pcard-name">${p.name}</div>
        <div class="pcard-footer">
          ${priceHtml}
          <div class="pcard-moq">${p.moq}</div>
        </div>
        <div class="pcard-actions">
          ${addBtn}
        </div>
      </div>
    </div>`;
}

// ── HOME GRID ───────────────────────────
let homeFilter = 'all';
function filterHome(cat, btn) {
  homeFilter = cat;
  document.querySelectorAll('#homeTabs .ptab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderHomeGrid();
}
function renderHomeGrid() {
  const grid = document.getElementById('homeGrid');
  if (!grid) return;
  const filtered = homeFilter === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === homeFilter);
  grid.innerHTML = filtered.slice(0, 8).map(renderCard).join('');
}

// ── CATALOG GRID ────────────────────────
let catalogFilter = { cat:'', search:'', sort:'default', maxPrice:'' };

function renderCatalog() {
  const grid = document.getElementById('catalogGrid');
  const countEl = document.getElementById('resultCount');
  if (!grid) return;
  let prods = [...PRODUCTS];
  if (catalogFilter.cat)    prods = prods.filter(p => p.cat === catalogFilter.cat);
  if (catalogFilter.search) prods = prods.filter(p => p.name.toLowerCase().includes(catalogFilter.search.toLowerCase()) || p.brand.toLowerCase().includes(catalogFilter.search.toLowerCase()));
  if (catalogFilter.maxPrice) prods = prods.filter(p => p.price <= parseFloat(catalogFilter.maxPrice));
  if (catalogFilter.sort === 'asc')  prods.sort((a,b) => a.price - b.price);
  if (catalogFilter.sort === 'desc') prods.sort((a,b) => b.price - a.price);
  if (countEl) countEl.textContent = `${prods.length} products found`;
  grid.innerHTML = prods.length ? prods.map(renderCard).join('') : '<p style="color:var(--mist);padding:60px;grid-column:1/-1;text-align:center;font-size:15px">No products match your filters.</p>';
}

function initCatalog() {
  if (!document.getElementById('catalogGrid')) return;
  const params = new URLSearchParams(location.search);
  catalogFilter.cat    = params.get('cat')    || '';
  catalogFilter.search = params.get('search') || '';
  if (document.getElementById('searchInput') && catalogFilter.search)
    document.getElementById('searchInput').value = catalogFilter.search;
  document.getElementById('sortSelect')?.addEventListener('change', e => {
    catalogFilter.sort = e.target.value; renderCatalog();
  });
  document.querySelectorAll('.cat-filter').forEach(cb => {
    if (cb.value === catalogFilter.cat) cb.checked = true;
    cb.addEventListener('change', () => {
      const checked = [...document.querySelectorAll('.cat-filter:checked')].map(c=>c.value);
      catalogFilter.cat = checked[0] || ''; renderCatalog();
    });
  });
  document.getElementById('priceMax')?.addEventListener('change', e => {
    catalogFilter.maxPrice = e.target.value; renderCatalog();
  });
  renderCatalog();
}

// ── PRODUCT DETAIL ──────────────────────
let detailQty = 12;
function changeQty(d) {
  detailQty = Math.max(1, detailQty + d);
  const el = document.getElementById('detailQty');
  if (el) el.textContent = detailQty;
}
function selectSize(btn) {
  document.querySelectorAll('.sz-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function renderDetail() {
  const el = document.getElementById('productDetail');
  if (!el) return;
  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get('id'));
  const p = PRODUCTS.find(p => p.id === id);
  if (!p) { el.innerHTML = '<p style="padding:80px;text-align:center;color:var(--mist)">Product not found.</p>'; return; }
  document.title = `${p.name} — WorldKidsFashion`;

  const priceSection = user
    ? `<div class="di-price">$${p.price.toFixed(2)}</div><div class="di-price-note">Per piece · ${p.moq} · No VAT (export)</div>`
    : `<div class="di-price-lock">🔒 Register to see wholesale price</div><div class="di-price-note">Free registration · Instant access</div>`;

  const actionSection = user
    ? `<div class="di-actions">
         <button class="btn-primary" onclick="addToCart(${p.id}, detailQty)" style="flex:1;justify-content:center;padding:15px;font-size:15px">🛒 Add to Cart</button>
         <button class="di-wish" data-wish="${p.id}" onclick="toggleWish(${p.id})">${wishlist.includes(p.id)?'❤️':'🤍'}</button>
       </div>`
    : `<a href="register.html" class="btn-primary" style="display:flex;width:100%;justify-content:center;padding:15px;font-size:15px">Register to Order →</a>`;

  el.innerHTML = `
    <div class="detail-layout">
      <div>
        <div class="detail-main-img ${p.bg}">${p.emoji}</div>
        <div class="detail-thumbs">
          ${[p.emoji,'📦','🏷️','✅'].map((e,i)=>`<div class="detail-thumb ${p.bg}${i===0?' active':''}">${e}</div>`).join('')}
        </div>
      </div>
      <div>
        <div class="di-brand">${p.brand}</div>
        <div class="di-name">${p.name}</div>
        <div class="di-sku">SKU: WKF-${String(p.id).padStart(4,'0')} &nbsp;·&nbsp; ${p.badge ? BADGE_LABELS[p.badge] : 'In Stock'}</div>
        ${priceSection}
        <div class="di-meta">
          ${[['Category', p.cat], ['Brand', p.brand], ['Colors', p.colors.join(', ')], ['Made in', 'Turkey 🇹🇷'], ['Min. Order', p.moq], ['Shipping', '2–5 days · UPS/DHL']].map(([k,v])=>`<div class="di-row"><strong>${k}</strong><span>${v}</span></div>`).join('')}
        </div>
        <div class="di-size-label">Available Sizes</div>
        <div class="sizes-row">
          ${p.sizes.map((s,i)=>`<button class="sz-btn${i===0?' active':''}" onclick="selectSize(this)">${s}</button>`).join('')}
        </div>
        <div class="qty-row">
          <span class="qty-label">Quantity:</span>
          <div class="qty-ctrl">
            <button onclick="changeQty(-1)">−</button>
            <span id="detailQty">12</span>
            <button onclick="changeQty(1)">+</button>
          </div>
        </div>
        ${actionSection}
        <div style="display:flex;flex-direction:column;gap:8px;font-size:13px;color:var(--stone)">
          <span>🚚 Free shipping on orders over $300</span>
          <span>🌿 Organic options available (GOTS)</span>
          <span>🏷️ Private label from 100 pcs</span>
          <span>↩️ Returns accepted for quality issues</span>
        </div>
      </div>
    </div>`;

  // Related
  const related = document.getElementById('relatedGrid');
  if (related) related.innerHTML = PRODUCTS.filter(x=>x.id!==id).slice(0,4).map(renderCard).join('');
}

// ── CART PAGE ────────────────────────────
function renderCart() {
  const list = document.getElementById('cartItems');
  const summary = document.getElementById('cartSummary');
  if (!list) return;
  if (!cart.length) {
    list.innerHTML = `<div style="text-align:center;padding:80px;color:var(--mist)">
      <div style="font-size:64px;margin-bottom:16px">🛒</div>
      <h3 style="font-family:'Cormorant Garamond',serif;font-size:28px;font-weight:300;margin-bottom:8px;color:var(--ink)">Your cart is empty</h3>
      <p style="margin-bottom:24px">Start by browsing our wholesale catalog</p>
      <a href="catalog.html" class="btn-primary">Browse Products</a>
    </div>`;
    if (summary) summary.innerHTML = '';
    return;
  }
  const bgs = ['pcard-img-bg1','pcard-img-bg2','pcard-img-bg3','pcard-img-bg4'];
  list.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img ${bgs[item.id%4]}">${item.emoji}</div>
      <div>
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${item.price.toFixed(2)} × ${item.qty} = <strong>$${(item.price*item.qty).toFixed(2)}</strong></div>
        <div class="cart-item-qty">
          <button onclick="updateCartQty(${item.id},-1)">−</button>
          <span>${item.qty}</span>
          <button onclick="updateCartQty(${item.id},1)">+</button>
        </div>
      </div>
      <button class="cart-remove" onclick="removeFromCart(${item.id})">✕</button>
    </div>`).join('');

  const sub = cart.reduce((s,i)=>s+i.price*i.qty,0);
  const ship = sub >= 300 ? 0 : 25;
  if (summary) summary.innerHTML = `
    <div class="cs-title">Order Summary</div>
    <div class="cs-row"><span>Subtotal</span><span>$${sub.toFixed(2)}</span></div>
    <div class="cs-row"><span>Shipping</span><span>${ship===0?'<span class="cs-free">FREE</span>':'$'+ship.toFixed(2)}</span></div>
    <div class="cs-row"><span>VAT (Export)</span><span>$0.00</span></div>
    <div class="cs-row cs-total"><span>Total</span><span>$${(sub+ship).toFixed(2)}</span></div>
    <button class="btn-primary cart-checkout" onclick="checkout()">Proceed to Checkout →</button>
    <a href="catalog.html" class="cart-continue">← Continue Shopping</a>`;
}

function checkout() {
  if (!user) { location.href = 'login.html'; return; }
  showToast('Redirecting to checkout…', 'success');
  setTimeout(() => showToast('Checkout coming soon. Contact us via WhatsApp!', 'success'), 1200);
}

// ── SEARCH ───────────────────────────────
function doSearch() {
  const q = document.getElementById('searchInput')?.value?.trim();
  if (q) location.href = `catalog.html?search=${encodeURIComponent(q)}`;
}

function liveSearch(q) {
  const dd = document.getElementById('liveResults');
  if (!dd) return;
  if (!q || q.length < 2) { dd.classList.remove('open'); return; }
  const results = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q.toLowerCase()) ||
    p.brand.toLowerCase().includes(q.toLowerCase())
  ).slice(0, 6);
  if (!results.length) { dd.classList.remove('open'); return; }
  dd.innerHTML = results.map(p => `
    <div class="sr-item" onclick="location.href='product.html?id=${p.id}'">
      <div class="sr-emoji">${p.emoji}</div>
      <div style="flex:1"><div class="sr-name">${p.name}</div><div class="sr-brand">${p.brand}</div></div>
      ${user ? `<div class="sr-price">$${p.price.toFixed(2)}</div>` : ''}
    </div>`).join('');
  dd.classList.add('open');
}

document.addEventListener('click', e => {
  if (!e.target.closest('.search-pill')) {
    document.getElementById('liveResults')?.classList.remove('open');
  }
});

// ── COUNTDOWN TIMER ──────────────────────
function initTimer() {
  const el = document.getElementById('timerDisplay');
  if (!el) return;
  let saved = localStorage.getItem('wkf_timer_end');
  if (!saved || parseInt(saved) < Date.now()) {
    const end = Date.now() + 23*3600000 + 47*60000 + 12000;
    localStorage.setItem('wkf_timer_end', end);
    saved = end;
  }
  function tick() {
    const diff = parseInt(saved) - Date.now();
    if (diff <= 0) { el.textContent = '00:00:00'; return; }
    const h = Math.floor(diff/3600000);
    const m = Math.floor((diff%3600000)/60000);
    const s = Math.floor((diff%60000)/1000);
    el.textContent = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
    setTimeout(tick, 1000);
  }
  tick();
}

// ── LIVE ORDER COUNT ─────────────────────
function initLiveCount() {
  const el = document.getElementById('liveCount');
  if (!el) return;
  let count = 230 + Math.floor(Math.random() * 40);
  el.textContent = `${count} orders placed today`;
  setInterval(() => {
    if (Math.random() < 0.4) {
      count++;
      el.textContent = `${count} orders placed today`;
    }
  }, 8000);
}

// ── SCROLL HEADER ─────────────────────────
function initScroll() {
  const hdr = document.querySelector('.site-header');
  if (!hdr) return;
  window.addEventListener('scroll', () => {
    hdr.classList.toggle('scrolled', window.scrollY > 30);
  }, { passive:true });
}

// ── AUTH ──────────────────────────────────
function handleLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail')?.value;
  const pass  = document.getElementById('loginPass')?.value;
  if (!email || !pass) { showToast('Please fill all fields', 'error'); return; }
  saveUser({ email, name: email.split('@')[0], joined: new Date().getFullYear() });
  showToast('Welcome back!', 'success');
  const redirect = new URLSearchParams(location.search).get('redirect');
  setTimeout(() => location.href = redirect || 'account.html', 700);
}

function handleRegister(e) {
  e.preventDefault();
  const email   = document.getElementById('regEmail')?.value;
  const name    = document.getElementById('regName')?.value;
  const country = document.getElementById('regCountry')?.value;
  if (!email || !name || !country) { showToast('Please fill all required fields', 'error'); return; }
  saveUser({ email, name, country, joined: new Date().getFullYear() });
  showToast('Welcome to WKF Wholesale! Prices are now visible.', 'success');
  setTimeout(() => location.href = 'account.html', 900);
}

function handleLogout() {
  localStorage.removeItem('wkf_user');
  user = null;
  showToast('You have been logged out.', 'success');
  setTimeout(() => location.href = 'index.html', 700);
}

// ── ACCOUNT PAGE ────────────────────────
function renderAccount() {
  if (!document.getElementById('accountName')) return;
  if (!user) { location.href = 'login.html'; return; }
  const el = document.getElementById('accountName');
  const em = document.getElementById('accountEmail');
  if (el) el.textContent = user.name || 'Reseller';
  if (em) em.textContent = user.email || '';
}

function showAccSection(id, link) {
  document.querySelectorAll('.acc-panel').forEach(p => p.style.display = 'none');
  document.querySelectorAll('.acc-link').forEach(l => l.classList.remove('active'));
  const panel = document.getElementById('acc-' + id);
  if (panel) panel.style.display = 'block';
  if (link) link.classList.add('active');
}

// ── NEWSLETTER ──────────────────────────
function subscribeNL(e) {
  e.preventDefault();
  showToast('✓ Subscribed! Welcome to WKF.', 'success');
  e.target.reset();
}

// ── INIT ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  updateCartBadge();
  initScroll();
  initTimer();
  initLiveCount();
  renderHomeGrid();
  renderCart();
  renderDetail();
  renderAccount();
  initCatalog();

  // Key events
  document.getElementById('searchInput')?.addEventListener('keydown', e => {
    if (e.key === 'Enter') doSearch();
  });
  document.getElementById('searchInput')?.addEventListener('input', e => {
    liveSearch(e.target.value);
  });

  // Auth forms
  document.getElementById('loginForm')?.addEventListener('submit', handleLogin);
  document.getElementById('registerForm')?.addEventListener('submit', handleRegister);
  document.getElementById('logoutBtn')?.addEventListener('click', handleLogout);

  // Newsletter
  document.querySelector('.nl-form')?.addEventListener('submit', subscribeNL);

  // Account sections default
  const firstAccLink = document.querySelector('.acc-link');
  if (firstAccLink) firstAccLink.classList.add('active');
  const firstPanel = document.querySelector('.acc-panel');
  if (firstPanel) firstPanel.style.display = 'block';
});
