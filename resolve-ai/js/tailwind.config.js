/* Configuração do Tailwind (Play CDN). Carregada logo após
   <script src="https://cdn.tailwindcss.com"></script> em cada página.
   As cores e fontes vêm das variáveis definidas em css/base.css. */
tailwind.config = {
  // O reset de elementos fica em css/base.css
  corePlugins: { preflight: false },
  theme: {
    // Mesmos breakpoints do CSS original (max-width: 560/640/900/992px),
    // escritos no formato mobile-first do Tailwind.
    screens: {
      sm: "561px",
      md: "641px",
      lg: "901px",
      xl: "993px",
    },
    container: {
      center: true,
      padding: "20px",
      screens: { wide: "1180px" },
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
          darker: "var(--color-primary-darker)",
          light: "var(--color-primary-light)",
          soft: "var(--color-primary-soft)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          dark: "var(--color-accent-dark)",
          light: "var(--color-accent-light)",
        },
        success: {
          DEFAULT: "var(--color-success)",
          dark: "var(--color-success-dark)",
          light: "var(--color-success-light)",
        },
        warning: {
          DEFAULT: "var(--color-warning)",
          dark: "var(--color-warning-dark)",
          light: "var(--color-warning-light)",
        },
        danger: {
          DEFAULT: "var(--color-danger)",
          dark: "var(--color-danger-dark)",
          light: "var(--color-danger-light)",
        },
        info: {
          DEFAULT: "var(--color-info)",
          light: "var(--color-info-light)",
        },
        ink: {
          DEFAULT: "var(--color-text)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
        },
        page: "var(--color-bg)",
        surface: "var(--color-surface)",
        line: {
          DEFAULT: "var(--color-border)",
          strong: "var(--color-border-strong)",
        },
        overlay: "var(--color-overlay)",
        footer: {
          DEFAULT: "var(--color-footer-bg)",
          text: "var(--color-footer-text)",
          muted: "var(--color-footer-muted)",
          faint: "var(--color-footer-faint)",
          line: "var(--color-footer-border)",
        },
      },
      fontFamily: {
        heading: "var(--font-heading)",
        body: "var(--font-body)",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "20px",
        full: "999px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(20, 24, 31, 0.06), 0 1px 3px rgba(20, 24, 31, 0.08)",
        md: "0 4px 10px rgba(20, 24, 31, 0.08), 0 2px 4px rgba(20, 24, 31, 0.06)",
        lg: "0 12px 28px rgba(20, 24, 31, 0.12), 0 4px 10px rgba(20, 24, 31, 0.08)",
      },
      spacing: {
        header: "72px",
        // altura do header + 16px, usado nos cards "sticky"
        "below-header": "88px",
      },
      backgroundImage: {
        brand: "linear-gradient(135deg, var(--color-primary), var(--color-primary-dark))",
        "brand-deep": "linear-gradient(120deg, var(--color-primary), var(--color-primary-darker))",
        hero: "linear-gradient(180deg, var(--color-primary-light) 0%, var(--color-bg) 65%)",
        "hero-photo":
          "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.35), transparent 45%), linear-gradient(150deg, var(--color-primary) 0%, var(--color-primary-darker) 100%)",
        shine: "radial-gradient(circle at 80% 0%, rgba(255,255,255,0.25), transparent 55%)",
        "map-stripes":
          "repeating-linear-gradient(45deg, var(--color-border) 0 2px, transparent 2px 14px)",
      },
    },
  },
};
