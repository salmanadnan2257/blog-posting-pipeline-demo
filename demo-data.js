// Fabricated example runs for illustration only. No live API calls happen anywhere
// in this file or this demo. "Nordkast Coffee Supply" is an invented brand and
// does not represent any real Digitalise Agency client.
//
// REAL_DAVONEX_POSTS below is different: it's a static, hand-copied snapshot of
// the real, live, public post list from davonex.com/blog (an actual configured
// client of the real production pipeline) as of 2026-07-07 — titles, excerpts,
// dates, and read times are copied verbatim, not fabricated. No image is
// hotlinked from davonex.com anywhere in this demo (that would be a live
// third-party request on every page load); each card uses a static placeholder
// instead. "Read the guide" links open the real davonex.com URL directly, which
// is a normal outbound link, not a fetch this demo performs.

const REAL_DAVONEX_POSTS = [
  { slug: "track-ai-search-sales-e-commerce-attribution-guide-2026", title: "Track AI Search Sales: E-Commerce Attribution Guide (2026)", excerpt: "Learn how to track AI search sales for e-commerce. Stop relying on vanity metrics and attribute real revenue to ChatGPT and Google AI today.", date: "Jul 2026", read_time: "5 min read" },
  { slug: "how-to-get-chatgpt-to-recommend-your-e-commerce-store-2026", title: "How to Get ChatGPT to Recommend Your E-Commerce Store (2026)", excerpt: "Learn how to get your e-commerce store recommended by ChatGPT. Optimize your schema, product feeds, and content for AI search engines today.", date: "Jul 2026", read_time: "6 min read" },
  { slug: "how-to-build-e-commerce-product-comparisons-for-ai-2026", title: "How to Build E-Commerce Product Comparisons for AI (2026)", excerpt: "Learn how to structure e-commerce product comparisons for AI to get cited by ChatGPT and Google. Optimize your 'vs' pages to drive premium sales.", date: "Jul 2026", read_time: "5 min read" },
  { slug: "google-ads-vs-aeo-best-e-commerce-roi-in-2026", title: "Google Ads vs AEO: Best E-Commerce ROI in 2026", excerpt: "Compare Google Ads vs AEO for premium e-commerce. Discover why renting traffic is squeezing margins and how to build compounding, owned AI visibility.", date: "Jul 2026", read_time: "7 min read" },
  { slug: "aeo-for-designer-lighting-2026-organic-sales-guide", title: "AEO for Designer Lighting: 2026 Organic Sales Guide", excerpt: "Learn how to use AEO for designer lighting to get recommended by ChatGPT and Google AI without paid ads. Book a call to build your organic engine.", date: "Jul 2026", read_time: "6 min read" },
  { slug: "how-care-and-setup-guides-capture-ai-search-traffic-2026", title: "How Care and Setup Guides Capture AI Search Traffic (2026)", excerpt: "Learn how care and setup guides help capture AI search traffic. See how structured, question-based content earns citations from ChatGPT and Google AI.", date: "Jun 2026", read_time: "5 min read" },
  { slug: "what-is-answer-engine-optimization-for-e-commerce-2026", title: "What is Answer Engine Optimization for E-Commerce (2026)?", excerpt: "Answer Engine Optimization explained for e-commerce: what it is, how it differs from SEO, and why premium stores need it to get recommended by AI.", date: "Jun 2026", read_time: "6 min read" },
  { slug: "how-to-track-organic-e-commerce-sales-2026-roi-guide", title: "How to Track Organic E-Commerce Sales: 2026 ROI Guide", excerpt: "A practical guide to tracking organic e-commerce sales and proving real ROI, instead of guessing at which content actually drives revenue.", date: "Jun 2026", read_time: "6 min read" },
  { slug: "writing-ecommerce-buying-guides-for-ai-search-2026", title: "Writing Ecommerce Buying Guides for AI Search (2026)", excerpt: "Learn how to write e-commerce buying guides that AI search engines actually cite, with direct-answer structure and comparison formatting.", date: "Jun 2026", read_time: "5 min read" },
  { slug: "buying-guides-for-ecommerce-seo-best-formats-2026", title: "Buying Guides for Ecommerce SEO: Best Formats (2026)", excerpt: "The buying-guide formats that perform best for e-commerce SEO in 2026, and how to structure them for both classic search and AI answer engines.", date: "Jun 2026", read_time: "5 min read" },
  { slug: "optimize-ecommerce-product-pages-for-answer-engines-2026", title: "Optimize Ecommerce Product Pages for Answer Engines (2026)", excerpt: "How to optimize e-commerce product pages so answer engines can actually extract and cite your data, from schema to synchronized availability.", date: "Jun 2026", read_time: "6 min read" },
  { slug: "aeo-vs-seo-for-e-commerce-2026-premium-brand-guide", title: "AEO vs SEO for E-Commerce: 2026 Premium Brand Guide", excerpt: "AEO vs SEO for premium e-commerce brands: what each actually optimizes for, and why 2026 stores need both working together.", date: "Jun 2026", read_time: "7 min read" },
  { slug: "seo-vs-paid-ads-for-e-commerce-lowering-cac-in-2026", title: "SEO vs Paid Ads for E-Commerce: Lowering CAC in 2026", excerpt: "A cost comparison of SEO vs paid ads for e-commerce customer acquisition, and how to actually lower CAC in 2026 instead of just renting more traffic.", date: "May 2026", read_time: "6 min read" },
  { slug: "aeo-vs-seo-for-e-commerce-2026-premium-store-guide", title: "AEO vs SEO for E-Commerce: 2026 Premium Store Guide", excerpt: "A premium store's guide to AEO vs SEO in 2026: where they overlap, where they diverge, and which to prioritize first.", date: "May 2026", read_time: "6 min read" },
  { slug: "aeo-for-electronics-retailers-get-ai-recommendations-2026", title: "AEO for Electronics Retailers: Get AI Recommendations (2026)", excerpt: "How electronics retailers can use AEO to get recommended by ChatGPT and Google AI, from spec-sheet schema to comparison content.", date: "May 2026", read_time: "6 min read" }
];

