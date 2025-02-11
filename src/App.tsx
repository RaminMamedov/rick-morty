import { lazy, Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './components/ErrorFallback/ErrorFallback.tsx';
import Loader from './components/Loader/Loader.tsx';
import { Route, Routes } from 'react-router';
import Home from './pages/Home/Home.tsx';

const CardPage = lazy(() => import('./pages/CardPage/CardPage.tsx'));
const NotFound = lazy(() => import('./pages/NotFound/NotFound.tsx'));

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/character/:id" element={<CardPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
