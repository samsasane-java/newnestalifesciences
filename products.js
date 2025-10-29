// window.location.href = `product.html?id=${product.id}`;
// window.addEventListener("load", () => {
//   renderProductDetail();
// });

// const imageWidth = images[0].offsetWidth;

// window.addEventListener("load", renderProductDetail);

// const products = [
//   {
//     id: "Vednamukti",
//     name: "Vednamukti Oil",
//     price: 130,
//     images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
//     description:
//       "Experience natural pain relief with Vednamukti Oil — a potent Ayurvedic blend of Nilgiri Oil, Menthol Crystals, Mahanarayan Oil, Clove Oil, Dashmool, and Gandhapura. Formulated to soothe joint pain, backaches, sore muscles, and stiffness, it absorbs quickly without leaving a greasy residue.",
//     ingredients: [
//       "Nilgiri Oil",
//       "Menthol Crystals",
//       "Mahanarayan Oil",
//       "Clove Oil",
//       "Dashmool",
//       "Gandhapura",
//     ],
//     benefits: [
//       "Relieves joint stiffness",
//       "Reduces inflammation",
//       "Promotes natural healing",
//       "Non-greasy & fast-absorbing",
//     ],
//   },
//   {
//     id: "Cough Relief",
//     name: "Cough Care Juice",
//     price: 144,
//     images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
//     description:
//       "Soothe your throat and support respiratory health with Cough Care Juice — a herbal formulation enriched with Tulsi, Mulethi, and Honey. Ideal for dry and wet cough, it helps clear congestion and boosts immunity naturally.",
//     ingredients: ["Tulsi", "Mulethi", "Honey", "Pippali", "Ginger", "Vasaka"],
//     benefits: [
//       "Soothes sore throat",
//       "Relieves dry and wet cough",
//       "Supports respiratory health",
//       "Boosts natural immunity",
//     ],
//   },
//   {
//     id: "body gain",
//     name: "Body Gain Juice (250 ml)",
//     price: 199,
//     images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
//     description:
//       "Build strength naturally with this 100% herbal tonic powered by Ashwagandha, Shatavari, Safed Musli, Aloe Vera, and Gokhru. This Ayurvedic blend promotes muscle gain, enhances stamina, and supports hormonal balance while improving endurance, recovery, and metabolism. Rich in adaptogens and free from chemicals, it’s a safe, FSSAI-certified solution for holistic fitness.",
//     ingredients: [
//       "Ashwagandha",
//       "Shatavari",
//       "Safed Musli",
//       "Aloe Vera",
//       "Gokhru",
//     ],
//     benefits: [
//       "100% Herbal & Ayurvedic",
//       "Boosts Muscle Gain & Stamina",
//       "Enhances Mental Focus & Recovery",
//       "Balances Hormones Naturally",
//       "Improves Metabolism & Energy Levels",
//     ],
//   },
//   {
//     id: "skin and hair",
//     name: "Skin & Hair Care Juice (250 ml)",
//     price: 199,
//     images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
//     description:
//       "Glow from within with Nesta Life Sciences Skin & Hair Care Juice — a natural Ayurvedic blend of Neem, Aloe Vera, Haldi, Haritaki, and Manjistha. Rich in antioxidants, Omega-3s, and Vitamins C & E, it helps detoxify, boost collagen, and protect against sun and pollution. FSSAI certified, GMP manufactured, and free from chemicals, it’s your daily ritual for radiant skin and healthy hair.",
//     ingredients: ["Neem", "Aloe Vera", "Haldi", "Haritaki", "Manjistha"],
//     benefits: [
//       "100% Ayurvedic & Natural",
//       "Detoxifies from Within",
//       "Promotes Radiant Skin",
//       "Strengthens Hair Roots",
//       "Protects Against Sun & Pollution",
//     ],
//   },
//   {
//     id: "body detox",
//     name: "Detox Juice (250 ml)",
//     price: 199,
//     images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
//     description:
//       "Cleanse and energize with Nest Life Sciences Detox Juice — a powerful Ayurvedic blend of 20+ herbs including Green Tea, Amla, Aloe Vera, Ashwagandha, and Moringa. Designed to naturally regulate blood sugar, support liver health, and flush out toxins, this daily tonic boosts immunity, improves digestion, and promotes radiant skin and hair. Rich in Vitamin C and antioxidants, it’s your go-to ritual for full-body wellness. FSSAI certified, GMP manufactured, and free from chemicals.",
//     ingredients: [
//       "Green Tea, Amla, Bahada, Harda ",
//       "Fenugreek, Methi Dhana",
//       "Aloe Vera, Korphad, Noni",
//       "Ashwagandha, Gokhru, Giloy",
//       "Tulsi, Ginger, Ajma, Hing, Black Salt",
//       "Caricacaao, Moringa",
//     ],
//     benefits: [
//       "Regulates Blood Sugar Levels",
//       "Detoxifies the Liver and Body",
//       "Boosts Immunity & Digestion",
//       "Promotes Healthy Hair and Glowing Skin",
//       "Rich in Vitamin C & Antioxidants",
//       "Protects Against Cell & Liver Damage",
//       "Improves Blood Flow and Circulation",
//     ],
//   },
// ];

