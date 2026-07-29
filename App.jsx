import React, { useState } from 'react';
import { BookOpen, Sparkles, FileText } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('editor');

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col">
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 p-4 backdrop-blur">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-indigo-400" />
            <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-transparent">
              StudyPDF AI
            </h1>
          </div>
          <button 
            onClick={() => alert("AI Assistant Ready!")}
            className="flex items-center gap-1.5 bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition"
          >
            <Sparkles className="w-4 h-4" />
            Ask AI
          </button>
        </div>
      </header>

      {/* Main Workspace */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 flex flex-col gap-4">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex-1 shadow-xl">
          <div className="flex items-center gap-2 mb-4 text-slate-400 border-b border-slate-800 pb-3">
            <FileText className="w-5 h-5 text-indigo-400" />
            <span className="font-medium text-slate-200">Untitled Study Note</span>
          </div>
          <textarea
            className="w-full h-64 bg-transparent resize-none outline-none text-slate-200 placeholder-slate-600 text-base"
            placeholder="Start typing your study notes here or use AI to generate notes..."
          ></textarea>
        </div>
      </main>
    </div>
  );
}