import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './Shared/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Carousel } from './components/Carousel';
import { Stats } from './components/Stats';
import { Footer } from './Shared/Footer';
import { SignUp } from './Authentication/pages/SignUp';
import { Login } from './Authentication/pages/Login';
import { SearchLayout } from './Search/pages/SearchLayout';
import { ArticleLayout } from './ArticleDetail/ArticleLayout';
import { Dashboard } from './Dashboard/Pages/Dashboard';
import { Notifications } from './pages/Notifications';
import { Settings } from './pages/Settings';

function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Carousel />
      <Stats />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/search" element={<SearchLayout />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/article/:id" element={<ArticleLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
