/**
 * RetailHub - Megastore & Gestione Reparti
 * Grande assortimento: Calzature & Moda & Reparti Igiene, Cura Persona & Cura Casa
 * Sviluppato da Valentyn Haidukov (Perito Informatico & Addetto Vendite L. 68/99)
 */

const PRODUCTS_DATA = [
  {
    "id": 1,
    "name": "Nike Air Max SC Sneakers Running",
    "brand": "Nike",
    "category": "calzature",
    "storeSection": "Calzature & Scarpe",
    "storeType": "globo",
    "modelCode": "CW4555-002",
    "barcode": "8884072314561",
    "shelf": "Corsia Scarpe Uomo B1 - Scaffale 4",
    "sizes": "Taglie: 40, 41, 42, 43, 44, 45",
    "availableSizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "originalPrice": 89.99,
    "price": 69.99,
    "stock": 14,
    "isPromo": true,
    "specs": [
      "Ammortizzazione Air Max",
      "Mesh tecnico traspirante",
      "Suola in gomma antiscivolo",
      "Taglie 40-45"
    ],
    "fullSpecs": {
      "Reparto Negozio": "Calzature Uomo / Sneakers Sportive",
      "Materiale Tomaia": "Mesh tecnico con inserti in pelle resistente",
      "Tecnologia Suola": "Unità Air visibile nel tallone per massimo comfort",
      "Taglie a Magazzino": "Dal 40 al 45 (disponibilità immediata)",
      "Garanzia": "Ufficiale Nike Store"
    },
    "pitch": "Scarpa versatile ideale sia per il tempo libero che per stare molte ore in piedi durante il lavoro, grazie al cuscino d'aria Air Max nel tallone.",
    "icon": "shoe"
  },
  {
    "id": 2,
    "name": "Geox Uomo Carnaby Stringata Pelle",
    "brand": "Geox",
    "category": "calzature",
    "storeSection": "Calzature & Scarpe",
    "storeType": "globo",
    "modelCode": "U26D5A-C9999",
    "barcode": "8056272891230",
    "shelf": "Corsia Calzature Classiche A2",
    "sizes": "Taglie: 41, 42, 43, 44",
    "availableSizes": [
      "41",
      "42",
      "43",
      "44"
    ],
    "originalPrice": 129.9,
    "price": 99.9,
    "stock": 8,
    "isPromo": true,
    "specs": [
      "Vera Pelle pieno fiore",
      "Suola Traspirante Geox Respira",
      "Sottopiede igienico rimovibile"
    ],
    "fullSpecs": {
      "Reparto Negozio": "Calzature Classiche & Ufficio",
      "Materiale Esterno": "100% Vera Pelle pieno fiore nera",
      "Brevetto": "Membrana impermeabile e traspirante Geox Respira",
      "Taglie a Banco": "41, 42, 43, 44"
    },
    "pitch": "La scarpa elegante d'eccellenza per cerimonie e lavoro formale: garantisce eleganza classica mantenendo il piede asciutto tutto il giorno.",
    "icon": "shoe"
  },
  {
    "id": 3,
    "name": "Lumberjack River Stivaletto Nabuk",
    "brand": "Lumberjack",
    "category": "calzature",
    "storeSection": "Calzature & Scarpe",
    "storeType": "globo",
    "modelCode": "SM00101-001",
    "barcode": "8032415982103",
    "shelf": "Corsia Outdoor & Stivali A5",
    "sizes": "Taglie: 40, 41, 42, 43, 44, 45",
    "availableSizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "originalPrice": 109.0,
    "price": 79.9,
    "stock": 11,
    "isPromo": true,
    "specs": [
      "Vera pelle Nabuk ingrassata",
      "Water Resistant",
      "Grip carroarmato"
    ],
    "fullSpecs": {
      "Reparto Negozio": "Stivali & Calzature Invernali",
      "Tomaia": "Nabuk trattato idrorepellente contro pioggia e fango",
      "Suola": "Gomma termoplastica a carrarmato rinforzata",
      "Numerata": "Completa dal 40 al 45"
    },
    "pitch": "Stivaletto robusto per l'autunno/inverno. Protegge totalmente la caviglia e offre tenuta perfetta anche su superfici bagnate.",
    "icon": "boot"
  },
  {
    "id": 4,
    "name": "Adidas Grand Court 2.0 Classic",
    "brand": "Adidas",
    "category": "calzature",
    "storeSection": "Calzature & Scarpe",
    "storeType": "globo",
    "modelCode": "GW9251",
    "barcode": "4065426189021",
    "shelf": "Corsia Scarpe B2 - Scaffale 2",
    "sizes": "Taglie: 38, 39, 40, 41, 42, 43",
    "availableSizes": [
      "38",
      "39",
      "40",
      "41",
      "42",
      "43"
    ],
    "originalPrice": 75.0,
    "price": 54.9,
    "stock": 18,
    "isPromo": false,
    "specs": [
      "Design iconico 3 Strisce",
      "Soletta interna Cloudfoam",
      "Tomaia in ecopelle resistente"
    ],
    "fullSpecs": {
      "Reparto Negozio": "Sneakers Tempo Libero",
      "Soletta": "Cloudfoam morbida ad assorbimento urti",
      "Manutenzione": "Pulizia facile con panno umido"
    },
    "pitch": "Il modello classico più richiesto per la scuola e il tempo libero. Ottimo prezzo e durata garantita.",
    "icon": "shoe"
  },
  {
    "id": 5,
    "name": "Puma Smash v2 Sneakers Suede",
    "brand": "Puma",
    "category": "calzature",
    "storeSection": "Calzature & Scarpe",
    "storeType": "globo",
    "modelCode": "365215-01",
    "barcode": "4059506821340",
    "shelf": "Corsia Scarpe B3 - Scaffale 1",
    "sizes": "Taglie: 38, 39, 40, 41, 42, 43, 44",
    "availableSizes": [
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "originalPrice": 59.99,
    "price": 44.9,
    "stock": 22,
    "isPromo": true,
    "specs": [
      "Pelle scamosciata morbida",
      "Suola gomma vulcanizzata",
      "Colletto imbottito"
    ],
    "fullSpecs": {
      "Reparto": "Sneakers Low-Top",
      "Stile": "Ispirazione tennis vintage"
    },
    "pitch": "Sneaker in morbida pelle scamosciata che unisce stile sportivo e comfort quotidiano per tutti i giorni.",
    "icon": "shoe"
  },
  {
    "id": 6,
    "name": "Skechers D'Lites Memory Foam",
    "brand": "Skechers",
    "category": "calzature",
    "storeSection": "Calzature & Scarpe",
    "storeType": "globo",
    "modelCode": "11977-WSL",
    "barcode": "0191665421980",
    "shelf": "Corsia Scarpe Donna C1",
    "sizes": "Taglie: 38, 39, 40, 41",
    "availableSizes": [
      "38",
      "39",
      "40",
      "41"
    ],
    "originalPrice": 79.95,
    "price": 64.9,
    "stock": 9,
    "isPromo": false,
    "specs": [
      "Soletta Air Cooled Memory Foam",
      "Suola chunky ammortizzata",
      "Inserti glitterati"
    ],
    "fullSpecs": {
      "Reparto": "Sneakers Donna Fashion & Comfort",
      "Plantare": "Memory foam auto-modellante sul piede"
    },
    "pitch": "Scarpa di tendenza che regala una camminata senza affaticare talloni e schiena, perfetta per lunghe giornate a piedi.",
    "icon": "shoe"
  },
  {
    "id": 7,
    "name": "NeroGiardini Decollete Pelle Tacco 7cm",
    "brand": "NeroGiardini",
    "category": "calzature",
    "storeSection": "Calzature & Scarpe",
    "storeType": "globo",
    "modelCode": "E115320D-100",
    "barcode": "8052145891024",
    "shelf": "Corsia Elegante Donna A1",
    "sizes": "Taglie: 38, 39, 40, 41",
    "availableSizes": [
      "38",
      "39",
      "40",
      "41"
    ],
    "originalPrice": 139.5,
    "price": 115.0,
    "stock": 7,
    "isPromo": true,
    "specs": [
      "100% Made in Italy",
      "Vera pelle abrasivata",
      "Sottopiede imbottito antishock"
    ],
    "fullSpecs": {
      "Tacco": "7 cm a rocchetto stabile",
      "Fodera": "Morbida pelle traspirante"
    },
    "pitch": "Scarpa formale e da cerimonia di manifattura italiana: stabilità e comfort anche dopo molte ore di utilizzo.",
    "icon": "shoe"
  },
  {
    "id": 8,
    "name": "Asics Gel-Contend 8 Running Ammortizzata",
    "brand": "Asics",
    "category": "calzature",
    "storeSection": "Calzature & Scarpe",
    "storeType": "globo",
    "modelCode": "1011B492-001",
    "barcode": "4550456123890",
    "shelf": "Corsia Running B4",
    "sizes": "Taglie: 40, 41, 42, 43, 44, 45",
    "availableSizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "originalPrice": 70.0,
    "price": 59.9,
    "stock": 16,
    "isPromo": false,
    "specs": [
      "Tecnologia GEL sul tallone",
      "Intersuola AmpliFoam",
      "Tallone rinforzato"
    ],
    "fullSpecs": {
      "Uso": "Corsa leggera e camminata veloce",
      "Peso": "290 grammi"
    },
    "pitch": "Scarpa sportiva tecnica ammortizzata, ideale sia per la palestra che per chi necessita di supporto ortopedico durante le passeggiate.",
    "icon": "shoe"
  },
  {
    "id": 9,
    "name": "Vans Ward Canvas Skate Sneakers",
    "brand": "Vans",
    "category": "calzature",
    "storeSection": "Calzature & Scarpe",
    "storeType": "globo",
    "modelCode": "VN0A36EMC4R",
    "barcode": "0192828345612",
    "shelf": "Corsia Giovani Skate B5",
    "sizes": "Taglie: 38, 39, 40, 41, 42, 43, 44",
    "availableSizes": [
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "originalPrice": 65.0,
    "price": 52.0,
    "stock": 20,
    "isPromo": true,
    "specs": [
      "Banda laterale Sidestripe",
      "Suola Waffle vulcanizzata",
      "Tomaia in robusta tela canvas"
    ],
    "fullSpecs": {
      "Stile": "Skate classico californiano",
      "Chiusura": "Stringhe piatte in cotone"
    },
    "pitch": "L'icona dello stile streetwear per ragazzi e adulti: suola aderente e tomaia in tela ad altissima resistenza.",
    "icon": "shoe"
  },
  {
    "id": 10,
    "name": "Converse Chuck Taylor All Star Canvas",
    "brand": "Converse",
    "category": "calzature",
    "storeSection": "Calzature & Scarpe",
    "storeType": "globo",
    "modelCode": "M9166C",
    "barcode": "0886952781290",
    "shelf": "Corsia Lifestyle C2",
    "sizes": "Taglie: 38, 39, 40, 41, 42, 43, 44",
    "availableSizes": [
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "originalPrice": 70.0,
    "price": 58.0,
    "stock": 25,
    "isPromo": false,
    "specs": [
      "Tomaia alta alla caviglia",
      "Puntale in gomma bianca",
      "Patch stella All Star interna"
    ],
    "fullSpecs": {
      "Genere": "Unisex",
      "Lavaggio": "Lavabile a mano con sapone neutro"
    },
    "pitch": "La sneaker intramontabile per eccellenza. Si abbina perfettamente a jeans, pantaloni sportivi e abbigliamento casual.",
    "icon": "shoe"
  },
  {
    "id": 11,
    "name": "U-Power Red Lion Scarpa Antinfortunistica S1P",
    "brand": "U-Power",
    "category": "calzature",
    "storeSection": "Calzature & Scarpe",
    "storeType": "globo",
    "modelCode": "RL20036",
    "barcode": "8053421980124",
    "shelf": "Corsia Lavoro & Sicurezza D1",
    "sizes": "Taglie: 40, 41, 42, 43, 44, 45",
    "availableSizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "originalPrice": 95.0,
    "price": 74.9,
    "stock": 15,
    "isPromo": true,
    "specs": [
      "Certificazione S1P SRC ESD",
      "Inserto Infinergy defaticante",
      "Puntale in alluminio AirToe"
    ],
    "fullSpecs": {
      "Lamina": "Antiperforazione tessile 'no metal'",
      "Normativa": "EN ISO 20345:2011"
    },
    "pitch": "La scarpa da lavoro più amata nei magazzini ed edilizia: la tecnologia Infinergy restituisce oltre il 55% di energia ad ogni passo.",
    "icon": "boot"
  },
  {
    "id": 12,
    "name": "Inblu Pantofola Comfort memory foam Donna",
    "brand": "Inblu",
    "category": "calzature",
    "storeSection": "Calzature & Scarpe",
    "storeType": "globo",
    "modelCode": "IN000042",
    "barcode": "8059871234567",
    "shelf": "Corsia Pantofoleria & Relax E1",
    "sizes": "Taglie: 38, 39, 40, 41",
    "availableSizes": [
      "38",
      "39",
      "40",
      "41"
    ],
    "originalPrice": 29.9,
    "price": 24.9,
    "stock": 30,
    "isPromo": false,
    "specs": [
      "Sottopiede anatomico soft",
      "Fondo flessibile in poliuretano",
      "Tessuto caldo scozzese"
    ],
    "fullSpecs": {
      "Suola": "Gomma microporosa silenziosa",
      "Calzata": "Comoda e morbida per casa"
    },
    "pitch": "Pantofola da casa leggera e calda con plantare anatomico automodellante, non rovina parquet né pavimenti delicati.",
    "icon": "shoe"
  },
  {
    "id": 13,
    "name": "Birkenstock Arizona Ciabatta Plantare Anatomico",
    "brand": "Birkenstock",
    "category": "calzature",
    "storeSection": "Calzature & Scarpe",
    "storeType": "globo",
    "modelCode": "0051791",
    "barcode": "4040714123456",
    "shelf": "Corsia Sanitaria & Comfort E2",
    "sizes": "Taglie: 38, 39, 40, 41, 42, 43, 44",
    "availableSizes": [
      "38",
      "39",
      "40",
      "41",
      "42",
      "43",
      "44"
    ],
    "originalPrice": 85.0,
    "price": 69.9,
    "stock": 12,
    "isPromo": true,
    "specs": [
      "Plantare in sughero e lattice",
      "Due cinturini regolabili",
      "Tomaia in Birko-Flor dermocompatibile"
    ],
    "fullSpecs": {
      "Origine": "Made in Germany",
      "Battistrada": "EVA leggero e flessibile"
    },
    "pitch": "Il sandalo ortopedico iconico famoso nel mondo per sostenere l'arco plantare e correggere la postura durante la camminata.",
    "icon": "shoe"
  },
  {
    "id": 14,
    "name": "Clarks Tilden Walk Scarpa Derby Elegante",
    "brand": "Clarks",
    "category": "calzature",
    "storeSection": "Calzature & Scarpe",
    "storeType": "globo",
    "modelCode": "26110310",
    "barcode": "5051038912450",
    "shelf": "Corsia Calzature Cerimonia A3",
    "sizes": "Taglie: 41, 42, 43, 44, 45",
    "availableSizes": [
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "originalPrice": 110.0,
    "price": 89.9,
    "stock": 10,
    "isPromo": false,
    "specs": [
      "Tomaia in morbida pelle liscia",
      "Inserti elastici discreti",
      "Soletta Cushion Soft antibatterica"
    ],
    "fullSpecs": {
      "Modello": "Derby con allacciatura aperta",
      "Fodera": "Tessuto traspirante anti-odore"
    },
    "pitch": "Modello stringato formale di grande eleganza: grazie agli elastici laterali nascosti la calzata è comodissima anche per piedi a collo alto.",
    "icon": "shoe"
  },
  {
    "id": 15,
    "name": "New Balance 574 Core Lifestyle Grigia",
    "brand": "New Balance",
    "category": "calzature",
    "storeSection": "Calzature & Scarpe",
    "storeType": "globo",
    "modelCode": "ML574EVG",
    "barcode": "0195907123891",
    "shelf": "Corsia Sneakers Premium B6",
    "sizes": "Taglie: 40, 41, 42, 43, 44, 45",
    "availableSizes": [
      "40",
      "41",
      "42",
      "43",
      "44",
      "45"
    ],
    "originalPrice": 100.0,
    "price": 84.9,
    "stock": 14,
    "isPromo": true,
    "specs": [
      "Tecnologia ENCAP nell'intersuola",
      "Tomaia in suede e mesh sostenibile",
      "Design storico 1988"
    ],
    "fullSpecs": {
      "Ammortizzazione": "Schiuma EVA leggera",
      "Colorazione": "Grigio classico iconico NB"
    },
    "pitch": "La sneaker retro-running più venduta di sempre: robusta, elegante e indistruttibile per la vita di tutti i giorni in città.",
    "icon": "shoe"
  },
  {
    "id": 16,
    "name": "Levi's 501 Original Fit Jeans Denim",
    "brand": "Levi's",
    "category": "abbigliamento",
    "storeSection": "Moda & Abbigliamento",
    "storeType": "globo",
    "modelCode": "00501-0114",
    "barcode": "5400598123450",
    "shelf": "Corsia Denim Uomo M1",
    "originalPrice": 115.0,
    "price": 89.9,
    "stock": 18,
    "isPromo": true,
    "specs": [
      "100% Cotone denim non elasticizzato",
      "Abbottonatura classica a bottoni",
      "Gamba dritta e vita media"
    ],
    "fullSpecs": {
      "Reparto": "Jeans & Denim Uomo",
      "Taglie a Magazzino": "W30 - W38 / L32 - L34",
      "Lavaggio": "Stonewash medio autentico"
    },
    "pitch": "Il capo che ha fatto la storia del denim mondiale: resistente, perfetto su qualsiasi corporatura e indistruttibile negli anni.",
    "icon": "pants"
  },
  {
    "id": 17,
    "name": "Champion Felpa Classic con Cappuccio Unisex",
    "brand": "Champion",
    "category": "abbigliamento",
    "storeSection": "Moda & Abbigliamento",
    "storeType": "globo",
    "modelCode": "218282-KK001",
    "barcode": "8054128910245",
    "shelf": "Corsia Sportswear M2",
    "originalPrice": 55.0,
    "price": 39.9,
    "stock": 25,
    "isPromo": true,
    "specs": [
      "Cotone felpato garzato caldo",
      "Tasca frontale a marsupio",
      "Logo Champion ricamato su polsino e petto"
    ],
    "fullSpecs": {
      "Composizione": "80% Cotone, 20% Poliestere",
      "Polsini": "Costina elasticizzata morbida"
    },
    "pitch": "Felpa streetwear calda e confortevole per l'autunno/inverno, adatta a ragazzi e adulti per palestra o tempo libero.",
    "icon": "shirt"
  },
  {
    "id": 18,
    "name": "Lee Daren Regular Slim Jeans Blu Notte",
    "brand": "Lee",
    "category": "abbigliamento",
    "storeSection": "Moda & Abbigliamento",
    "storeType": "globo",
    "modelCode": "L706DX36",
    "barcode": "5414761234567",
    "shelf": "Corsia Denim Uomo M1",
    "originalPrice": 89.9,
    "price": 69.9,
    "stock": 14,
    "isPromo": false,
    "specs": [
      "Denim stretch comfort",
      "Chiusura zip e bottone",
      "Cuciture rinforzate"
    ],
    "fullSpecs": {
      "Composizione": "98% Cotone, 2% Elastan",
      "Vestibilità": "Regular Slim moderna"
    },
    "pitch": "Jeans contemporaneo dal taglio pulito: grazie al 2% di elastan garantisce massima libertà di movimento per tutto il giorno.",
    "icon": "pants"
  },
  {
    "id": 19,
    "name": "Calvin Klein T-Shirt Monologo Cotton Stretch",
    "brand": "Calvin Klein",
    "category": "abbigliamento",
    "storeSection": "Moda & Abbigliamento",
    "storeType": "globo",
    "modelCode": "K10K108775",
    "barcode": "8719851234567",
    "shelf": "Corsia Moda Giovane M3",
    "originalPrice": 45.0,
    "price": 34.9,
    "stock": 20,
    "isPromo": true,
    "specs": [
      "Cotone biologico stretch 95/5",
      "Logo CK frontale micro-stampa",
      "Girocollo a costine sottili"
    ],
    "fullSpecs": {
      "Vestibilità": "Slim Fit aderente",
      "Manica": "Corta con orlo a doppia cucitura"
    },
    "pitch": "T-shirt di marca premium, tessuto morbidissimo a contatto con la pelle che mantiene colore e forma anche dopo frequenti lavaggi.",
    "icon": "shirt"
  },
  {
    "id": 20,
    "name": "Tommy Hilfiger Camicia Oxford Slim Fit Cotone",
    "brand": "Tommy Hilfiger",
    "category": "abbigliamento",
    "storeSection": "Moda & Abbigliamento",
    "storeType": "globo",
    "modelCode": "MW0MW15406",
    "barcode": "8719254123890",
    "shelf": "Corsia Camiceria M4",
    "originalPrice": 99.9,
    "price": 79.9,
    "stock": 12,
    "isPromo": false,
    "specs": [
      "Tessuto Oxford di puro cotone",
      "Colletto Button-Down",
      "Bandierina Tommy ricamata sul petto"
    ],
    "fullSpecs": {
      "Taglie": "S, M, L, XL, XXL",
      "Colore": "Azzurro chiaro classico"
    },
    "pitch": "La classica camicia Oxford adatta sia sotto la giacca per colloqui e cerimonie, sia aperta sopra una t-shirt per look casual chic.",
    "icon": "shirt"
  },
  {
    "id": 21,
    "name": "Samsonite Valigia Spinner Base Boost 55cm Cabina",
    "brand": "Samsonite",
    "category": "abbigliamento",
    "storeSection": "Moda & Abbigliamento",
    "storeType": "globo",
    "modelCode": "79200-1041",
    "barcode": "5414847123456",
    "shelf": "Corsia Valigeria & Viaggio V1",
    "originalPrice": 145.0,
    "price": 119.0,
    "stock": 8,
    "isPromo": true,
    "specs": [
      "Misure cabina Ryanair/EasyJet (55x40x20 cm)",
      "Chiusura TSA con combinazione",
      "4 Ruote piroettanti a 360°"
    ],
    "fullSpecs": {
      "Peso": "Soltanto 2.0 kg",
      "Volume": "41 Litri con tasca frontale"
    },
    "pitch": "Trolley cabina ultraleggero garantito Samsonite: scorrevolezza perfetta sui pavimenti di aeroporti e stazioni.",
    "icon": "bag"
  },
  {
    "id": 22,
    "name": "K-Way Giacca a Vento Antipioggia Packable Claude",
    "brand": "K-Way",
    "category": "abbigliamento",
    "storeSection": "Moda & Abbigliamento",
    "storeType": "globo",
    "modelCode": "K004BD0-K08",
    "barcode": "8056272123890",
    "shelf": "Corsia Capispalla M5",
    "originalPrice": 110.0,
    "price": 85.0,
    "stock": 15,
    "isPromo": true,
    "specs": [
      "Nylon Ripstop impermeabile e antivento",
      "Richiudibile nella tasca laterale a marsupio",
      "Zip iconica tricolore K-Way"
    ],
    "fullSpecs": {
      "Impermeabilità": "3000 mm colonne d'acqua",
      "Cappuccio": "Fisso con coulisse regolabile"
    },
    "pitch": "Il giubbino antipioggia per eccellenza: si chiude a marsupio in 10 secondi e protegge da qualsiasi temporale improvviso.",
    "icon": "shirt"
  },
  {
    "id": 23,
    "name": "Intimissimi T-shirt Girocollo Cotone Supima",
    "brand": "Intimissimi",
    "category": "abbigliamento",
    "storeSection": "Moda & Abbigliamento",
    "storeType": "globo",
    "modelCode": "CG101A",
    "barcode": "8051234567890",
    "shelf": "Corsia Intimo & Basic M6",
    "originalPrice": 24.9,
    "price": 19.9,
    "stock": 35,
    "isPromo": false,
    "specs": [
      "Puro cotone Supima a fibra extra lunga",
      "Cuciture piatte anti-irritazione",
      "Fresca e traspirante"
    ],
    "fullSpecs": {
      "Confezione": "Busta singola sigillata",
      "Colori a Banco": "Bianco, Nero, Blu navy"
    },
    "pitch": "Maglietta intima o da esterno di qualità superiore: fibra nobile Supima lucente e setosa sulla pelle.",
    "icon": "shirt"
  },
  {
    "id": 24,
    "name": "Geox Giubbotto Traspirante Idrorepellente Uomo",
    "brand": "Geox",
    "category": "abbigliamento",
    "storeSection": "Moda & Abbigliamento",
    "storeType": "globo",
    "modelCode": "M2620A-T2890",
    "barcode": "8056272998811",
    "shelf": "Corsia Capispalla M5",
    "originalPrice": 179.0,
    "price": 139.0,
    "stock": 6,
    "isPromo": true,
    "specs": [
      "Sistema di traspirazione Geox brevettato sulle spalle",
      "Imbottitura termica ecologica",
      "Tasche foderate in micropile"
    ],
    "fullSpecs": {
      "Tessuto Esterno": "Poliestere memory idrorepellente",
      "Taglie": "48, 50, 52, 54"
    },
    "pitch": "Capospalla mezza stagione e inizio inverno che espelle il vapore corporeo mantenendo il calore all'interno.",
    "icon": "shirt"
  },
  {
    "id": 25,
    "name": "Carpisa Trolley Cabina Rigido 4 Ruote Ultraleggero",
    "brand": "Carpisa",
    "category": "abbigliamento",
    "storeSection": "Moda & Abbigliamento",
    "storeType": "globo",
    "modelCode": "VAA90101942",
    "barcode": "8054123456789",
    "shelf": "Corsia Valigeria & Viaggio V1",
    "originalPrice": 79.95,
    "price": 59.9,
    "stock": 16,
    "isPromo": true,
    "specs": [
      "Guscio in ABS rigido antigraffio",
      "4 Ruote doppie silenziate",
      "Interni organizzati con cinghie e divisorio"
    ],
    "fullSpecs": {
      "Dimensioni": "55 x 38 x 20 cm",
      "Lucchetto": "Combinazione a 3 cifre integrata"
    },
    "pitch": "Trolley rigido da cabina moderno e colorato con ottimo rapporto qualità/prezzo per viaggi di lavoro o weekend.",
    "icon": "bag"
  },
  {
    "id": 26,
    "name": "Kappa Tuta Sportiva Full Zip & Pantalone",
    "brand": "Kappa",
    "category": "abbigliamento",
    "storeSection": "Moda & Abbigliamento",
    "storeType": "globo",
    "modelCode": "304L050-901",
    "barcode": "8000123456789",
    "shelf": "Corsia Tute & Training M2",
    "originalPrice": 65.0,
    "price": 49.9,
    "stock": 20,
    "isPromo": true,
    "specs": [
      "Giacca aperta con full zip",
      "Pantalone con elastico e laccio in vita",
      "Bande laterali con logo Omini Kappa"
    ],
    "fullSpecs": {
      "Materiale": "100% Poliestere triacetato lucido",
      "Lavaggio": "Lavabile a 30°C senza stiratura"
    },
    "pitch": "Tuta completa dal look iconico per attività sportiva, relax in casa o tempo libero dinamico.",
    "icon": "pants"
  },
  {
    "id": 27,
    "name": "Jack & Jones Polo Pique Cotone Regular Fit",
    "brand": "Jack & Jones",
    "category": "abbigliamento",
    "storeSection": "Moda & Abbigliamento",
    "storeType": "globo",
    "modelCode": "12185521",
    "barcode": "5715123456789",
    "shelf": "Corsia Casual M3",
    "originalPrice": 29.99,
    "price": 22.9,
    "stock": 24,
    "isPromo": false,
    "specs": [
      "100% Cotone piqué traspirante",
      "Colletto e bordi manica a costine",
      "Chiusura a due bottoni"
    ],
    "fullSpecs": {
      "Colori": "Bordeaux, Verde bottiglia, Blu navy",
      "Vestibilità": "Regular classica"
    },
    "pitch": "Polo a maniche corte essenziale nel guardaroba maschile, tessuto traspirante perfetto per la primavera/estate.",
    "icon": "shirt"
  },
  {
    "id": 28,
    "name": "Roncato Beauty Case Rigido da Viaggio con Tracolla",
    "brand": "Roncato",
    "category": "abbigliamento",
    "storeSection": "Moda & Abbigliamento",
    "storeType": "globo",
    "modelCode": "416184-01",
    "barcode": "8008123456789",
    "shelf": "Corsia Accessori Viaggio V2",
    "originalPrice": 52.0,
    "price": 39.9,
    "stock": 10,
    "isPromo": true,
    "specs": [
      "Guscio antiurto in policarbonato",
      "Fascia posteriore per aggancio al trolley",
      "Specchietto e scomparti flaconi interni"
    ],
    "fullSpecs": {
      "Tracolla": "Regolabile e rimovibile inclusa",
      "Dimensioni": "34 x 26 x 18 cm"
    },
    "pitch": "L'accessorio indispensabile per trasportare cosmetici, profumi e liquidi in aereo o auto senza rischio di rotture.",
    "icon": "bag"
  },
  {
    "id": 29,
    "name": "Navigare Maglione Girocollo Lana Mista Invernale",
    "brand": "Navigare",
    "category": "abbigliamento",
    "storeSection": "Moda & Abbigliamento",
    "storeType": "globo",
    "modelCode": "NV20101-BLU",
    "barcode": "8033123456789",
    "shelf": "Corsia Maglieria M4",
    "originalPrice": 59.9,
    "price": 45.0,
    "stock": 14,
    "isPromo": false,
    "specs": [
      "Filato misto lana caldo e morbido",
      "Tessitura a maglia fine elegante",
      "Trattamento antipilling anti-pallini"
    ],
    "fullSpecs": {
      "Composizione": "50% Lana vergine, 50% Acrilico",
      "Lavaggio": "Programma lana a freddo"
    },
    "pitch": "Maglione caldo e raffinato da indossare sopra la camicia o t-shirt, tiene al caldo senza pungere sulla pelle.",
    "icon": "shirt"
  },
  {
    "id": 30,
    "name": "Carrera Jeans 700 Regular Fit Elasticizzato",
    "brand": "Carrera",
    "category": "abbigliamento",
    "storeSection": "Moda & Abbigliamento",
    "storeType": "globo",
    "modelCode": "7000911A-801",
    "barcode": "8002123456789",
    "shelf": "Corsia Denim Uomo M1",
    "originalPrice": 54.0,
    "price": 42.0,
    "stock": 22,
    "isPromo": true,
    "specs": [
      "Denim Spintech in cotone elasticizzato",
      "Taglio Regular a 5 tasche",
      "Cintura comfort in vita"
    ],
    "fullSpecs": {
      "Composizione": "92% Cotone, 6% Poliestere, 2% Elastan",
      "Gamba": "Dritta comoda"
    },
    "pitch": "Il pantalone jeans italiano per chi cerca la massima comodità al lavoro e nella vita di tutti i giorni.",
    "icon": "pants"
  },
  {
    "id": 31,
    "name": "L'Oréal Revitalift Laser X3 Crema Anti-Rughe 50ml",
    "brand": "L'Oréal",
    "category": "profumeria",
    "storeSection": "Bellezza, Cosmesi & Igiene",
    "storeType": "as",
    "modelCode": "LR-REVX3-50",
    "barcode": "3600522123456",
    "shelf": "Corsia Cosmesi & Trattamento Viso P1",
    "originalPrice": 18.9,
    "price": 14.9,
    "stock": 24,
    "isPromo": true,
    "specs": [
      "Acido Ialuronico frammentato",
      "Pro-Xylane concentrato al 3%",
      "Azione rimpolpante profonda"
    ],
    "fullSpecs": {
      "Formato": "Vasetto vetro 50 ml",
      "Applicazione": "Mattina e sera su viso e collo",
      "Tipo Pelle": "Adatta a tutti i tipi di pelle dopo i 35 anni"
    },
    "pitch": "Trattamento viso anti-età numero 1 per vendite: rimpolpa i tessuti, riduce visibilmente le rughe e uniforma la grana della pelle.",
    "icon": "sparkles"
  },
  {
    "id": 32,
    "name": "Giorgio Armani Acqua di Giò Eau de Toilette 100ml",
    "brand": "Armani",
    "category": "profumeria",
    "storeSection": "Bellezza, Cosmesi & Igiene",
    "storeType": "as",
    "modelCode": "GA-ADG-100",
    "barcode": "3360372123456",
    "shelf": "Corsia Profumeria Selettiva P2",
    "originalPrice": 105.0,
    "price": 84.9,
    "stock": 10,
    "isPromo": true,
    "specs": [
      "Note marine e bergamotto di Calabria",
      "Cuore di gelsomino e rosmarino",
      "Fondo caldo di patchouli e muschio"
    ],
    "fullSpecs": {
      "Formato": "Flacone vaporizzatore spray 100 ml",
      "Famiglia Olfattiva": "Agrumata Acquatica Maschile"
    },
    "pitch": "Il profumo maschile più iconico e amato al mondo: una scia fresca ed estiva perfetta per tutto l'anno e per regali importanti.",
    "icon": "bottle"
  },
  {
    "id": 33,
    "name": "Pantene Pro-V Shampoo Rigenera & Protegge 400ml",
    "brand": "Pantene",
    "category": "profumeria",
    "storeSection": "Bellezza, Cosmesi & Igiene",
    "storeType": "as",
    "modelCode": "PAN-RIG-400",
    "barcode": "8001090123456",
    "shelf": "Corsia Cura Capelli P3",
    "originalPrice": 4.59,
    "price": 3.49,
    "stock": 40,
    "isPromo": false,
    "specs": [
      "Formula arricchita con nutrienti Pro-V",
      "0% oli minerali e coloranti",
      "Rinforza i capelli deboli contro le doppie punte"
    ],
    "fullSpecs": {
      "Formato": "Maxi flacone da 400 ml riciclabile",
      "Uso": "Quotidiano per capelli danneggiati o sfibrati"
    },
    "pitch": "Shampoo ristrutturante per capelli luminosi e sani fin dal primo lavaggio, ideale per tutta la famiglia.",
    "icon": "bottle"
  },
  {
    "id": 34,
    "name": "Felce Azzurra Bagnodoccia Classico 650ml",
    "brand": "Felce Azzurra",
    "category": "profumeria",
    "storeSection": "Bellezza, Cosmesi & Igiene",
    "storeType": "as",
    "modelCode": "FA-BAGNO-650",
    "barcode": "8001280123456",
    "shelf": "Corsia Igiene Corpo P4",
    "originalPrice": 2.99,
    "price": 2.29,
    "stock": 60,
    "isPromo": true,
    "specs": [
      "Profumazione storica con oltre 100 ingredienti",
      "Formula ricca di oli essenziali",
      "pH bilanciato dermocompatibile"
    ],
    "fullSpecs": {
      "Formato": "Flacone rigato iconico 650 ml",
      "Origine": "Made in Italy da Paglieri"
    },
    "pitch": "Il classico bagnoschiuma italiano che profuma di casa e freschezza naturale, lascia la pelle morbida e profumata per ore.",
    "icon": "bottle"
  },
  {
    "id": 35,
    "name": "Nivea Crema Idratante Corpo Barattolo Blu 250ml",
    "brand": "Nivea",
    "category": "profumeria",
    "storeSection": "Bellezza, Cosmesi & Igiene",
    "storeType": "as",
    "modelCode": "NIV-BLU-250",
    "barcode": "4005808123456",
    "shelf": "Corsia Cura Corpo P4",
    "originalPrice": 4.89,
    "price": 3.99,
    "stock": 45,
    "isPromo": false,
    "specs": [
      "Formula originale con Eucerit brevettato",
      "Idratazione profonda per pelli secche",
      "Senza conservanti artificiali"
    ],
    "fullSpecs": {
      "Formato": "Latta metallica blu da 250 ml",
      "Applicazione": "Mani, gomiti, talloni e viso"
    },
    "pitch": "La crema idratante universale per eccellenza: indispensabile in casa per proteggere la pelle dal freddo e dalla disidratazione.",
    "icon": "sparkles"
  },
  {
    "id": 36,
    "name": "Gillette Fusion 5 Rasoio Manuale + 4 Testine",
    "brand": "Gillette",
    "category": "profumeria",
    "storeSection": "Bellezza, Cosmesi & Igiene",
    "storeType": "as",
    "modelCode": "GIL-FUS5-SET",
    "barcode": "7702018123456",
    "shelf": "Corsia Rasatura & Barba P5",
    "originalPrice": 19.9,
    "price": 15.9,
    "stock": 18,
    "isPromo": true,
    "specs": [
      "5 Lame anti-attrito ravvicinate",
      "Lama di precisione sul retro per basette",
      "Striscia lubrificante con Aloe e Vitamina E"
    ],
    "fullSpecs": {
      "Contenuto": "1 Manico ergonomico + 4 lamette di ricambio",
      "Durata": "Fino a 20 rasature impeccabili per singola lametta"
    },
    "pitch": "Set rasatura professionale: rasatura profonda a zero tagli e irritazioni anche sulle pelli più delicate e sensibili.",
    "icon": "brush"
  },
  {
    "id": 37,
    "name": "Oral-B Pro Series 3 Spazzolino Elettrico Ricaricabile",
    "brand": "Oral-B",
    "category": "profumeria",
    "storeSection": "Bellezza, Cosmesi & Igiene",
    "storeType": "as",
    "modelCode": "OB-PRO3-3000",
    "barcode": "4210201123456",
    "shelf": "Corsia Igiene Orale P6",
    "originalPrice": 59.9,
    "price": 44.9,
    "stock": 12,
    "isPromo": true,
    "specs": [
      "Testina tonda oscillante-rotante-pulsante",
      "Sensore di pressione visivo a 360° con luce rossa",
      "Timer professionale di 2 minuti"
    ],
    "fullSpecs": {
      "Batteria": "Agli ioni di litio con autonomia oltre 2 settimane",
      "Modalità": "Pulizia quotidiana, Sbiancante, Denti sensibili"
    },
    "pitch": "Rimuove fino al 100% di placca in più rispetto a uno spazzolino manuale e protegge le gengive dall'eccessiva pressione.",
    "icon": "brush"
  },
  {
    "id": 38,
    "name": "Collistar Talasso Scrub Rimodellante Sali Marini 700g",
    "brand": "Collistar",
    "category": "profumeria",
    "storeSection": "Bellezza, Cosmesi & Igiene",
    "storeType": "as",
    "modelCode": "COL-SCRUB-700",
    "barcode": "8015677123456",
    "shelf": "Corsia Trattamento Corpo P1",
    "originalPrice": 48.0,
    "price": 36.9,
    "stock": 8,
    "isPromo": true,
    "specs": [
      "Miscela di sali marini ed oli essenziali puri",
      "Effetto esfoliante, drenante e vellutante",
      "Trattamento professionale da SPA"
    ],
    "fullSpecs": {
      "Formato": "Maxi barattolo 700g con spatolina",
      "Uso consigliato": "1-2 volte a settimana prima della doccia"
    },
    "pitch": "Il trattamento corpo rigenerante più desiderato: esfolia le cellule morte lasciando la pelle morbida come seta fin dalla prima applicazione.",
    "icon": "sparkles"
  },
  {
    "id": 39,
    "name": "Maybelline New York Mascara Lash Sensational Sky High",
    "brand": "Maybelline",
    "category": "profumeria",
    "storeSection": "Bellezza, Cosmesi & Igiene",
    "storeType": "as",
    "modelCode": "MAY-SKYHIGH-01",
    "barcode": "3600531123456",
    "shelf": "Corsia Make-up & Occhi P7",
    "originalPrice": 13.9,
    "price": 10.9,
    "stock": 25,
    "isPromo": false,
    "specs": [
      "Scovolino flessibile Flex Tower in silicone",
      "Formula con estratto di bambù e fibre allunganti",
      "Zero grumi e tenuta 24 ore"
    ],
    "fullSpecs": {
      "Colore": "Very Black extra pigmentato",
      "Oftalmologicamente testato": "Sicuro per occhi sensibili e lenti a contatto"
    },
    "pitch": "Il mascara virale più venduto: dona lunghezza estrema e volume moltiplicato a ventaglio da ogni angolazione.",
    "icon": "brush"
  },
  {
    "id": 40,
    "name": "Borotalco Deodorante Spray Original 150ml",
    "brand": "Borotalco",
    "category": "profumeria",
    "storeSection": "Bellezza, Cosmesi & Igiene",
    "storeType": "as",
    "modelCode": "BORO-SPR-150",
    "barcode": "8002410123456",
    "shelf": "Corsia Deodoranti P4",
    "originalPrice": 3.49,
    "price": 2.69,
    "stock": 50,
    "isPromo": false,
    "specs": [
      "Formula con Microtalco naturale assorbente",
      "Protezione anti-traspirante 48 ore",
      "0% Alcol sulla pelle"
    ],
    "fullSpecs": {
      "Formato": "Bombola spray ecologica 150 ml",
      "Fragranza": "Inconfondibile profumo Borotalco"
    },
    "pitch": "Deodorante affidabile che assorbe il sudore e garantisce ascelle asciutte e fresche per due giorni interi senza macchiare i vestiti.",
    "icon": "spray"
  },
  {
    "id": 41,
    "name": "Dove Bagnodoccia Idratante Seta Pura 500ml",
    "brand": "Dove",
    "category": "profumeria",
    "storeSection": "Bellezza, Cosmesi & Igiene",
    "storeType": "as",
    "modelCode": "DOVE-SETA-500",
    "barcode": "8717163123456",
    "shelf": "Corsia Igiene Corpo P4",
    "originalPrice": 3.59,
    "price": 2.79,
    "stock": 35,
    "isPromo": false,
    "specs": [
      "1/4 Di crema idratante nutriente",
      "Detergenti delicati senza solfati SLES",
      "Lascia la pelle morbida e nutrita"
    ],
    "fullSpecs": {
      "Formato": "Flacone goccia 500 ml 100% plastica riciclata",
      "Certificazione": "PETA Cruelty-Free"
    },
    "pitch": "Nutre la pelle in profondità durante la doccia lasciando una sensazione vellutata e una profumazione rilassante e delicata.",
    "icon": "bottle"
  },
  {
    "id": 42,
    "name": "Clinique Dramatically Different Crema Viso 125ml",
    "brand": "Clinique",
    "category": "profumeria",
    "storeSection": "Bellezza, Cosmesi & Igiene",
    "storeType": "as",
    "modelCode": "CLIN-DDL-125",
    "barcode": "0020714123456",
    "shelf": "Corsia Trattamento Viso P1",
    "originalPrice": 42.0,
    "price": 32.0,
    "stock": 9,
    "isPromo": true,
    "specs": [
      "Lozione idratante riparatrice 8 ore",
      "Rinforza la barriera idrolipidica cutanea",
      "100% Senza profumo e testata contro le allergie"
    ],
    "fullSpecs": {
      "Formato": "Flacone con dosatore a pompetta 125 ml",
      "Tipo Pelle": "Pelli da molto aride a normali"
    },
    "pitch": "La celebre lozione gialla sviluppata da dermatologi: idrata all'istante e crea una barriera protettiva contro lo smog e l'aria secca.",
    "icon": "sparkles"
  },
  {
    "id": 43,
    "name": "Garnier Acqua Micellare Tutto in 1 Pelli Sensibili 400ml",
    "brand": "Garnier",
    "category": "profumeria",
    "storeSection": "Bellezza, Cosmesi & Igiene",
    "storeType": "as",
    "modelCode": "GAR-MICELL-400",
    "barcode": "3600541123456",
    "shelf": "Corsia Detersione Viso P1",
    "originalPrice": 4.99,
    "price": 3.89,
    "stock": 40,
    "isPromo": false,
    "specs": [
      "Tecnologia Micellare magnetica cattura-impurità",
      "Strucca viso, occhi e labbra senza risciacquo",
      "Formula ipoallergenica senza profumo"
    ],
    "fullSpecs": {
      "Formato": "Maxi formato 400 ml pari a circa 200 utilizzi",
      "Approvazione": "Cruelty Free International"
    },
    "pitch": "Deterge e strucca con una sola passata di dischetto senza bisogno di strofinare o risciacquare, zero bruciore agli occhi.",
    "icon": "bottle"
  },
  {
    "id": 44,
    "name": "Head & Shoulders Shampoo Classic Clean Antiforfora 400ml",
    "brand": "Head & Shoulders",
    "category": "profumeria",
    "storeSection": "Bellezza, Cosmesi & Igiene",
    "storeType": "as",
    "modelCode": "HS-CLASS-400",
    "barcode": "8001090987654",
    "shelf": "Corsia Cura Capelli P3",
    "originalPrice": 4.79,
    "price": 3.69,
    "stock": 30,
    "isPromo": false,
    "specs": [
      "Protezione antiforfora fino al 100% clinicamente provata",
      "Formula Microbiome Balance per cuoio capelluto sano",
      "Dona freschezza e pulizia duratura"
    ],
    "fullSpecs": {
      "Formato": "Flacone da 400 ml riciclabile",
      "pH": "Delicato ed equilibrato per uso giornaliero"
    },
    "pitch": "La soluzione numero uno per eliminare la forfora visibile e lenire il prurito alla cute lasciando i capelli leggeri e puliti.",
    "icon": "bottle"
  },
  {
    "id": 45,
    "name": "Proraso Sapone da Barba in Ciotola Eucalipto 150ml",
    "brand": "Proraso",
    "category": "profumeria",
    "storeSection": "Bellezza, Cosmesi & Igiene",
    "storeType": "as",
    "modelCode": "PRO-CIOT-EUC",
    "barcode": "8004395123456",
    "shelf": "Corsia Rasatura Tradizionale P5",
    "originalPrice": 2.89,
    "price": 2.19,
    "stock": 45,
    "isPromo": false,
    "specs": [
      "Sapone a saponificazione a caldo tradizionale",
      "Olio di Eucalipto e Mentolo rinfrescante",
      "Schiuma densa e protettiva per pennello"
    ],
    "fullSpecs": {
      "Formato": "Ciotola verde richiudibile 150 ml",
      "Origine": "Firenze dal 1948"
    },
    "pitch": "Il sapone da barba italiano per eccellenza: ammorbidisce la barba all'istante e regala una freschezza tonificante al mentolo.",
    "icon": "brush"
  },
  {
    "id": 46,
    "name": "Dash Power Pods Detersivo Lavatrice Igienizzante 39 Caps",
    "brand": "Dash",
    "category": "casa",
    "storeSection": "Bucato, Detersivi & Cura Casa",
    "storeType": "as",
    "modelCode": "DASH-PODS-39",
    "barcode": "8001090112233",
    "shelf": "Corsia Bucato C1",
    "originalPrice": 14.9,
    "price": 11.9,
    "stock": 35,
    "isPromo": true,
    "specs": [
      "Capsule predosate multi-scomparto",
      "Efficace già a 20°C per risparmiare energia",
      "Azione anti-macchia ed igienizzante profonda"
    ],
    "fullSpecs": {
      "Contenuto": "Confezione salva-freschezza con chiusura di sicurezza bimbi (39 lavaggi)",
      "Profumazione": "Classica fresca di pulito Dash"
    },
    "pitch": "Zero sprechi di dosaggio: basta inserire una capsula sul fondo del cestello prima dei panni per capi immacolati anche a basse temperature.",
    "icon": "sparkle"
  },
  {
    "id": 47,
    "name": "Chanteclair Sgrassatore Universale Marsiglia 750ml",
    "brand": "Chanteclair",
    "category": "casa",
    "storeSection": "Bucato, Detersivi & Cura Casa",
    "storeType": "as",
    "modelCode": "CHAN-SGRASS-750",
    "barcode": "8015194123456",
    "shelf": "Corsia Pulizia Cucina & Superfici C2",
    "originalPrice": 2.79,
    "price": 2.19,
    "stock": 70,
    "isPromo": false,
    "specs": [
      "Superpotente contro ogni tipo di grasso e unto",
      "Formula ultra-concentrata profumata al Marsiglia",
      "Funziona anche a testa in giù con spray professionale"
    ],
    "fullSpecs": {
      "Formato": "Flacone con spruzzino a grilletto 750 ml",
      "Uso": "Forni, cappe, piani cottura, cerchioni auto e macchie ostinate sui colletti"
    },
    "pitch": "Lo sgrassatore più famoso ed efficace in Italia: scioglie il grasso bruciato in pochi secondi senza rovinare le superfici.",
    "icon": "spray"
  },
  {
    "id": 48,
    "name": "Fairy Platinum Plus Pastiglie Lavastoviglie 54 Caps",
    "brand": "Fairy",
    "category": "casa",
    "storeSection": "Bucato, Detersivi & Cura Casa",
    "storeType": "as",
    "modelCode": "FAIRY-PLAT-54",
    "barcode": "8001090445566",
    "shelf": "Corsia Lavastoviglie C3",
    "originalPrice": 16.9,
    "price": 12.5,
    "stock": 28,
    "isPromo": true,
    "specs": [
      "Elimina le incrostazioni più ostinate senza prelavaggio",
      "Azione brillantezza vetro e cura anticalcare filtro",
      "Scioglimento ultrarapido nei cicli brevi"
    ],
    "fullSpecs": {
      "Confezione": "Busta richiudibile ermetica salva aroma (54 capsule)",
      "Azione": "Polvere sgrassante + 3 liquidi ad alta resa"
    },
    "pitch": "Le pastiglie top di gamma per lavastoviglie: stoviglie e bicchieri brillanti senza bisogno di sciacquare i piatti a mano nel lavello.",
    "icon": "sparkle"
  },
  {
    "id": 49,
    "name": "Lysoform Disinfettante Pavimenti Protezione Casa 1250ml",
    "brand": "Lysoform",
    "category": "casa",
    "storeSection": "Bucato, Detersivi & Cura Casa",
    "storeType": "as",
    "modelCode": "LYSO-PAV-1250",
    "barcode": "8710447123456",
    "shelf": "Corsia Igiene Pavimenti C4",
    "originalPrice": 3.29,
    "price": 2.49,
    "stock": 50,
    "isPromo": false,
    "specs": [
      "Presidio Medico Chirurgico n° 19827",
      "Elimina fino al 99.9% di batteri e lieviti",
      "Pulisce senza lasciare aloni o residui appiccicosi"
    ],
    "fullSpecs": {
      "Formato": "Maxi flacone da 1.250 ml",
      "Profumazione": "Classica disinfettante floreale fresca"
    },
    "pitch": "Il detergente disinfettante indispensabile per pavimenti e superfici, specialmente in case con bambini piccoli e animali domestici.",
    "icon": "bottle"
  },
  {
    "id": 50,
    "name": "Lenor Ammorbidente Concentrato Oro & Vaniglia 60 Lavaggi",
    "brand": "Lenor",
    "category": "casa",
    "storeSection": "Bucato, Detersivi & Cura Casa",
    "storeType": "as",
    "modelCode": "LENOR-ORO-60",
    "barcode": "8001090778899",
    "shelf": "Corsia Bucato C1",
    "originalPrice": 4.99,
    "price": 3.79,
    "stock": 42,
    "isPromo": true,
    "specs": [
      "Freschezza profumata a lunga durata fino a 1 settimana",
      "Protegge i tessuti dall'infeltrimento e dalla perdita di forma",
      "Facilita la stiratura dei capi"
    ],
    "fullSpecs": {
      "Formato": "Flacone concentrato 1.4 Litri (pari a 60 lavaggi completi)",
      "Note olfattive": "Ambra calda, fiori di vaniglia e caramello"
    },
    "pitch": "Ammorbidente aromatico che trasforma il bucato: vestiti e lenzuola morbidissimi e un profumo inebriante che dura giorni nell'armadio.",
    "icon": "bottle"
  },
  {
    "id": 51,
    "name": "Ace Candeggina Classica Flacone con Dosatore 3 Litri",
    "brand": "Ace",
    "category": "casa",
    "storeSection": "Bucato, Detersivi & Cura Casa",
    "storeType": "as",
    "modelCode": "ACE-CAND-3000",
    "barcode": "8001480123456",
    "shelf": "Corsia Bucato & Igienizzanti C1",
    "originalPrice": 3.79,
    "price": 2.89,
    "stock": 48,
    "isPromo": false,
    "specs": [
      "Formula Fibre Proteggi brevettata",
      "Massima igiene e sbiancamento per capi bianchi",
      "Utilizzabile per la disinfezione di grandi superfici"
    ],
    "fullSpecs": {
      "Formato": "Tanica salva-goccia con maniglia ergonomica da 3 Litri",
      "Impiego": "Bucato a mano, in lavatrice e pulizia sanitari"
    },
    "pitch": "La candeggina numero uno per restituire un bianco splendente ai tessuti e igienizzare a fondo bagni e pavimenti.",
    "icon": "bottle"
  },
  {
    "id": 52,
    "name": "Swiffer Duster Starter Kit Piumino + 5 Ricambi",
    "brand": "Swiffer",
    "category": "casa",
    "storeSection": "Bucato, Detersivi & Cura Casa",
    "storeType": "as",
    "modelCode": "SWIF-DUST-KIT",
    "barcode": "8001090334455",
    "shelf": "Corsia Pulizia Casa & Polvere C5",
    "originalPrice": 6.49,
    "price": 4.99,
    "stock": 25,
    "isPromo": true,
    "specs": [
      "Cattura e blocca fino a 3 volte più polvere rispetto a un panno tradizionale",
      "Migliaia di fibre morbide flessibili 3D",
      "Ideale per termosifoni, tapparelle, TV e librerie"
    ],
    "fullSpecs": {
      "Contenuto": "1 Manico ergonomico componibile + 5 piumini ricambio",
      "Allergeni": "Intrappola peli di gatto/cane e acari della polvere"
    },
    "pitch": "Spolverare non è mai stato così veloce: le fibre elettrostatiche attraggono la polvere negli angoli più difficili senza sollevarla in aria.",
    "icon": "brush"
  },
  {
    "id": 53,
    "name": "Vileda Turbo Smart Sistema Mocio + Secchio a Pedale",
    "brand": "Vileda",
    "category": "casa",
    "storeSection": "Bucato, Detersivi & Cura Casa",
    "storeType": "as",
    "modelCode": "VIL-TURBO-SMART",
    "barcode": "4023103123456",
    "shelf": "Corsia Accessori Pulizia C5",
    "originalPrice": 34.9,
    "price": 26.9,
    "stock": 14,
    "isPromo": true,
    "specs": [
      "Strizzatore a pedale senza sforzo per la schiena",
      "Fiocco 100% microfibra triangolare per pulire gli angoli",
      "Manico in 3 pezzi in acciaio leggero"
    ],
    "fullSpecs": {
      "Adatto a": "Piastrelle, gres porcellanato, laminati e parquet",
      "Lavaggio": "Testina lavabile in lavatrice a 60°C"
    },
    "pitch": "Dimentica la fatica di strizzare il mocio a mano: il pedale aziona la centrifuga per avere il panno con l'esatto grado di umidità desiderato.",
    "icon": "brush"
  },
  {
    "id": 54,
    "name": "Calgon Gel Anticalcare 3 in 1 Lavatrice 1500ml",
    "brand": "Calgon",
    "category": "casa",
    "storeSection": "Bucato, Detersivi & Cura Casa",
    "storeType": "as",
    "modelCode": "CALG-GEL-1500",
    "barcode": "8002910123456",
    "shelf": "Corsia Manutenzione Lavatrice C1",
    "originalPrice": 10.9,
    "price": 8.49,
    "stock": 20,
    "isPromo": false,
    "specs": [
      "Protezione totale contro calcare, residui di sporco e cattivi odori",
      "Formula gel a scioglimento istantaneo",
      "Allunga la vita degli elettrodomestici"
    ],
    "fullSpecs": {
      "Formato": "Flacone con beccuccio dosatore 1.500 ml",
      "Consiglio d'uso": "Un tappo ad ogni lavaggio insieme al normale detersivo"
    },
    "pitch": "Protegge la resistenza elettrica e i tubi della lavatrice dal calcare dell'acqua dura, evitando guasti costosi e consumi elettrici elevati.",
    "icon": "bottle"
  },
  {
    "id": 55,
    "name": "Smac Express Sgrassatore Cucina & Acciaio 650ml",
    "brand": "Smac",
    "category": "casa",
    "storeSection": "Bucato, Detersivi & Cura Casa",
    "storeType": "as",
    "modelCode": "SMAC-ACC-650",
    "barcode": "8004120123456",
    "shelf": "Corsia Pulizia Cucina C2",
    "originalPrice": 2.99,
    "price": 2.39,
    "stock": 40,
    "isPromo": false,
    "specs": [
      "Formula zero aloni specifica per acciaio inox",
      "Rimuove gocce d'acqua calcaree e ditate",
      "Effetto barriera protettiva contro lo sporco"
    ],
    "fullSpecs": {
      "Formato": "Trigger spray 650 ml",
      "Superfici ideali": "Piani cottura, lavelli in acciaio, frigoriferi e cappe"
    },
    "pitch": "L'alleato per far brillare la cucina in acciaio inox: rimuove il grasso e dona una lucentezza specchiata senza lasciare striature.",
    "icon": "spray"
  },
  {
    "id": 56,
    "name": "Bref Power Aktiv Tavolette WC Candeggina 2 Pezzi",
    "brand": "Bref",
    "category": "casa",
    "storeSection": "Bucato, Detersivi & Cura Casa",
    "storeType": "as",
    "modelCode": "BREF-POW-2PZ",
    "barcode": "9000101123456",
    "shelf": "Corsia Igiene Bagno & WC C4",
    "originalPrice": 2.89,
    "price": 2.29,
    "stock": 55,
    "isPromo": false,
    "specs": [
      "Formula a 4 funzioni: schiuma igienizzante, anticalcare, candeggina e freschezza",
      "Design discreto che si adatta a ogni bordo WC",
      "Fino a 250 risciacqui di igiene continua"
    ],
    "fullSpecs": {
      "Confezione": "Blister doppio (2 gabbette da 50g l'una)",
      "Azione": "Igienizza a ogni scarico dell'acqua"
    },
    "pitch": "Mantiene il water costantemente igienizzato e profumato a ogni sciacquata, prevenendo la formazione di macchie e calcare.",
    "icon": "sparkle"
  },
  {
    "id": 57,
    "name": "Finish Cura Lavastoviglie Liquido Bicolore 250ml",
    "brand": "Finish",
    "category": "casa",
    "storeSection": "Bucato, Detersivi & Cura Casa",
    "storeType": "as",
    "modelCode": "FIN-CURA-250",
    "barcode": "8002910998877",
    "shelf": "Corsia Manutenzione Lavastoviglie C3",
    "originalPrice": 4.89,
    "price": 3.89,
    "stock": 30,
    "isPromo": true,
    "specs": [
      "Doppia azione: strato giallo sgrassa e strato trasparente elimina il calcare",
      "Pulisce tubi, bracci rotanti e filtri nascosti",
      "Elimina i cattivi odori di ristagno d'acqua"
    ],
    "fullSpecs": {
      "Formato": "Flaconcino monouso da 250 ml",
      "Uso consigliato": "1 volta al mese con ciclo a vuoto ad alta temperatura (minimo 65°C)"
    },
    "pitch": "La manutenzione fondamentale per la lavastoviglie: pulisce le parti interne non raggiungibili a mano per stoviglie sempre igienizzate.",
    "icon": "bottle"
  },
  {
    "id": 58,
    "name": "Dixan Liquido Lavatrice Pulito Profondo Classico 50 Lavaggi",
    "brand": "Dixan",
    "category": "casa",
    "storeSection": "Bucato, Detersivi & Cura Casa",
    "storeType": "as",
    "modelCode": "DIX-LIQ-50L",
    "barcode": "8000100123456",
    "shelf": "Corsia Bucato C1",
    "originalPrice": 12.9,
    "price": 9.9,
    "stock": 25,
    "isPromo": true,
    "specs": [
      "Tecnologia Pulito Profondo penetra nelle fibre tessili",
      "Attivo contro le macchie ostinate (olio, erba, sugo)",
      "Dona freschezza e brillantezza ai capi colorati e bianchi"
    ],
    "fullSpecs": {
      "Formato": "Eco-bottiglia da 2.5 Litri (50 dosi consigliate)",
      "Tappo dosatore": "Incluso salva gocce graduato"
    },
    "pitch": "Il detersivo liquido preferito dalle famiglie per la sua efficacia smacchiante già nei cicli di lavaggio a 30 gradi.",
    "icon": "bottle"
  },
  {
    "id": 59,
    "name": "Regina di Cuori Carta Cucina Assorbente Rotolo Maxi 3 Veli",
    "brand": "Regina",
    "category": "casa",
    "storeSection": "Bucato, Detersivi & Cura Casa",
    "storeType": "as",
    "modelCode": "REG-CUORI-MAXI",
    "barcode": "8004260123456",
    "shelf": "Corsia Carta & Monouso C6",
    "originalPrice": 4.49,
    "price": 3.49,
    "stock": 40,
    "isPromo": false,
    "specs": [
      "Rotolo decorato con cuori assorbenti trapuntati",
      "3 Veli ad altissima resistenza anche da bagnato",
      "100% Pura cellulosa vergine certificata FSC"
    ],
    "fullSpecs": {
      "Contenuto": "Confezione da 3 rotoli maxi ad alta capienza",
      "Idoneità": "Certificato al contatto con tutti gli alimenti"
    },
    "pitch": "Rotoli maxi spessi e resistenti che assorbono liquidi e condimenti senza sfaldarsi, perfetti per la preparazione dei cibi e pulizie rapide.",
    "icon": "sparkle"
  },
  {
    "id": 60,
    "name": "Scala Alcol Etilico Denaturato 90° Igienizzante 1000ml",
    "brand": "Scala",
    "category": "casa",
    "storeSection": "Bucato, Detersivi & Cura Casa",
    "storeType": "as",
    "modelCode": "SCA-ALC-1000",
    "barcode": "8006130123456",
    "shelf": "Corsia Disinfezione Casa C4",
    "originalPrice": 1.99,
    "price": 1.49,
    "stock": 60,
    "isPromo": false,
    "specs": [
      "Gradazione alcolica 90 gradi ad alto potere sgrassante",
      "Evapora all'istante senza lasciare aloni",
      "Ideale per vetri, specchi, piastrelle e superfici lavabili"
    ],
    "fullSpecs": {
      "Formato": "Bottiglia da 1000 ml con tappo di sicurezza",
      "Origine": "Prodotto chimico professionale Made in Italy"
    },
    "pitch": "Alcol puro denaturato indispensabile in casa per disinfettare attrezzi, lucidare specchi e vetri e rimuovere adesivi e resine.",
    "icon": "bottle"
  }
];

// ==========================================================================
// STATO APPLICATIVO & CASSA POS
// ==========================================================================
const state = {
  products: [...PRODUCTS_DATA],
  filteredProducts: [...PRODUCTS_DATA],
  cart: [],
  searchQuery: "",
  selectedCategory: "all",
  selectedSize: "all",
  selectedBrand: "all",
  sortBy: "featured",
  promoOnly: false,
  inStockOnly: false,
  fidelityDiscount: false,
  paymentMethod: "cash", // "cash" o "pos"
  cashGiven: 0,
  posApproved: false,
  lastCompletedSale: null
};

// ==========================================================================
// ICONE SVG PER I REPARTI
// ==========================================================================
function getProductSvg(type) {
  switch(type) {
    case "shoe":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 16v-2a4 4 0 0 1 4-4h2l2-4h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><circle cx="8" cy="18" r="2"/><circle cx="16" cy="18" r="2"/></svg>`;
    case "boot":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 3h6v9l5 4v4H4v-3l3-4V3z"/><path d="M7 7h6"/><path d="M7 11h6"/></svg>`;
    case "shirt":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.38 3.46L16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.5a2 2 0 0 0 1.34 1.55L6 11.3V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-8.7l1.8-0.56a2 2 0 0 0 1.34-1.55l.58-3.5a2 2 0 0 0-1.34-2.23z"/></svg>`;
    case "pants":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16v3l-2 13h-4l-2-9-2 9H6L4 7V4z"/></svg>`;
    case "bag":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="6" width="18" height="15" rx="2"/><circle cx="12" cy="3" r="2"/><path d="M8 6V3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3"/></svg>`;
    case "sparkles":
    case "sparkle":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3L12 3z"/><path d="m5 3 1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z"/></svg>`;
    case "bottle":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 2h8v4H8z"/><path d="M9 6v3a4 4 0 0 1-1 2.8L7 13a4 4 0 0 0-1 2.8V20a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-4.2a4 4 0 0 0-1-2.8l-1-1.2A4 4 0 0 1 15 9V6"/></svg>`;
    case "brush":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 12l-8-8-6 6 8 8"/><path d="M14 16l4 4a2 2 0 0 0 2.8-2.8l-4-4"/><path d="M2 22l4-4"/></svg>`;
    case "spray":
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M7 6h10v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V6z"/><path d="M10 2h4"/><path d="M12 2v4"/><path d="M19 4l3-1"/><path d="M19 7l3 1"/><path d="M19 10l3 3"/></svg>`;
    default:
      return `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>`;
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ==========================================================================
// INIZIALIZZAZIONE APPLICATIVO
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initEventListeners();
  applyFilters();
  updateCartUI();
});

function initEventListeners() {
  // Ricerca testuale & Barcode
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      state.searchQuery = e.target.value.trim().toLowerCase();
      applyFilters();
    });
  }

  // Filtri Categorie Reparti
  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => {
    pill.addEventListener("click", () => {
      catPills.forEach(p => p.classList.remove("active"));
      pill.classList.add("active");
      state.selectedCategory = pill.dataset.category;
      applyFilters();
    });
  });

  // Filtro Taglie Scarpe
  const sizeChips = document.querySelectorAll(".size-chip");
  sizeChips.forEach(chip => {
    chip.addEventListener("click", () => {
      sizeChips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      state.selectedSize = chip.dataset.size;
      applyFilters();
    });
  });

  // Brand Selector
  const brandSelect = document.getElementById("brand-select");
  if (brandSelect) {
    brandSelect.addEventListener("change", (e) => {
      state.selectedBrand = e.target.value;
      applyFilters();
    });
  }

  // Ordinamento
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      state.sortBy = e.target.value;
      applyFilters();
    });
  }

  // Toggles
  const promoToggle = document.getElementById("toggle-promo-only");
  if (promoToggle) {
    promoToggle.addEventListener("change", (e) => {
      state.promoOnly = e.target.checked;
      applyFilters();
    });
  }

  const stockToggle = document.getElementById("toggle-instock-only");
  if (stockToggle) {
    stockToggle.addEventListener("change", (e) => {
      state.inStockOnly = e.target.checked;
      applyFilters();
    });
  }

  // Reset filtri
  const resetBtn = document.getElementById("btn-reset-filters");
  if (resetBtn) resetBtn.addEventListener("click", resetAllFilters);

  // Apertura/Chiusura Drawer Cassa
  const openCartBtn = document.getElementById("btn-open-cart");
  if (openCartBtn) openCartBtn.addEventListener("click", openCartDrawer);

  const closeCartBtn = document.getElementById("drawer-close-btn");
  if (closeCartBtn) closeCartBtn.addEventListener("click", closeCartDrawer);

  const cartOverlay = document.getElementById("cart-drawer-overlay");
  if (cartOverlay) cartOverlay.addEventListener("click", closeCartDrawer);

  // Carta Fedeltà Toggle
  const fidelityToggle = document.getElementById("fidelity-card-toggle");
  if (fidelityToggle) {
    fidelityToggle.addEventListener("change", (e) => {
      state.fidelityDiscount = e.target.checked;
      updateCartUI();
    });
  }

  // Tasti Metodo di Pagamento
  const payCashBtn = document.getElementById("payMethodCash");
  const payPosBtn = document.getElementById("payMethodPos");
  if (payCashBtn && payPosBtn) {
    payCashBtn.addEventListener("click", () => setPaymentMethod("cash"));
    payPosBtn.addEventListener("click", () => setPaymentMethod("pos"));
  }

  // Input Contante Ricevuto
  const cashInput = document.getElementById("cashReceivedInput");
  if (cashInput) {
    cashInput.addEventListener("input", (e) => {
      state.cashGiven = parseFloat(e.target.value) || 0;
      updateChangeCalculation();
    });
  }

  // Tasti Rapidi Banconote Contanti
  const exactCashBtn = document.getElementById("cashExactBtn");
  if (exactCashBtn) {
    exactCashBtn.addEventListener("click", setExactCash);
  }

  const quickCashBtns = document.querySelectorAll(".btn-cash-quick[data-amount]");
  quickCashBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const amt = parseFloat(btn.dataset.amount);
      addCashAmount(amt);
    });
  });

  // Simulatore Transazione POS
  const posSimulateBtn = document.getElementById("posSimulateBtn");
  if (posSimulateBtn) {
    posSimulateBtn.addEventListener("click", simulatePosPayment);
  }

  // Checkout & Svuota Cassa
  const checkoutBtn = document.getElementById("checkoutBtn");
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", processCheckout);
  }

  const clearCartBtn = document.getElementById("btn-clear-cart");
  if (clearCartBtn) {
    clearCartBtn.addEventListener("click", clearCart);
  }

  // Modale Scontrino Fiscale
  const downloadPdfBtn = document.getElementById("downloadPdfReceiptBtn");
  if (downloadPdfBtn) {
    downloadPdfBtn.addEventListener("click", downloadReceiptPdf);
  }

  const printReceiptBtn = document.getElementById("printReceiptBtn");
  if (printReceiptBtn) {
    printReceiptBtn.addEventListener("click", () => {
      window.print();
    });
  }

  const shareReceiptBtn = document.getElementById("shareReceiptBtn");
  if (shareReceiptBtn) {
    shareReceiptBtn.addEventListener("click", shareReceipt);
  }

  const closeReceiptBtn = document.getElementById("closeReceiptBtn");
  if (closeReceiptBtn) {
    closeReceiptBtn.addEventListener("click", closeReceipt);
  }

  const receiptOverlay = document.getElementById("receiptOverlay");
  if (receiptOverlay) {
    receiptOverlay.addEventListener("click", closeReceipt);
  }

  // Chiusura Modale Dettagli
  const modalCloseBtn = document.getElementById("modal-close-btn");
  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeModal);

  const productModal = document.getElementById("product-modal");
  if (productModal) {
    productModal.addEventListener("click", (e) => {
      if (e.target === productModal) closeModal();
    });
  }
}

