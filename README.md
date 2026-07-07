# Blog Posting Pipeline — Demo

A fabricated, interactive walkthrough of the `blog-posting-pipeline` project's
7-step architecture, built so the pipeline can be seen running without exposing
the real system, which is private.

## Why this exists

`blog-posting-pipeline` is a production content pipeline that researches, writes,
illustrates, and publishes SEO/AEO blog posts for real Digitalise Agency clients,
including davonex.com. Its source is the agency's live product methodology, not
just data that can be scrubbed, so it stays private. This demo exists to give
hiring panels and interviewers something real to click through: the actual
7-step architecture, replayed against multiple invented examples, with every
fabricated number labeled as such at the point of display, alongside the real,
live post history from an actual configured client.

## What it is

A two-tab static page. **Run the pipeline** steps through all 7 stages of the
real system's architecture against a chosen example run, for an invented brand,
"Nordkast Coffee Supply." **Blog Library** mirrors davonex.com/blog: by default
it shows the real, live post list from that actual client (titles, excerpts,
dates, and read times copied verbatim), and a completed pipeline run adds one
fabricated demo post to that list for 15 minutes, clearly marked, before it's
automatically removed. Nothing here is a real client's actual generation, and no
API is called anywhere.

## Features

- **Three autofill example runs**, selectable by chip before running: a
  maintenance guide (the original worked example), and two more whose input
  shape is explicitly modeled after real, named davonex.com posts ("How to Get
  ChatGPT to Recommend Your E-Commerce Store" and "AEO for Designer Lighting:
  2026 Organic Sales Guide"), translated into the fictional coffee brand's
  domain. Each preset's card links to the real post it's modeled after.
- All 7 real pipeline stages per run, in the real system's order and schema
  shape: Brief, Keywords, Section plan, Writer (with citations and a References
  list), Image prompt, Image, Publish (with a cost breakdown).
- **Real photos, not AI-generated placeholders**, for the Image step and the
  post-preview hero: three freely-licensed stock photos (an espresso machine, a
  bag of roasted beans, coffee cherries on the plant), downloaded once and
  stored locally so the demo stays self-contained, with full attribution in
  `assets/images/CREDITS.md`. Each is captioned "real stock photo, not
  AI-generated" so it's never mistaken for the real system's actual Gemini
  output.
- **Blog Library tab**: a static, hand-copied snapshot of davonex.com/blog's
  real 15-post list (`REAL_DAVONEX_POSTS` in `demo-data.js`), styled after the
  real site's own `.post-card` grid. No davonex.com image is hotlinked (that
  would be a live third-party request on every page load); each real card uses
  a labeled placeholder block instead, and "Read the real post" opens the
  actual davonex.com URL. Completing a pipeline run adds one fabricated demo
  card to the top of this list with a live "removes in mm:ss" countdown ribbon
  and the run's real stock photo; it's replaced if you run again, and expires
  automatically after 15 minutes either way.
- A permanent banner disclosing this is a scripted demo, visible at every step.
- The one headline cost figure shown per run ($0.35–$0.42 depending on preset)
  is anchored to the real, already-published production cost range from the
  source project's README; the per-step cost line items underneath are
  illustrative and labeled as such.
- The Publish step includes a full post-preview: browser-chrome bar, mini site
  nav, breadcrumb, article head, real hero photo, full prose with citations and
  a comparison table, FAQ, References list, author line, and a gradient final
  CTA band, styled with the real, public design tokens and article template
  read directly off davonex.com's own live CSS and a real published post. This
  is presentation only: static HTML built from the fabricated run, no request
  to any real site, and none of that site's own server code or private
  integration details are part of this repo.

## Architecture

Plain HTML, CSS, and vanilla JavaScript. No build step, no framework, no backend,
no network calls at runtime. `demo-data.js` holds `DEMO_RUNS` (the three
fabricated runs, each with all 7 steps), `PRESETS` (the autofill chip metadata),
and `REAL_DAVONEX_POSTS` (the real post-list snapshot). `app.js` drives tab
switching, preset selection, the step-through reveal, the Publish step's article
preview, and the Blog Library's countdown/expiry logic. `styles.css` uses
davonex.com's public color/font/radius/shadow tokens and component patterns
(copied from its live CSS) so the demo reads as a genuine preview of where this
pipeline's output ends up, not a generic mockup. `assets/images/` holds the
three real, locally-stored stock photos and their license credits.

## Setup

None. Open `index.html` in a browser, or serve the folder with any static file
server.

## Usage

Pick an example on the "Run the pipeline" tab (or keep the default), click "Run
the pipeline," and watch it step through all 7 stages. Switch to "Blog Library"
to see the real davonex.com post list, plus the demo post you just generated
sitting at the top with a live countdown until it's removed.

## Challenges

- **Making fabricated output feel like the real system's voice, not a generic
  mockup.** The Writer step's article structure (answer-first intro, direct-answer
  section openings, a comparison table, an FAQ block, numbered citations with a
  References list) was written to match the real system's actual prompt
  templates, not invented from scratch, for all three runs.
- **Deciding what's honestly reusable from a real client's public content.**
  davonex.com's own post list is real, live, and already public, so showing it
  verbatim is more honest than inventing a fake one; but its images are not
  reused (no hotlinking, no downloading and re-serving davonex's own client
  photos), since those aren't this demo's to redistribute.
- **Sourcing real photos without breaking the self-contained, no-external-calls
  rule.** Hotlinking a live image URL would mean this static demo makes a
  network request to a third party on every page load. Downloading three
  freely-licensed (CC BY / CC BY-SA / public domain) photos once and storing
  them locally, with full attribution, keeps the demo honest about using real
  (not AI-generated) images while staying fully self-contained.
- **Disclosing fabrication without undermining the demo.** A banner that only
  appeared once, or lived in the README, would get missed by anyone who scrolls
  past it. It's pinned and visible through the whole page instead, and the
  Blog Library's demo card carries its own second disclosure (the ribbon) so
  it's never confused with a real davonex.com post sitting right next to it.

## What I learned

Building a demo for a system you can't show directly forces you to be precise
about what's actually architecture (reusable, disclosable) versus what's actually
business logic (the real prompts, the real client rules) — the two are easy to
conflate when you're used to treating "the code" as one thing. Mixing a real,
public data source (the davonex post list) with clearly-labeled fabricated
content in the same list turned out to be a stronger honesty pattern than either
inventing a fake library from scratch or omitting real evidence of the pipeline
actually shipping.

## What I'd do differently

A real client publishes dozens of posts a month; the 15-post snapshot here will
drift out of date. A live version could re-fetch that list periodically instead
of a static copy — skipped here to keep this demo's "no live calls" guarantee
airtight rather than adding the one exception that would break it.
