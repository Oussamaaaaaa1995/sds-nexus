import { NextResponse } from "next/server";

/* 🔹 Knowledge base (always available) */
const KNOWLEDGE: Record<string, string> = {
  erp: "ERP est un système qui centralise la gestion des processus métier : finance, CRM, RH, stock.",
  iot: "L’IoT connecte des objets physiques à Internet pour collecter et analyser des données.",
  arduino: "Arduino est une plateforme open-source pour créer des projets électroniques et IoT.",
  services:
    "SDS propose des solutions ERP, IoT, automatisation et développement logiciel sur mesure.",
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
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 6000);

    // NOUVEAUTÉ : Correction du modèle (gemini-1.5-flash) car 2.5 n'existe pas
    const response = await fetch(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=" +
        process.env.GEMINI_API_KEY,
      {
        method: "POST",
        signal: controller.signal,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text:
                    "You are SDS NEXUS AI 🤖, an expert in ERP, IoT and Arduino. Answer briefly and clearly in French.",
                },
                { text: message },
              ],
            },
          ],
          generationConfig: {
            maxOutputTokens: 512, // NOUVEAUTÉ : Augmenté pour des réponses plus complètes
            temperature: 0.7,    // NOUVEAUTÉ : Plus de liberté et de naturel dans les réponses
          },
        }),
      }
    );

    clearTimeout(timeout);

    if (response.ok) {
      const data = await response.json();
      const text =
        data?.candidates?.[0]?.content?.parts
          ?.map((p: any) => p.text)
          .join("")
          .trim();

      if (text) return NextResponse.json({ reply: text });
    }

    /* 3️⃣ Smart fallback (NEVER SILENT) */
    return NextResponse.json({
      reply:
        "🤖 Je suis toujours là ! Posez-moi une question sur ERP, IoT, Arduino ou les services SDS.",
    });
  } catch {
    return NextResponse.json({
      reply:
        "🤖 Je suis disponible ! Parlez-moi de ERP, IoT, Arduino ou de votre projet.",
    });
  }
}