// ==========================================================================
// APPLICAZIONE DEI FILTRI & RENDERING CATALOGO
// ==========================================================================
function applyFilters() {
  let list = [...state.products];

  // 1. Ricerca
  if (state.searchQuery) {
    const q = state.searchQuery;
    list = list.filter(p => 
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.modelCode.toLowerCase().includes(q) ||
      p.barcode.includes(q) ||
      p.shelf.toLowerCase().includes(q) ||
      (p.sizes && p.sizes.toLowerCase().includes(q))
    );
  }

  // 2. Categoria
  if (state.selectedCategory !== "all") {
    list = list.filter(p => p.category === state.selectedCategory);
  }

  // 3. Taglia (valida per calzature)
  if (state.selectedSize !== "all") {
    list = list.filter(p => p.availableSizes && p.availableSizes.includes(state.selectedSize));
  }

  // 4. Brand
  if (state.selectedBrand !== "all") {
    list = list.filter(p => p.brand === state.selectedBrand);
  }

  // 5. Promo Volantino
  if (state.promoOnly) {
    list = list.filter(p => p.isPromo);
  }

  // 6. In Stock
  if (state.inStockOnly) {
    list = list.filter(p => p.stock > 0);
  }

  // 7. Ordinamento
  if (state.sortBy === "price-asc") {
    list.sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-desc") {
    list.sort((a, b) => b.price - a.price);
  } else if (state.sortBy === "discount") {
    list.sort((a, b) => {
      const discA = a.originalPrice ? (a.originalPrice - a.price) : 0;
      const discB = b.originalPrice ? (b.originalPrice - b.price) : 0;
      return discB - discA;
    });
  } else if (state.sortBy === "stock") {
    list.sort((a, b) => b.stock - a.stock);
  }

  state.filteredProducts = list;
  renderCatalog();
  renderStats();
}

