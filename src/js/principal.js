// Dans src/js/principal.js

import "../styles/global.css"; // Importer le CSS global
import "../components/pagination.css"; // Importer le CSS pour la pagination
// import "../components/pagination.js"; // Importer la logique JS de la pagination
import '@/components/pagination.js';  // Utilisation de l'alias '@' pour simplifier l'import


// Le preload
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (!preloader) return; // sécurité si l’élément est absent

  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 600);
  }, 2000);
});

// La barre de navigation
function toggleMenu(button) {
  const navbar = document.querySelector(".navbar");
  const overlay = document.querySelector(".menu-overlay");
  const body = document.body;

  navbar.classList.toggle("active");
  button.classList.toggle("active");
  overlay.style.display = navbar.classList.contains("active")
    ? "block"
    : "none";
  body.classList.toggle("menu-open", navbar.classList.contains("active"));
}

function closeMenu() {
  const navbar = document.querySelector(".navbar");
  const hamburger = document.querySelector(".hamburger");
  const overlay = document.querySelector(".menu-overlay");
  document.body.classList.remove("menu-open");

  navbar.classList.remove("active");
  hamburger.classList.remove("active");
  overlay.style.display = "none";
}
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");
const overlay = document.querySelector(".menu-overlay");

hamburger.addEventListener("click", () => {
  toggleMenu(hamburger);
});
/* le bouton hambourger */
function nextSlide() {
  alert("Navigating to the next slide...");
}

function toggleMenu() {
  const navbar = document.querySelector(".navbar");
  navbar.classList.toggle("active");
}

// slide

function nextSlide() {
  alert("Navigating to the next slide...");
}
document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".service-card").forEach((card, i) => {
    gsap.to(card, {
      scrollTrigger: {
        trigger: card,
        start: "top 80%",
        toggleActions: "play none none none",
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay: i * 0.2,
      ease: "power2.out",
    });
  });
});

const cards = document.querySelectorAll(".state-card");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.animationPlayState = "running";
      }
    });
  },
  { threshold: 0.2 }
);

cards.forEach((card) => {
  observer.observe(card);
  card.style.animationPlayState = "paused"; // ne démarre pas immédiatement
});

// envoie de message et message de succes

const response = await fetch(form.action, {
  method: "POST",
  body: formData,
  headers: {
    Accept: "application/json",
  },
});

if (response.ok) {
  try {
    const data = await response.json(); // Si c’est bien un JSON
    console.log("Réponse JSON:", data);
    form.reset();
    successMsg.classList.remove("hidden");
  } catch (e) {
    console.warn("Pas de JSON valide retourné :", e);
    form.reset();
    successMsg.classList.remove("hidden");
  }
} else {
  const errorText = await response.text(); // Voir le contenu brut de la réponse
  console.error("Erreur HTTP:", response.status, errorText);
  alert("Erreur. Veuillez réessayer.");
}
// le bouton pour soumettre

// const btnSubmit = document.getElementById("btnSubmit");

closeBtn.addEventListener("click", () => {
  successMsg.classList.add("hidden");
});

// animation conatact

document.addEventListener("DOMContentLoaded", () => {
  const elementsToAnimate = document.querySelectorAll(
    ".contact-form-wrapper, .map-wrapper"
  );

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-up");
          obs.unobserve(entry.target); // Stop observing once visible
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  elementsToAnimate.forEach((el) => observer.observe(el));
});
// JavaScript pour rendre les FAQ interactives (afficher/masquer les réponses)
document.addEventListener("DOMContentLoaded", function () {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", function () {
      item.classList.toggle("active");
    });
  });
});
