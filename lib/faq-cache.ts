import { PARV_CONTEXT } from "./parv-context";

interface FAQEntry {
  keywords: string[];
  answer: string;
}

const ctx = PARV_CONTEXT;

const FAQ_ENTRIES: FAQEntry[] = [
  {
    keywords: ["hi", "hello", "hey", "greetings", "howdy", "sup"],
    answer: `Hey there! 👋 I'm Parv's AI assistant. I can tell you about his experience, skills, projects, or how to get in touch. What would you like to know?`,
  },
  {
    keywords: ["who is", "tell me about", "about parv", "who are you", "introduce"],
    answer: `${ctx.name} is a ${ctx.role} with ${ctx.yearsExperience} years of experience, currently at ${ctx.currentCompany}. ${ctx.summary}`,
  },
  {
    keywords: ["experience", "career", "work history", "background", "worked at", "jobs"],
    answer: `Parv has ${ctx.yearsExperience} years of experience:\n\n- **${ctx.experience[0].role}** at ${ctx.experience[0].company} (${ctx.experience[0].period}) — ${ctx.experience[0].description}\n- **${ctx.experience[1].role}** at ${ctx.experience[1].company} (${ctx.experience[1].period}) — ${ctx.experience[1].description}\n- **${ctx.experience[2].role}** at ${ctx.experience[2].company} (${ctx.experience[2].period}) — ${ctx.experience[2].description}`,
  },
  {
    keywords: ["skills", "tech stack", "technologies", "languages", "frameworks", "what can"],
    answer: `Parv's tech stack:\n\n- **Core:** ${ctx.skills.core.join(", ")}\n- **State & Architecture:** ${ctx.skills.state.join(", ")}\n- **AI:** ${ctx.skills.ai.join(", ")}\n\nTools: ${ctx.skills.tools.join(", ")}`,
  },
  {
    keywords: ["projects", "built", "portfolio", "what has he built", "showcase"],
    answer: `Parv has built some cool projects:\n\n- **${ctx.projects[0].name}** — ${ctx.projects[0].description} [Live](${ctx.projects[0].url})\n- **${ctx.projects[1].name}** — ${ctx.projects[1].description} [Live](${ctx.projects[1].url})`,
  },
  {
    keywords: ["contact", "email", "reach", "hire", "get in touch", "connect"],
    answer: `You can reach Parv at:\n\n- **Phone:** ${ctx.phone}\n- **Email:** ${ctx.email}\n- **LinkedIn:** [${ctx.linkedin}](${ctx.linkedin})\n- **GitHub:** [${ctx.github}](${ctx.github})\n- **Website:** ${ctx.website}`,
  },
  {
    keywords: ["current role", "neurowyzr", "currently", "working on", "present"],
    answer: `Parv is currently a **${ctx.experience[0].role}** at **${ctx.experience[0].company}** (${ctx.experience[0].period}). ${ctx.experience[0].description} Key achievements include building AI-driven cognitive assessment games, designing a role-based Admin Portal improving efficiency by 40%, and achieving zero critical vulnerabilities in pen testing.`,
  },
  {
    keywords: ["react", "typescript", "frontend framework"],
    answer: `React and TypeScript are Parv's core expertise. He has ${ctx.yearsExperience} years building production apps with React, and TypeScript is part of his daily workflow at ${ctx.currentCompany}. He's also proficient with Next.js, Redux, and Tailwind CSS.`,
  },
  {
    keywords: ["ai", "machine learning", "ml", "artificial intelligence", "openai", "claude", "llm"],
    answer: `Parv has hands-on AI/LLM integration experience:\n\n- Built **ResumeAI** using Claude AI (Vercel AI SDK) for resume analysis with real-time LLM streaming\n- Built **ChatPDF** with full RAG pipeline from scratch (TF-IDF, cosine similarity, page-level citations)\n- Built AI-powered content generation tool using GPT-3 & Stable Diffusion at True Sparrow\n- Proficient with OpenAI API, Anthropic Claude, Vercel AI SDK, RAG Pipelines`,
  },
  {
    keywords: ["resume", "cv", "download"],
    answer: `For Parv's detailed resume or CV, please reach out via email at **${ctx.email}** or connect on [LinkedIn](${ctx.linkedin}).`,
  },
  {
    keywords: ["location", "where", "based", "city", "country"],
    answer: `Parv is based in **${ctx.location}**.`,
  },
  {
    keywords: ["salary", "compensation", "pay", "rate", "cost", "pricing"],
    answer: `For compensation-related discussions, please reach out directly to Parv at **${ctx.email}**. He'd be happy to discuss!`,
  },
  {
    keywords: ["availability", "open to", "looking for", "job", "opportunities", "hiring"],
    answer: `Parv is open to opportunities as a **${ctx.targetRole}**. His interests include ${ctx.interests.join(", ")}. Feel free to reach out at **${ctx.email}**!`,
  },
  {
    keywords: ["why hire", "strengths", "why parv", "what makes", "stand out"],
    answer: `Here's why Parv stands out:\n\n- **Performance expert** — 10× load time improvement (14s → <1s) at Lifesight\n- **AI integration** — Built RAG pipelines, LLM streaming, AI analysis tools from scratch\n- **Founding engineer** — Built Neurowyzr from concept to production enterprise platform\n- **Security** — Zero critical/high-risk vulnerabilities in pen testing\n- **Leadership** — Led contract engineering team, improved operational efficiency by 40%`,
  },
  {
    keywords: ["education", "degree", "university", "college", "school", "study"],
    answer: `I don't have specific education details on file. For information about Parv's educational background, please reach out at **${ctx.email}** or check his [LinkedIn](${ctx.linkedin}).`,
  },
];

export function findFAQMatch(query: string): string | null {
  const normalized = query.toLowerCase().trim();

  let bestMatch: FAQEntry | null = null;
  let bestScore = 0;

  for (const entry of FAQ_ENTRIES) {
    let score = 0;
    for (const keyword of entry.keywords) {
      if (normalized.includes(keyword)) {
        score += keyword.split(" ").length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestMatch = entry;
    }
  }

  return bestScore >= 1 ? bestMatch!.answer : null;
}