function renderCatalog() {
  const grid = document.getElementById("products-grid");
  const emptyState = document.getElementById("empty-state");
  const resultsCount = document.getElementById("results-count");
  const catalogTitle = document.getElementById("catalog-title");

  if (resultsCount) {
    resultsCount.textContent = `${state.filteredProducts.length} referenze visualizzate`;
  }

  if (catalogTitle) {
    const catNames = {
      "all": "Tutti i Reparti Megastore",
      "calzature": "👟 Reparto Calzature & Scarpe",
      "abbigliamento": "👕 Reparto Moda, Abbigliamento & Valigeria",
      "profumeria": "✨ Reparto Bellezza, Cosmesi & Igiene",
      "casa": "🧼 Reparto Bucato, Detersivi & Cura Casa"
    };
    catalogTitle.textContent = catNames[state.selectedCategory] || "Catalogo Megastore";
  }

  if (state.filteredProducts.length === 0) {
    if (grid) grid.innerHTML = "";
    if (emptyState) emptyState.style.display = "block";
    return;
  }

  if (emptyState) emptyState.style.display = "none";

  if (grid) {
    grid.innerHTML = state.filteredProducts.map(p => {
      const badgeStoreClass = p.storeType === "globo" ? "badge-globo" : "badge-as";
      const promoBadge = p.isPromo ? `<span class="badge-promo">Offerta Volantino</span>` : "";
      
      const sizesHtml = p.sizes ? `
        <div class="product-sizes-pill">
          <strong>${p.sizes}</strong>
        </div>
      ` : "";

      const specsPills = p.specs ? p.specs.slice(0, 3).map(s => 
        `<span class="spec-tag">${escapeHtml(s)}</span>`
      ).join("") : "";

      return `
        <article class="product-card" data-id="${p.id}">
          <div class="card-badges">
            <span class="badge-store ${badgeStoreClass}">${p.storeSection}</span>
            ${promoBadge}
          </div>

          <div class="card-icon-area">
            <div class="card-icon-wrapper">
              ${getProductSvg(p.icon)}
            </div>
            <span class="card-shelf-badge">📍 ${p.shelf}</span>
          </div>

          <div class="card-info">
            <div class="product-brand">${escapeHtml(p.brand)}</div>
            <h3 class="product-name" title="${escapeHtml(p.name)}">${escapeHtml(p.name)}</h3>
            <div class="product-codes">
              <span>Mod: <strong>${p.modelCode}</strong></span> &bull; 
              <span>EAN: <strong>${p.barcode}</strong></span>
            </div>

            ${sizesHtml}

            <div class="specs-preview">
              ${specsPills}
            </div>

            <div class="product-pricing">
              <div class="price-container">
                <span class="price-current">€ ${p.price.toFixed(2).replace('.', ',')}</span>
                ${p.originalPrice ? `<span class="price-old">€ ${p.originalPrice.toFixed(2).replace('.', ',')}</span>` : ""}
              </div>
              <div class="stock-status ${p.stock > 5 ? 'stock-ok' : 'stock-low'}">
                ${p.stock > 0 ? `Disponibili: ${p.stock} pz` : 'Esaurito a banco'}
              </div>
            </div>

            <div class="card-actions">
              <button class="btn btn-secondary btn-sm" onclick="openProductModal(${p.id})">
                🔍 Scheda Articolo
              </button>
              <button class="btn btn-primary btn-sm" onclick="addToCart(${p.id})">
                🛒 Metti in Cassa
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }
}

function renderStats() {
  const statTotal = document.getElementById("stat-total");
  const statInstock = document.getElementById("stat-instock");
  const statPromo = document.getElementById("stat-promo");

  if (statTotal) statTotal.textContent = state.products.length;
  if (statInstock) {
    const totalPieces = state.products.reduce((acc, p) => acc + p.stock, 0);
    statInstock.textContent = `${totalPieces} pz`;
  }
  if (statPromo) {
    const promoCount = state.products.filter(p => p.isPromo).length;
    statPromo.textContent = `${promoCount} attive`;
  }
}

// ==========================================================================
// MODALE SCHEDA ARTICOLO & GUIDA ALLA VENDITA
// ==========================================================================
function openProductModal(id) {
  const p = state.products.find(item => item.id === id);
  if (!p) return;

  const modalBody = document.getElementById("modal-content");
  if (!modalBody) return;

  let specsRows = "";
  if (p.fullSpecs) {
    for (const [key, value] of Object.entries(p.fullSpecs)) {
      specsRows += `
        <tr>
          <td class="spec-prop">${escapeHtml(key)}</td>
          <td class="spec-val">${escapeHtml(value)}</td>
        </tr>
      `;
    }
  }

  modalBody.innerHTML = `
    <div class="modal-header-section">
      <div class="modal-icon-lg">
        ${getProductSvg(p.icon)}
      </div>
      <div class="modal-title-area">
        <span class="brand-badge ${p.storeType === 'globo' ? 'badge-globo' : 'badge-as'}">${p.storeSection}</span>
        <h2>${escapeHtml(p.name)}</h2>
        <div class="modal-subtitle">Codice: <strong>${p.modelCode}</strong> &bull; EAN Barcode: <strong>${p.barcode}</strong> &bull; ${p.shelf}</div>
      </div>
    </div>

    <div class="consultation-box">
      <h4>💡 Guida Addetto Vendite & Consiglio al Cliente</h4>
      <p>${escapeHtml(p.pitch)}</p>
    </div>

    <h3 style="font-size: 1rem; margin-top: 1.5rem; color: #fff;">Scheda Tecnica & Dati Articolo</h3>
    <table class="specs-table">
      <tbody>
        ${specsRows}
      </tbody>
    </table>

    <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-subtle); flex-wrap: wrap; gap: 1rem;">
      <div>
        <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase;">Prezzo Retail (IVA Inclusa)</div>
        <div style="font-size: 1.75rem; font-weight: 800; font-family: var(--font-mono); color: #34d399;">
          € ${p.price.toFixed(2).replace('.', ',')}
          ${p.originalPrice ? `<span style="font-size: 0.9rem; text-decoration: line-through; color: var(--text-dim); margin-left: 0.5rem;">€ ${p.originalPrice.toFixed(2).replace('.', ',')}</span>` : ''}
        </div>
      </div>

      <button class="btn btn-primary" onclick="addToCart(${p.id}); closeModal();">
        🛒 Batti in Cassa POS
      </button>
    </div>
  `;

  document.getElementById("product-modal").classList.add("open");
}

function closeModal() {
  const m = document.getElementById("product-modal");
  if (m) m.classList.remove("open");
}

function resetAllFilters() {
  state.searchQuery = "";
  state.selectedCategory = "all";
  state.selectedSize = "all";
  state.selectedBrand = "all";
  state.sortBy = "featured";
  state.promoOnly = false;
  state.inStockOnly = false;

  const searchInput = document.getElementById("search-input");
  if (searchInput) searchInput.value = "";
  const brandSelect = document.getElementById("brand-select");
  if (brandSelect) brandSelect.value = "all";
  const sortSelect = document.getElementById("sort-select");
  if (sortSelect) sortSelect.value = "featured";
  const promoToggle = document.getElementById("toggle-promo-only");
  if (promoToggle) promoToggle.checked = false;
  const stockToggle = document.getElementById("toggle-instock-only");
  if (stockToggle) stockToggle.checked = false;

  const catPills = document.querySelectorAll(".cat-pill");
  catPills.forEach(pill => pill.classList.toggle("active", pill.dataset.category === "all"));

  const sizeChips = document.querySelectorAll(".size-chip");
  sizeChips.forEach(chip => chip.classList.toggle("active", chip.dataset.size === "all"));

  applyFilters();
}

// ==========================================================================
// CARRELLO CASSA TOUCH & LOGICA POS
// ==========================================================================
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
  state.cashGiven = 0;
  state.posApproved = false;
  const cashInput = document.getElementById("cashReceivedInput");
  if (cashInput) cashInput.value = "";
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
  const drawerFooter = document.getElementById("cartDrawerFooter");

  const totalItems = state.cart.reduce((sum, item) => sum + item.quantity, 0);
  if (badge) badge.textContent = totalItems;

  if (state.cart.length === 0) {
    if (container) {
      container.innerHTML = `
        <div style="text-align: center; padding: 3rem 1.5rem; color: var(--text-dim);">
          <p style="font-size: 2rem; margin-bottom: 0.5rem;">🧾</p>
          <p style="font-weight: 700; color: var(--text-muted); font-size: 1rem;">Cassa Touch POS Vuota</p>
          <p style="font-size: 0.85rem; margin-top: 0.25rem;">Premi "Metti in Cassa" su qualsiasi articolo del megastore per battere lo scontrino.</p>
        </div>
      `;
    }
    if (drawerFooter) drawerFooter.classList.add("hidden");
    if (subtotalEl) subtotalEl.textContent = "€ 0,00";
    if (discountLine) discountLine.style.display = "none";
    if (ivaEl) ivaEl.textContent = "€ 0,00";
    if (totalEl) totalEl.textContent = "€ 0,00";
    return;
  }

  if (drawerFooter) drawerFooter.classList.remove("hidden");

  if (container) {
    container.innerHTML = state.cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${escapeHtml(item.name)}</h4>
          <p>€ ${item.price.toFixed(2).replace('.', ',')} &bull; EAN: ${item.barcode} &bull; ${item.shelf.split(' - ')[0]}</p>
        </div>
        <div class="cart-item-qty">
          <button class="qty-btn" onclick="updateCartQty(${item.id}, -1)" title="Riduci">-</button>
          <span class="qty-count">${item.quantity}</span>
          <button class="qty-btn" onclick="updateCartQty(${item.id}, 1)" title="Aumenta">+</button>
        </div>
      </div>
    `).join("");
  }

  let rawTotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discountAmount = 0;

  if (state.fidelityDiscount) {
    discountAmount = rawTotal * 0.10;
    if (discountLine) discountLine.style.display = "flex";
    if (discountEl) discountEl.textContent = `- € ${discountAmount.toFixed(2).replace('.', ',')}`;
  } else {
    if (discountLine) discountLine.style.display = "none";
  }

  const finalTotal = Math.max(0, rawTotal - discountAmount);
  const iva = finalTotal * (0.22 / 1.22);
  const subtotal = finalTotal - iva;

  if (subtotalEl) subtotalEl.textContent = `€ ${subtotal.toFixed(2).replace('.', ',')}`;
  if (ivaEl) ivaEl.textContent = `€ ${iva.toFixed(2).replace('.', ',')}`;
  if (totalEl) totalEl.textContent = `€ ${finalTotal.toFixed(2).replace('.', ',')}`;

  updateChangeCalculation();
}

