// src/components/Footer.jsx
import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-[#070a10]/80 backdrop-blur-md py-6 px-4 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left text-xs sm:text-sm text-slate-400">
        <div>
          This website is created by{' '}
          <a
            href="https://fairishayan.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors underline underline-offset-4 decoration-indigo-500/40 hover:decoration-indigo-400"
          >
            Fairish Ayan
          </a>{' '}
          — MSc AI student
        </div>
        <div className="flex items-center gap-4 text-slate-500 text-xs">
          <span>StudyPlay Platform</span>
          <span>•</span>
          <span>Static Offline Architecture</span>
        </div>
      </div>
    </footer>
  );
}
