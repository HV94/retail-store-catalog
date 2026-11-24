/**
 * ==============================================================================
 * PROGETTO: Punto Vendita & Cassa POS - Megastore Retail
 * CANDIDATO: Valentyn Haidukov (Perito Informatico - Help Desk L1 & Supporto IT)
 * CARATTERISTICHE:
 * - Catalogo referenze suddiviso per reparti merceologici
 * - Ricerca in tempo reale per nome, marca o codice EAN
 * - Carrello cassa con gestione quantità (+ / -), subtotale, IVA 22% e sconto
 * - Scontrino fiscale di vendita con stampa diretta (window.print)
 * ==============================================================================
 */

// ------------------------------------------------------------------------------
// 1. DATASET REFERENZE CATALOGO (20 prodotti suddivisi nei 4 reparti megastore)
// ------------------------------------------------------------------------------
const CATALOGO_PRODOTTI = [
  // Reparto: Calzature & Scarpe
  {
    id: 1,
    nome: "Nike Air Max SC Running",
    categoria: "calzature",
    repartoNome: "Calzature & Scarpe",
    marca: "Nike",
    prezzo: 69.90,
    pezzi: 18,
    ean: "8884072314561",
    corsia: "Corsia B1",
    taglie: "40, 41, 42, 43, 44, 45",
    descrizione: "Scarpa running classica ammortizzata ad aria, tomaia in pelle e mesh traspirante.",
    icona: "👟",
    immagine: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    nome: "Geox Uomo Carnaby Stringata",
    categoria: "calzature",
    repartoNome: "Calzature & Scarpe",
    marca: "Geox",
    prezzo: 99.90,
    pezzi: 12,
    ean: "8056274092113",
    corsia: "Corsia B2",
    taglie: "41, 42, 43, 44",
    descrizione: "Scarpa elegante da ufficio con brevetto traspirante impermeabile Geox.",
    icona: "👞",
    immagine: 'https://images.unsplash.com/photo-1533867617858-e7b97e060509?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    nome: "Adidas Originals Stan Smith",
    categoria: "calzature",
    repartoNome: "Calzature & Scarpe",
    marca: "Adidas",
    prezzo: 75.00,
    pezzi: 25,
    ean: "4061615112233",
    corsia: "Corsia B1",
    taglie: "39, 40, 41, 42, 43",
    descrizione: "Sneaker iconica in pelle bianca con dettagli verdi sul tallone.",
    icona: "👟",
    immagine: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    nome: "Puma Smash v2 Sneaker",
    categoria: "calzature",
    repartoNome: "Calzature & Scarpe",
    marca: "Puma",
    prezzo: 45.00,
    pezzi: 30,
    ean: "4059506223344",
    corsia: "Corsia B1",
    taglie: "38, 39, 40, 41, 42",
    descrizione: "Sneaker casual scamosciata a profilo basso, suola in gomma ad alta aderenza.",
    icona: "👟",
    immagine: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    nome: "Asics Gel-Nimbus 25",
    categoria: "calzature",
    repartoNome: "Calzature & Scarpe",
    marca: "Asics",
    prezzo: 129.90,
    pezzi: 10,
    ean: "4550455667788",
    corsia: "Corsia B3",
    taglie: "41, 42, 43, 44, 45",
    descrizione: "Calzatura tecnica da maratona e lunghi percorsi con tecnologia PureGEL.",
    icona: "🏃",
    immagine: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80'
  },

  // Reparto: Moda & Valigeria
  {
    id: 6,
    nome: "Levi's 501 Original Straight",
    categoria: "abbigliamento",
    repartoNome: "Moda & Valigeria",
    marca: "Levi's",
    prezzo: 89.00,
    pezzi: 22,
    ean: "5400538990112",
    corsia: "Corsia C1",
    taglie: "30, 32, 34, 36",
    descrizione: "Jeans taglio dritto iconico in denim 100% cotone resistente, lavaggio medio.",
    icona: "👖",
    immagine: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 7,
    nome: "Champion Felpa con Cappuccio",
    categoria: "abbigliamento",
    repartoNome: "Moda & Valigeria",
    marca: "Champion",
    prezzo: 49.90,
    pezzi: 15,
    ean: "8057283991201",
    corsia: "Corsia C2",
    taglie: "S, M, L, XL",
    descrizione: "Felpa sportiva in cotone garzato con tasca a marsupio e logo ricamato.",
    icona: "👕",
    immagine: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 8,
    nome: "K-Way Giacca Antipioggia Le Vrai",
    categoria: "abbigliamento",
    repartoNome: "Moda & Valigeria",
    marca: "K-Way",
    prezzo: 95.00,
    pezzi: 14,
    ean: "8033284001923",
    corsia: "Corsia C3",
    taglie: "S, M, L, XL",
    descrizione: "Giacca a vento tascabile impermeabile e traspirante con cappuccio.",
    icona: "🧥",
    immagine: 'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 9,
    nome: "Tommy Hilfiger T-Shirt Classic",
    categoria: "abbigliamento",
    repartoNome: "Moda & Valigeria",
    marca: "Tommy Hilfiger",
    prezzo: 34.90,
    pezzi: 28,
    ean: "8720113948502",
    corsia: "Corsia C1",
    taglie: "M, L, XL",
    descrizione: "Maglietta girocollo in puro cotone biologico con bandierina ricamata.",
    icona: "👕",
    immagine: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 10,
    nome: "Samsonite Trolley Spinner 55cm",
    categoria: "abbigliamento",
    repartoNome: "Moda & Valigeria",
    marca: "Samsonite",
    prezzo: 149.00,
    pezzi: 8,
    ean: "5414847981123",
    corsia: "Corsia C4",
    taglie: "Bagaglio a Mano",
    descrizione: "Valigia rigida ultraleggera 4 ruote con chiusura TSA omologata per voli.",
    icona: "🧳",
    immagine: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?auto=format&fit=crop&w=600&q=80'
  },

  // Reparto: Bellezza & Igiene
  {
    id: 11,
    nome: "Giorgio Armani Acqua di Giò 50ml",
    categoria: "profumeria",
    repartoNome: "Bellezza & Igiene",
    marca: "Armani",
    prezzo: 72.00,
    pezzi: 16,
    ean: "3360372058878",
    corsia: "Corsia D1",
    taglie: "50 ml Spray",
    descrizione: "Eau de Toilette fresca e marina con note di bergamotto e rosmarino.",
    icona: "✨",
    immagine: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 12,
    nome: "L'Oréal Men Expert Crema Viso",
    categoria: "profumeria",
    repartoNome: "Bellezza & Igiene",
    marca: "L'Oréal",
    prezzo: 9.90,
    pezzi: 35,
    ean: "3600523719001",
    corsia: "Corsia D2",
    taglie: "50 ml",
    descrizione: "Crema gel idratante anti-fatica arricchita con estratto di Guaranà e Vitamina C.",
    icona: "🧴",
    immagine: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 13,
    nome: "Oral-B Spazzolino Elettrico Pro 3",
    categoria: "profumeria",
    repartoNome: "Bellezza & Igiene",
    marca: "Oral-B",
    prezzo: 49.90,
    pezzi: 18,
    ean: "4210201309887",
    corsia: "Corsia D3",
    taglie: "Confezione Box",
    descrizione: "Spazzolino ricaricabile con testina tonda oscillante e sensore di pressione.",
    icona: "🪥",
    immagine: 'https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 14,
    nome: "Collistar Crema Corpo Rassodante",
    categoria: "profumeria",
    repartoNome: "Bellezza & Igiene",
    marca: "Collistar",
    prezzo: 32.50,
    pezzi: 14,
    ean: "8015127251102",
    corsia: "Corsia D2",
    taglie: "400 ml Maxi",
    descrizione: "Crema intensiva nutriente per il corpo con collagene e acido ialuronico.",
    icona: "✨",
    immagine: 'https://images.unsplash.com/photo-1571781926291-c477ebfd024b?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 15,
    nome: "Proraso Set Barba Vintage",
    categoria: "profumeria",
    repartoNome: "Bellezza & Igiene",
    marca: "Proraso",
    prezzo: 18.90,
    pezzi: 20,
    ean: "8004395001201",
    corsia: "Corsia D3",
    taglie: "Scatola Metallo",
    descrizione: "Kit tradizionale da rasatura: crema pre-barba, sapone da barba e dopobarba.",
    icona: "💈",
    immagine: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?auto=format&fit=crop&w=600&q=80'
  },

  // Reparto: Bucato & Cura Casa
  {
    id: 16,
    nome: "Dash Pods Lavatrice 40 Lavaggi",
    categoria: "casa",
    repartoNome: "Bucato & Cura Casa",
    marca: "Dash",
    prezzo: 12.99,
    pezzi: 40,
    ean: "8001090881234",
    corsia: "Corsia E1",
    taglie: "40 capsule",
    descrizione: "Ecodosi predosate salva-spazio per igiene profonda e smacchiatura a freddo.",
    icona: "🧼",
    immagine: 'https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 17,
    nome: "Felce Azzurra Ammorbidente 2L",
    categoria: "casa",
    repartoNome: "Bucato & Cura Casa",
    marca: "Felce Azzurra",
    prezzo: 3.49,
    pezzi: 50,
    ean: "8001280019283",
    corsia: "Corsia E1",
    taglie: "2 Litri",
    descrizione: "Ammorbidente concentrato classico con profumazione persistente.",
    icona: "🌸",
    immagine: 'https://images.unsplash.com/photo-1583947581924-860bda6a26df?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 18,
    nome: "Swiffer Duster Kit Catturapolvere",
    categoria: "casa",
    repartoNome: "Bucato & Cura Casa",
    marca: "Swiffer",
    prezzo: 5.90,
    pezzi: 32,
    ean: "8001090123987",
    corsia: "Corsia E2",
    taglie: "1 Manico + 4 Piumini",
    descrizione: "Piumino con fibre elettrostatiche per intrappolare polvere e peli.",
    icona: "🧹",
    immagine: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 19,
    nome: "Chanteclair Sgrassatore Universale",
    categoria: "casa",
    repartoNome: "Bucato & Cura Casa",
    marca: "Chanteclair",
    prezzo: 2.49,
    pezzi: 60,
    ean: "8015194510012",
    corsia: "Corsia E2",
    taglie: "Spray 625 ml",
    descrizione: "Detergente concentrato al profumo di marsiglia per cucina, piani e tessuti.",
    icona: "🧽",
    immagine: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 20,
    nome: "Finish Quantum Pastiglie 54pz",
    categoria: "casa",
    repartoNome: "Bucato & Cura Casa",
    marca: "Finish",
    prezzo: 11.90,
    pezzi: 26,
    ean: "8002910049211",
    corsia: "Corsia E3",
    taglie: "54 Tabs",
    descrizione: "Pastiglie lavastoviglie con azione sgrassante e brillantante senza prelavaggio.",
    icona: "🍽️",
    immagine: 'https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80'
  }
];