const products = [
  {
    id: "Vednamukti",
    name: "Vednamukti Oil",
    price: 130,
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    description:
      "Experience natural pain relief with Vednamukti Oil — a potent Ayurvedic blend of Nilgiri Oil, Menthol Crystals, Mahanarayan Oil, Clove Oil, Dashmool, and Gandhapura. Formulated to soothe joint pain, backaches, sore muscles, and stiffness, it absorbs quickly without leaving a greasy residue.",
    ingredients: [
      {
        name: "Nilgiri Oil",
        description:
          "Anti-inflammatory and analgesic; relieves muscle and joint pain.",
      },
      {
        name: "Menthol Crystals",
        description: "Provides cooling relief and reduces pain perception.",
      },
      {
        name: "Mahanarayan Oil",
        description: "Traditional Ayurvedic oil for arthritis and stiffness.",
      },
      {
        name: "Clove Oil",
        description: "Natural anesthetic and antiseptic; reduces inflammation.",
      },
      {
        name: "Dashmool",
        description: "Ten-root blend that supports musculoskeletal health.",
      },
      {
        name: "Gandhapura",
        description:
          "Contains methyl salicylate; acts as a natural pain reliever.",
      },
    ],
    benefits: [
      "Relieves joint stiffness",
      "Reduces inflammation",
      "Promotes natural healing",
      "Non-greasy & fast-absorbing",
    ],
  },
  {
    id: "Cough Relief",
    name: "Cough Care Juice",
    price: 144,
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    description:
      "Soothe your throat and support respiratory health with Cough Care Juice — a herbal formulation enriched with Tulsi, Mulethi, and Honey. Ideal for dry and wet cough, it helps clear congestion and boosts immunity naturally.",
    ingredients: [
      {
        name: "Tulsi",
        description: "Expectorant and immunity booster; clears mucus.",
      },
      {
        name: "Mulethi",
        description: "Soothes throat and reduces inflammation.",
      },
      {
        name: "Honey",
        description: "Coats throat and suppresses cough naturally.",
      },
      {
        name: "Pippali",
        description: "Stimulates digestion and clears respiratory blockages.",
      },
      {
        name: "Ginger",
        description: "Reduces throat irritation and improves circulation.",
      },
      {
        name: "Vasaka",
        description: "Bronchodilator and expectorant; eases breathing.",
      },
    ],
    benefits: [
      "Soothes sore throat",
      "Relieves dry and wet cough",
      "Supports respiratory health",
      "Boosts natural immunity",
    ],
  },
  {
    id: "body gain",
    name: "Body Gain Juice (250 ml)",
    price: 199,
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    description:
      "Build strength naturally with this 100% herbal tonic powered by Ashwagandha, Shatavari, Safed Musli, Aloe Vera, and Gokhru. This Ayurvedic blend promotes muscle gain, enhances stamina, and supports hormonal balance while improving endurance, recovery, and metabolism. Rich in adaptogens and free from chemicals, it’s a safe, FSSAI-certified solution for holistic fitness.",
    ingredients: [
      {
        name: "Ashwagandha",
        description: "Boosts strength, stamina, and stress resilience.",
      },
      {
        name: "Shatavari",
        description: "Supports endurance and hormonal balance.",
      },
      {
        name: "Safed Musli",
        description: "Enhances muscle growth and energy.",
      },
      {
        name: "Aloe Vera",
        description: "Hydrates and aids nutrient absorption.",
      },
      {
        name: "Gokhru",
        description: "Improves physical performance and vitality.",
      },
    ],
    benefits: [
      "100% Herbal & Ayurvedic",
      "Boosts Muscle Gain & Stamina",
      "Enhances Mental Focus & Recovery",
      "Balances Hormones Naturally",
      "Improves Metabolism & Energy Levels",
    ],
  },
  {
    id: "skin and hair",
    name: "Skin & Hair Care Juice (250 ml)",
    price: 199,
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    description:
      "Glow from within with Nesta Life Sciences Skin & Hair Care Juice — a natural Ayurvedic blend of Neem, Aloe Vera, Haldi, Haritaki, and Manjistha. Rich in antioxidants, Omega-3s, and Vitamins C & E, it helps detoxify, boost collagen, and protect against sun and pollution. FSSAI certified, GMP manufactured, and free from chemicals, it’s your daily ritual for radiant skin and healthy hair.",
    ingredients: [
      { name: "Neem", description: "Purifies blood and supports clear skin." },
      {
        name: "Aloe Vera",
        description: "Hydrates and promotes collagen production.",
      },
      {
        name: "Haldi",
        description: "Anti-inflammatory and brightens skin tone.",
      },
      { name: "Haritaki", description: "Detoxifies and rejuvenates skin." },
      { name: "Manjistha", description: "Blood purifier; enhances skin glow." },
    ],
    benefits: [
      "100% Ayurvedic & Natural",
      "Detoxifies from Within",
      "Promotes Radiant Skin",
      "Strengthens Hair Roots",
      "Protects Against Sun & Pollution",
    ],
  },
  {
    id: "body detox",
    name: "Detox Juice (250 ml)",
    price: 199,
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    description:
      "Cleanse and energize with Nest Life Sciences Detox Juice — a powerful Ayurvedic blend of 20+ herbs including Green Tea, Amla, Aloe Vera, Ashwagandha, and Moringa. Designed to naturally regulate blood sugar, support liver health, and flush out toxins, this daily tonic boosts immunity, improves digestion, and promotes radiant skin and hair. Rich in Vitamin C and antioxidants, it’s your go-to ritual for full-body wellness. FSSAI certified, GMP manufactured, and free from chemicals.",
    ingredients: [
      {
        name: "Green Tea",
        description: "Rich in antioxidants; supports metabolism and detox.",
      },
      {
        name: "Amla",
        description: "High in Vitamin C; boosts immunity and skin health.",
      },
      {
        name: "Bahada",
        description:
          "Cleanses digestive tract and supports respiratory health.",
      },
      { name: "Harda", description: "Promotes digestion and detoxification." },
      {
        name: "Fenugreek",
        description: "Regulates blood sugar and supports liver function.",
      },
      {
        name: "Methi Dhana",
        description: "Improves digestion and metabolic health.",
      },
      {
        name: "Aloe Vera",
        description: "Hydrates and aids nutrient absorption.",
      },
      {
        name: "Korphad",
        description: "Supports skin health and detoxification.",
      },
      { name: "Noni", description: "Aids digestion and cellular repair." },
      {
        name: "Ashwagandha",
        description: "Adaptogen; boosts immunity and stamina.",
      },
      {
        name: "Gokhru",
        description: "Supports urinary and reproductive health.",
      },
      { name: "Giloy", description: "Boosts immunity and fights infections." },
      {
        name: "Tulsi",
        description: "Clears mucus and supports respiratory health.",
      },
      { name: "Ginger", description: "Improves digestion and circulation." },
      {
        name: "Ajma",
        description: "Relieves bloating and supports digestion.",
      },
      { name: "Hing", description: "Reduces gas and improves gut health." },
      {
        name: "Black Salt",
        description: "Enhances digestion and mineral balance.",
      },
      {
        name: "Caricacaao",
        description: "Rich in enzymes; supports liver and skin health.",
      },
      {
        name: "Moringa",
        description: "Nutrient-dense; supports detox and immunity.",
      },
    ],
    benefits: [
      "Regulates Blood Sugar Levels",
      "Detoxifies the Liver and Body",
      "Boosts Immunity & Digestion",
      "Promotes Healthy Hair and Glowing Skin",
      "Rich in Vitamin C & Antioxidants",
      "Protects Against Cell & Liver Damage",
      "Improves Blood Flow and Circulation",
    ],
  },
];

