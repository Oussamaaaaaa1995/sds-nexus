import { NextResponse } from "next/server";

/* 🔹 Knowledge base (always available) */
const KNOWLEDGE: Record<string, string> = {
  erp: "ERP est un système qui centralise la gestion des processus métier : finance, CRM, RH, stock.",
  iot: "L’IoT connecte des objets physiques à Internet pour collecter et analyser des données.",
  arduino: "Arduino est une plateforme open-source pour créer des projets électroniques et IoT.",
  services: "SDS propose des solutions ERP, IoT, automatisation et développement logiciel sur mesure.",
};

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    if (!message) {
      return NextResponse.json({ reply: "Posez-moi une question 😊" });
    }

    const msg = message.toLowerCase();

    /* 1️⃣ Always answer instantly */
    for (const key in KNOWLEDGE) {
      if (msg.includes(key)) {
        return NextResponse.json({ reply: KNOWLEDGE[key] });
      }
    }

    /* 2️⃣ Try AI (but never block) */
    const apiKey = process.env.GEMINI_API_KEY;

    // NOUVEAUTÉ : Alerte si la clé est manquante dans Vercel
    if (!apiKey) {
      return NextResponse.json({ 
        reply: "🤖 La clé API est absente. Vérifie la variable GEMINI_API_KEY dans Vercel." 
      });
    }

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000); // NOUVEAUTÉ : Timeout un peu plus long (8s)

    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=" + apiKey,
      {
        method: "POST",
        signal: controller.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: "You are SDS NEXUS AI 🤖, an expert in ERP, IoT and Arduino. Answer briefly and clearly in French.",
                },
                { text: message },
              ],
            },
          ],
          generationConfig: {
            maxOutputTokens: 512, 
            temperature: 0.7,    
          },
        }),
      }
    );

    clearTimeout(timeout);

    if (response.ok) {
      const data = await response.json();
      const text = data?.candidates?.[0]?.content?.parts
          ?.map((p: any) => p.text)
          .join("")
          .trim();

      if (text) return NextResponse.json({ reply: text });
    } else {
       // NOUVEAUTÉ : Voir l'erreur exacte de Google (utile si la clé est invalide)
       const errorData = await response.json();
       return NextResponse.json({ reply: `🤖 Erreur Google: ${errorData.error?.message || "inconnue"}` });
    }

    return NextResponse.json({
      reply: "🤖 Je suis toujours là ! Posez-moi une question sur ERP, IoT, Arduino ou les services SDS.",
    });

  } catch (error: any) {
    // NOUVEAUTÉ : Le catch affiche maintenant l'erreur réelle au lieu de la phrase générique
    return NextResponse.json({
      reply: "🤖 Erreur technique : " + (error.message || "Connexion perdue"),
    });
  }
}