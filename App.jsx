import React, { useState } from 'react';
import PromptInput from './components/PromptInput';
import AppGenerator from './components/AppGenerator';
import GeneratedApp from './components/GeneratedApp';

function App() {
  const [prompt, setPrompt] = useState('');
  const [generatedApp, setGeneratedApp] = useState(null);
  const [loading, setLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
            Pro AI
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            Describe your app → Get ready-made code instantly
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left: Prompt Input */}
          <PromptInput 
            prompt={prompt}
            setPrompt={setPrompt}
            setGeneratedApp={setGeneratedApp}
            setLoading={setLoading}
          />

          {/* Right: Generated App */}
          <GeneratedApp 
            generatedApp={generatedApp}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
