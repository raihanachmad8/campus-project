import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Lazy load the pages
const Home = lazy(() => import('./pages/LandingPage/Home'));

// Loading component
import Loading from './pages/Loading'

function App() {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loading />}> 
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
