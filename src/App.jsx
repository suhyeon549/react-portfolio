import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Resume from './Resume.jsx';
import Portfolio from './Portfolio.jsx';
import AboutMe from './AboutMe.jsx';
import Dday from './Dday.jsx';

function App() {

  return (
        <div className="app-container">
      <header>
        <Dday />
      </header>
      <nav>
        <Link to="/resume">이력 📄</Link> | {" "}
        <Link to="/portfolio">포트폴리오 📂</Link> | {" "}
        <Link to="/about-me">자기소개 😊</Link>
      </nav>
      <main className="content">
        <Routes>
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about-me" element={<AboutMe />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