function getCartFinalTotal() {
  let rawTotal = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  let discountAmount = state.fidelityDiscount ? (rawTotal * 0.10) : 0;
  return Math.max(0, rawTotal - discountAmount);
}

function setPaymentMethod(method) {
  state.paymentMethod = method;
  const payCashBtn = document.getElementById("payMethodCash");
  const payPosBtn = document.getElementById("payMethodPos");
  const cashBox = document.getElementById("cashPaymentBox");
  const posBox = document.getElementById("posPaymentBox");

  if (payCashBtn) payCashBtn.classList.toggle("active", method === "cash");
  if (payPosBtn) payPosBtn.classList.toggle("active", method === "pos");

  if (cashBox) cashBox.classList.toggle("hidden", method !== "cash");
  if (posBox) posBox.classList.toggle("hidden", method !== "pos");
}

function setExactCash() {
  const tot = getCartFinalTotal();
  state.cashGiven = tot;
  const cashInput = document.getElementById("cashReceivedInput");
  if (cashInput) cashInput.value = tot.toFixed(2);
  updateChangeCalculation();
}

function addCashAmount(amt) {
  state.cashGiven = (state.cashGiven || 0) + amt;
  const cashInput = document.getElementById("cashReceivedInput");
  if (cashInput) cashInput.value = state.cashGiven.toFixed(2);
  updateChangeCalculation();
}

