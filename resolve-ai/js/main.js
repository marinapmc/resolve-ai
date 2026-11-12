document.addEventListener("DOMContentLoaded", () => {
  /* Menu mobile (hambúrguer) */
  const navToggle = document.getElementById("navToggle");
  const navLinks = document.getElementById("navLinks");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      const isOpen = navLinks.classList.toggle("open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
      navToggle.setAttribute(
        "aria-label",
        isOpen ? "Fechar menu" : "Abrir menu",
      );
      navToggle
        .querySelector("use")
        ?.setAttribute("href", isOpen ? "#icon-close" : "#icon-menu");
    });
  }

  /* Carrossel de profissionais (Home) */
  const carousel = document.getElementById("carousel");
  const prevBtn = document.getElementById("carouselPrev");
  const nextBtn = document.getElementById("carouselNext");

  if (carousel && prevBtn && nextBtn) {
    const scrollAmount = 240;
    prevBtn.addEventListener("click", () =>
      carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" }),
    );
    nextBtn.addEventListener("click", () =>
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" }),
    );
  }

  /* Tabs genéricas (usadas em checkout e outras páginas) */
  document.querySelectorAll("[data-tabs]").forEach((tabGroup) => {
    const buttons = tabGroup.querySelectorAll(".tab-btn");
    const panels = tabGroup.querySelectorAll("[data-tab-panel]");

    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        buttons.forEach((b) => b.classList.remove("active"));
        panels.forEach((p) => p.classList.add("hidden"));

        btn.classList.add("active");
        const target = tabGroup.querySelector(
          `[data-tab-panel="${btn.dataset.tab}"]`,
        );
        if (target) target.classList.remove("hidden");
      });
    });
  });

  /* Toggle do painel de filtros no mobile (Catálogo) */
  const filterToggle = document.getElementById("filterToggle");
  const filterSidebar = document.getElementById("filterSidebar");
  const filterClose = document.getElementById("filterClose");
  const filterOverlay = document.getElementById("filterOverlay");

  const openFilters = () => {
    filterSidebar?.classList.add("open");
    filterOverlay?.classList.add("open");
  };
  const closeFilters = () => {
    filterSidebar?.classList.remove("open");
    filterOverlay?.classList.remove("open");
  };

  filterToggle?.addEventListener("click", openFilters);
  filterClose?.addEventListener("click", closeFilters);
  filterOverlay?.addEventListener("click", closeFilters);

  /* Seleção visual de forma de pagamento (Checkout) */
  document.querySelectorAll(".payment-option").forEach((option) => {
    option.addEventListener("click", () => {
      document
        .querySelectorAll(".payment-option")
        .forEach((o) => o.classList.remove("selected"));
      option.classList.add("selected");
      const radio = option.querySelector('input[type="radio"]');
      if (radio) radio.checked = true;

      const targetId = option.dataset.target;
      if (targetId) {
        document
          .querySelectorAll(".payment-panel")
          .forEach((panel) => panel.classList.add("hidden"));
        document.getElementById(targetId)?.classList.remove("hidden");
      }
    });
  });

  /* Toggle de disponibilidade (Painel do Prestador) */
  const availabilityToggle = document.getElementById("availabilityToggle");
  if (availabilityToggle) {
    availabilityToggle.addEventListener("change", () => {
      const label = document.getElementById("availabilityLabel");
      if (label) {
        label.textContent = availabilityToggle.checked
          ? "Disponível para novos chamados"
          : "Indisponível no momento";
      }
    });
  }
});
