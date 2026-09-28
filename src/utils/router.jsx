// src/utils/router.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const RouterContext = createContext({
  path: '/',
  params: {},
  query: new URLSearchParams(),
  navigate: () => {},
});

function getHashPath() {
  const hash = window.location.hash;
  if (!hash || hash === '#' || hash === '#/') return '/';
  // Remove leading #
  const cleaned = hash.slice(1);
  return cleaned.startsWith('/') ? cleaned : '/' + cleaned;
}

export function RouterProvider({ children }) {
  const [currentHash, setCurrentHash] = useState(getHashPath);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentHash(getHashPath());
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const navigate = (to) => {
    const target = to.startsWith('/') ? to : '/' + to;
    window.location.hash = target;
  };

  // Extract path and query string
  const [pathPart, queryPart] = currentHash.split('?');
  const query = new URLSearchParams(queryPart || '');

  // Route matching helper
  const matchRoute = (pattern) => {
    const patternParts = pattern.split('/').filter(Boolean);
    const pathParts = pathPart.split('/').filter(Boolean);

    if (patternParts.length !== pathParts.length) return null;

    const params = {};
    for (let i = 0; i < patternParts.length; i++) {
      if (patternParts[i].startsWith(':')) {
        const paramName = patternParts[i].slice(1);
        params[paramName] = decodeURIComponent(pathParts[i]);
      } else if (patternParts[i] !== pathParts[i]) {
        return null;
      }
    }
    return params;
  };

  return (
    <RouterContext.Provider value={{ path: pathPart, fullPath: currentHash, query, navigate, matchRoute }}>
      {children}
    </RouterContext.Provider>
  );
}

export function useRouter() {
  return useContext(RouterContext);
}

export function Link({ to, children, className = '', onClick, ...props }) {
  const { navigate } = useRouter();
  const href = `#${to.startsWith('/') ? to : '/' + to}`;

  const handleClick = (e) => {
    if (onClick) onClick(e);
    if (!e.defaultPrevented && !e.ctrlKey && !e.metaKey && !e.shiftKey) {
      e.preventDefault();
      navigate(to);
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </a>
  );
}