// ------------------------------------------------------------------------------
// 2. STATO DELL'APPLICAZIONE (Carrello, Filtri e Carta Fedeltà)
// ------------------------------------------------------------------------------
let carrello = [];
let filtroCategoria = 'all';
let filtroRicerca = '';
let haCartaFedelta = false;
let metodoPagamento = 'cash'; // 'cash' oppure 'pos'

// ------------------------------------------------------------------------------
// 3. INIZIALIZZAZIONE & EVENT LISTENERS
// ------------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  renderCatalogo();
  aggiornaStatistiche();
  setupEventListeners();
});

function setupEventListeners() {
  // Ricerca testuale
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      filtroRicerca = e.target.value.trim().toLowerCase();
      renderCatalogo();
    });
  }

  // Pulsanti filtro categorie
  const catPills = document.querySelectorAll('.cat-pill');
  catPills.forEach(btn => {
    btn.addEventListener('click', () => {
      catPills.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filtroCategoria = btn.getAttribute('data-category');
      renderCatalogo();
    });
  });

  // Tasto reset filtri
  const resetBtn = document.getElementById('btn-reset-filters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      filtroCategoria = 'all';
      filtroRicerca = '';
      if (searchInput) searchInput.value = '';
      catPills.forEach(b => b.classList.remove('active'));
      const allPill = document.querySelector('.cat-pill[data-category="all"]');
      if (allPill) allPill.classList.add('active');
      renderCatalogo();
    });
  }

  // Apertura e chiusura cassetto Cassa
  const openCartBtn = document.getElementById('btn-open-cart');
  const closeCartBtn = document.getElementById('drawer-close-btn');
  const cartOverlay = document.getElementById('cart-drawer-overlay');

  if (openCartBtn) openCartBtn.addEventListener('click', apriCarrello);
  if (closeCartBtn) closeCartBtn.addEventListener('click', chiudiCarrello);
  if (cartOverlay) cartOverlay.addEventListener('click', chiudiCarrello);

  // Toggle Carta Fedeltà
  const fidelityToggle = document.getElementById('fidelity-card-toggle');
  if (fidelityToggle) {
    fidelityToggle.addEventListener('change', (e) => {
      haCartaFedelta = e.target.checked;
      aggiornaTotaliCarrello();
    });
  }

  // Svuota carrello
  const clearCartBtn = document.getElementById('btn-clear-cart');
  if (clearCartBtn) {
    clearCartBtn.addEventListener('click', svuotaCarrello);
  }

  // Selezione Metodo di Pagamento
  const payMethodCash = document.getElementById('payMethodCash');
  const payMethodPos = document.getElementById('payMethodPos');
  const cashBox = document.getElementById('cashPaymentBox');
  const posBox = document.getElementById('posPaymentBox');

  if (payMethodCash && payMethodPos) {
    payMethodCash.addEventListener('click', () => {
      metodoPagamento = 'cash';
      payMethodCash.classList.add('active');
      payMethodPos.classList.remove('active');
      if (cashBox) cashBox.classList.remove('hidden');
      if (posBox) posBox.classList.add('hidden');
    });

    payMethodPos.addEventListener('click', () => {
      metodoPagamento = 'pos';
      payMethodPos.classList.add('active');
      payMethodCash.classList.remove('active');
      if (cashBox) cashBox.classList.add('hidden');
      if (posBox) posBox.classList.remove('hidden');
    });
  }

  // Calcolo Resto Contanti
  const cashInput = document.getElementById('cashReceivedInput');
  if (cashInput) {
    cashInput.addEventListener('input', calcolaResto);
  }

  // Pulsanti importi rapidi contanti
  const quickBtns = document.querySelectorAll('.btn-cash-quick');
  quickBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.id === 'cashExactBtn') {
        const totale = calcolaTotaleComplessivo();
        if (cashInput) cashInput.value = totale.toFixed(2);
      } else {
        const amt = parseFloat(btn.getAttribute('data-amount') || '0');
        if (cashInput) {
          const cur = parseFloat(cashInput.value) || 0;
          cashInput.value = (cur + amt).toFixed(2);
        }
      }
      calcolaResto();
    });
  });

  // Tasto Completa Vendita & Stampa Scontrino
  const checkoutBtn = document.getElementById('checkoutBtn');
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', completaVendita);
  }

  // Tasti chiusura e stampa modale scontrino
  const closeReceiptBtn = document.getElementById('closeReceiptBtn');
  const receiptOverlay = document.getElementById('receiptOverlay');
  const printReceiptBtn = document.getElementById('printReceiptBtn');

  if (closeReceiptBtn) closeReceiptBtn.addEventListener('click', chiudiScontrino);
  if (receiptOverlay) receiptOverlay.addEventListener('click', chiudiScontrino);
  if (printReceiptBtn) {
    printReceiptBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Tasto Scarica PDF (chiama la stampa di sistema con salva in PDF)
  const downloadPdfBtn = document.getElementById('downloadPdfReceiptBtn');
  if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener('click', () => {
      window.print();
    });
  }
}

