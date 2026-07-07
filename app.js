// Step-through logic for the fabricated demo run. No network calls anywhere here.

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function renderJsonPanel(obj) {
  return `<pre class="json-panel">${escapeHtml(JSON.stringify(obj, null, 2))}</pre>`;
}

function renderArticle(article) {
  let html = '<div class="article">';
  article.intro.forEach(p => { html += `<p>${escapeHtml(p)}</p>`; });

  article.sections.forEach(section => {
    html += `<h3>${escapeHtml(section.header)}</h3>${section.body}`;
  });

  html += '<div class="faq">';
  article.faq.forEach(item => {
    html += `<dt>${escapeHtml(item.q)}</dt><dd>${escapeHtml(item.a)}</dd>`;
  });
  html += '</div>';

  html += '<div class="refs"><strong>References</strong><ol>';
  article.sources.forEach(s => {
    html += `<li>[${s.ref}] ${escapeHtml(s.title)}, ${escapeHtml(s.date)}. <a href="${s.url}" target="_blank" rel="noopener">${s.url}</a></li>`;
  });
  html += '</ol></div></div>';
  return html;
}

function renderImageStep(step) {
  return `
    <div class="image-placeholder">
      <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect x="10" y="10" width="180" height="120" rx="10" fill="#FAFBFE" stroke="#062757" stroke-width="3"/>
        <circle cx="60" cy="55" r="16" fill="#A9C9F8" stroke="#062757" stroke-width="2"/>
        <path d="M20 120 L75 75 L110 100 L140 65 L190 120 Z" fill="#136BEE" stroke="#062757" stroke-width="2"/>
      </svg>
      <span class="image-placeholder__caption">Illustrative placeholder — the real system generates this with Gemini image generation</span>
    </div>
    <p class="image-prompt">"${escapeHtml(DEMO_RUN.steps.find(s => s.id === 'image_prompt').output)}"</p>
    ${renderJsonPanel(step.usage)}
  `;
}

