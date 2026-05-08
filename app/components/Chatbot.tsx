"use client";

import { useState } from "react";
import { MessageSquare, Send, X, Bot } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Bonjour ! Je suis l'assistant SDS NEXUS 🤖",
    },
  ]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    console.log("🔥 SEND CLICKED:", userMessage);

    setInput("");
    setIsLoading(true);

    setMessages((prev) => [
      ...prev,
      { role: "user", text: userMessage },
    ]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await res.json();

      console.log("🔥 FRONT RESPONSE:", data);

      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: data.reply || "No response from AI",
        },
      ]);
    } catch (error: any) {
      setMessages((prev) => [
        ...prev,
        {
          role: "bot",
          text: "Error: " + error.message,
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-600 text-white p-3 rounded-full"
      >
        {isOpen ? <X /> : <MessageSquare />}
      </button>

      {isOpen && (
        <div className="w-80 bg-white shadow-lg rounded-lg mt-3 flex flex-col">
          
          <div className="p-3 bg-black text-white flex items-center gap-2">
            <Bot size={18} />
            SDS NEXUS AI
          </div>

          <div className="p-3 h-80 overflow-y-auto space-y-2">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`text-sm p-2 rounded ${
                  m.role === "user"
                    ? "bg-blue-600 text-white ml-auto"
                    : "bg-black text-white"
                }`}
              >
                {m.text}
              </div>
            ))}

            {isLoading && (
              <div className="text-gray-500 text-xs">
                typing...
              </div>
            )}
          </div>

          <div className="flex border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 p-2 text-sm text-black outline-none bg-white"
              placeholder="Ask something..."
              />
            <button
              onClick={handleSend}
              className="p-2 bg-blue-600 text-white"
            >
              <Send size={16} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}