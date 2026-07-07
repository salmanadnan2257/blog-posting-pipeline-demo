# Blog Posting Pipeline — Demo

A fabricated, interactive walkthrough of the `blog-posting-pipeline` project's
7-step architecture, built so the pipeline can be seen running without exposing
the real system, which is private.

## Why this exists

`blog-posting-pipeline` is a production content pipeline that researches, writes,
illustrates, and publishes SEO/AEO blog posts for real Digitalise Agency clients.
Its source is the agency's live product methodology, not just data that can be
scrubbed, so it stays private. This demo exists to give hiring panels and
interviewers something real to click through: the actual 7-step architecture,
replayed against one invented example, with every fabricated number labeled as
such at the point of display.

## What it is

A single static page. Clicking "Run the pipeline" steps through all 7 stages of
the real system's architecture against one pre-written example: an invented
brand, "Nordkast Coffee Supply," and an invented topic, "How to Descale a Home
Espresso Machine." Nothing here is a real client, and no API is called anywhere.

## Features

- All 7 real pipeline stages, in the real system's order and schema shape: Brief,
  Keywords, Section plan, Writer (with citations and a References list), Image
  prompt, Image, Publish (with a cost breakdown).
- A permanent banner disclosing this is a scripted demo, visible at every step.
- The one headline cost figure shown ($0.37–$0.40 per post) is the real,
  already-published production cost from the source project's README; the
  per-step cost line items underneath are illustrative and labeled as such.

## Architecture

Plain HTML, CSS, and vanilla JavaScript. No build step, no framework, no backend,
no network calls. `demo-data.js` holds the fabricated run as a plain object;
`app.js` reveals each step in sequence with a short animated delay and drives a
progress rail; `styles.css` is a self-contained copy of the design tokens used
across the rest of the portfolio, so this page reads as part of the same body of
work without depending on that site at runtime.

## Setup

None. Open `index.html` in a browser, or serve the folder with any static file
server.

## Usage

Open the page, click "Run the pipeline," and watch it step through all 7 stages.
Click "Reset" to replay it.

## Challenges

- **Making fabricated output feel like the real system's voice, not a generic
  mockup.** The Writer step's article structure (answer-first intro, direct-answer
  section openings, a comparison table, an FAQ block, numbered citations with a
  References list) was written to match the real system's actual prompt
  templates, not invented from scratch.
- **Disclosing fabrication without undermining the demo.** A banner that only
  appeared once, or lived in the README, would get missed by anyone who scrolls
  past it. It's pinned and visible through the whole page instead.
- **Deciding what to fabricate versus what to keep real.** The per-step cost
  breakdown is invented, but the total cost range is the real, already-published
  number from the production README — mixing those without labeling which was
  which would have been a form of invented claim, so the cost card says plainly
  which line is real and which is illustrative.

## What I learned

Building a demo for a system you can't show directly forces you to be precise
about what's actually architecture (reusable, disclosable) versus what's actually
business logic (the real prompts, the real client rules) — the two are easy to
conflate when you're used to treating "the code" as one thing.

## What I'd do differently

A second or third invented example topic would make the "Run the pipeline" button
feel less like a fixed demo and more like a real tool, at the cost of writing two
more full fabricated runs. Skipped here to keep the first version honest and
complete rather than broad and thin.
