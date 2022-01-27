import './styles/app.scss';

import { Routes, Route } from 'react-router-dom';
import Books from './pages/books/Books';
import Categories from './pages/categories/Categories';
import Header from './components/header/Header';

function App() {
  return (
    <div>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
