"use client";
import { useState } from 'react';
import { MessageSquare, Send, X, Bot } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false); // <--- Zid hadi bach t-bayyen l-chargement
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Bonjour ! Je suis l\'assistant SDS NEXUS. Comment puis-je vous aider ?' }
  ]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    const currentInput = input;
    setInput("");
    setIsLoading(true);

    try {
      // APPEL DYAL L-API (Option B)
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: currentInput }),
      });

      const data = await response.json();
      
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: data.reply // L-IA ghadi t-jawbek 3la hsab l-context dyal sds_accounting u Odoo
      }]);
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: 'bot', 
        text: "Désolé, j'ai un problème de connexion. Réessayez plus tard." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60] font-sans">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-nexus-blue hover:bg-blue-600 text-white p-4 rounded-full shadow-2xl transition-all"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>

      {isOpen && (
        <div className="absolute bottom-20 right-0 w-80 md:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-nexus-dark p-4 text-white flex items-center gap-3">
            <Bot size={20} className="text-nexus-blue" />
            <div>
              <h3 className="font-bold text-sm">SDS NEXUS Intelligence</h3>
              <p className="text-[9px] opacity-70">EN LIGNE | IA EXPERT</p>
            </div>
          </div>
          
          {/* Messages */}
          <div className="h-96 p-4 overflow-y-auto bg-white space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' 
                  ? 'bg-nexus-blue text-white rounded-tr-none' 
                  : 'bg-gray-100 text-black rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-400 p-3 rounded-2xl text-xs rounded-tl-none animate-pulse">
                  L'IA réfléchit...
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-4 border-t bg-gray-50 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={isLoading ? "L'IA répond..." : "Posez une question technique..."} 
              disabled={isLoading}
              className="flex-grow text-sm border-none focus:ring-0 bg-transparent text-black disabled:opacity-50"
            />
            <button 
              onClick={handleSend} 
              disabled={isLoading}
              className={`text-nexus-blue ${isLoading ? 'opacity-30' : 'opacity-100'}`}
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}