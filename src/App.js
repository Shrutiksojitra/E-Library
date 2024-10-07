import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './assets/pages/HomePage';
import BookPage from './assets/pages/BookPage';
import BookForm from './assets/components/BookForm';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BookPage />} />
        <Route path="/add-book" element={<BookForm />} />
      </Routes>
    </Router>
  );
}

export default App;