function enableSwipe(wrapper) {
  const windowEl = wrapper.querySelector(".carousel-window");
  let startX = 0;

  windowEl.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  windowEl.addEventListener("touchend", (e) => {
    const endX = e.changedTouches[0].clientX;
    const delta = endX - startX;

    if (Math.abs(delta) > 50) {
      const direction = delta > 0 ? -1 : 1;
      moveSlide(
        wrapper.querySelector(direction === -1 ? ".left-btn" : ".right-btn"),
        direction
      );
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderProductDetail();
  setTimeout(() => {
    document.querySelectorAll(".carousel-wrapper").forEach(enableSwipe);
  }, 100); // wait for DOM to render
});

function updateNavButtons(wrapper) {
  const windowEl = wrapper.querySelector(".carousel-window");
  const leftBtn = wrapper.querySelector(".left-btn");
  const rightBtn = wrapper.querySelector(".right-btn");

  const maxScroll = windowEl.scrollWidth - windowEl.clientWidth;
  leftBtn.disabled = windowEl.scrollLeft <= 0;
  rightBtn.disabled = windowEl.scrollLeft >= maxScroll - 1;
}

document.querySelectorAll(".carousel-window").forEach((el) => {
  el.addEventListener("scroll", () => {
    updateNavButtons(el.closest(".carousel-wrapper"));
  });
});
