/**
 * RetailHub - Megastore & Gestione Reparti
 * Grande assortimento: Calzature & Moda & Reparti Igiene, Cura Persona & Cura Casa
 * Sviluppato da Valentyn Haidukov (Perito Informatico & Addetto Vendite L. 68/99)
 */

const PRODUCTS_DATA = [
  // ==========================================
  // REPARTO 1: CALZATURE & SCARPE
  // ==========================================
  {
    id: 1,
    name: "Nike Air Max SC Sneakers Running",
    brand: "Nike",
    category: "calzature",
    storeSection: "Calzature & Scarpe",
    storeType: "globo",
    modelCode: "CW4555-002",
    barcode: "8884072314561",
    shelf: "Corsia Scarpe Uomo B1 - Scaffale 4",
    sizes: "Taglie: 40, 41, 42, 43, 44, 45",
    availableSizes: ["40", "41", "42", "43", "44", "45"],
    originalPrice: 89.99,
    price: 69.99,
    stock: 14,
    isPromo: true,
    specs: ["Ammortizzazione Air Max", "Mesh traspirante", "Suola antiscivolo", "Taglie 40-45"],
    fullSpecs: {
      "Reparto Negozio": "Calzature Uomo / Sneakers Sportive",
      "Materiale Tomaia": "Mesh tecnico con inserti in pelle resistente",
      "Tecnologia Suola": "Unità Air visibile nel tallone per massimo comfort",
      "Taglie a Magazzino": "Dal 40 al 45 (disponibilità immediata)",
      "Garanzia": "Ufficiale Nike Store"
    },
    pitch: "Scarpa versatile ideale sia per il tempo libero che per stare molte ore in piedi durante il lavoro, grazie al cuscino d'aria Air Max nel tallone.",
    icon: "shoe"
  },
  {
    id: 2,
    name: "Geox Uomo Carnaby Stringata Pelle",
    brand: "Geox",
    category: "calzature",
    storeSection: "Calzature & Scarpe",
    storeType: "globo",
    modelCode: "U26D5A-C9999",
    barcode: "8056272891230",
    shelf: "Corsia Calzature Classiche A2",
    sizes: "Taglie: 41, 42, 43, 44",
    availableSizes: ["41", "42", "43", "44"],
    originalPrice: 129.90,
    price: 99.90,
    stock: 8,
    isPromo: true,
    specs: ["Vera Pelle naturale", "Suola Traspirante Geox", "Sottopiede igienico rimovibile"],
    fullSpecs: {
      "Reparto Negozio": "Calzature Classiche & Ufficio",
      "Materiale Esterno": "100% Vera Pelle pieno fiore nera",
      "Brevetto": "Membrana impermeabile e traspirante Geox Respira",
      "Taglie a Banco": "41, 42, 43, 44"
    },
    pitch: "La scarpa elegante d'eccellenza per cerimonie e lavoro formale: garantisce eleganza classica mantenendo il piede asciutto tutto il giorno.",
    icon: "shoe"
  },
  {
    id: 3,
    name: "Lumberjack River Stivaletto Nabuk",
    brand: "Lumberjack",
    category: "calzature",
    storeSection: "Calzature & Scarpe",
    storeType: "globo",
    modelCode: "SM00101-001",
    barcode: "8032415982103",
    shelf: "Corsia Outdoor & Stivali A5",
    sizes: "Taglie: 40, 41, 42, 43, 44, 45",
    availableSizes: ["40", "41", "42", "43", "44", "45"],
    originalPrice: 109.00,
    price: 79.90,
    stock: 11,
    isPromo: true,
    specs: ["Vera pelle Nabuk ingrassata", "Water Resistant", "Grip carroarmato"],
    fullSpecs: {
      "Reparto Negozio": "Stivali & Calzature Invernali",
      "Tomaia": "Nabuk trattato idrorepellente contro pioggia e fango",
      "Suola": "Gomma termoplastica a carrarmato rinforzata",
      "Numerata": "Completa dal 40 al 45"
    },
    pitch: "Stivaletto robusto per l'autunno/inverno. Protegge totalmente la caviglia e offre tenuta perfetta anche su superfici bagnate.",
    icon: "boot"
  },
  {
    id: 4,
    name: "Adidas Grand Court 2.0 Classic",
    brand: "Adidas",
    category: "calzature",
    storeSection: "Calzature & Scarpe",
    storeType: "globo",
    modelCode: "GW9251",
    barcode: "4065426189021",
    shelf: "Corsia Scarpe B2 - Scaffale 2",
    sizes: "Taglie: 38, 39, 40, 41, 42, 43",
    availableSizes: ["38", "39", "40", "41", "42", "43"],
    originalPrice: 75.00,
    price: 54.90,
    stock: 18,
    isPromo: false,
    specs: ["Design iconico 3 Strisce", "Soletta interna Cloudfoam", "Tomaia similpelle"],
    fullSpecs: {
      "Reparto Negozio": "Sneakers Tempo Libero",
      "Soletta": "Cloudfoam morbida ad assorbimento urti",
      "Manutenzione": "Pulizia facile con panno umido"
    },
    pitch: "Il modello classico più richiesto dalle famiglie per la scuola e il tempo libero. Ottimo prezzo e durata garantita.",
    icon: "shoe"
  },
  {
    id: 5,
    name: "Puma Smash v2 Sneakers Suede",
    brand: "Puma",
    category: "calzature",
    storeSection: "Calzature & Scarpe",
    storeType: "globo",
    modelCode: "365215-01",
    barcode: "4059506821340",
    shelf: "Corsia Scarpe B3 - Scaffale 1",
    sizes: "Taglie: 38, 39, 40, 41, 42, 43, 44",
    availableSizes: ["38", "39", "40", "41", "42", "43", "44"],
    originalPrice: 59.99,
    price: 44.90,
    stock: 22,
    isPromo: true,
    specs: ["Pelle scamosciata morbida", "Suola gomma vulcanizzata", "Colletto imbottito"],
    fullSpecs: {
      "Reparto": "Sneakers Low-Top",
      "Stile": "Ispirazione tennis vintage"
    },
    pitch: "Sneaker in morbida pelle scamosciata che unisce stile sportivo e comfort quotidiano.",
    icon: "shoe"
  },
  {
    id: 6,
    name: "Skechers D'Lites Memory Foam",
    brand: "Skechers",
    category: "calzature",
    storeSection: "Calzature & Scarpe",
    storeType: "globo",
    modelCode: "11977-WSL",
    barcode: "0191665421980",
    shelf: "Corsia Scarpe Donna C1",
    sizes: "Taglie: 38, 39, 40, 41",
    availableSizes: ["38", "39", "40", "41"],
    originalPrice: 79.90,
    price: 59.90,
    stock: 12,
    isPromo: true,
    specs: ["Soletta Air-Cooled Memory Foam", "Intersuola ammortizzante", "Calzata comoda"],
    fullSpecs: {
      "Reparto": "Scarpe Donna Walking & Comfort",
      "Tecnologia": "Memory Foam automodellante sulla pianta del piede"
    },
    pitch: "Consigliatissima per chi cammina tanto: la soletta in Memory Foam azzera l'affaticamento articolare.",
    icon: "shoe"
  },

  // ==========================================
  // REPARTO 2: MODA, ABBIGLIAMENTO & VALIGERIA
  // ==========================================
  {
    id: 7,
    name: "Levi's 501 Original Fit Jeans Denim",
    brand: "Levi's",
    category: "abbigliamento",
    storeSection: "Moda & Abbigliamento",
    storeType: "globo",
    modelCode: "00501-0114",
    barcode: "5415234981120",
    shelf: "Reparto Jeans Uomo Corsia M2",
    sizes: "Taglie: 30, 32, 34, 36, 38 (W/L)",
    availableSizes: [],
    originalPrice: 110.00,
    price: 84.90,
    stock: 15,
    isPromo: true,
    specs: ["100% Cotone denim pesante", "Gamba dritta classica", "Chiusura bottoni storici"],
    fullSpecs: {
      "Reparto": "Abbigliamento Casual Uomo",
      "Vestibilità": "Regular straight leg a vita media"
    },
    pitch: "Il jeans più famoso al mondo. Resistenza decennale garantita dal cotone originale Levi's.",
    icon: "shirt"
  },
  {
    id: 8,
    name: "Trolley Grande 4 Ruote 95L Scocca ABS",
    brand: "Lumberjack",
    category: "abbigliamento",
    storeSection: "Valigeria & Accessori",
    storeType: "globo",
    modelCode: "TRL-95L-BLK",
    barcode: "8033991204851",
    shelf: "Area Valigeria & Borse V1",
    sizes: "Capienza: 95 Litri (Altezza 76 cm)",
    availableSizes: [],
    originalPrice: 119.00,
    price: 79.90,
    stock: 6,
    isPromo: true,
    specs: ["Scocca rigida ABS antigraffio", "4 ruote silenziose 360°", "Lucchetto TSA integrato"],
    fullSpecs: {
      "Dimensioni": "76 x 49 x 29 cm (Peso a vuoto: 3.8 kg)",
      "Sicurezza": "Combinazione a 3 cifre approvata TSA"
    },
    pitch: "Valigia capiente per vacanze lunghe. Leggera ma resistente agli urti aeroportuali.",
    icon: "bag"
  },
  {
    id: 9,
    name: "Champion Felpa con Cappuccio Cotone",
    brand: "Champion",
    category: "abbigliamento",
    storeSection: "Moda & Abbigliamento",
    storeType: "globo",
    modelCode: "218206-BS501",
    barcode: "8059812401923",
    shelf: "Reparto Casual Corsia M3",
    sizes: "Taglie: S, M, L, XL",
    availableSizes: [],
    originalPrice: 55.00,
    price: 39.90,
    stock: 20,
    isPromo: false,
    specs: ["Cotone felpato morbido", "Tasca a marsupio frontale", "Logo ricamato"],
    fullSpecs: {
      "Composizione": "80% Cotone ring-spun, 20% Poliestere"
    },
    pitch: "Un grande classico per il comfort quotidiano e lo sport. Calda e resistente ai lavaggi.",
    icon: "shirt"
  },

  // ==========================================
  // REPARTO 3: COSMETICA, MAKE-UP & BELLEZZA
  // ==========================================
  {
    id: 10,
    name: "L'Oréal Revitalift Laser X3 Crema Viso Anti-Età",
    brand: "L'Oréal",
    category: "profumeria",
    storeSection: "Bellezza & Skincare",
    storeType: "acqua-sapone",
    modelCode: "LOR-REV-50ML",
    barcode: "3600522249122",
    shelf: "Corsia Viso & Cosmesi S1 - Scaffale 3",
    sizes: "Formato: Vasetto 50 ml",
    availableSizes: [],
    originalPrice: 22.90,
    price: 15.90,
    stock: 24,
    isPromo: true,
    specs: ["Acido Ialuronico puro", "Pro-Xylane 3%", "Azione rimpolpante antirughe"],
    fullSpecs: {
      "Reparto": "Trattamento Viso Anti-Age",
      "Efficacia Clinica": "Corregge le rughe, ridensifica la pelle e rimodella i contorni",
      "Applicazione": "Mattina e sera su viso deterso"
    },
    pitch: "La crema anti-rughe più richiesta dalle clienti in profumeria. Risultati visibili già dopo 4 settimane.",
    icon: "cosmetic"
  },
  {
    id: 11,
    name: "Maybelline Mascara Lash Sensational Sky High",
    brand: "L'Oréal",
    category: "profumeria",
    storeSection: "Make-Up & Cosmesi",
    storeType: "acqua-sapone",
    modelCode: "MAYB-SKY-HIGH-01",
    barcode: "3600531637385",
    shelf: "Espositore Make-Up & Occhi M1",
    sizes: "Formato: Flacone 7.2 ml (Colore Very Black)",
    availableSizes: [],
    originalPrice: 13.90,
    price: 9.49,
    stock: 32,
    isPromo: true,
    specs: ["Scovolino flessibile Flex Tower", "Estratto di bamboo e fibre", "Lunghezza infinita senza grumi"],
    fullSpecs: {
      "Reparto": "Trucco Occhi / Best Seller",
      "Tenuta": "Fino a 24 ore senza sbavature",
      "Oftalmologicamente testato": "Adatto per occhi sensibili e portatori di lenti a contatto"
    },
    pitch: "Il mascara virale più venduto d'Italia. Allunga ogni singola ciglia dalla radice alla punta con effetto ventaglio.",
    icon: "cosmetic"
  },
  {
    id: 12,
    name: "Garnier Acqua Micellare Tutto in 1 Pelli Sensibili",
    brand: "L'Oréal",
    category: "profumeria",
    storeSection: "Bellezza & Skincare",
    storeType: "acqua-sapone",
    modelCode: "GAR-MIC-400",
    barcode: "3600541358485",
    shelf: "Corsia Detersione Viso S1 - Scaffale 1",
    sizes: "Formato: Maxi Flacone 400 ml (200 utilizzi)",
    availableSizes: [],
    originalPrice: 5.49,
    price: 3.49,
    stock: 45,
    isPromo: true,
    specs: ["Strucca, deterge e lenisce in un solo gesto", "Senza risciacquo", "Zero profumo e parabeni"],
    fullSpecs: {
      "Reparto": "Detersione & Struccanti",
      "Tecnologia": "Micelle che catturano trucco e impurità come una calamita",
      "Pelli": "Ideale per pelli delicate e occhi sensibili"
    },
    pitch: "Il detergente struccante numero uno nei reparti igiene e cura casa. Strucca viso, occhi e labbra delicatamente senza strofinare.",
    icon: "cosmetic"
  },
  {
    id: 13,
    name: "Nivea Crema Corpo Fluida Vellutante con Karité",
    brand: "Nivea",
    category: "profumeria",
    storeSection: "Cura Corpo & Benessere",
    storeType: "acqua-sapone",
    modelCode: "NIV-CORP-500",
    barcode: "4005808816453",
    shelf: "Corsia Cura Corpo S2 - Scaffale 1",
    sizes: "Formato: Maxi Dispenser 500 ml",
    availableSizes: [],
    originalPrice: 6.99,
    price: 4.49,
    stock: 35,
    isPromo: true,
    specs: ["Idratazione Intensa 48h", "Con prezioso Burro di Karité", "Assorbimento rapido non unge"],
    fullSpecs: {
      "Flacone": "Maxi formato con erogatore a pompetta",
      "Formula": "Senza parabeni e microplastiche"
    },
    pitch: "Indispensabile dopo la doccia per tutta la famiglia. Idrata a fondo e lascia la pelle profumata e vellutata.",
    icon: "cosmetic"
  },
  {
    id: 14,
    name: "Giorgio Armani Acqua di Giò Eau de Toilette Uomo",
    brand: "Armani",
    category: "profumeria",
    storeSection: "Profumeria & Fragranze",
    storeType: "acqua-sapone",
    modelCode: "ARM-ADG-100",
    barcode: "3360372058878",
    shelf: "Vetrina Alta Profumeria P1",
    sizes: "Formato: Flacone Spray 100 ml",
    availableSizes: [],
    originalPrice: 98.00,
    price: 74.90,
    stock: 9,
    isPromo: true,
    specs: ["Fragranza iconica acquatica marina", "Note di bergamotto e cedro", "Persistenza raffinata"],
    fullSpecs: {
      "Famiglia Olfattiva": "Marina / Esperidata",
      "Note di Testa": "Bergamotto di Calabria, Mandarino, Gelsomino",
      "Note di Fondo": "Legno di Cedro, Patchouli, Muschio bianco"
    },
    pitch: "Il profumo maschile più regalato al mondo. Un classico intramontabile sinonimo di freschezza ed eleganza.",
    icon: "cosmetic"
  },
  {
    id: 15,
    name: "Lancôme La Vie Est Belle Eau de Parfum Donna",
    brand: "L'Oréal",
    category: "profumeria",
    storeSection: "Profumeria & Fragranze",
    storeType: "acqua-sapone",
    modelCode: "LAN-LVEB-50",
    barcode: "3605532612836",
    shelf: "Vetrina Alta Profumeria P2",
    sizes: "Formato: Flacone Vaporizzatore 50 ml",
    availableSizes: [],
    originalPrice: 92.00,
    price: 69.90,
    stock: 8,
    isPromo: true,
    specs: ["Note di Iris Gourmand e Vaniglia", "Flacone 'Sorriso di Cristallo'", "Persistenza intensa e sensuale"],
    fullSpecs: {
      "Famiglia Olfattiva": "Floreale Gourmand",
      "Ingredienti Nobili": "Iris Pallida, Gelsomino Sambac, Fiore d'Arancio, Patchouli"
    },
    pitch: "Il profumo femminile più desiderato. Una scia dolce e inconfondibile che dura tutta la giornata.",
    icon: "cosmetic"
  },

  // ==========================================
  // REPARTO 4: IGIENE PERSONALE & CAPELLI
  // ==========================================
  {
    id: 16,
    name: "Felce Azzurra Bagnodoccia Classico Tradizionale",
    brand: "Felce Azzurra",
    category: "profumeria",
    storeSection: "Igiene & Bagno",
    storeType: "acqua-sapone",
    modelCode: "PAG-FA-650",
    barcode: "8001280068003",
    shelf: "Corsia Bagno & Doccia S4 - Scaffale 2",
    sizes: "Formato: Ecopack 650 ml",
    availableSizes: [],
    originalPrice: 3.49,
    price: 2.19,
    stock: 50,
    isPromo: true,
    specs: ["Profumo iconico con oltre 100 essenze", "Formula cremosa vellutante", "100% Made in Italy"],
    fullSpecs: {
      "Reparto": "Igiene Quotidiana",
      "Azienda": "Paglieri dal 1876",
      "pH": "Fisiologico dermatologicamente testato"
    },
    pitch: "Il bagnodoccia più amato nelle case italiane. La sua profumazione inconfondibile dona un relax immediato.",
    icon: "soap"
  },
  {
    id: 17,
    name: "Pantene Pro-V Shampoo Rigenera & Protegge",
    brand: "Pantene",
    category: "profumeria",
    storeSection: "Cura Capelli & Shampoo",
    storeType: "acqua-sapone",
    modelCode: "PAN-RIG-400",
    barcode: "8001090154823",
    shelf: "Corsia Cura Capelli S3 - Scaffale 1",
    sizes: "Formato: Flacone 400 ml",
    availableSizes: [],
    originalPrice: 4.89,
    price: 3.29,
    stock: 38,
    isPromo: true,
    specs: ["Nutrienti attivi Pro-V con lipidi", "Ripara doppie punte e rotture", "Capelli luminosi"],
    fullSpecs: {
      "Formula": "Senza oli minerali né coloranti",
      "Capelli": "Secchi, danneggiati o trattati con tinture"
    },
    pitch: "Shampoo best seller per capelli splendenti e forti fin dal primo lavaggio.",
    icon: "soap"
  },
  {
    id: 18,
    name: "L'Oréal Elvive Maschera Capelli Total Repair 5",
    brand: "L'Oréal",
    category: "profumeria",
    storeSection: "Cura Capelli & Shampoo",
    storeType: "acqua-sapone",
    modelCode: "LOR-ELV-MAS-300",
    barcode: "3600521711200",
    shelf: "Corsia Cura Capelli S3 - Scaffale 3",
    sizes: "Formato: Vasetto 300 ml",
    availableSizes: [],
    originalPrice: 6.50,
    price: 4.79,
    stock: 25,
    isPromo: true,
    specs: ["Arricchita con Ceramide e Calendula", "Ripara i 5 segni del capello danneggiato", "Posa rapida 2-3 min"],
    fullSpecs: {
      "Azione": "Ristruttura la fibra capillare in profondità donando morbidezza estrema"
    },
    pitch: "Trattamento intensivo settimanale consigliato per chi ha capelli sfibrati dal phon e dal calore.",
    icon: "cosmetic"
  },
  {
    id: 19,
    name: "Intima Roberts Detergente Intimo con Camomilla",
    brand: "Nivea",
    category: "profumeria",
    storeSection: "Igiene & Cura Persona",
    storeType: "acqua-sapone",
    modelCode: "ROB-INT-CAM-250",
    barcode: "8002410008541",
    shelf: "Corsia Igiene Intima S5 - Scaffale 2",
    sizes: "Formato: Flacone con dispenser 250 ml",
    availableSizes: [],
    originalPrice: 3.69,
    price: 2.29,
    stock: 40,
    isPromo: true,
    specs: ["Estratti 100% naturali di Camomilla", "Azione addolcente e rinfrescante", "pH neutro 5.5"],
    fullSpecs: {
      "Dermatologicamente e ginecologicamente testato": "Senza sapone né parabeni",
      "Ideale per": "Uso quotidiano per pelli sensibili"
    },
    pitch: "Il detergente intimo più consigliato per la sua delicatezza lenitiva che previene rossori e fastidi.",
    icon: "soap"
  },
  {
    id: 20,
    name: "Borotalco Deodorante Spray Original 48h",
    brand: "Felce Azzurra",
    category: "profumeria",
    storeSection: "Deodoranti & Igiene",
    storeType: "acqua-sapone",
    modelCode: "BORO-SPR-150",
    barcode: "8002410041203",
    shelf: "Corsia Deodoranti S6 - Scaffale 1",
    sizes: "Formato: Spray 150 ml",
    availableSizes: [],
    originalPrice: 3.89,
    price: 2.49,
    stock: 35,
    isPromo: true,
    specs: ["Con Microtalco assorbente", "Efficacia asciutta 48 ore", "Senza alcool"],
    fullSpecs: {
      "Fragranza": "Il profumo originale e inconfondibile di Borotalco dal 1904"
    },
    pitch: "Il deodorante preferito dagli italiani. Asciutto impeccabile sotto le ascelle per due giorni interi.",
    icon: "spray"
  },
  {
    id: 21,
    name: "Oral-B Dentifricio Pro-Expert Protezione Totale",
    brand: "Dash",
    category: "profumeria",
    storeSection: "Igiene Orale & Denti",
    storeType: "acqua-sapone",
    modelCode: "ORALB-PRO-75",
    barcode: "8001090621345",
    shelf: "Corsia Igiene Orale S7 - Scaffale 2",
    sizes: "Formato: Tubo 75 ml",
    availableSizes: [],
    originalPrice: 3.99,
    price: 2.59,
    stock: 45,
    isPromo: true,
    specs: ["Complesso di fluoruro stannoso", "Protegge da placca, carie e tartaro", "Sbianca delicatamente"],
    fullSpecs: {
      "Approvazione": "Sviluppato in collaborazione con i dentisti dell'ANDI"
    },
    pitch: "Protezione completa a 360 gradi per denti forti, gengive sane e alito fresco tutto il giorno.",
    icon: "clean"
  },
  {
    id: 22,
    name: "Gillette Fusion5 Rasoio Uomo + 4 Lamette",
    brand: "Gillette",
    category: "profumeria",
    storeSection: "Rasatura & Barba",
    storeType: "acqua-sapone",
    modelCode: "GIL-FUS5-KIT",
    barcode: "7702018874521",
    shelf: "Vetrina Rasatura Uomo S8",
    sizes: "Confezione: 1 Manico ergonomico + 4 Testine ricambio",
    availableSizes: [],
    originalPrice: 16.90,
    price: 11.90,
    stock: 20,
    isPromo: true,
    specs: ["5 lame anti-attrito", "Lama di precisione sul retro per rifinire", "Striscia lubrificante Lubrastrip"],
    fullSpecs: {
      "Durata": "Ogni testina garantisce fino a 20 rasature confortevoli senza irritazioni"
    },
    pitch: "La migliore rasatura maschile per scorrere dolcemente sulla pelle senza tagli né irritazioni.",
    icon: "cosmetic"
  },

  // ==========================================
  // REPARTO 5: IGIENE & CURA CASA, BUCATO
  // ==========================================
  {
    id: 23,
    name: "Dash Power Pods Detersivo Lavatrice Allin1",
    brand: "Dash",
    category: "casa",
    storeSection: "Bucato & Lavatrice",
    storeType: "acqua-sapone",
    modelCode: "DASH-PODS-44",
    barcode: "8006540891201",
    shelf: "Corsia Bucato D1 - Pallet Frontale",
    sizes: "Confezione: 44 Capsule Salva-Colore",
    availableSizes: [],
    originalPrice: 17.90,
    price: 11.99,
    stock: 28,
    isPromo: true,
    specs: ["Azione smacchiante a freddo (20°C)", "Scatola Ecoclic in cartone", "Protezione fibre"],
    fullSpecs: {
      "Reparto": "Detersivi Lavatrice & Bucato",
      "Formato": "44 Pods predosate anti-spreco con triplo scomparto attivo",
      "Sicurezza": "Chiusura salvabambini Ecoclic"
    },
    pitch: "Offerta volantino top nei reparti igiene e cura casa. Rimuove le macchie ostinate al primo lavaggio risparmiando elettricità.",
    icon: "clean"
  },
  {
    id: 24,
    name: "Dash Detersivo Liquido Salva Colore 54 Lavaggi",
    brand: "Dash",
    category: "casa",
    storeSection: "Bucato & Lavatrice",
    storeType: "acqua-sapone",
    modelCode: "DASH-LIQ-COLOR-54",
    barcode: "8006540112458",
    shelf: "Corsia Bucato D1 - Scaffale 1",
    sizes: "Formato: Flacone Maxi 2.43 Litri (54 Lavaggi)",
    availableSizes: [],
    originalPrice: 14.50,
    price: 9.99,
    stock: 35,
    isPromo: true,
    specs: ["Liquido concentrato salva-colore", "Azione pulente anche a 20°C", "Profumo alpino intenso"],
    fullSpecs: {
      "Utilizzo": "Dosaggio direttamente nel cestello per capi luminosi e profumati"
    },
    pitch: "Grande formato convenienza per famiglie. Ottimo rapporto qualità/prezzo per capi scuri e colorati.",
    icon: "clean"
  },
  {
    id: 25,
    name: "Chanteclair Sgrassatore Universale Marsiglia Spray",
    brand: "Chanteclair",
    category: "casa",
    storeSection: "Pulizia & Igiene Casa",
    storeType: "acqua-sapone",
    modelCode: "CHT-SGR-750",
    barcode: "8015194514586",
    shelf: "Corsia Pulizia Superfici D3 - Scaffale 1",
    sizes: "Formato: Trigger Spray 750 ml",
    availableSizes: [],
    originalPrice: 3.20,
    price: 1.99,
    stock: 60,
    isPromo: true,
    specs: ["Profumo di Marsiglia originale", "Scioglie il grasso minerale e vegetale", "Superpotente"],
    fullSpecs: {
      "Utilizzi": "Forni, cappe, piani cottura, affettatrici, cerchioni auto e colletti di camicie",
      "Erogatore": "Spruzzatore doppia funzione getto schiuma/nebulizzato"
    },
    pitch: "Il re indiscusso dei detergenti multiuso in Italia. Pulisce e sgrassa qualsiasi superficie della casa in pochi secondi.",
    icon: "spray"
  },
  {
    id: 26,
    name: "Chanteclair Ecoricarica Sgrassatore Marsiglia 1500ml",
    brand: "Chanteclair",
    category: "casa",
    storeSection: "Pulizia & Igiene Casa",
    storeType: "acqua-sapone",
    modelCode: "CHT-RIC-1500",
    barcode: "8015194515125",
    shelf: "Corsia Pulizia Superfici D3 - Scaffale 2",
    sizes: "Formato: Busta Ecoricarica 1.5 Litri (2 Flaconi)",
    availableSizes: [],
    originalPrice: 4.80,
    price: 3.19,
    stock: 40,
    isPromo: true,
    specs: ["Risparmio 70% di plastica", "Formato convenienza 1500 ml", "Stessa formula leggendaria"],
    fullSpecs: {
      "Sostenibilità": "Busta salva-ambiente richiudibile con tappo di sicurezza"
    },
    pitch: "La ricarica più venduta: ricarica due volte il flacone spray risparmiando sul prezzo e riducendo la plastica.",
    icon: "spray"
  },
  {
    id: 27,
    name: "Felce Azzurra Ammorbidente Concentrato Lavanda",
    brand: "Felce Azzurra",
    category: "casa",
    storeSection: "Bucato & Lavatrice",
    storeType: "acqua-sapone",
    modelCode: "FA-AMM-LAV-1025",
    barcode: "8001280031120",
    shelf: "Corsia Bucato D2 - Scaffale 3",
    sizes: "Formato: Flacone 1025 ml (41 Lavaggi)",
    availableSizes: [],
    originalPrice: 3.99,
    price: 2.69,
    stock: 30,
    isPromo: false,
    specs: ["Perle di profumo a lento rilascio", "Fibre soffici e stiratura facilitata", "Note di lavanda e iris"],
    fullSpecs: {
      "Durata Profumo": "Fino a 10 volte più duraturo sui capi riposti nell'armadio",
      "Test clinici": "Ipoallergenico per pelli delicate"
    },
    pitch: "Dona al bucato una morbidezza irresistibile e una delicata fragranza provenzale che dura per settimane.",
    icon: "clean"
  },
  {
    id: 28,
    name: "Fairy Platinum Plus Pastiglie Lavastoviglie 50pz",
    brand: "Fairy",
    category: "casa",
    storeSection: "Lavastoviglie & Stoviglie",
    storeType: "acqua-sapone",
    modelCode: "FAI-PLAT-50",
    barcode: "8001841398210",
    shelf: "Corsia Lavastoviglie D4 - Scaffale 2",
    sizes: "Confezione: 50 Pastiglie All-in-One",
    availableSizes: [],
    originalPrice: 16.90,
    price: 11.49,
    stock: 30,
    isPromo: true,
    specs: ["Scioglie il grasso ostinato anche a ciclo rapido", "Azione brillantante e anticalcare", "Pulisce il filtro"],
    fullSpecs: {
      "Efficacia": "Elimina le incrostazioni di cibo bruciato senza bisogno di prelavaggio manuale"
    },
    pitch: "La migliore pastiglia per lavastoviglie: piatti splendenti e bicchieri brillanti senza aloni fin dal primo ciclo.",
    icon: "clean"
  },
  {
    id: 29,
    name: "Lysoform Disinfettante Pavimenti Casa & Animali",
    brand: "Lysoform",
    category: "casa",
    storeSection: "Igiene Pavimenti & Casa",
    storeType: "acqua-sapone",
    modelCode: "LYS-PAV-1250",
    barcode: "8710447281923",
    shelf: "Corsia Pavimenti D5 - Pallet A2",
    sizes: "Formato: Maxi Flacone 1.25 Litri",
    availableSizes: [],
    originalPrice: 3.79,
    price: 2.49,
    stock: 45,
    isPromo: true,
    specs: ["Elimina il 99.9% di batteri e lieviti", "Presidio Medico Chirurgico", "Non lascia aloni"],
    fullSpecs: {
      "Formula": "Igienizza pavimenti e superfici dure senza bisogno di risciacquare",
      "Profumazione": "Pino fresco alpino"
    },
    pitch: "Il disinfettante pavimenti più venduto in assoluto: sicurezza igienica garantita per case con bambini e animali.",
    icon: "spray"
  },
  {
    id: 30,
    name: "Ace Candeggina Classica Igienizzante 3 Litri",
    brand: "Lysoform",
    category: "casa",
    storeSection: "Igiene Bucato & Casa",
    storeType: "acqua-sapone",
    modelCode: "ACE-CAND-3000",
    barcode: "8001480021980",
    shelf: "Corsia Bucato D1 - Scaffale Basso",
    sizes: "Formato: Fustino Maxi 3 Litri",
    availableSizes: [],
    originalPrice: 3.49,
    price: 2.19,
    stock: 50,
    isPromo: true,
    specs: ["Igiene profonda per capi bianchi e superfici", "Sistema Proteggi-Fibra", "Candeggia e smacchia"],
    fullSpecs: {
      "Utilizzi": "Igienizzazione sanitari bagno, pavimenti e candeggio capi bianchi ingialliti"
    },
    pitch: "Un must per la pulizia profonda. Rende i bianchi splendenti ed elimina germi e batteri dalle superfici di casa.",
    icon: "clean"
  },
  {
    id: 31,
    name: "Swiffer Duster Kit Catturapolvere (Manico + 5 Piumini)",
    brand: "Fairy",
    category: "casa",
    storeSection: "Pulizia & Igiene Casa",
    storeType: "acqua-sapone",
    modelCode: "SWIF-DUST-KIT",
    barcode: "8001090124982",
    shelf: "Corsia Accessori Pulizia D6 - Scaffale 1",
    sizes: "Confezione: 1 Manico telescopico + 5 Piumini elettrostatici",
    availableSizes: [],
    originalPrice: 5.90,
    price: 3.99,
    stock: 35,
    isPromo: true,
    specs: ["Cattura e blocca 3 volte più polvere rispetto a un panno", "Migliaia di fibre flessibili 3D", "Arriva ovunque"],
    fullSpecs: {
      "Superfici": "Librerie, mobili in legno, schermi TV, caloriferi e persiane"
    },
    pitch: "Lo strumento più comodo per spolverare senza sollevare la polvere nell'aria. Ideale per chi ha allergie agli acari.",
    icon: "spray"
  },
  {
    id: 32,
    name: "Amuchina Additivo Disinfettante Bucato Liquido 1L",
    brand: "Lysoform",
    category: "casa",
    storeSection: "Bucato & Lavatrice",
    storeType: "acqua-sapone",
    modelCode: "AMU-BUC-1000",
    barcode: "8000036018921",
    shelf: "Corsia Bucato D2 - Scaffale 1",
    sizes: "Formato: Flacone 1 Litro",
    availableSizes: [],
    originalPrice: 4.89,
    price: 3.49,
    stock: 32,
    isPromo: true,
    specs: ["Elimina germi e batteri già a 30°C", "Presidio Medico Chirurgico", "Adatto su capi bianchi e colorati"],
    fullSpecs: {
      "Azione": "Igienizza indumenti sportivi, intimo, lenzuola e corredini neonato eliminando i cattivi odori"
    },
    pitch: "L'additivo disinfettante numero uno per il bucato: toglie ogni traccia di sudore e batteri anche a basse temperature.",
    icon: "clean"
  }
];

