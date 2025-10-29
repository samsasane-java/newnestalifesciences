// window.location.href = `product.html?id=${product.id}`;
// window.addEventListener("load", () => {
//   renderProductDetail();
// });

// const imageWidth = images[0].offsetWidth;

// window.addEventListener("load", renderProductDetail);

const products = [
  {
    id: "Vednamukti",
    name: "Vednamukti Oil",
    price: 130,
    images: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    description:
      "Experience natural pain relief with Vednamukti Oil — a potent Ayurvedic blend of Nilgiri Oil, Menthol Crystals, Mahanarayan Oil, Clove Oil, Dashmool, and Gandhapura. Formulated to soothe joint pain, backaches, sore muscles, and stiffness, it absorbs quickly without leaving a greasy residue.",
    ingredients: [
      "Nilgiri Oil",
      "Menthol Crystals",
      "Mahanarayan Oil",
      "Clove Oil",
      "Dashmool",
      "Gandhapura",
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
    ingredients: ["Tulsi", "Mulethi", "Honey", "Pippali", "Ginger", "Vasaka"],
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
      "Ashwagandha",
      "Shatavari",
      "Safed Musli",
      "Aloe Vera",
      "Gokhru",
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
    ingredients: ["Neem", "Aloe Vera", "Haldi", "Haritaki", "Manjistha"],
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
      "Green Tea, Amla, Bahada, Harda ",
      "Fenugreek, Methi Dhana",
      "Aloe Vera, Korphad, Noni",
      "Ashwagandha, Gokhru, Giloy",
      "Tulsi, Ginger, Ajma, Hing, Black Salt",
      "Caricacaao, Moringa",
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