const PRESETS = [
  {
    id: "espresso-descale",
    chip: "Maintenance guide",
    modeledAfter: null
  },
  {
    id: "chatgpt-recommend",
    chip: "AI-recommendation guide",
    modeledAfter: { title: "How to Get ChatGPT to Recommend Your E-Commerce Store (2026)", slug: "how-to-get-chatgpt-to-recommend-your-e-commerce-store-2026" }
  },
  {
    id: "aeo-organic-guide",
    chip: "AEO / organic-sales guide",
    modeledAfter: { title: "AEO for Designer Lighting: 2026 Organic Sales Guide", slug: "aeo-for-designer-lighting-2026-organic-sales-guide" }
  }
];

const DEMO_RUNS = {

  "espresso-descale": {
    business_name: "Nordkast Coffee Supply",
    topic_title: "How to Descale a Home Espresso Machine",
    hero_image: "assets/images/espresso-machine.webp",
    steps: [
      {
        id: "brief", num: "1 / 7", title: "Brief", model: "gemini-3.1-pro-preview", type: "json",
        input: {
          business_name: "Nordkast Coffee Supply",
          business_information: "Sells home espresso machines and accessories online. Wants maintenance content that builds trust with recent buyers, not aggressive product pushing."
        },
        output: {
          topic: "How to Descale a Home Espresso Machine",
          description: "A step-by-step maintenance guide covering when to descale, how to choose a descaling solution, and the full cleaning cycle for common home espresso machines, aimed at customers who just bought their first machine and want to protect it.",
          additional_details: "Nordkast sells its own citric-acid descaling concentrate alongside its machines; mention it as one valid option without turning the post into a hard sell. Avoid naming competitor machines' proprietary descaling programs."
        }
      },
      {
        id: "keywords", num: "2 / 7", title: "Keywords", model: "gemini-3.1-pro-preview", type: "json",
        output: {
          primary_keyword: "how to descale an espresso machine",
          keywords: ["descale espresso machine", "espresso machine maintenance", "citric acid descaling solution", "when to descale espresso machine", "espresso machine scale buildup"],
          central_statements: [
            "Most home espresso machines need descaling every 2 to 3 months with average tap water hardness.",
            "A citric acid solution is gentler on internal seals than harsher commercial descalers.",
            "Skipping descaling is one of the most common causes of a slow, uneven shot at home."
          ],
          search_intent: "informational, pre-purchase-adjacent (readers are often recent or soon-to-be machine owners)",
          questions_to_answer: [
            "How often should I descale my espresso machine?",
            "Can I use vinegar instead of a descaling solution?",
            "What happens if I don't descale my espresso machine?",
            "How do I know my machine needs descaling?"
          ]
        }
      },
      {
        id: "plan", num: "3 / 7", title: "Section plan", model: "gemini-3.5-flash", type: "json",
        output: {
          metadata: {
            meta_title: "How to Descale a Home Espresso Machine (Step by Step)",
            meta_description: "A complete guide to descaling a home espresso machine: how often, what solution to use, and the full cycle, so scale buildup never wrecks your shot.",
            url_slug: "how-to-descale-a-home-espresso-machine"
          },
          sub_topics: [
            { title: "Why descaling matters", covers: "scale buildup mechanics, effect on shot quality and machine lifespan", aeo_format: "direct-answer paragraph", key_points: ["mineral deposits from tap water", "restricted water flow", "uneven extraction"] },
            { title: "How often to descale", covers: "frequency by water hardness and usage", aeo_format: "table", key_points: ["soft water: every 3 months", "hard water: every 4 to 6 weeks", "adjust for daily volume"] },
            { title: "Choosing a descaling solution", covers: "citric acid vs. commercial descalers vs. vinegar", aeo_format: "comparison table", key_points: ["citric acid is gentler on seals", "vinegar isn't recommended by most manufacturers", "Nordkast Descale Concentrate as one option"], internal_link_hint: "product page (not linked in this demo)" },
            { title: "The full descaling cycle, step by step", covers: "numbered walkthrough", aeo_format: "numbered list", key_points: ["mix the solution", "run through the group head", "rinse cycles", "flush portafilter and steam wand"] },
            { title: "Signs your machine needs it now", covers: "diagnostic signs", aeo_format: "bulleted list", key_points: ["slower shot times", "white residue at the steam wand tip", "a louder pump"] }
          ]
        }
      },
      {
        id: "writer", num: "4 / 7", title: "Writer", model: "gemini-3.1-pro-preview (agentic, 2 tools)", type: "article",
        article: {
          intro: [
            "Descale a home espresso machine every 2 to 3 months if your tap water is soft, or every 4 to 6 weeks if it's hard, using a citric acid solution run through a full brew and rinse cycle. Waiting longer lets mineral deposits narrow the machine's internal water paths, which is the most common reason a shot that used to pull clean starts running slow and uneven.",
            "The good news: descaling takes about 20 minutes, needs no tools, and the cycle is nearly identical across brands. This guide covers why it matters, how often to actually do it, which solution to use, and the exact steps."
          ],
          sections: [
            { header: "Why descaling matters", body: "<p>Tap water carries dissolved calcium and magnesium. Every time it's heated inside the machine's boiler, a small amount of that mineral content comes out of solution and clings to internal surfaces: the boiler walls, the group head, the internal tubing. Over weeks, that buildup narrows the water path enough to change how a shot pulls, usually starting as a slightly longer shot time and ending, if ignored for months, as a machine that struggles to reach brewing temperature at all.</p>" },
            { header: "How often to descale", body: '<table><thead><tr><th>Water hardness</th><th>Typical interval</th></tr></thead><tbody><tr><td>Soft (most filtered or naturally soft tap water)</td><td>Every 10 to 12 weeks</td></tr><tr><td>Moderate</td><td>Every 6 to 8 weeks</td></tr><tr><td>Hard (common in many municipal supplies)</td><td>Every 4 to 6 weeks</td></tr></tbody></table><p>Machines used more than twice a day should move to the shorter end of whichever range applies. A cheap hardness test strip, run once, tells you which row to use.</p>' },
            { header: "Choosing a descaling solution", body: '<table><thead><tr><th>Option</th><th>Verdict</th></tr></thead><tbody><tr><td>Citric acid solution (e.g. Nordkast Descale Concentrate)</td><td>Gentle on rubber seals and gaskets; the option most manufacturers recommend</td></tr><tr><td>Commercial sulfamic-acid descaler</td><td>Works faster but can be harsher on seals over repeated use</td></tr><tr><td>Household vinegar</td><td>Not recommended by most manufacturers; the smell lingers in the boiler and it\'s harder to rinse fully</td></tr></tbody></table>' },
            { header: "The full descaling cycle, step by step", body: "<ol><li>Empty the water tank and mix the descaling solution per its label (roughly one part solution to the ratio printed on the bottle).</li><li>Fill the tank with the mixed solution and run it through the group head in short bursts, letting it sit in the boiler for the resting period the label specifies.</li><li>Run the steam wand briefly to clear scale from that path too.</li><li>Empty the tank, refill with plain water, and run at least two full rinse cycles through the group head.</li><li>Run one more rinse through the steam wand, then pull one throwaway shot before making your next real one.</li></ol>" },
            { header: "Signs your machine needs it now", body: "<ul><li>Shot times creeping past their usual mark with no change in grind or dose</li><li>White or chalky residue visible at the steam wand tip</li><li>The pump sounding noticeably louder or more strained than usual</li></ul>" }
          ],
          faq: [
            { q: "How often should I descale my espresso machine?", a: "Every 10 to 12 weeks with soft water, every 4 to 6 weeks with hard water, sooner if you use the machine more than twice a day." },
            { q: "Can I use vinegar instead of a descaling solution?", a: "You can, but most manufacturers advise against it. Vinegar's smell is hard to rinse out fully and it can be harsher on internal seals than a citric acid solution made for the purpose." },
            { q: "What happens if I don't descale my espresso machine?", a: "Mineral buildup gradually narrows internal water paths, slowing and eventually unevening shot extraction, and in severe cases prevents the boiler from reaching brewing temperature." },
            { q: "How do I know my machine needs descaling?", a: "Watch for shot times creeping longer, white residue at the steam wand tip, or a pump that sounds louder than usual. Any one of those is a sign to descale now rather than waiting for the calendar reminder." }
          ],
          sources: [
            { ref: 1, title: "Espresso Machine Care and Maintenance Guide", url: "https://example.com/appliance-guides/espresso-maintenance", date: "2025" },
            { ref: 2, title: "Water Hardness and Scale Formation in Home Appliances", url: "https://example.com/research/water-hardness-scale", date: "2024" }
          ]
        }
      },
      {
        id: "image_prompt", num: "5 / 7", title: "Image prompt", model: "gemini-3.5-flash", type: "text",
        output: "A clean, softly lit product photograph of a stainless steel home espresso machine on a warm wood countertop, a small glass measuring cup of pale yellow descaling solution beside it, gentle steam rising from the group head, low morning light through a window just out of frame, shallow depth of field, warm and inviting color palette, shot on a 50mm lens - no text or watermarks."
      },
      {
        id: "image", num: "6 / 7", title: "Image", model: "gemini-3.1-flash-image-preview (not called in this demo)", type: "image",
        usage: { model: "gemini-3.1-flash-image-preview", images: 1, mime_type: "image/png" }
      },
      {
        id: "publish", num: "7 / 7", title: "Publish", model: "n/a", type: "publish",
        published_url: "https://nordkastcoffee.example.com/blog/how-to-descale-a-home-espresso-machine",
        indexnow_status: "not sent (demo)", sheets_row_status: "not appended (demo)",
        cost: {
          rows: [
            { step: "1. Brief", model: "gemini-3.1-pro-preview", cost_usd: 0.014 },
            { step: "2. Keywords", model: "gemini-3.1-pro-preview", cost_usd: 0.011 },
            { step: "3. Section plan", model: "gemini-3.5-flash", cost_usd: 0.004 },
            { step: "4. Writer (agentic)", model: "gemini-3.1-pro-preview", cost_usd: 0.29 },
            { step: "5. Image prompt", model: "gemini-3.5-flash", cost_usd: 0.003 },
            { step: "Perplexity research (AEO/SEO + subtopics)", model: "perplexity", cost_usd: 0.05 },
            { step: "Query embeddings + Pinecone reads", model: "gemini embeddings / pinecone", cost_usd: 0.003 },
            { step: "Hero image", model: "gemini-3.1-flash-image-preview", cost_usd: 0.025 }
          ],
          total_range: [0.37, 0.40]
        }
      }
    ]
  },

  "chatgpt-recommend": {
    business_name: "Nordkast Coffee Supply",
    topic_title: "How to Get ChatGPT to Recommend Your Coffee Shop (2026)",
    hero_image: "assets/images/coffee-beans.webp",
    steps: [
      {
        id: "brief", num: "1 / 7", title: "Brief", model: "gemini-3.1-pro-preview", type: "json",
        input: {
          business_name: "Nordkast Coffee Supply",
          business_information: "Sells specialty coffee beans, brewing equipment, and roast subscriptions online. Wants to show up when shoppers ask AI assistants for coffee recommendations, not just rank on Google."
        },
        output: {
          topic: "How to Get ChatGPT to Recommend Your Coffee Shop (2026)",
          description: "A guide explaining how AI answer engines like ChatGPT choose which coffee brands to recommend, covering structured product and roast-level data, GPTBot crawler access, and the buying-guide content that earns citations.",
          additional_details: "Mention Nordkast's own single-origin subscription as one example of a well-structured listing, without turning the post into a hard sell. Avoid disparaging specific competitor brands by name."
        }
      },
      {
        id: "keywords", num: "2 / 7", title: "Keywords", model: "gemini-3.1-pro-preview", type: "json",
        output: {
          primary_keyword: "get chatgpt to recommend your coffee shop",
          keywords: ["ai search coffee recommendations", "chatgpt shopping recommendations", "coffee product schema", "answer engine optimization coffee", "structured data for coffee ecommerce"],
          central_statements: [
            "AI answer engines extract structured product and roast data rather than crawling for keywords.",
            "Complete Product and Offer schema is the single biggest lever for being cited by ChatGPT.",
            "Buying guides that answer specific brewing questions outperform generic product pages for AI citations."
          ],
          search_intent: "informational, merchant-facing (coffee sellers researching AI visibility)",
          questions_to_answer: [
            "How do I get my coffee products recommended by ChatGPT?",
            "What product schema does a coffee store need for AI search?",
            "Why does ChatGPT ignore my coffee shop even with good reviews?",
            "Do brewing guides help get cited by AI engines?"
          ]
        }
      },
      {
        id: "plan", num: "3 / 7", title: "Section plan", model: "gemini-3.5-flash", type: "json",
        output: {
          metadata: {
            meta_title: "How to Get ChatGPT to Recommend Your Coffee Shop (2026)",
            meta_description: "Learn how to get your coffee brand recommended by ChatGPT: structured product schema, GPTBot access, and buying guides that earn AI citations.",
            url_slug: "how-to-get-chatgpt-to-recommend-your-coffee-shop-2026"
          },
          sub_topics: [
            { title: "How AI recommendation engines pick products", covers: "structured-data synthesis over keyword crawling", aeo_format: "direct-answer paragraph", key_points: ["extracts roast, origin, and price data", "synthesizes an answer instead of listing links", "ignores pages with nothing to extract"] },
            { title: "The product schema a coffee store needs", covers: "Product and Offer schema for roasts and blends", aeo_format: "table", key_points: ["roast level and origin fields", "price and currency", "synchronized availability", "brew-method compatibility"] },
            { title: "Why generic product pages get skipped", covers: "lack of comparative content", aeo_format: "direct-answer paragraph", key_points: ["no pros/cons for the AI to extract", "competitor with cleaner data wins the citation"] },
            { title: "Buying guides that actually earn citations", covers: "structure that AI engines favor", aeo_format: "numbered list", key_points: ["target specific brewing questions", "open with a direct answer", "use comparison tables", "keep formatting clean"] },
            { title: "Common mistakes that block AI citations", covers: "technical and content gaps", aeo_format: "bulleted list", key_points: ["inconsistent stock status", "missing Offer schema", "no GPTBot crawler access"] }
          ]
        }
      },
      {
        id: "writer", num: "4 / 7", title: "Writer", model: "gemini-3.1-pro-preview (agentic, 2 tools)", type: "article",
        article: {
          intro: [
            "To get ChatGPT to recommend your coffee shop, you need complete Product and Offer schema for every roast and blend, explicit GPTBot crawler access, and buying guides that answer specific brewing questions AI engines can extract directly. Generic product pages with no comparative detail give the AI nothing to cite, so it recommends a competitor instead.",
            "This guide covers how AI recommendation engines actually choose which coffee brands to surface, the schema your store needs, and the content that earns citations instead of getting skipped."
          ],
          sections: [
            { header: "How AI recommendation engines pick products", body: "<p>When a shopper asks ChatGPT for a coffee recommendation, the assistant doesn't crawl for keyword matches. It extracts structured facts, roast level, origin, tasting notes, price, from sources with clean data, then synthesizes a direct answer. A product page with only a name and a price gives the AI nothing to work with, so it moves on to a competitor with more complete data.</p>" },
            { header: "The product schema a coffee store needs", body: "<table><thead><tr><th>Field</th><th>What it confirms</th></tr></thead><tbody><tr><td>Roast level and origin</td><td>Lets the AI match a shopper's flavor preference to a specific product</td></tr><tr><td>Price and currency (Offer schema)</td><td>Confirms the product is purchasable and at what cost</td></tr><tr><td>Availability, synced to real stock</td><td>Conflicting stock data between your site and feed blocks citations entirely</td></tr><tr><td>Brew-method compatibility</td><td>Answers the follow-up question shoppers usually ask next</td></tr></tbody></table>" },
            { header: "Why generic product pages get skipped", body: "<p>A page that only lists a bag size and a price has no pros, cons, or context for the AI to extract. When a shopper's question requires any comparison at all, best for espresso, best for pour-over, best for a gift, a page with no comparative content simply can't compete, no matter how good the coffee actually is.</p>" },
            { header: "Buying guides that actually earn citations", body: "<ol><li>Target a specific brewing or gifting question your buyers actually ask.</li><li>Open with a direct, declarative answer the AI can quote as-is.</li><li>Use comparison tables for roast level, origin, and brew method instead of long paragraphs.</li><li>Keep formatting clean: clear headers, short answers, no marketing fluff.</li></ol>" },
            { header: "Common mistakes that block AI citations", body: "<ul><li>Stock status that disagrees between your website and your product feed</li><li>Missing or incomplete Offer schema (no price, no currency, no availability)</li><li>A robots.txt that doesn't explicitly allow GPTBot and other AI crawlers</li></ul>" }
          ],
          faq: [
            { q: "How do I get my coffee products recommended by ChatGPT?", a: "Provide complete Product and Offer schema for every roast, allow GPTBot crawler access, and publish buying guides that answer specific brewing questions directly." },
            { q: "What product schema does a coffee store need for AI search?", a: "Roast level, origin, price and currency, synchronized availability, and brew-method compatibility, all marked up as structured Product and Offer schema." },
            { q: "Why does ChatGPT ignore my coffee shop even with good reviews?", a: "Reviews aren't structured product data. If your schema is incomplete or your stock status conflicts across your site and feed, the AI has nothing reliable to cite and moves to a competitor." },
            { q: "Do brewing guides help get cited by AI engines?", a: "Yes. Guides that open with a direct answer and use comparison tables give AI engines exactly the structured content they extract for recommendations." }
          ],
          sources: [
            { ref: 1, title: "Product data specification - Google Merchant Center Help", url: "https://example.com/merchant-help/product-data-spec", date: "2026" },
            { ref: 2, title: "Intro to How Structured Data Markup Works", url: "https://example.com/search-docs/structured-data-intro", date: "2024" }
          ]
        }
      },
      {
        id: "image_prompt", num: "5 / 7", title: "Image prompt", model: "gemini-3.5-flash", type: "text",
        output: "A clean, softly lit flat-lay of three coffee bags with visible roast-date labels on a warm wood surface, a small card listing origin and tasting notes beside them, a filled pour-over cup slightly out of focus in the background, natural daylight, warm and inviting color palette, shot on a 50mm lens - no text or watermarks."
      },
      {
        id: "image", num: "6 / 7", title: "Image", model: "gemini-3.1-flash-image-preview (not called in this demo)", type: "image",
        usage: { model: "gemini-3.1-flash-image-preview", images: 1, mime_type: "image/png" }
      },
      {
        id: "publish", num: "7 / 7", title: "Publish", model: "n/a", type: "publish",
        published_url: "https://nordkastcoffee.example.com/blog/how-to-get-chatgpt-to-recommend-your-coffee-shop-2026",
        indexnow_status: "not sent (demo)", sheets_row_status: "not appended (demo)",
        cost: {
          rows: [
            { step: "1. Brief", model: "gemini-3.1-pro-preview", cost_usd: 0.013 },
            { step: "2. Keywords", model: "gemini-3.1-pro-preview", cost_usd: 0.010 },
            { step: "3. Section plan", model: "gemini-3.5-flash", cost_usd: 0.004 },
            { step: "4. Writer (agentic)", model: "gemini-3.1-pro-preview", cost_usd: 0.27 },
            { step: "5. Image prompt", model: "gemini-3.5-flash", cost_usd: 0.003 },
            { step: "Perplexity research (AEO/SEO + subtopics)", model: "perplexity", cost_usd: 0.05 },
            { step: "Query embeddings + Pinecone reads", model: "gemini embeddings / pinecone", cost_usd: 0.003 },
            { step: "Hero image", model: "gemini-3.1-flash-image-preview", cost_usd: 0.025 }
          ],
          total_range: [0.35, 0.39]
        }
      }
    ]
  },

  "aeo-organic-guide": {
    business_name: "Nordkast Coffee Supply",
    topic_title: "AEO for Single-Origin Coffee: 2026 Organic Sales Guide",
    hero_image: "assets/images/coffee-cherries.webp",
    steps: [
      {
        id: "brief", num: "1 / 7", title: "Brief", model: "gemini-3.1-pro-preview", type: "json",
        input: {
          business_name: "Nordkast Coffee Supply",
          business_information: "Sells single-origin, small-batch roasted coffee direct to consumers. Wants organic AI-search visibility instead of relying on paid social ads for new customer acquisition."
        },
        output: {
          topic: "AEO for Single-Origin Coffee: 2026 Organic Sales Guide",
          description: "A guide on using Answer Engine Optimization to get single-origin coffee recommended by AI shopping assistants without paid ads, covering origin storytelling, tasting-note schema, and organic content structure.",
          additional_details: "Frame Nordkast's small-batch sourcing as an example of the origin detail AI engines look for, without overselling. Keep the tone practical, not hypey."
        }
      },
      {
        id: "keywords", num: "2 / 7", title: "Keywords", model: "gemini-3.1-pro-preview", type: "json",
        output: {
          primary_keyword: "aeo for single origin coffee",
          keywords: ["organic ai search coffee sales", "answer engine optimization coffee brand", "ai shopping recommendations specialty coffee", "tasting note schema", "coffee brand ai visibility"],
          central_statements: [
            "Paid ad costs for specialty coffee brands are rising as more DTC brands compete for the same audience.",
            "AEO builds a compounding, owned discovery channel instead of renting attention per click.",
            "Origin and tasting-note detail is exactly the structured content AI engines extract for recommendations."
          ],
          search_intent: "informational, merchant-facing (coffee roasters evaluating AEO vs paid ads)",
          questions_to_answer: [
            "What is AEO for a coffee brand?",
            "How is AEO different from paid ads for coffee sales?",
            "What content earns organic AI recommendations for coffee?",
            "How long does AEO take to show results for a coffee shop?"
          ]
        }
      },
      {
        id: "plan", num: "3 / 7", title: "Section plan", model: "gemini-3.5-flash", type: "json",
        output: {
          metadata: {
            meta_title: "AEO for Single-Origin Coffee: 2026 Organic Sales Guide",
            meta_description: "How single-origin coffee brands use Answer Engine Optimization to earn organic AI recommendations instead of paying for every new customer.",
            url_slug: "aeo-for-single-origin-coffee-2026-organic-sales-guide"
          },
          sub_topics: [
            { title: "What AEO means for a coffee brand", covers: "definition and scope", aeo_format: "direct-answer paragraph", key_points: ["earning AI citations, not just search rank", "structured origin and tasting content"] },
            { title: "AEO vs paid ads: the real cost comparison", covers: "cost pattern over time", aeo_format: "table", key_points: ["paid ads reset to zero each month", "AEO content compounds", "upfront content cost vs ongoing ad spend"] },
            { title: "The content AI engines extract from coffee brands", covers: "structured origin and tasting data", aeo_format: "bulleted list", key_points: ["origin story and farm detail", "tasting notes", "roast date", "brew recommendations"] },
            { title: "Building an organic AEO content library", covers: "practical steps", aeo_format: "numbered list", key_points: ["audit existing product pages", "add origin and tasting schema", "publish comparison and buying-guide content", "monitor which pages get cited"] },
            { title: "What to expect and when", covers: "honest timeline", aeo_format: "direct-answer paragraph", key_points: ["not instant", "compounds over months", "still needs product quality to back it up"] }
          ]
        }
      },
      {
        id: "writer", num: "4 / 7", title: "Writer", model: "gemini-3.1-pro-preview (agentic, 2 tools)", type: "article",
        article: {
          intro: [
            "AEO for single-origin coffee means earning organic recommendations from ChatGPT and Google AI by publishing structured origin, tasting, and brewing content, instead of paying for every new customer through ads. Coffee brands that only run paid social see acquisition costs climb every quarter; AEO builds a channel that compounds instead of resetting to zero each month.",
            "This guide covers what AEO actually means for a coffee brand, how its economics compare to paid ads, and the specific content that earns AI citations."
          ],
          sections: [
            { header: "What AEO means for a coffee brand", body: "<p>Answer Engine Optimization is the practice of structuring your content and product data so AI answer engines, ChatGPT, Google AI, and similar tools, can extract it directly and cite your brand in a recommendation. For a coffee brand, that mostly means origin detail, tasting notes, and roast information presented as clean, extractable content rather than buried in marketing copy.</p>" },
            { header: "AEO vs paid ads: the real cost comparison", body: "<table><thead><tr><th>Approach</th><th>Cost pattern</th><th>Durability</th></tr></thead><tbody><tr><td>Paid social ads</td><td>Ongoing, per-click, tends to rise as more brands compete</td><td>Stops the moment spend stops</td></tr><tr><td>AEO content</td><td>Upfront content investment, then largely fixed</td><td>Keeps earning citations as long as it stays accurate and well-structured</td></tr></tbody></table>" },
            { header: "The content AI engines extract from coffee brands", body: "<ul><li>Origin story: farm, region, and altitude detail</li><li>Tasting notes, described specifically rather than generically</li><li>Roast date, since freshness is a common shopper question</li><li>Brew-method recommendations matched to the specific roast</li></ul>" },
            { header: "Building an organic AEO content library", body: "<ol><li>Audit existing product pages for missing origin, tasting, and roast-date detail.</li><li>Add structured Product and Offer schema alongside that content.</li><li>Publish comparison and buying-guide content answering specific shopper questions.</li><li>Track which pages actually get cited and expand on what's working.</li></ol>" },
            { header: "What to expect and when", body: "<p>AEO isn't instant. Early structured-data fixes can start earning citations within weeks, but a full content library that consistently gets cited typically compounds over several months, not days. It also isn't a substitute for the coffee itself being good; AEO gets a well-regarded brand recommended more often, it doesn't fix a weak product.</p>" }
          ],
          faq: [
            { q: "What is AEO for a coffee brand?", a: "Structuring your origin, tasting, and roast content so AI answer engines can extract and cite it directly in shopping recommendations, rather than just optimizing for search rank." },
            { q: "How is AEO different from paid ads for coffee sales?", a: "Paid ads are an ongoing, per-click cost that stops producing the moment spend stops. AEO content is a mostly upfront investment that keeps earning organic citations as long as it stays accurate and well-structured." },
            { q: "What content earns organic AI recommendations for coffee?", a: "Specific tasting notes, origin and farm detail, current roast dates, and brew-method recommendations, structured as clean, extractable content rather than general marketing copy." },
            { q: "How long does AEO take to show results for a coffee shop?", a: "Early structured-data fixes can start earning citations within weeks; a full content library that consistently gets cited typically compounds over several months." }
          ],
          sources: [
            { ref: 1, title: "Answer Engine Optimization: An Overview", url: "https://example.com/research/answer-engine-optimization-overview", date: "2026" },
            { ref: 2, title: "Customer Acquisition Cost Trends in Direct-to-Consumer Retail", url: "https://example.com/research/dtc-cac-trends", date: "2025" }
          ]
        }
      },
      {
        id: "image_prompt", num: "5 / 7", title: "Image prompt", model: "gemini-3.5-flash", type: "text",
        output: "A clean, editorial-style photograph of raw green coffee cherries on a branch at a small hillside farm, soft overcast daylight, shallow depth of field with a blurred roastery building in the background, warm and earthy color palette, shot on a 50mm lens - no text or watermarks."
      },
      {
        id: "image", num: "6 / 7", title: "Image", model: "gemini-3.1-flash-image-preview (not called in this demo)", type: "image",
        usage: { model: "gemini-3.1-flash-image-preview", images: 1, mime_type: "image/png" }
      },
      {
        id: "publish", num: "7 / 7", title: "Publish", model: "n/a", type: "publish",
        published_url: "https://nordkastcoffee.example.com/blog/aeo-for-single-origin-coffee-2026-organic-sales-guide",
        indexnow_status: "not sent (demo)", sheets_row_status: "not appended (demo)",
        cost: {
          rows: [
            { step: "1. Brief", model: "gemini-3.1-pro-preview", cost_usd: 0.015 },
            { step: "2. Keywords", model: "gemini-3.1-pro-preview", cost_usd: 0.012 },
            { step: "3. Section plan", model: "gemini-3.5-flash", cost_usd: 0.004 },
            { step: "4. Writer (agentic)", model: "gemini-3.1-pro-preview", cost_usd: 0.31 },
            { step: "5. Image prompt", model: "gemini-3.5-flash", cost_usd: 0.003 },
            { step: "Perplexity research (AEO/SEO + subtopics)", model: "perplexity", cost_usd: 0.05 },
            { step: "Query embeddings + Pinecone reads", model: "gemini embeddings / pinecone", cost_usd: 0.003 },
            { step: "Hero image", model: "gemini-3.1-flash-image-preview", cost_usd: 0.025 }
          ],
          total_range: [0.38, 0.42]
        }
      }
    ]
  }

};