function updateChangeCalculation() {
  const tot = getCartFinalTotal();
  const given = state.cashGiven || 0;
  const changeBox = document.getElementById("changeDueBox");
  const changeVal = document.getElementById("changeDueValue");

  if (!changeBox || !changeVal) return;

  if (given <= 0) {
    changeBox.className = "change-box info";
    changeVal.textContent = "€ 0,00";
    return;
  }

  if (given >= tot) {
    const change = given - tot;
    changeBox.className = "change-box success";
    changeVal.textContent = `€ ${change.toFixed(2).replace('.', ',')}`;
  } else {
    const missing = tot - given;
    changeBox.className = "change-box warning";
    changeVal.textContent = `Mancano € ${missing.toFixed(2).replace('.', ',')}`;
  }
}

function simulatePosPayment() {
  const btn = document.getElementById("posSimulateBtn");
  const statusText = document.getElementById("posStatusText");

  if (btn) btn.disabled = true;
  if (statusText) statusText.textContent = "📶 Avvicinare carta o smartphone al terminale POS...";

  setTimeout(() => {
    if (statusText) statusText.textContent = "⏳ Lettura chip NFC / Contattless in corso...";
  }, 900);

  setTimeout(() => {
    state.posApproved = true;
    if (statusText) {
      statusText.innerHTML = `✅ <strong style="color: #34d399;">TRANSAZIONE APPROVATA!</strong> AUTH #RH-${Math.floor(10000 + Math.random() * 90000)}`;
    }
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = "✅ Transazione Eseguita Con Successo";
    }
  }, 2200);
}

function openCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");
  if (drawer) drawer.classList.add("open");
  if (overlay) overlay.classList.add("open");
}

function closeCartDrawer() {
  const drawer = document.getElementById("cart-drawer");
  const overlay = document.getElementById("cart-drawer-overlay");
  if (drawer) drawer.classList.remove("open");
  if (overlay) overlay.classList.remove("open");
}

// ==========================================================================
// EMISSIONE SCONTRINO FISCALE TERMICO 80MM
// ==========================================================================
function processCheckout() {
  if (state.cart.length === 0) {
    alert("Attenzione: batti almeno un articolo prima di completare la vendita.");
    return;
  }

  const total = getCartFinalTotal();

  if (state.paymentMethod === "cash") {
    if ((state.cashGiven || 0) < total) {
      alert(`Contante insufficiente! L'importo dovuto è di € ${total.toFixed(2).replace('.', ',')}`);
      return;
    }
  }

  // Scarico scorte
  state.cart.forEach(item => {
    const prod = state.products.find(p => p.id === item.id);
    if (prod) {
      prod.stock = Math.max(0, prod.stock - item.quantity);
    }
  });

  const now = new Date();
  const dateStr = now.toLocaleDateString("it-IT") + " - " + now.toLocaleTimeString("it-IT", { hour: '2-digit', minute: '2-digit' });
  const docId = "#RH-" + Math.floor(100000 + Math.random() * 900000);
  const authCode = "#AUTH-RH" + Math.floor(1000 + Math.random() * 9000);
  const iva = total * (0.22 / 1.22);
  const subtotal = total - iva;

  state.lastCompletedSale = {
    docId: docId,
    date: dateStr,
    items: JSON.parse(JSON.stringify(state.cart)),
    subtotal: subtotal,
    discount: state.fidelityDiscount ? (state.cart.reduce((s, i) => s + (i.price * i.quantity), 0) * 0.10) : 0,
    iva: iva,
    total: total,
    paymentType: state.paymentMethod === "cash" ? "CONTANTI" : "POS CONTACTLESS",
    cashGiven: state.paymentMethod === "cash" ? state.cashGiven : undefined,
    change: state.paymentMethod === "cash" ? (state.cashGiven - total) : undefined,
    authCode: state.paymentMethod === "pos" ? authCode : undefined
  };

  // Svuota cassa e aggiorna viste
  state.cart = [];
  state.cashGiven = 0;
  state.posApproved = false;
  const cashInput = document.getElementById("cashReceivedInput");
  if (cashInput) cashInput.value = "";
  const posBtn = document.getElementById("posSimulateBtn");
  if (posBtn) btnText = "📶 Avvicina Carta / Simula Transazione POS";
  
  closeCartDrawer();
  updateCartUI();
  applyFilters();

  showReceiptModal(state.lastCompletedSale);
}

