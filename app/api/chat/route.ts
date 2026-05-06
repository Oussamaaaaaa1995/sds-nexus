import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from "@google/generative-ai";

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    const apiKey = process.env.AI_API_KEY || "";

    // On force l'utilisation de l'API v1 stable au lieu de v1beta
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Configuration explicite du modèle et de la version API
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
    }, { apiVersion: 'v1' }); 

    const result = await model.generateContent(message);
    const response = await result.response;
    
    return NextResponse.json({ reply: response.text() });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ reply: "Erreur technique : " + error.message });
  }
}