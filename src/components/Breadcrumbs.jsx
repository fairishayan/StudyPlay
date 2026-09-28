// src/components/Breadcrumbs.jsx
import React from 'react';
import { Link } from '../utils/router';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ items = [] }) {
  if (!items || items.length === 0) return null;

  return (
    <nav className="flex items-center gap-1.5 text-xs text-slate-400 overflow-x-auto py-2 scrollbar-none select-none max-w-full">
      <Link 
        to="/" 
        className="flex items-center gap-1 hover:text-slate-200 transition-colors shrink-0 min-h-[36px] py-1 px-1.5 rounded"
        title="Go to Home"
      >
        <Home className="w-3.5 h-3.5 text-slate-400" />
        <span className="sr-only">Home</span>
      </Link>

      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            <ChevronRight className="w-3 h-3 text-slate-600 shrink-0" />
            {isLast || !item.to ? (
              <span className="text-slate-200 font-medium truncate shrink-0 max-w-[200px] sm:max-w-[320px]">
                {item.label}
              </span>
            ) : (
              <Link
                to={item.to}
                className="hover:text-slate-200 transition-colors truncate shrink-0 max-w-[150px] sm:max-w-[200px] min-h-[36px] flex items-center py-1 px-1 rounded"
              >
                {item.label}
              </Link>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
}