function renderPostPreview(step) {
  const writer = DEMO_RUN.steps.find(s => s.id === "writer").article;
  const plan = DEMO_RUN.steps.find(s => s.id === "plan").output;
  const displayUrl = step.published_url.replace(/^https?:\/\//, "");
  const wordCount = writer.intro.join(" ").split(/\s+/).length +
    writer.sections.reduce((n, s) => n + s.body.replace(/<[^>]+>/g, " ").split(/\s+/).length, 0);
  const minutes = Math.max(3, Math.round(wordCount / 200));

  const brandMark = `<span class="demo-nav__mark" aria-hidden="true">NC</span>`;

  const nav = `
    <div class="pv-nav">
      <div class="demo-nav__brand">${brandMark}<span class="demo-nav__name">Nordkast Coffee Supply</span></div>
      <div class="pv-nav__links">
        <a href="#" aria-current="page">Blog</a>
        <a href="#">Shop</a>
        <button type="button" class="btn btn--primary">Shop Coffee <span class="arr">&#8594;</span></button>
      </div>
    </div>
  `;

  const breadcrumb = `
    <nav class="pv-breadcrumb" aria-label="Breadcrumb">
      <a href="#">Home</a><span class="sep">/</span>
      <a href="#">Blog</a><span class="sep">/</span>
      <span aria-current="page">${escapeHtml(DEMO_RUN.topic_title)}</span>
    </nav>
  `;

  const head = `
    <span class="pv-post-tag">Maintenance Guide</span>
    <h1>${escapeHtml(DEMO_RUN.topic_title)}</h1>
    <div class="pv-meta-row">
      <span>By Nordkast Coffee Supply</span><span class="dot"></span>
      <span>Published just now</span><span class="dot"></span>
      <span>${minutes} min read</span>
    </div>
  `;

  const figure = `
    <figure class="pv-figure">
      <div class="image-placeholder" style="padding:0;height:220px;border-radius:var(--r-md);border-style:solid;">
        <svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" style="width:100%;height:100%;">
          <rect width="200" height="140" fill="url(#pvgrad)"/>
          <defs><linearGradient id="pvgrad" x1="0" y1="0" x2="200" y2="140"><stop offset="0" stop-color="#136BEE"/><stop offset="1" stop-color="#062757"/></linearGradient></defs>
          <circle cx="60" cy="45" r="14" fill="#A9C9F8" opacity=".85"/>
          <path d="M20 120 L75 70 L110 95 L140 60 L190 120 Z" fill="#0C4497" opacity=".6"/>
        </svg>
      </div>
      <figcaption class="pv-figure__caption">Illustrative placeholder — the real system generates this with Gemini image generation</figcaption>
    </figure>
  `;

  let prose = `<div class="pv-prose">`;
  writer.intro.forEach(p => { prose += `<p>${escapeHtml(p)}</p>`; });
  writer.sections.forEach(s => { prose += `<h2>${escapeHtml(s.header)}</h2>${s.body}`; });
  prose += `<h2>Frequently Asked Questions</h2>`;
  writer.faq.forEach(item => {
    prose += `<h3>${escapeHtml(item.q)}</h3><p>${escapeHtml(item.a)}</p>`;
  });
  prose += `</div>`;

  const refs = `
    <div class="pv-refs">
      <h2>References</h2>
      <ol>
        ${writer.sources.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener">${escapeHtml(s.title)}</a>. <span class="ref-date">(${escapeHtml(s.date)})</span></li>`).join("")}
      </ol>
    </div>
  `;

  const author = `
    <div class="pv-author">
      <span class="av" aria-hidden="true">N</span>
      <div>
        <div class="a-name">Written by Nordkast Coffee Supply</div>
        <div class="a-desc">We help home baristas keep their machines running clean and their shots consistent.</div>
      </div>
    </div>
  `;

  const finalCta = `
    <div class="pv-final-wrap">
      <div class="pv-final">
        <h2>Never wonder if your machine needs a clean.</h2>
        <p>Shop Nordkast Descale Concentrate, made for exactly this.</p>
        <button type="button" class="btn">Shop Coffee <span class="arr">&#8594;</span></button>
      </div>
    </div>
  `;

  const footer = `
    <div class="pv-foot">
      <div class="demo-nav__brand">${brandMark}<span>Nordkast Coffee Supply</span></div>
      <span>&copy; 2026 Nordkast Coffee Supply (fictional)</span>
    </div>
  `;

  return `
    <div class="post-preview">
      <div class="post-preview__browser-bar">
        <span class="post-preview__dot"></span>
        <span class="post-preview__dot"></span>
        <span class="post-preview__dot"></span>
        <span class="post-preview__url">${escapeHtml(displayUrl)}</span>
      </div>
      ${nav}
      <div class="pv-article">
        ${breadcrumb}
        ${head}
        ${figure}
        ${prose}
        ${refs}
        ${author}
      </div>
      ${finalCta}
      ${footer}
    </div>
    <p class="cost-note">
      This preview is a faithful, bounded recreation of the real site's article template (same nav, breadcrumb,
      typography, citations, references, author line, and final CTA band, built from its own live CSS), populated
      with the fabricated run above. No request is made to any real site, and the real site's server code is not
      part of this demo; the brand shown here ("Nordkast Coffee Supply") is invented.
    </p>
  `;
}

function renderPublishStep(step) {
  let html = renderPostPreview(step);
  html += `
    <div class="publish-card">
      <div><strong>Published to:</strong> <span class="publish-card__url">${escapeHtml(step.published_url)}</span></div>
      <div><strong>IndexNow:</strong> ${escapeHtml(step.indexnow_status)}</div>
      <div><strong>Sheets report row:</strong> ${escapeHtml(step.sheets_row_status)}</div>
    </div>
    <table class="cost-table">
      <thead><tr><th>Step</th><th>Model</th><th>Cost (illustrative)</th></tr></thead>
      <tbody>
  `;
  step.cost.rows.forEach(r => {
    html += `<tr><td>${escapeHtml(r.step)}</td><td>${escapeHtml(r.model)}</td><td>$${r.cost_usd.toFixed(3)}</td></tr>`;
  });
  html += `</tbody></table>
    <div class="cost-total">$${step.cost.total_range[0].toFixed(2)}–$${step.cost.total_range[1].toFixed(2)} per post</div>
    <p class="cost-note">The total range is the real, published per-post cost for the production system (see its README). The per-step line items above are illustrative for this demo and are not the exact real breakdown.</p>
  `;
  return html;
}

function renderStep(step) {
  let body = "";
  if (step.type === "json") {
    if (step.input) body += `<p><strong>Input</strong></p>${renderJsonPanel(step.input)}<p><strong>Output</strong></p>`;
    body += renderJsonPanel(step.output);
  } else if (step.type === "article") {
    body = renderArticle(step.article);
  } else if (step.type === "text") {
    body = `<p class="image-prompt">${escapeHtml(step.output)}</p>`;
  } else if (step.type === "image") {
    body = renderImageStep(step);
  } else if (step.type === "publish") {
    body = renderPublishStep(step);
  }

  return `
    <div class="step" id="step-${step.id}">
      <div class="step__head">
        <div>
          <div class="step__num">${step.num}</div>
          <h2 class="step__title">${escapeHtml(step.title)}</h2>
        </div>
        <span class="step__model">${escapeHtml(step.model)}</span>
      </div>
      ${body}
    </div>
  `;
}

function buildUI() {
  const stepsContainer = document.getElementById("steps");
  stepsContainer.innerHTML = DEMO_RUN.steps.map(renderStep).join("");

  const rail = document.getElementById("rail");
  rail.innerHTML = DEMO_RUN.steps.map((s, i) =>
    `<div class="rail__dot" data-idx="${i}">${escapeHtml(s.title)}</div>`
  ).join("");
}

function runPipeline() {
  const runBtn = document.getElementById("run-btn");
  const resetBtn = document.getElementById("reset-btn");
  runBtn.disabled = true;

  const dots = document.querySelectorAll(".rail__dot");
  const steps = document.querySelectorAll(".step");

  let i = 0;
  function next() {
    if (i > 0) {
      dots[i - 1].classList.remove("is-active");
      dots[i - 1].classList.add("is-done");
    }
    if (i >= steps.length) {
      resetBtn.style.display = "inline-block";
      return;
    }
    dots[i].classList.add("is-active");
    steps[i].classList.add("is-visible");
    steps[i].scrollIntoView({ behavior: "smooth", block: "start" });
    i += 1;
    setTimeout(next, 900);
  }
  next();
}

function resetDemo() {
  document.querySelectorAll(".rail__dot").forEach(d => d.classList.remove("is-active", "is-done"));
  document.querySelectorAll(".step").forEach(s => s.classList.remove("is-visible"));
  document.getElementById("run-btn").disabled = false;
  document.getElementById("reset-btn").style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", () => {
  buildUI();
  document.getElementById("run-btn").addEventListener("click", runPipeline);
  document.getElementById("reset-btn").addEventListener("click", resetDemo);
});
