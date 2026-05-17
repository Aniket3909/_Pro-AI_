import React, { useState } from 'react';
import { generateApp } from '../services/aiService';

const PromptInput = ({ prompt, setPrompt, setGeneratedApp, setLoading }) => {
  const [examples] = useState([
    "Todo app with dark mode",
    "Weather app with charts",
    "Chat app with notifications",
    "E-commerce product page",
    "Portfolio website with animations"
  ]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    try {
      const appCode = await generateApp(prompt);
      setGeneratedApp(appCode);
    } catch (error) {
      console.error('Generation failed:', error);
      setGeneratedApp({
        name: "Error",
        code: "Something went wrong. Please try again.",
        preview: null
      });
    }
    setLoading(false);
  };

  return (
    <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
      <h2 className="text-2xl font-bold text-white mb-6">Describe Your App</h2>
      
      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g., 'A modern todo app with drag & drop, dark mode, and local storage...'"
        className="w-full p-6 bg-white/20 border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-4 focus:ring-white/30 resize-vertical h-40 text-lg font-medium"
      />

      <div className="flex flex-wrap gap-2 mt-6 mb-8">
        {examples.map((example, idx) => (
          <button
            key={idx}
            onClick={() => setPrompt(example)}
            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-xl text-white text-sm font-medium transition-all duration-200 border border-white/20"
          >
            {example}
          </button>
        ))}
      </div>

      <button
        onClick={handleGenerate}
        disabled={!prompt.trim()}
        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-6 px-8 rounded-2xl text-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        🚀 Generate App
      </button>
    </div>
  );
};

export default PromptInput;
