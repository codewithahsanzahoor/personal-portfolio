
import { GoogleGenAI } from "@google/genai";

const MODEL_NAME = "gemini-3-flash-preview";

export const generateAIResponse = async (prompt: string, history: { role: string, content: string }[]) => {
  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
    
    // Construct simplified contents for the generateContent call
    // The history mapping is to ensure it aligns with the expected format if needed, 
    // but for simple text generation we can just append context.
    
    const context = `You are the System Operator AI for 'Nexus Dev'. 
    Nexus Dev is a world-class architect of Digital Solutions: Full Stack, WordPress, and Deployment.
    Known projects: Nebula Core (WebGL visualization), Kryptos Vault (Web3 security), Zenith OS (Cloud management).
    Expertise: React, Node.js, Docker, AWS, WordPress Headless.
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
