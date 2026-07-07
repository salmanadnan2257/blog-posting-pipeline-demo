// Fabricated example run for illustration only. No live API calls happen anywhere
// in this file or this demo. "Nordkast Coffee Supply" is an invented brand and
// does not represent any real Digitalise Agency client.

const DEMO_RUN = {
  business_name: "Nordkast Coffee Supply",
  topic_title: "How to Descale a Home Espresso Machine",

  steps: [
    {
      id: "brief",
      num: "1 / 7",
      title: "Brief",
      model: "gemini-3.1-pro-preview",
      type: "json",
      input: {
        business_name: "Nordkast Coffee Supply",
        business_information:
          "Sells home espresso machines and accessories online. Wants maintenance content that builds trust with recent buyers, not aggressive product pushing."
      },
      output: {
        topic: "How to Descale a Home Espresso Machine",
        description:
          "A step-by-step maintenance guide covering when to descale, how to choose a descaling solution, and the full cleaning cycle for common home espresso machines, aimed at customers who just bought their first machine and want to protect it.",
        additional_details:
          "Nordkast sells its own citric-acid descaling concentrate alongside its machines; mention it as one valid option without turning the post into a hard sell. Avoid naming competitor machines' proprietary descaling programs."
      }
    },
    {
      id: "keywords",
      num: "2 / 7",
      title: "Keywords",
      model: "gemini-3.1-pro-preview",
      type: "json",
      output: {
        primary_keyword: "how to descale an espresso machine",
        keywords: [
          "descale espresso machine",
          "espresso machine maintenance",
          "citric acid descaling solution",
          "when to descale espresso machine",
          "espresso machine scale buildup"
        ],
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
      id: "plan",
      num: "3 / 7",
      title: "Section plan",
      model: "gemini-3.5-flash",
      type: "json",
      output: {
        metadata: {
          meta_title: "How to Descale a Home Espresso Machine (Step by Step)",
          meta_description:
            "A complete guide to descaling a home espresso machine: how often, what solution to use, and the full cycle, so scale buildup never wrecks your shot.",
          url_slug: "how-to-descale-a-home-espresso-machine"
        },
        sub_topics: [
          {
            title: "Why descaling matters",
            covers: "scale buildup mechanics, effect on shot quality and machine lifespan",
            aeo_format: "direct-answer paragraph",
            key_points: ["mineral deposits from tap water", "restricted water flow", "uneven extraction"]
          },
          {
            title: "How often to descale",
            covers: "frequency by water hardness and usage",
            aeo_format: "table",
            key_points: ["soft water: every 3 months", "hard water: every 4 to 6 weeks", "adjust for daily volume"]
          },
          {
            title: "Choosing a descaling solution",
            covers: "citric acid vs. commercial descalers vs. vinegar",
            aeo_format: "comparison table",
            key_points: ["citric acid is gentler on seals", "vinegar isn't recommended by most manufacturers", "Nordkast Descale Concentrate as one option"],
            internal_link_hint: "product page (not linked in this demo)"
          },
          {
            title: "The full descaling cycle, step by step",
            covers: "numbered walkthrough",
            aeo_format: "numbered list",
            key_points: ["mix the solution", "run through the group head", "rinse cycles", "flush portafilter and steam wand"]
          },
          {
            title: "Signs your machine needs it now",
            covers: "diagnostic signs",
            aeo_format: "bulleted list",
            key_points: ["slower shot times", "white residue at the steam wand tip", "a louder pump"]
          }
        ]
      }
    },
    {
      id: "writer",
      num: "4 / 7",
      title: "Writer",
      model: "gemini-3.1-pro-preview (agentic, 2 tools)",
      type: "article",
      article: {
        intro: [
          "Descale a home espresso machine every 2 to 3 months if your tap water is soft, or every 4 to 6 weeks if it's hard, using a citric acid solution run through a full brew and rinse cycle. Waiting longer lets mineral deposits narrow the machine's internal water paths, which is the most common reason a shot that used to pull clean starts running slow and uneven.",
          "The good news: descaling takes about 20 minutes, needs no tools, and the cycle is nearly identical across brands. This guide covers why it matters, how often to actually do it, which solution to use, and the exact steps."
        ],
        sections: [
          {
            header: "Why descaling matters",
            body:
              "<p>Tap water carries dissolved calcium and magnesium. Every time it's heated inside the machine's boiler, a small amount of that mineral content comes out of solution and clings to internal surfaces: the boiler walls, the group head, the internal tubing. Over weeks, that buildup narrows the water path enough to change how a shot pulls, usually starting as a slightly longer shot time and ending, if ignored for months, as a machine that struggles to reach brewing temperature at all.</p>"
          },
          {
            header: "How often to descale",
            body:
              '<table><thead><tr><th>Water hardness</th><th>Typical interval</th></tr></thead><tbody><tr><td>Soft (most filtered or naturally soft tap water)</td><td>Every 10 to 12 weeks</td></tr><tr><td>Moderate</td><td>Every 6 to 8 weeks</td></tr><tr><td>Hard (common in many municipal supplies)</td><td>Every 4 to 6 weeks</td></tr></tbody></table><p>Machines used more than twice a day should move to the shorter end of whichever range applies. A cheap hardness test strip, run once, tells you which row to use.</p>'
          },
          {
            header: "Choosing a descaling solution",
            body:
              '<table><thead><tr><th>Option</th><th>Verdict</th></tr></thead><tbody><tr><td>Citric acid solution (e.g. Nordkast Descale Concentrate)</td><td>Gentle on rubber seals and gaskets; the option most manufacturers recommend</td></tr><tr><td>Commercial sulfamic-acid descaler</td><td>Works faster but can be harsher on seals over repeated use</td></tr><tr><td>Household vinegar</td><td>Not recommended by most manufacturers; the smell lingers in the boiler and it\'s harder to rinse fully</td></tr></tbody></table>'
          },
          {
            header: "The full descaling cycle, step by step",
            body:
              "<ol><li>Empty the water tank and mix the descaling solution per its label (roughly one part solution to the ratio printed on the bottle).</li><li>Fill the tank with the mixed solution and run it through the group head in short bursts, letting it sit in the boiler for the resting period the label specifies.</li><li>Run the steam wand briefly to clear scale from that path too.</li><li>Empty the tank, refill with plain water, and run at least two full rinse cycles through the group head.</li><li>Run one more rinse through the steam wand, then pull one throwaway shot before making your next real one.</li></ol>"
          },
          {
            header: "Signs your machine needs it now",
            body:
              "<ul><li>Shot times creeping past their usual mark with no change in grind or dose</li><li>White or chalky residue visible at the steam wand tip</li><li>The pump sounding noticeably louder or more strained than usual</li></ul>"
          }
        ],
        faq: [
          {
            q: "How often should I descale my espresso machine?",
            a: "Every 10 to 12 weeks with soft water, every 4 to 6 weeks with hard water, sooner if you use the machine more than twice a day."
          },
          {
            q: "Can I use vinegar instead of a descaling solution?",
            a: "You can, but most manufacturers advise against it. Vinegar's smell is hard to rinse out fully and it can be harsher on internal seals than a citric acid solution made for the purpose."
          },
          {
            q: "What happens if I don't descale my espresso machine?",
            a: "Mineral buildup gradually narrows internal water paths, slowing and eventually unevening shot extraction, and in severe cases prevents the boiler from reaching brewing temperature."
          },
          {
            q: "How do I know my machine needs descaling?",
            a: "Watch for shot times creeping longer, white residue at the steam wand tip, or a pump that sounds louder than usual. Any one of those is a sign to descale now rather than waiting for the calendar reminder."
          }
        ],
        sources: [
          { ref: 1, title: "Espresso Machine Care and Maintenance Guide", url: "https://example.com/appliance-guides/espresso-maintenance", date: "2025" },
          { ref: 2, title: "Water Hardness and Scale Formation in Home Appliances", url: "https://example.com/research/water-hardness-scale", date: "2024" }
        ]
      }
    },
    {
      id: "image_prompt",
      num: "5 / 7",
      title: "Image prompt",
      model: "gemini-3.5-flash",
      type: "text",
      output:
        "A clean, softly lit product photograph of a stainless steel home espresso machine on a warm wood countertop, a small glass measuring cup of pale yellow descaling solution beside it, gentle steam rising from the group head, low morning light through a window just out of frame, shallow depth of field, warm and inviting color palette, shot on a 50mm lens - no text or watermarks."
    },
    {
      id: "image",
      num: "6 / 7",
      title: "Image",
      model: "gemini-3.1-flash-image-preview (not called in this demo)",
      type: "image",
      usage: { model: "gemini-3.1-flash-image-preview", images: 1, mime_type: "image/png" }
    },
    {
      id: "publish",
      num: "7 / 7",
      title: "Publish",
      model: "n/a",
      type: "publish",
      published_url: "https://nordkastcoffee.example.com/blog/how-to-descale-a-home-espresso-machine",
      indexnow_status: "not sent (demo)",
      sheets_row_status: "not appended (demo)",
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
};