function showReceiptModal(sale) {
  const modal = document.getElementById("receiptModal");
  if (!modal) return;

  document.getElementById("receiptDate").textContent = sale.date;
  document.getElementById("receiptDocId").textContent = "DOC " + sale.docId;
  document.getElementById("receiptSubtotalAmount").textContent = "€ " + sale.subtotal.toFixed(2).replace('.', ',');
  document.getElementById("receiptIvaAmount").textContent = "€ " + sale.iva.toFixed(2).replace('.', ',');
  document.getElementById("receiptTotalAmount").textContent = "€ " + sale.total.toFixed(2).replace('.', ',');

  const loyaltyRow = document.getElementById("receiptLoyaltyRow");
  if (loyaltyRow) {
    if (sale.discount > 0) {
      loyaltyRow.style.display = "flex";
      document.getElementById("receiptLoyaltyAmount").textContent = "- € " + sale.discount.toFixed(2).replace('.', ',');
    } else {
      loyaltyRow.style.display = "none";
    }
  }

  document.getElementById("receiptPaymentType").textContent = sale.paymentType;
  const cashRow = document.getElementById("receiptCashRow");
  const changeRow = document.getElementById("receiptChangeRow");
  const posRow = document.getElementById("receiptPosRow");

  if (sale.paymentType === "CONTANTI") {
    if (cashRow) cashRow.style.display = "flex";
    if (changeRow) changeRow.style.display = "flex";
    if (posRow) posRow.style.display = "none";
    document.getElementById("receiptCashReceived").textContent = "€ " + sale.cashGiven.toFixed(2).replace('.', ',');
    document.getElementById("receiptChangeAmount").textContent = "€ " + sale.change.toFixed(2).replace('.', ',');
  } else {
    if (cashRow) cashRow.style.display = "none";
    if (changeRow) changeRow.style.display = "none";
    if (posRow) posRow.style.display = "flex";
    document.getElementById("receiptPosAuth").textContent = sale.authCode;
  }

  const container = document.getElementById("receiptItemsContainer");
  if (container) {
    container.innerHTML = sale.items.map(item => `
      <div class="receipt-item-block">
        <div class="receipt-item-line">
          <span>${escapeHtml(item.name.substring(0, 24))}</span>
          <span>€ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
        </div>
        <div class="receipt-item-sub">
          ${item.quantity} pz x € ${item.price.toFixed(2).replace('.', ',')} [IVA 22%] &bull; EAN: ${item.barcode}
        </div>
      </div>
    `).join("");
  }

  modal.classList.remove("hidden");
}