// ------------------------------------------------------------------------------
// 4. RENDERING CATALOGO PRODOTTI
// ------------------------------------------------------------------------------
function renderCatalogo() {
  const container = document.getElementById('products-grid');
  const countSpan = document.getElementById('filtered-count');
  if (!container) return;

  // Filtraggio prodotti per categoria e per testo di ricerca
  const filtrati = CATALOGO_PRODOTTI.filter(p => {
    const matchCat = (filtroCategoria === 'all' || p.categoria === filtroCategoria);
    const matchRicerca = !filtroRicerca || 
      p.nome.toLowerCase().includes(filtroRicerca) ||
      p.marca.toLowerCase().includes(filtroRicerca) ||
      p.ean.includes(filtroRicerca);
    return matchCat && matchRicerca;
  });

  if (countSpan) countSpan.textContent = filtrati.length;

  if (filtrati.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1rem; color: #94a3b8;">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🔍</div>
        <p style="font-size: 1rem; font-weight: 600;">Nessun articolo trovato con i filtri attuali.</p>
        <p style="font-size: 0.85rem; margin-top: 0.25rem;">Prova a cercare un altro termine o reimposta la categoria.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtrati.map(p => `
    <article class="product-card" data-id="${p.id}">
      <div class="product-image-container" style="position: relative; width: 100%; height: 140px; border-radius: 10px; overflow: hidden; background: #0f172a;">
        <img src="${p.immagine}" alt="${p.nome}" loading="lazy" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div style="display: none; width: 100%; height: 100%; align-items: center; justify-content: center; font-size: 2.8rem; background: rgba(15, 23, 42, 0.6);">${p.icona}</div>
        <span style="position: absolute; top: 8px; right: 8px; background: rgba(15, 23, 42, 0.82); backdrop-filter: blur(4px); padding: 3px 8px; border-radius: 6px; font-size: 0.72rem; font-weight: 700; color: #38bdf8; border: 1px solid rgba(56, 189, 248, 0.3);">${p.icona} ${p.marca}</span>
      </div>
      <div class="product-info" style="display: flex; flex-direction: column; gap: 0.25rem;">
        <span class="card-brand" style="font-size: 0.75rem; color: #38bdf8; font-weight: 600; text-transform: uppercase;">${p.marca} &bull; ${p.corsia}</span>
        <h3 style="font-size: 0.95rem; font-weight: 700; color: #f8fafc; line-height: 1.3;">${p.nome}</h3>
        <div class="product-pricing" style="display: flex; align-items: baseline; gap: 0.5rem; margin: 0.25rem 0;">
          <span class="product-price" style="font-size: 1.15rem; font-weight: 800; color: #34d399;">€ ${p.prezzo.toFixed(2).replace('.', ',')}</span>
          <span class="product-stock" style="font-size: 0.75rem; color: #94a3b8;">Disp: ${p.pezzi} pz</span>
        </div>
      </div>
      <div class="card-actions" style="margin-top: auto;">
        <button class="btn btn-primary btn-block btn-add-cart" onclick="aggiungiAlCarrello(${p.id})">
          🛒 Aggiungi in Cassa
        </button>
      </div>
    </article>
  `).join('');
}

// ------------------------------------------------------------------------------
// 5. GESTIONE CARRELLO / CASSA TOUCH
// ------------------------------------------------------------------------------
function aggiungiAlCarrello(id) {
  const prodotto = CATALOGO_PRODOTTI.find(p => p.id === id);
  if (!prodotto) return;

  const elementoEsistente = carrello.find(item => item.id === id);
  if (elementoEsistente) {
    elementoEsistente.quantita += 1;
  } else {
    carrello.push({
      id: prodotto.id,
      nome: prodotto.nome,
      marca: prodotto.marca,
      prezzo: prodotto.prezzo,
      ean: prodotto.ean,
      quantita: 1
    });
  }

  aggiornaCarrelloUI();
  apriCarrello();
}

function modificaQuantita(id, delta) {
  const elemento = carrello.find(item => item.id === id);
  if (!elemento) return;

  elemento.quantita += delta;
  if (elemento.quantita <= 0) {
    carrello = carrello.filter(item => item.id !== id);
  }

  aggiornaCarrelloUI();
}

function rimuoviDalCarrello(id) {
  carrello = carrello.filter(item => item.id !== id);
  aggiornaCarrelloUI();
}

function svuotaCarrello() {
  if (carrello.length === 0) return;
  carrello = [];
  aggiornaCarrelloUI();
}

function aggiornaCarrelloUI() {
  const badge = document.getElementById('cart-badge');
  const container = document.getElementById('cart-items-container');

  // Calcolo totale pezzi nel carrello
  const totalePezzi = carrello.reduce((acc, item) => acc + item.quantita, 0);
  if (badge) badge.textContent = totalePezzi;

  if (!container) return;

  if (carrello.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 3rem 1rem; color: #94a3b8;">
        <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">🛒</div>
        <p style="font-size: 0.95rem; font-weight: 600;">Cassa vuota</p>
        <p style="font-size: 0.8rem; margin-top: 0.25rem;">Aggiungi articoli dal catalogo per iniziare la vendita.</p>
      </div>
    `;
  } else {
    container.innerHTML = carrello.map(item => `
      <div class="cart-item" style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 0; border-bottom: 1px solid rgba(255,255,255,0.08); gap: 0.5rem;">
        <div style="flex: 1; min-width: 0;">
          <div style="font-size: 0.88rem; font-weight: 600; color: #f8fafc; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.nome}</div>
          <div style="font-size: 0.78rem; color: #94a3b8;">€ ${item.prezzo.toFixed(2).replace('.', ',')} cad.</div>
        </div>
        <div style="display: flex; align-items: center; gap: 0.4rem;">
          <button class="qty-btn" onclick="modificaQuantita(${item.id}, -1)" style="width: 28px; height: 28px; border-radius: 6px; background: rgba(255,255,255,0.1); color: #fff; border: none; font-size: 1rem; cursor: pointer;">-</button>
          <span style="font-weight: 700; font-size: 0.9rem; min-width: 20px; text-align: center;">${item.quantita}</span>
          <button class="qty-btn" onclick="modificaQuantita(${item.id}, 1)" style="width: 28px; height: 28px; border-radius: 6px; background: rgba(255,255,255,0.1); color: #fff; border: none; font-size: 1rem; cursor: pointer;">+</button>
          <button onclick="rimuoviDalCarrello(${item.id})" title="Rimuovi" style="background: none; border: none; color: #f87171; font-size: 1.1rem; cursor: pointer; padding: 0 4px;">&times;</button>
        </div>
      </div>
    `).join('');
  }

  aggiornaTotaliCarrello();
}

function calcolaTotaleComplessivo() {
  const lordo = carrello.reduce((acc, item) => acc + (item.prezzo * item.quantita), 0);
  const sconto = haCartaFedelta ? (lordo * 0.10) : 0;
  return Math.max(0, lordo - sconto);
}

function aggiornaTotaliCarrello() {
  const lordo = carrello.reduce((acc, item) => acc + (item.prezzo * item.quantita), 0);
  const sconto = haCartaFedelta ? (lordo * 0.10) : 0;
  const totale = Math.max(0, lordo - sconto);
  const imponibile = totale / 1.22;
  const iva = totale - imponibile;

  const subtotalEl = document.getElementById('cart-subtotal');
  const discountEl = document.getElementById('cart-discount');
  const discountLine = document.getElementById('loyalty-discount-line');
  const ivaEl = document.getElementById('cart-iva');
  const totalEl = document.getElementById('cart-total');

  if (subtotalEl) subtotalEl.textContent = `€ ${imponibile.toFixed(2).replace('.', ',')}`;
  if (discountLine) discountLine.style.display = haCartaFedelta ? 'flex' : 'none';
  if (discountEl) discountEl.textContent = `- € ${sconto.toFixed(2).replace('.', ',')}`;
  if (ivaEl) ivaEl.textContent = `€ ${iva.toFixed(2).replace('.', ',')}`;
  if (totalEl) totalEl.textContent = `€ ${totale.toFixed(2).replace('.', ',')}`;

  calcolaResto();
}

function calcolaResto() {
  const cashInput = document.getElementById('cashReceivedInput');
  const changeVal = document.getElementById('changeDueValue');
  if (!cashInput || !changeVal) return;

  const totale = calcolaTotaleComplessivo();
  const ricevuto = parseFloat(cashInput.value) || 0;
  const resto = Math.max(0, ricevuto - totale);
  changeVal.textContent = `€ ${resto.toFixed(2).replace('.', ',')}`;
}

function apriCarrello() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  if (drawer) drawer.classList.add('open');
  if (overlay) overlay.classList.add('open');
}

function chiudiCarrello() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  if (drawer) drawer.classList.remove('open');
  if (overlay) overlay.classList.remove('open');
}

// ------------------------------------------------------------------------------
// 6. SCONTRINO FISCALE & COMPLETAMENTO VENDITA
// ------------------------------------------------------------------------------
function completaVendita() {
  if (carrello.length === 0) {
    alert("Attenzione: la cassa è vuota. Aggiungi almeno un articolo prima di completare la vendita.");
    return;
  }

  const totale = calcolaTotaleComplessivo();
  const lordo = carrello.reduce((acc, item) => acc + (item.prezzo * item.quantita), 0);
  const sconto = haCartaFedelta ? (lordo * 0.10) : 0;
  const imponibile = totale / 1.22;
  const iva = totale - imponibile;
  const cashInput = document.getElementById('cashReceivedInput');
  const ricevuto = metodoPagamento === 'cash' ? (parseFloat(cashInput?.value) || totale) : totale;
  const resto = Math.max(0, ricevuto - totale);

  // Popola la data e ora attuale
  const adesso = new Date();
  const dataStr = adesso.toLocaleDateString('it-IT') + ' - ' + adesso.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' });
  const docIdStr = 'DOC #RH-' + Math.floor(100000 + Math.random() * 900000);

  const receiptDateEl = document.getElementById('receiptDate');
  const receiptDocIdEl = document.getElementById('receiptDocId');
  if (receiptDateEl) receiptDateEl.textContent = dataStr;
  if (receiptDocIdEl) receiptDocIdEl.textContent = docIdStr;

  // Popola le righe articoli dello scontrino
  const itemsContainer = document.getElementById('receiptItemsContainer');
  if (itemsContainer) {
    itemsContainer.innerHTML = carrello.map(item => `
      <div style="display: flex; justify-content: space-between; font-size: 0.82rem; margin-bottom: 0.25rem;">
        <span>${item.quantita}x ${item.nome.substring(0, 22)}</span>
        <span>€ ${(item.prezzo * item.quantita).toFixed(2).replace('.', ',')}</span>
      </div>
    `).join('');
  }

  // Popola i totali scontrino
  const recSubtotal = document.getElementById('receiptSubtotalAmount');
  const recLoyaltyRow = document.getElementById('receiptLoyaltyRow');
  const recLoyaltyAmount = document.getElementById('receiptLoyaltyAmount');
  const recIva = document.getElementById('receiptIvaAmount');
  const recTotal = document.getElementById('receiptTotalAmount');
  const recPayType = document.getElementById('receiptPaymentType');
  const recCashReceived = document.getElementById('receiptCashReceived');
  const recChange = document.getElementById('receiptChangeAmount');

  if (recSubtotal) recSubtotal.textContent = `€ ${imponibile.toFixed(2).replace('.', ',')}`;
  if (recLoyaltyRow) recLoyaltyRow.style.display = haCartaFedelta ? 'flex' : 'none';
  if (recLoyaltyAmount) recLoyaltyAmount.textContent = `- € ${sconto.toFixed(2).replace('.', ',')}`;
  if (recIva) recIva.textContent = `€ ${iva.toFixed(2).replace('.', ',')}`;
  if (recTotal) recTotal.textContent = `€ ${totale.toFixed(2).replace('.', ',')}`;
  if (recPayType) recPayType.textContent = metodoPagamento === 'cash' ? 'CONTANTI' : 'CARTA / POS';
  if (recCashReceived) recCashReceived.textContent = `€ ${ricevuto.toFixed(2).replace('.', ',')}`;
  if (recChange) recChange.textContent = `€ ${resto.toFixed(2).replace('.', ',')}`;

  // Mostra modale scontrino
  chiudiCarrello();
  const receiptModal = document.getElementById('receiptModal');
  if (receiptModal) receiptModal.classList.remove('hidden');
}

function chiudiScontrino() {
  const receiptModal = document.getElementById('receiptModal');
  if (receiptModal) receiptModal.classList.add('hidden');
  // Svuota la cassa per la prossima vendita
  carrello = [];
  aggiornaCarrelloUI();
}

function aggiornaStatistiche() {
  const statTotal = document.getElementById('stat-total');
  const statInstock = document.getElementById('stat-instock');
  const statPromo = document.getElementById('stat-promo');

  if (statTotal) statTotal.textContent = CATALOGO_PRODOTTI.length;
  if (statInstock) {
    const totalePezzi = CATALOGO_PRODOTTI.reduce((acc, p) => acc + p.pezzi, 0);
    statInstock.textContent = `${totalePezzi} pz`;
  }
  if (statPromo) statPromo.textContent = "6";
}
