import React from 'react';

const GeneratedApp = ({ generatedApp, loading }) => {
  if (loading) return null;

  if (!generatedApp) return null;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedApp.code);
    // Add toast notification here
  };

  const downloadCode = () => {
    const blob = new Blob([generatedApp.code], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${generatedApp.name}.html`;
    a.click();
  };

  return (
    <div className="space-y-6">
      {/* App Preview */}
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
        <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
          📱 Live Preview
        </h3>
        <iframe
          srcDoc={generatedApp.preview || '<h1 className="text-2xl text-gray-500 p-8">Preview Loading...</h1>'}
          className="w-full h-96 rounded-2xl border-4 border-white/20 shadow-2xl"
          sandbox="allow-scripts"
        />
      </div>

      {/* Code */}
      <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white flex items-center gap-2">
            💻 Complete Code
          </h3>
          <div className="flex gap-2">
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-xl text-sm font-medium transition-all"
            >
              Copy
            </button>
            <button
              onClick={downloadCode}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-xl text-sm font-medium transition-all"
            >
              Download
            </button>
          </div>
        </div>
        <pre className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 overflow-auto max-h-96 text-sm text-white font-mono">
          {generatedApp.code}
        </pre>
      </div>
    </div>
  );
};

export default GeneratedApp;
