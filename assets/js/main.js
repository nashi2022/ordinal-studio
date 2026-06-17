/* ════════════════════════════════════════════════════════════
   ordinal. — motor de interacción
   hojas que caen · verde→dorado por scroll · scrollytelling
   reveals · parallax · marquee · cursor · contadores
   ════════════════════════════════════════════════════════════ */

(() => {
  "use strict";

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const lerp = (a, b, t) => a + (b - a) * t;
  const clamp = (v, min, max) => Math.min(max, Math.max(min, v));
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  /* Paleta clorofila → dorado (verano #6e7a42 → otoño #f0b613) */
  const GREEN = [110, 122, 66];
  const GOLD = [240, 182, 19];
  const mixColor = (t) => GREEN.map((g, i) => Math.round(lerp(g, GOLD[i], t)));

  let scrollProgress = 0; // 0 arriba → 1 abajo

  /* ── Idioma ─────────────────────────────────────────────── */
  applyLang(getLang());
  const langBtn = document.getElementById("langToggle");
  if (langBtn) {
    langBtn.addEventListener("click", () => {
      applyLang(getLang() === "es" ? "en" : "es");
    });
  }

  /* ── Año + link activo ──────────────────────────────────── */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav__links a").forEach((a) => {
    if (a.getAttribute("href") === here) a.classList.add("is-active");
  });

  /* ── Menú móvil ─────────────────────────────────────────── */
  const nav = document.getElementById("nav");
  const burger = document.getElementById("burger");
  if (burger) {
    burger.addEventListener("click", () => nav.classList.toggle("menu-open"));
    document.querySelectorAll(".nav__links a").forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("menu-open"))
    );
  }

  /* ── Nav: ocultar al bajar, mostrar al subir ────────────── */
  let lastY = 0;
  function navOnScroll(y) {
    nav.classList.toggle("is-scrolled", y > 30);
    if (y > 140 && y > lastY + 6 && !nav.classList.contains("menu-open")) {
      nav.classList.add("is-hidden");
    } else if (y < lastY - 6 || y < 140) {
      nav.classList.remove("is-hidden");
    }
    lastY = y;
  }

  /* ── Progreso + acento verde→dorado ─────────────────────── */
  const progressBar = document.getElementById("progressBar");
  const root = document.documentElement;
  function updateScrollColor() {
    const max = root.scrollHeight - innerHeight;
    scrollProgress = max > 0 ? clamp(scrollY / max, 0, 1) : 0;
    if (progressBar) progressBar.style.width = scrollProgress * 100 + "%";
    const [r, g, b] = mixColor(easeOut(scrollProgress));
    root.style.setProperty("--accent", `rgb(${r}, ${g}, ${b})`);
    root.style.setProperty("--accent-soft", `rgba(${r}, ${g}, ${b}, 0.13)`);
  }

  /* ── Reveals ────────────────────────────────────────────── */
  const revealIO = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        revealIO.unobserve(e.target);
      }
    }),
    { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
  );
  document.querySelectorAll(".reveal").forEach((el) => revealIO.observe(el));

  /* ── Obras desplegables del catálogo ────────────────────── */
  document.querySelectorAll(".opus").forEach((opus, i) => {
    const head = opus.querySelector(".opus__head");
    const detail = opus.querySelector(".opus__detail");
    if (!head || !detail) return;
    const id = "opus-detail-" + (i + 1);
    detail.id = id;
    head.setAttribute("aria-controls", id);
    head.addEventListener("click", () => {
      const open = opus.classList.toggle("is-open");
      head.setAttribute("aria-expanded", open ? "true" : "false");
      if (open) {
        // el contenido revela inmediatamente al abrir
        opus.querySelectorAll(".reveal").forEach((el) => el.classList.add("is-in"));
      }
    });
  });

  /* ── Formulario: proponer un proyecto ───────────────────── */
  const proposeForm = document.getElementById("proposeForm");
  if (proposeForm) {
    const successBox = document.getElementById("formSuccess");
    proposeForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      proposeForm.classList.remove("is-error");
      if (!proposeForm.checkValidity()) {
        proposeForm.reportValidity();
        return;
      }
      proposeForm.classList.add("is-sending");
      const endpoint = proposeForm
        .getAttribute("action")
        .replace("formsubmit.co/", "formsubmit.co/ajax/");
      try {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: new FormData(proposeForm),
        });
        if (!res.ok) throw new Error("bad response");
        proposeForm.classList.add("is-done");
        if (successBox) {
          successBox.classList.add("is-on");
          successBox.scrollIntoView({ behavior: "smooth", block: "center" });
        }
      } catch (err) {
        proposeForm.classList.add("is-error");
        const errEl = document.getElementById("formError");
        if (errEl) errEl.scrollIntoView({ behavior: "smooth", block: "center" });
      } finally {
        proposeForm.classList.remove("is-sending");
      }
    });
  }

  /* ── Contadores ─────────────────────────────────────────── */
  const countIO = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      countIO.unobserve(e.target);
      const target = +e.target.dataset.count;
      const t0 = performance.now();
      (function tick(now) {
        const p = clamp((now - t0) / 1300, 0, 1);
        e.target.textContent = Math.round(easeOut(p) * target);
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    });
  }, { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach((el) => countIO.observe(el));

  /* ── Parallax (lejos / cerca) ───────────────────────────── */
  const parallaxEls = [...document.querySelectorAll("[data-parallax]")];
  function updateParallax() {
    parallaxEls.forEach((el) => {
      const speed = +el.dataset.parallax;
      const rect = el.getBoundingClientRect();
      const offset = (rect.top + rect.height / 2 - innerHeight / 2) * speed;
      el.style.transform = `translateX(${offset}px)`;
    });
  }

  /* ── Escala ordinal: color cíclico + parallax ───────────── */
  const ordinalScale = document.querySelector(".ordinal-scale");
  const ordinalTicks = [...document.querySelectorAll(".ordinal-scale__tick")];
  const ordinalLines = [...document.querySelectorAll(".ordinal-scale__line")];
  const ORDINAL_PARALLAX = [-0.11, 0.04, 0.14];
  const ORDINAL_SWAY = [
    { x: 0.9, y: 1.1, ax: 3.2, ay: 5 },
    { x: 1.2, y: 0.85, ax: 2.6, ay: 4.5 },
    { x: 0.75, y: 1.3, ax: 3.8, ay: 5.5 },
  ];

  function paintOrdinalTick(tick, emphasis) {
    const t = clamp(emphasis, 0, 1);
    const [r, g, b] = mixColor(t * 0.92);
    const bgAlpha = 0.06 + t * 0.88;
    const borderAlpha = 0.22 + t * 0.78;
    tick.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${bgAlpha})`;
    tick.style.borderColor = `rgba(${r}, ${g}, ${b}, ${borderAlpha})`;
    tick.style.color = t > 0.52 ? "var(--ink)" : `rgb(${Math.round(lerp(89, r, t))}, ${Math.round(lerp(95, g, t))}, ${Math.round(lerp(77, b, t))})`;
    tick.style.boxShadow = t > 0.55
      ? `0 10px 28px -8px rgba(${r}, ${g}, ${b}, ${0.12 + t * 0.22})`
      : "none";
  }

  function updateOrdinalScale(now) {
    if (!ordinalScale || !ordinalTicks.length) return;

    if (reduceMotion) {
      ordinalTicks.forEach((tick, i) => paintOrdinalTick(tick, i * 0.45));
      return;
    }

    const rect = ordinalScale.getBoundingClientRect();
    const inView = rect.top < innerHeight * 0.9 && rect.bottom > innerHeight * 0.1;
    ordinalScale.classList.toggle("is-live", inView);
    if (!inView) return;

    const centerOff = rect.top + rect.height / 2 - innerHeight / 2;
    const sec = now / 1000;

    ordinalTicks.forEach((tick, i) => {
      const phase = sec * 0.72 + i * 2.09;
      const emphasis = 0.5 + 0.5 * Math.sin(phase);
      paintOrdinalTick(tick, emphasis);

      const sway = ORDINAL_SWAY[i];
      const px = centerOff * ORDINAL_PARALLAX[i] + Math.sin(sec * sway.x + i) * sway.ax;
      const py = centerOff * (ORDINAL_PARALLAX[i] * 0.55) + Math.cos(sec * sway.y + i * 0.7) * sway.ay;
      tick.style.transform = `translate(${px}px, ${py}px)`;
    });

    ordinalLines.forEach((line, i) => {
      const phase = sec * 0.72 + (i + 0.5) * 2.09;
      const emphasis = 0.5 + 0.5 * Math.sin(phase);
      const [r, g, b] = mixColor(emphasis * 0.85);
      line.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${0.2 + emphasis * 0.55})`;
      line.style.opacity = String(0.45 + emphasis * 0.55);
      const py = centerOff * 0.03 + Math.sin(sec * 1.1 + i) * 2;
      const scaleX = 0.88 + emphasis * 0.12;
      line.style.transform = `translateY(${py}px) scaleX(${scaleX})`;
    });
  }

  /* ── Frase mudos: aparece + se mueve ─────────────────────── */
  const tombPhrase = document.querySelector(".tomb__phrase");

  function updateTombPhrase(now) {
    if (!tombPhrase || reduceMotion) return;
    if (!tombPhrase.classList.contains("is-in")) return;
    const rect = tombPhrase.getBoundingClientRect();
    const inView = rect.top < innerHeight * 0.92 && rect.bottom > innerHeight * 0.08;
    if (!inView) return;
    const centerOff = rect.top + rect.height / 2 - innerHeight / 2;
    const sec = now / 1000;
    const px = centerOff * -0.045 + Math.cos(sec * 0.7) * 5;
    const py = centerOff * 0.07 + Math.sin(sec * 0.85) * 7;
    tombPhrase.style.transform = `translate(${px}px, ${py}px)`;
  }

  /* ── Hojas acuarela: deriva con el scroll ───────────────── */
  const driftEls = [...document.querySelectorAll("[data-drift]")];
  function updateDrift() {
    driftEls.forEach((el) => {
      const speed = +el.dataset.drift;
      const rot = +(el.dataset.rot || 0);
      // se mide la sección contenedora (sin transform) para evitar feedback
      const rect = el.parentElement.getBoundingClientRect();
      const off = rect.top + rect.height / 2 - innerHeight / 2;
      const scale = el.dataset.scale ? ` scale(${el.dataset.scale})` : "";
      el.style.transform = `translateY(${off * speed}px) rotate(${off * rot * 0.02}deg)${scale}`;
    });
  }

  /* ── El árbol de fondo: se recorre de la copa verde a la
        base dorada con el scroll, y nunca deja de mecerse ─── */
  const treeBackdrop = document.getElementById("treeBackdropImg");
  function updateTreeBackdrop(now) {
    if (!treeBackdrop) return;
    const overflow = Math.max(treeBackdrop.offsetHeight - innerHeight, 0);
    const t = now / 1000;
    const bobY = Math.sin(t * 0.45) * 10;
    const bobX = Math.sin(t * 0.28 + 1.3) * 8;
    treeBackdrop.style.transform =
      `translate(${bobX}px, ${-scrollProgress * overflow + bobY}px)`;
  }

  /* ── El ciclo (4 hojas clickeables) ─────────────────────── */
  const cycle = document.querySelector(".cycle");
  if (cycle) {
    new IntersectionObserver((es, io) => {
      es.forEach((e) => {
        if (e.isIntersecting) {
          cycle.classList.add("is-in");
          io.disconnect();
        }
      });
    }, { threshold: 0.25 }).observe(cycle);

    const items = [...cycle.querySelectorAll("[data-cycle]")];
    const descs = [...cycle.querySelectorAll("[data-cdesc]")];
    items.forEach((item) => {
      item.addEventListener("click", () => {
        const idx = item.dataset.cycle;
        const wasActive = item.classList.contains("is-active");
        items.forEach((b) => b.classList.remove("is-active", "is-pop"));
        descs.forEach((d) => d.classList.remove("is-on"));
        if (wasActive) return; // segundo clic: se cierra
        item.classList.add("is-active");
        // reinicia la animación de rebote de la hoja
        void item.offsetWidth;
        item.classList.add("is-pop");
        const desc = descs.find((d) => d.dataset.cdesc === idx);
        if (desc) desc.classList.add("is-on");
      });
    });
  }

  /* ── Marquee infinito ───────────────────────────────────── */
  const marqueeTrack = document.getElementById("marqueeTrack");
  let marqueeX = 0, marqueeHalf = 0;
  function buildMarquee() {
    if (!marqueeTrack) return;
    const base = marqueeTrack.querySelector("span");
    marqueeTrack.querySelectorAll("span:not(:first-child)").forEach((s) => s.remove());
    let copies = 1;
    while (marqueeTrack.scrollWidth < innerWidth * 2.5 && copies < 30) {
      marqueeTrack.appendChild(base.cloneNode(true));
      copies++;
    }
    marqueeHalf = marqueeTrack.scrollWidth / 2;
  }
  buildMarquee();
  document.addEventListener("ordinal:lang", () => requestAnimationFrame(buildMarquee));

  /* ── Citas en movimiento ────────────────────────────────── */
  const quotesTrack = document.getElementById("quotesTrack");
  let quotesX = 0, quotesHalf = 0;
  function buildQuotes() {
    if (!quotesTrack) return;
    const base = quotesTrack.querySelector("span");
    quotesTrack.querySelectorAll("span:not(:first-child)").forEach((s) => s.remove());
    let copies = 1;
    while (quotesTrack.scrollWidth < innerWidth * 2.5 && copies < 30) {
      quotesTrack.appendChild(base.cloneNode(true));
      copies++;
    }
    quotesHalf = quotesTrack.scrollWidth / 2;
  }
  buildQuotes();
  document.addEventListener("ordinal:lang", () => requestAnimationFrame(buildQuotes));

  /* ── Scrollytelling con panel fijo (lejos / cerca) ──────── */
  const storyPins = [...document.querySelectorAll(".story-pin")];
  function updateStoryPins() {
    storyPins.forEach((pin) => {
      const steps = [...pin.querySelectorAll(".sstep")];
      const demos = [...pin.querySelectorAll(".demo")];
      if (!steps.length) return;
      const rect = pin.getBoundingClientRect();
      const total = pin.offsetHeight - innerHeight;
      const p = clamp(-rect.top / total, 0, 1);
      const n = steps.length;
      const idx = Math.min(Math.floor(p * n), n - 1);
      steps.forEach((s, i) => s.classList.toggle("is-on", i === idx));
      demos.forEach((d, i) => d.classList.toggle("is-on", i === idx));
    });
  }

  /* ── Árbol de fondo: opacidad según sección sólida ──────── */
  const treeBackdropEl = document.querySelector(".tree-backdrop");
  const solidSections = [...document.querySelectorAll(
    ".story-pin--dark, .wings-preview, .leafstory, .cta, .chapter--dark"
  )];
  function updateTreeOpacity() {
    if (!treeBackdropEl) return;
    let fade = 1;
    const treeR = treeBackdropEl.getBoundingClientRect();
    const treeCx = (treeR.left + treeR.right) / 2;
    solidSections.forEach((sec) => {
      const r = sec.getBoundingClientRect();
      if (treeCx >= r.left && treeCx <= r.right && r.top < innerHeight && r.bottom > 0) {
        const overlap = Math.min(r.bottom, innerHeight) - Math.max(r.top, 0);
        fade = Math.min(fade, 1 - clamp(overlap / innerHeight, 0, 1) * 0.92);
      }
    });
    root.style.setProperty("--tree-opacity", String(0.32 * fade));
  }

  /* ── Botones magnéticos ─────────────────────────────────── */
  if (matchMedia("(hover: hover)").matches && !reduceMotion) {
    document.querySelectorAll("[data-magnetic]").forEach((el) => {
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        const dx = (e.clientX - r.left - r.width / 2) / r.width;
        const dy = (e.clientY - r.top - r.height / 2) / r.height;
        el.style.transform = `translate(${dx * 10}px, ${dy * 8}px)`;
      });
      el.addEventListener("mouseleave", () => { el.style.transform = ""; });
    });
  }

  /* ── Cursor ─────────────────────────────────────────────── */
  const cursor = document.querySelector(".cursor");
  if (cursor && matchMedia("(hover: hover) and (pointer: fine)").matches && !reduceMotion) {
    document.body.classList.add("has-cursor");
    const dot = cursor.querySelector(".cursor__dot");
    const ring = cursor.querySelector(".cursor__ring");
    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    addEventListener("mousemove", (e) => { mx = e.clientX; my = e.clientY; });
    (function cursorLoop() {
      rx = lerp(rx, mx, 0.16);
      ry = lerp(ry, my, 0.16);
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%,-50%)`;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%,-50%)`;
      requestAnimationFrame(cursorLoop);
    })();
    document.querySelectorAll("a, button, [data-magnetic]").forEach((el) => {
      el.addEventListener("mouseenter", () => cursor.classList.add("is-hover"));
      el.addEventListener("mouseleave", () => cursor.classList.remove("is-hover"));
    });
  }

  /* ── Hojas de ginkgo que caen ───────────────────────────── */
  const canvas = document.getElementById("leavesCanvas");
  let drawLeavesFrame = null;
  let leaves = [];
  let ctx = null;
  if (canvas && !reduceMotion) {
    ctx = canvas.getContext("2d");
    const dpr = Math.min(devicePixelRatio || 1, 2);

    function sizeCanvas() {
      canvas.width = innerWidth * dpr;
      canvas.height = innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }
    sizeCanvas();
    addEventListener("resize", sizeCanvas);

    /* Las 8 etapas de la hoja: verde oscuro → dorado → marrón */
    const LEAF_SRCS = Array.from({ length: 8 }, (_, i) => `assets/img/leaf-s${i + 1}.png`);
    const leafImgs = LEAF_SRCS.map((src) => {
      const img = new Image();
      img.src = src;
      return img;
    });

    // la etapa acompaña el scroll: arriba caen verdes, abajo doradas y marrones
    function pickLeafIndex() {
      const center = easeOut(scrollProgress) * 7;
      const idx = Math.round(center + (Math.random() - 0.5) * 3);
      return clamp(idx, 0, 7);
    }

    const N = Math.round(clamp(innerWidth / 110, 7, 16));
    const newLeaf = (anywhere) => ({
      x: Math.random() * innerWidth,
      y: anywhere ? Math.random() * innerHeight : -80 - Math.random() * 140,
      s: 26 + Math.random() * 42,
      vy: 0.35 + Math.random() * 0.7,
      rot: Math.random() * Math.PI * 2,
      vr: (Math.random() - 0.5) * 0.02,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.008 + Math.random() * 0.012,
      swayAmp: 0.5 + Math.random() * 1.1,
      img: pickLeafIndex(),
      alpha: 0.4 + Math.random() * 0.35,
    });
    leaves = Array.from({ length: N }, () => newLeaf(true));

    function drawLeaves() {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      leaves.forEach((l) => {
        l.sway += l.swaySpeed;
        l.x += Math.sin(l.sway) * l.swayAmp;
        l.y += l.vy;
        l.rot += l.vr + Math.sin(l.sway) * 0.004;
        if (l.y > innerHeight + 100) Object.assign(l, newLeaf(false));
        if (l.x < -100) l.x = innerWidth + 80;
        if (l.x > innerWidth + 100) l.x = -80;

        const img = leafImgs[l.img];
        if (!img.complete || !img.naturalWidth) return;
        ctx.save();
        ctx.translate(l.x, l.y);
        ctx.rotate(l.rot);
        ctx.globalAlpha = l.alpha;
        ctx.drawImage(img, -l.s / 2, -l.s / 2, l.s, l.s);
        ctx.restore();
      });
    }
    drawLeavesFrame = drawLeaves;
  }

  /* ── Scrollytelling: la metamorfosis de la hoja ─────────── */
  const leafstory = document.querySelector(".leafstory");
  const storyLeaf = document.getElementById("storyLeaf");
  const morphs = [...document.querySelectorAll(".leafstory__leaf .morph")];
  const steps = [...document.querySelectorAll(".lstep")];
  function updateLeafstory() {
    if (!leafstory) return;
    const rect = leafstory.getBoundingClientRect();
    const total = leafstory.offsetHeight - innerHeight;
    const p = clamp(-rect.top / total, 0, 1);

    if (morphs.length) {
      // la metamorfosis ocurre entre el 12% y el 82% del recorrido
      const mp = clamp((p - 0.12) / 0.7, 0, 1);
      const stage = mp * (morphs.length - 1);
      // solo el par adyacente participa: la actual queda sólida
      // y la siguiente se funde encima (sin que asomen las demás)
      const base = Math.floor(stage);
      morphs.forEach((img, i) => {
        if (i === base) img.style.opacity = "1";
        else if (i === base + 1) img.style.opacity = String(stage - base);
        else img.style.opacity = "0";
      });
    }
    if (storyLeaf) {
      const drift = Math.sin(p * Math.PI * 2) * 3;
      storyLeaf.style.transform =
        `rotate(${-6 + p * 12 + drift}deg) scale(${0.92 + p * 0.1})`;
    }
    const n = steps.length;
    steps.forEach((s, i) => {
      const a = i / n, b = (i + 1) / n;
      s.classList.toggle("is-on", p >= a && (p < b || (i === n - 1 && p >= a)));
    });
  }

  /* ── Loop principal ─────────────────────────────────────── */
  let marqueeLast = performance.now();
  function frame(now) {
    const y = scrollY;
    navOnScroll(y);
    updateScrollColor();
    updateParallax();
    updateOrdinalScale(now);
    updateTombPhrase(now);
    updateDrift();
    updateTreeBackdrop(now);
    updateTreeOpacity();
    updateStoryPins();
    updateLeafstory();
    if (drawLeavesFrame) drawLeavesFrame();
    if (marqueeTrack && marqueeHalf > 0 && !reduceMotion) {
      const dt = Math.min(now - marqueeLast, 50);
      marqueeX -= dt * 0.055;
      if (-marqueeX >= marqueeHalf) marqueeX += marqueeHalf;
      marqueeTrack.style.transform = `translateX(${marqueeX}px)`;
    }
    if (quotesTrack && quotesHalf > 0 && !reduceMotion) {
      quotesX -= (Math.min(now - marqueeLast, 50)) * 0.038;
      if (-quotesX >= quotesHalf) quotesX += quotesHalf;
      quotesTrack.style.transform = `translateX(${quotesX}px)`;
    }
    marqueeLast = now;
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);

  /* ════════════════════════════════════════════════════════
     Extras por página
     ════════════════════════════════════════════════════════ */
  const page = document.body.dataset.page;

  /* ── Colección: hoja de partículas (data art) ───────────── */
  if (page === "collection" && !reduceMotion) {
    const pc = document.getElementById("particleLeaf");
    if (pc) {
      const pctx = pc.getContext("2d");
      const dpr = Math.min(devicePixelRatio || 1, 2);
      let W = 0, H = 0, particles = [], started = false, t0 = 0;

      function sizePC() {
        const r = pc.parentElement.getBoundingClientRect();
        W = r.width; H = r.height;
        pc.width = W * dpr; pc.height = H * dpr;
        pctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        buildParticles();
      }

      function buildParticles() {
        particles = [];
        const R = Math.min(W, H) * 0.34;
        const cx = W * 0.72, cy = H * 0.42;
        const count = Math.round(clamp(W * 0.55, 320, 760));
        let guard = 0;
        while (particles.length < count && guard < count * 30) {
          guard++;
          const theta = (Math.random() * 2 - 1) * 1.0; // abanico ±57°
          const notch = 1 - 0.3 * Math.exp(-Math.pow(theta / 0.16, 2));
          const wave = 1 + 0.05 * Math.sin(theta * 9);
          const rMax = R * notch * wave;
          const r = (0.18 + Math.sqrt(Math.random()) * 0.82) * rMax;
          if (r < R * 0.12) continue;
          const tx = cx + Math.sin(theta) * r;
          const ty = cy - Math.cos(theta) * r * 0.92 + r * 0.06;
          const mix = clamp(r / R * 0.85 + (Math.random() - 0.5) * 0.4, 0, 1);
          const [cr, cg, cb] = mixColor(mix);
          particles.push({
            tx, ty,
            x: Math.random() * W, y: Math.random() * H,
            size: 0.8 + Math.random() * 2.2,
            delay: Math.random() * 0.55,
            color: `rgba(${cr}, ${cg}, ${cb}, ${0.4 + Math.random() * 0.5})`,
            phase: Math.random() * Math.PI * 2,
          });
        }
        // el tallo
        for (let i = 0; i < 46; i++) {
          const f = i / 46;
          const [cr, cg, cb] = mixColor(0.15 + Math.random() * 0.2);
          particles.push({
            tx: cx + (Math.random() - 0.5) * 2.5,
            ty: cy + R * 0.06 + f * R * 0.55,
            x: Math.random() * W, y: Math.random() * H,
            size: 0.8 + Math.random() * 1.4,
            delay: Math.random() * 0.55,
            color: `rgba(${cr}, ${cg}, ${cb}, 0.7)`,
            phase: Math.random() * Math.PI * 2,
          });
        }
      }

      function drawPC(now) {
        const elapsed = (now - t0) / 1000;
        pctx.clearRect(0, 0, W, H);
        particles.forEach((p) => {
          const prog = clamp((elapsed - p.delay) / 2.2, 0, 1);
          const e = easeOut(prog);
          const wob = Math.sin(now / 900 + p.phase) * 1.6;
          const x = lerp(p.x, p.tx, e) + wob * e;
          const y = lerp(p.y, p.ty, e) + Math.cos(now / 1100 + p.phase) * 1.6 * e;
          pctx.globalAlpha = 0.25 + e * 0.75;
          pctx.fillStyle = p.color;
          pctx.beginPath();
          pctx.arc(x, y, p.size, 0, Math.PI * 2);
          pctx.fill();
        });
        requestAnimationFrame(drawPC);
      }

      sizePC();
      addEventListener("resize", sizePC);
      new IntersectionObserver((es, io) => {
        es.forEach((e) => {
          if (e.isIntersecting && !started) {
            started = true;
            t0 = performance.now();
            requestAnimationFrame(drawPC);
            io.disconnect();
          }
        });
      }, { threshold: 0.2 }).observe(pc);
    }
  }

  /* ── Sparklines (demos scrollytelling) ──────────────────── */
  document.querySelectorAll(".demo__sig canvas").forEach((cv) => {
    const kind = cv.dataset.kind;
    if (!kind) return;
    const c2 = cv.getContext("2d");
    const dpr = Math.min(devicePixelRatio || 1, 2);
    let drawn = false;
    const onDark = !!cv.closest(".story-pin--dark");

    function pointsFor(w, h) {
      const pts = [];
      const n = 44;
      for (let i = 0; i <= n; i++) {
        const x = (i / n) * w;
        let y;
        const noise = Math.sin(i * 1.7) * 2.4 + Math.sin(i * 0.6) * 3;
        if (kind === "rise") {
          y = h * 0.78 - (i / n) * h * 0.55 + noise;
        } else if (kind === "break") {
          y = i < n * 0.62 ? h * 0.42 + noise : h * 0.42 + (i - n * 0.62) * 2.6 + noise;
        } else {
          y = h * 0.5 + Math.sin((i / n) * Math.PI * 3.2) * h * 0.26 + noise * 0.4;
        }
        pts.push([x, clamp(y, 4, h - 4)]);
      }
      return pts;
    }

    function animate() {
      const r = cv.getBoundingClientRect();
      const w = r.width, h = r.height;
      if (w < 2 || h < 2) return;
      cv.width = w * dpr; cv.height = h * dpr;
      c2.setTransform(dpr, 0, 0, dpr, 0, 0);
      const pts = pointsFor(w, h);
      const t0 = performance.now();
      const stroke = onDark
        ? (kind === "break" ? "#e8a86a" : kind === "rise" ? "#f6c937" : "#a8b86a")
        : (kind === "break" ? "#a0682c" : kind === "rise" ? "#c98c06" : "#6e7a42");
      (function tick(now) {
        const p = clamp((now - t0) / 1600, 0, 1);
        const upTo = Math.floor(easeOut(p) * (pts.length - 1));
        c2.clearRect(0, 0, w, h);
        c2.beginPath();
        pts.slice(0, upTo + 1).forEach(([x, y], i) => (i ? c2.lineTo(x, y) : c2.moveTo(x, y)));
        c2.strokeStyle = stroke;
        c2.lineWidth = 2;
        c2.lineCap = "round";
        c2.stroke();
        const [lx, ly] = pts[upTo];
        c2.beginPath();
        c2.arc(lx, ly, 3.5, 0, Math.PI * 2);
        c2.fillStyle = "#f0b613";
        c2.fill();
        if (p < 1) requestAnimationFrame(tick);
      })(t0);
    }

    new IntersectionObserver((es, io) => {
      es.forEach((e) => {
        if (e.isIntersecting && !drawn) {
          drawn = true;
          animate();
          io.disconnect();
        }
      });
    }, { threshold: 0.35 }).observe(cv);
  });
})();
