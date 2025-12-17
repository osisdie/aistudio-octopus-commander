import { GoogleGenAI } from "@google/genai";
import { Difficulty } from "../types";

const apiKey = process.env.API_KEY;

export const generateGameCommentary = async (
  name: string,
  score: number,
  difficulty: Difficulty,
  won: boolean
): Promise<string> => {
  if (!apiKey) {
    return "Great game! The Octopus is speechless.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const prompt = `
      You are a giant, slightly sarcastic, but fair Octopus game master.
      A user named "${name}" just finished your reaction game.
      
      Details:
      - Result: ${won ? "VICTORY (Completed all rounds)" : "DEFEAT (Failed)"}
      - Difficulty: ${difficulty}
      - Score: ${score} points
      
      Write a short, witty, 1-2 sentence comment reacting to their performance. 
      If they won on Hard, be impressed. If they lost on Easy, be gently mocking.
      Use ocean puns if appropriate.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
    });

    return response.text || "The ocean remains silent...";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Octopus is currently sleeping (API Error).";
  }
};