function closeReceipt() {
  const modal = document.getElementById("receiptModal");
  if (modal) modal.classList.add("hidden");
}

// ==========================================================================
// GENERATORE SCONTRINO PDF VETTORIALE PURO (80MM ROLL FORMAT)
// ==========================================================================
function generateRetailReceiptPdfBlob(sale) {
  if (!sale) return null;

  const storeName = "RETAILHUB MEGASTORE ITALIA";
  const storeAddr = "Punto Vendita: Citta' Sant'Angelo (PE)";
  const operator = "Operatore: Valentyn Haidukov (Cassa 01)";

  const lines = [
    "================================",
    "    " + storeName,
    storeAddr,
    "Data: " + sale.date,
    operator,
    "RT Matricola: RT9928174620",
    sale.docId,
    "================================",
    ""
  ];

  sale.items.forEach(item => {
    const title = item.name.substring(0, 22);
    const priceStr = "EUR " + (item.price * item.quantity).toFixed(2);
    const pad = Math.max(1, 32 - title.length - priceStr.length);
    lines.push(title + " ".repeat(pad) + priceStr);
    lines.push("  " + item.quantity + " pz x EUR " + item.price.toFixed(2) + " [IVA 22%]");
    lines.push("  EAN: " + item.barcode);
  });

  lines.push("");
  lines.push("--------------------------------");
  const subStr = "EUR " + sale.subtotal.toFixed(2);
  lines.push("IMPONIBILE:       " + " ".repeat(Math.max(1, 32 - 18 - subStr.length)) + subStr);

  if (sale.discount > 0) {
    const discStr = "- EUR " + sale.discount.toFixed(2);
    lines.push("SCONTO FEDELTA':  " + " ".repeat(Math.max(1, 32 - 18 - discStr.length)) + discStr);
  }

  const ivaStr = "EUR " + sale.iva.toFixed(2);
  lines.push("IVA 22% SCORPORO: " + " ".repeat(Math.max(1, 32 - 18 - ivaStr.length)) + ivaStr);

  const totStr = "EUR " + sale.total.toFixed(2);
  lines.push("TOTALE COMPLESSIVO: " + " ".repeat(Math.max(1, 32 - 20 - totStr.length)) + totStr);
  lines.push("PAGAMENTO: " + sale.paymentType);

  if (sale.paymentType === "CONTANTI" && sale.cashGiven !== undefined) {
    lines.push("RICEVUTO: EUR " + sale.cashGiven.toFixed(2));
    lines.push("RESTO:    EUR " + sale.change.toFixed(2));
  } else if (sale.authCode) {
    lines.push("CODICE AUTH POS: " + sale.authCode);
  }

  lines.push("================================");
  lines.push("Garanzia Legale 24 Mesi (D.Lgs 206/05)");
  lines.push("Reso entro 30gg con scontrino e cartellino");
  lines.push("||||| ||||||| |||| |||||||| ||||");
  lines.push("GRAZIE PER LA VISITA!");
  lines.push("hv94.github.io/retail-store-catalog");

  const pageHeight = Math.max(440, lines.length * 15 + 90);
  const startY = pageHeight - 35;

  let stream = "BT\n/F1 9 Tf\n14 TL\n18 " + startY + " Td\n";
  lines.forEach(l => {
    const esc = l.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
    stream += "(" + esc + ") '\n";
  });
  stream += "ET\n";

  const streamBytes = new TextEncoder().encode(stream);
  const streamLen = streamBytes.length;

  let body = "%PDF-1.4\n";
  const offsets = [0];

  function addObj(str) {
    offsets.push(new TextEncoder().encode(body).length);
    body += str;
  }

  addObj("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");
  addObj("2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n");
  addObj("3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 227 " + pageHeight + "] /Contents 4 0 R /Resources << /Font << /F1 5 0 R >> >> >>\nendobj\n");
  addObj("4 0 obj\n<< /Length " + streamLen + " >>\nstream\n" + stream + "\nendstream\nendobj\n");
  addObj("5 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Courier >>\nendobj\n");

  const startxref = new TextEncoder().encode(body).length;
  let xref = "xref\n0 6\n0000000000 65535 f \n";
  for (let i = 1; i <= 5; i++) {
    xref += String(offsets[i]).padStart(10, "0") + " 00000 n \n";
  }
  const trailer = "trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n" + startxref + "\n%%EOF\n";

  return new Blob([new TextEncoder().encode(body + xref + trailer)], { type: "application/pdf" });
}

function downloadReceiptPdf() {
  if (!state.lastCompletedSale) {
    alert("Nessun dato di scontrino recente da scaricare!");
    return;
  }

  const pdfBlob = generateRetailReceiptPdfBlob(state.lastCompletedSale);
  if (!pdfBlob) return;

  const fileName = "scontrino_retailhub_" + Date.now() + ".pdf";
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

  const btn = document.getElementById("downloadPdfReceiptBtn");
  if (btn) {
    const orig = btn.innerHTML;
    btn.innerHTML = "⏳ Download in corso...";
    btn.disabled = true;
    setTimeout(() => {
      btn.innerHTML = orig;
      btn.disabled = false;
    }, 2000);
  }

  if (isMobile && typeof navigator.share === "function" && typeof File !== "undefined") {
    try {
      const file = new File([pdfBlob], fileName, { type: "application/pdf" });
      if (navigator.canShare && navigator.canShare({ files: [file] })) {
        navigator.share({
          files: [file],
          title: "Scontrino Fiscale RetailHub",
          text: `Scontrino Fiscale ${state.lastCompletedSale.docId} emesso da RetailHub Megastore.`
        }).catch(() => fallbackDownload(pdfBlob, fileName));
        return;
      }
    } catch (e) {
      console.log("Fallback to direct download", e);
    }
  }

  fallbackDownload(pdfBlob, fileName);
}

function fallbackDownload(blob, fileName) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

function shareReceipt() {
  if (!state.lastCompletedSale) return;
  const s = state.lastCompletedSale;
  const summary = `🧾 Scontrino RetailHub Megastore ${s.docId}\nData: ${s.date}\nArticoli: ${s.items.length} pezzi\nTotale: € ${s.total.toFixed(2).replace('.', ',')} (${s.paymentType})\nPunto Vendita: Città Sant'Angelo (PE)\nhttps://hv94.github.io/retail-store-catalog/`;

  if (navigator.share) {
    navigator.share({
      title: "Scontrino Fiscale RetailHub",
      text: summary,
      url: "https://hv94.github.io/retail-store-catalog/"
    }).catch(e => console.log("Share dismissed", e));
  } else {
    navigator.clipboard.writeText(summary).then(() => {
      alert("Riepilogo scontrino copiato negli appunti!");
    }).catch(() => {
      alert(summary);
    });
  }
}

// Esposizione per inline onclick
window.openProductModal = openProductModal;
window.closeModal = closeModal;
window.resetAllFilters = resetAllFilters;
window.addToCart = addToCart;
window.updateCartQty = updateCartQty;
window.setPaymentMethod = setPaymentMethod;
window.setExactCash = setExactCash;
window.addCashAmount = addCashAmount;
window.simulatePosPayment = simulatePosPayment;
window.processCheckout = processCheckout;
window.clearCart = clearCart;
window.downloadReceiptPdf = downloadReceiptPdf;
window.closeReceipt = closeReceipt;
window.shareReceipt = shareReceipt;
