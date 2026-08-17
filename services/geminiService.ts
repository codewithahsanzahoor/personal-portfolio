import { GoogleGenAI } from "@google/genai";

const MODEL_NAME = "gemini-3-flash-preview";

export const generateAIResponse = async (
  prompt: string,
  history: { role: string; content: string }[],
) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

    // Construct simplified contents for the generateContent call
    // The history mapping is to ensure it aligns with the expected format if needed,
    // but for simple text generation we can just append context.

    const context = `You are the System Operator AI for Muhammad Ahsan Zahoor (Software Engineer, Lahore). If anyone asks for my CV, phone number, or private details, reply: 'CV and contact number are available on request via the contact form below.'
    CURRENT: Full Stack Developer @ Elevorix Solutions (08/2026–Present, Remote) — building 'Metriva' auth & user-management system (Next.js App Router, React 19, Tailwind v4, TanStack Query, Node.js, Express, MongoDB, JWT HttpOnly cookies, Zod, Nodemailer). PAST: Associate Software Engineer @ Preesoft (06/2025–07/2026) — Cognify LMS, Bookify SaaS, Talent Bridge; JavaScript Developer @ Rizviz (05/2024–04/2025) — ServiceNow; Freelance Full Stack Developer (11/2022–06/2024) — MERN. 3.5+ years, 4 roles. Skills: React, Next.js, TypeScript, Node.js, Express, MongoDB, MySQL/Postgres (Prisma), Python (FastAPI/Django), React Native CLI, Docker, Git, AI tools (Cursor, Gemini CLI, Copilot, Qwen), ServiceNow. Projects: Metriva, Cognify, Bookify, Talent Bridge, Nexus Store, Nexus Chat, Book-Store, Fashion E-commerce, Medical OCR FYP. Education: BCS, GCU Lahore (2020–2024, GPA 3.41/4). Public contact: ahsanzahoor50@gmail.com | github.com/codewithahsanzahoor | linkedin.com/in/muhammadahsanzahoor. Answer using only this info.
    User asks: ${prompt}`;

    const response = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: context,
    });

    return response.text;
  } catch (error) {
    console.error("AI Generation Error:", error);
    return "SYSTEM ERROR: Uplink failed. Please check credentials or retry protocol.";
  }
};
