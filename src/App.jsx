import './App.css';
import Home from './pages/Home';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <header>
        <Nav />
      </header>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </main>
      <footer>
      </footer>
    </>
  );
}

export default App;