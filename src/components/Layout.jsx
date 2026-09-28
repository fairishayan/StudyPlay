// src/components/Layout.jsx
import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import SearchModal from './SearchModal';

export default function Layout({ children }) {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#080b12] text-slate-100 flex flex-col font-sans selection:bg-indigo-500/30 selection:text-indigo-200 overflow-x-hidden">
      <Header onOpenSearch={() => setSearchOpen(true)} />
      
      <main className="flex-1 w-full pb-16">
        {children}
      </main>

      <Footer />

      <SearchModal 
        isOpen={searchOpen} 
        onClose={() => setSearchOpen(false)} 
      />
    </div>
  );
}