// Stato dell'applicazione
let state = {
  products: [...PRODUCTS_DATA],
  filteredProducts: [...PRODUCTS_DATA],
  searchQuery: "",
  selectedCategory: "all",
  selectedSize: "all",
  selectedBrand: "all",
  sortBy: "featured",
  promoOnly: false,
  inStockOnly: false,
  fidelityDiscount: false,
  cart: []
};

// SVG Icons per i diversi tipi di prodotto
function getProductSvg(type) {
  switch (type) {
    case 'shoe':
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M2 18h20v2H2z"/><path d="M4 18v-4c0-2 2-3 5-3h4c2 0 4 1 5 3v4"/><circle cx="8" cy="14" r="1"/></svg>`;
    case 'boot':
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 4v16h16v-6c0-2-2-4-5-4h-5V4H4z"/><line x1="4" y1="9" x2="10" y2="9"/><line x1="4" y1="14" x2="10" y2="14"/></svg>`;
    case 'shirt':
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.5a2 2 0 0 0 2 1.67L6 11v9a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-9l1.14-.14a2 2 0 0 0 2-1.67l.58-3.5a2 2 0 0 0-1.34-2.23z"/></svg>`;
    case 'bag':
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="6" width="18" height="15" rx="2"/><path d="M9 6V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3"/><circle cx="7" cy="21" r="1"/><circle cx="17" cy="21" r="1"/></svg>`;
    case 'cosmetic':
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 3h12v4H6z"/><rect x="4" y="7" width="16" height="14" rx="2"/><path d="M12 11v6"/></svg>`;
    case 'soap':
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="7" y="4" width="10" height="17" rx="3"/><path d="M10 4V2h4v2"/><path d="M9 11h6"/></svg>`;
    case 'spray':
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M8 8V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4"/><path d="M6 8h12v13a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V8z"/><path d="M6 5h-2"/></svg>`;
    case 'clean':
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="4" y="6" width="16" height="15" rx="2"/><path d="M9 6V3h6v3"/><circle cx="12" cy="13" r="3"/></svg>`;
    default:
      return `<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/></svg>`;
  }
}

// Inizializzazione
document.addEventListener("DOMContentLoaded", () => {
  setupEventListeners();
  applyFilters();
  updateHeaderStats();
});

function setupEventListeners() {
  // Ricerca
  const searchInput = document.getElementById("search-input");
  searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value.toLowerCase().trim();
    applyFilters();
  });

  // Categorie
  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => {
    pill.addEventListener("click", () => {
      catPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.selectedCategory = pill.dataset.category;
      applyFilters();
    });
  });

  // Taglie Rapide Scarpe
  const sizeChips = document.querySelectorAll(".size-chip");
  sizeChips.forEach(chip => {
    chip.addEventListener("click", () => {
      sizeChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.selectedSize = chip.dataset.size;
      applyFilters();
    });
  });

  // Brand
  document.getElementById("brand-select").addEventListener("change", (e) => {
    state.selectedBrand = e.target.value;
    applyFilters();
  });

  // Ordinamento
  document.getElementById("sort-select").addEventListener("change", (e) => {
    state.sortBy = e.target.value;
    applyFilters();
  });

  // Toggles
  document.getElementById("toggle-promo-only").addEventListener("change", (e) => {
    state.promoOnly = e.target.checked;
    applyFilters();
  });

  document.getElementById("toggle-instock-only").addEventListener("change", (e) => {
    state.inStockOnly = e.target.checked;
    applyFilters();
  });

  // Carta Fedeltà
  document.getElementById("fidelity-card-toggle").addEventListener("change", (e) => {
    state.fidelityDiscount = e.target.checked;
    updateCartUI();
  });

  // Reset
  document.getElementById("btn-reset-filters").addEventListener("click", resetAllFilters);

  // Modal
  document.getElementById("modal-close-btn").addEventListener("click", closeModal);
  document.getElementById("product-modal").addEventListener("click", (e) => {
    if (e.target.id === "product-modal") closeModal();
  });

  // Carrello POS
  document.getElementById("btn-open-cart").addEventListener("click", openCartDrawer);
  document.getElementById("drawer-close-btn").addEventListener("click", closeCartDrawer);
  document.getElementById("cart-drawer-overlay").addEventListener("click", closeCartDrawer);
  document.getElementById("btn-clear-cart").addEventListener("click", clearCart);

  // ESC key
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
      closeCartDrawer();
    }
  });
}

function applyFilters() {
  let list = [...state.products];

  // Filtro Categoria
  if (state.selectedCategory !== "all") {
    list = list.filter(p => p.category === state.selectedCategory);
  }

  // Filtro Taglia Calzature
  if (state.selectedSize !== "all") {
    list = list.filter(p => {
      if (!p.availableSizes || p.availableSizes.length === 0) return true;
      return p.availableSizes.includes(state.selectedSize);
    });
  }

  // Filtro Marchio
  if (state.selectedBrand !== "all") {
    list = list.filter(p => p.brand.toLowerCase() === state.selectedBrand.toLowerCase());
  }

  // Toggle Solo Promo
  if (state.promoOnly) {
    list = list.filter(p => p.isPromo);
  }

  // Toggle Solo In Stock
  if (state.inStockOnly) {
    list = list.filter(p => p.stock > 0);
  }

  // Ricerca libera
  if (state.searchQuery !== "") {
    const q = state.searchQuery;
    list = list.filter(p => {
      const matchName = p.name.toLowerCase().includes(q);
      const matchBrand = p.brand.toLowerCase().includes(q);
      const matchCode = p.modelCode.toLowerCase().includes(q);
      const matchBarcode = p.barcode.includes(q);
      const matchShelf = p.shelf.toLowerCase().includes(q);
      const matchSizes = p.sizes.toLowerCase().includes(q);
      const matchSpecs = p.specs.some(s => s.toLowerCase().includes(q));
      return matchName || matchBrand || matchCode || matchBarcode || matchShelf || matchSizes || matchSpecs;
    });
  }

  // Ordinamento
  switch (state.sortBy) {
    case "price-asc":
      list.sort((a, b) => a.price - b.price);
      break;
    case "price-desc":
      list.sort((a, b) => b.price - a.price);
      break;
    case "discount":
      list.sort((a, b) => {
        const discA = a.originalPrice ? (a.originalPrice - a.price) / a.originalPrice : 0;
        const discB = b.originalPrice ? (b.originalPrice - b.price) / b.originalPrice : 0;
        return discB - discA;
      });
      break;
    case "stock":
      list.sort((a, b) => b.stock - a.stock);
      break;
    case "featured":
    default:
      list.sort((a, b) => a.id - b.id);
      break;
  }

  state.filteredProducts = list;
  renderProducts();
}

function renderProducts() {
  const grid = document.getElementById("products-grid");
  const emptyState = document.getElementById("empty-state");
  const countLabel = document.getElementById("results-count");

  countLabel.textContent = `${state.filteredProducts.length} ${state.filteredProducts.length === 1 ? 'referenza visualizzata' : 'referenze visualizzate'}`;

  if (state.filteredProducts.length === 0) {
    grid.innerHTML = "";
    emptyState.style.display = "block";
    return;
  }

  emptyState.style.display = "none";
  grid.innerHTML = state.filteredProducts.map(p => {
    const discount = p.originalPrice ? Math.round(((p.originalPrice - p.price) / p.originalPrice) * 100) : 0;
    const isLowStock = p.stock > 0 && p.stock <= 8;
    const isOutOfStock = p.stock === 0;
    const isGlobo = p.storeType === "globo";

    return `
      <article class="product-card" data-id="${p.id}">
        <div>
          <div class="card-top">
            <span class="brand-badge ${isGlobo ? 'badge-globo' : 'badge-as'}">${p.storeSection}</span>
            ${p.isPromo ? `<span class="promo-badge">Volantino -${discount}%</span>` : ''}
          </div>

          <div class="product-visual">
            <div class="product-icon-wrapper">
              ${getProductSvg(p.icon)}
            </div>
          </div>

          <div class="product-info">
            <h3>${p.name}</h3>
            <div class="product-meta-sub">${p.sizes}</div>

            <div class="specs-list">
              ${p.specs.slice(0, 3).map(s => `<span class="spec-chip">${s}</span>`).join('')}
            </div>

            <div class="retail-meta">
              <span>EAN: ${p.barcode}</span>
              <span class="retail-shelf">${p.shelf}</span>
            </div>
          </div>
        </div>

        <div class="card-bottom">
          <div class="pricing-row">
            <div class="prices">
              ${p.originalPrice ? `<span class="price-original">€ ${p.originalPrice.toFixed(2).replace('.', ',')}</span>` : ''}
              <span class="price-current">€ ${p.price.toFixed(2).replace('.', ',')}</span>
            </div>

            <div class="stock-status">
              <span class="stock-dot ${isOutOfStock ? 'out' : (isLowStock ? 'low' : '')}"></span>
              <span>${isOutOfStock ? 'Esaurito' : `${p.stock} pz a banco`}</span>
            </div>
          </div>

          <div class="card-actions">
            <button class="btn btn-secondary" onclick="openProductModal(${p.id})">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              Dettagli Articolo
            </button>
            <button class="btn btn-primary" onclick="addToCart(${p.id})" title="Batti in cassa touch">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </button>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function updateHeaderStats() {
  document.getElementById("stat-total").textContent = state.products.length;
  const inStock = state.products.filter(p => p.stock > 0).length;
  document.getElementById("stat-instock").textContent = inStock;
  const inPromo = state.products.filter(p => p.isPromo).length;
  document.getElementById("stat-promo").textContent = inPromo;
}

function openProductModal(id) {
  const p = state.products.find(item => item.id === id);
  if (!p) return;

  const modalBody = document.getElementById("modal-content");
  let specsRows = "";
  for (const [key, value] of Object.entries(p.fullSpecs)) {
    specsRows += `
      <tr>
        <td class="spec-prop">${key}</td>
        <td class="spec-val">${value}</td>
      </tr>
    `;
  }

  modalBody.innerHTML = `
    <div class="modal-header-section">
      <div class="modal-icon-lg">
        ${getProductSvg(p.icon)}
      </div>
      <div class="modal-title-area">
        <span class="brand-badge ${p.storeType === 'globo' ? 'badge-globo' : 'badge-as'}">${p.storeSection}</span>
        <h2>${p.name}</h2>
        <div class="modal-subtitle">Codice: <strong>${p.modelCode}</strong> &bull; EAN Barcode: <strong>${p.barcode}</strong> &bull; ${p.shelf}</div>
      </div>
    </div>

    <div class="consultation-box">
      <h4>💡 Guida Commesso & Consiglio per il Cliente</h4>
      <p>${p.pitch}</p>
    </div>

    <h3 style="font-size: 1rem; margin-top: 1.5rem; color: #fff;">Scheda Tecnica & Dati Articolo</h3>
    <table class="specs-table">
      <tbody>
        ${specsRows}
      </tbody>
    </table>

    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle); flex-wrap: wrap; gap: 1rem;">
      <div>
        <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Prezzo Retail con IVA</div>
        <div style="font-size: 1.75rem; font-weight: 800; font-family: var(--font-mono); color: #34d399;">
          € ${p.price.toFixed(2).replace('.', ',')}
          ${p.originalPrice ? `<span style="font-size: 0.9rem; text-decoration: line-through; color: var(--text-dim); margin-left: 0.5rem;">€ ${p.originalPrice.toFixed(2).replace('.', ',')}</span>` : ''}
        </div>
      </div>

      <button class="btn btn-primary" onclick="addToCart(${p.id}); closeModal();">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="2" y="5" width="20" height="14" rx="2"/>
          <line x1="2" y1="10" x2="22" y2="10"/>
        </svg>
        Batti in Cassa Scontrino
      </button>
    </div>
  `;

  document.getElementById("product-modal").classList.add("open");
}

function closeModal() {
  document.getElementById("product-modal").classList.remove("open");
}

function resetAllFilters() {
  state.searchQuery = "";
  state.selectedCategory = "all";
  state.selectedSize = "all";
  state.selectedBrand = "all";
  state.sortBy = "featured";
  state.promoOnly = false;
  state.inStockOnly = false;

  document.getElementById("search-input").value = "";
  document.getElementById("brand-select").value = "all";
  document.getElementById("sort-select").value = "featured";
  document.getElementById("toggle-promo-only").checked = false;
  document.getElementById("toggle-instock-only").checked = false;

  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => {
    pill.classList.toggle("active", pill.dataset.category === "all");
  });

  const sizeChips = document.querySelectorAll(".size-chip");
  sizeChips.forEach(chip => {
    chip.classList.toggle("active", chip.dataset.size === "all");
  });

  applyFilters();
}

function addToCart(id) {
  const product = state.products.find(p => p.id === id);
  if (!product) return;

  const existing = state.cart.find(item => item.id === id);
  if (existing) {
    existing.quantity += 1;
  } else {
    state.cart.push({ ...product, quantity: 1 });
  }

  updateCartUI();
  openCartDrawer();
}

function updateCartQty(id, delta) {
  const item = state.cart.find(i => i.id === id);
  if (!item) return;

  item.quantity += delta;
  if (item.quantity <= 0) {
    state.cart = state.cart.filter(i => i.id !== id);
  }

  updateCartUI();
}

function clearCart() {
  state.cart = [];
  updateCartUI();
}

function updateCartUI() {
  const container = document.getElementById("cart-items-container");
  const badge = document.getElementById("cart-badge");
  const subtotalEl = document.getElementById("cart-subtotal");
  const discountLine = document.getElementById("loyalty-discount-line");
  const discountEl = document.getElementById("cart-discount");
  const ivaEl = document.getElementById("cart-iva");
  const totalEl = document.getElementById("cart-total");

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  badge.textContent = totalItems;

  if (state.cart.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 2.5rem 1rem; color: var(--text-dim);">
        <p style="font-size: 1.5rem; margin-bottom: 0.5rem;">🧾</p>
        <p style="font-weight: 600; color: var(--text-muted);">Scontrino cassa vuoto.</p>
        <p style="font-size: 0.8125rem;">Seleziona gli articoli dai reparti per simulare cassa e scontrino.</p>
      </div>
    `;
    subtotalEl.textContent = "€ 0,00";
    discountLine.style.display = "none";
    ivaEl.textContent = "€ 0,00";
    totalEl.textContent = "€ 0,00";
    return;
  }

  container.innerHTML = state.cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-info">
        <h4>${item.name}</h4>
        <p>€ ${item.price.toFixed(2).replace('.', ',')} &bull; EAN: ${item.barcode}</p>
      </div>
      <div class="cart-item-qty">
        <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)">-</button>
        <span class="qty-count">${item.quantity}</span>
        <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)">+</button>
      </div>
    </div>
  `).join('');

  let rawTotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discountAmount = 0;

  if (state.fidelityDiscount) {
    discountAmount = rawTotal * 0.10;
    discountLine.style.display = "flex";
    discountEl.textContent = `- € ${discountAmount.toFixed(2).replace('.', ',')}`;
  } else {
    discountLine.style.display = "none";
  }

  const finalTotal = rawTotal - discountAmount;
  const iva = finalTotal * (0.22 / 1.22);
  const subtotal = finalTotal - iva;

  subtotalEl.textContent = `€ ${subtotal.toFixed(2).replace('.', ',')}`;
  ivaEl.textContent = `€ ${iva.toFixed(2).replace('.', ',')}`;
  totalEl.textContent = `€ ${finalTotal.toFixed(2).replace('.', ',')}`;
}

function openCartDrawer() {
  document.getElementById("cart-drawer").classList.add("open");
  document.getElementById("cart-drawer-overlay").classList.add("open");
}

function closeCartDrawer() {
  document.getElementById("cart-drawer").classList.remove("open");
  document.getElementById("cart-drawer-overlay").classList.remove("open");
}

window.openProductModal = openProductModal;
window.closeModal = closeModal;
window.resetAllFilters = resetAllFilters;
window.addToCart = addToCart;
window.updateCartQty = updateCartQty;
