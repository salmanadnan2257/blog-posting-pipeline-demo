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
        <rect x="10" y="10" width="180" height="120" rx="10" fill="#FFFDF5" stroke="#16130E" stroke-width="3"/>
        <circle cx="60" cy="55" r="16" fill="#FFD93D" stroke="#16130E" stroke-width="2"/>
        <path d="M20 120 L75 75 L110 100 L140 65 L190 120 Z" fill="#FF6B6B" stroke="#16130E" stroke-width="2"/>
      </svg>
      <span class="image-placeholder__caption">Illustrative placeholder — the real system generates this with Gemini image generation</span>
    </div>
    <p class="image-prompt">"${escapeHtml(DEMO_RUN.steps.find(s => s.id === 'image_prompt').output)}"</p>
    ${renderJsonPanel(step.usage)}
  `;
}

function renderPublishStep(step) {
  let html = `
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
