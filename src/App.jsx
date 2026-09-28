// src/App.jsx
import React, { useState } from 'react';
import { useRouter } from './utils/router';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import SubjectPage from './pages/SubjectPage';
import ConceptPage from './pages/ConceptPage';
import ProgressPage from './pages/ProgressPage';
import SearchModal from './components/SearchModal';

export default function App() {
  const { path, matchRoute } = useRouter();
  const [searchOpen, setSearchOpen] = useState(false);

  // Concept Route: /:degreeId/:semId/:subjectId/:unitId/:conceptId
  const conceptMatch = matchRoute('/:degreeId/:semId/:subjectId/:unitId/:conceptId');
  if (conceptMatch) {
    return (
      <Layout>
        <ConceptPage 
          subjectId={conceptMatch.subjectId} 
          unitId={conceptMatch.unitId} 
          conceptId={conceptMatch.conceptId} 
        />
      </Layout>
    );
  }

  // Subject Route: /:degreeId/:semId/:subjectId
  const subjectMatch = matchRoute('/:degreeId/:semId/:subjectId');
  if (subjectMatch) {
    return (
      <Layout>
        <SubjectPage subjectId={subjectMatch.subjectId} />
      </Layout>
    );
  }

  // Progress Dashboard Route: /progress
  if (path === '/progress') {
    return (
      <Layout>
        <ProgressPage />
      </Layout>
    );
  }

  // Default Home Page Route: /
  return (
    <Layout>
      <HomePage onOpenSearch={() => setSearchOpen(true)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </Layout>
  );
}
