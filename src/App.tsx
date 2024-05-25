import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const fakeDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const Home = lazy(() => fakeDelay(4000).then(() => import('./pages/LandingPage/Home')));

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
