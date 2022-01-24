import { Routes, Route } from 'react-router-dom';
import Books from './pages/books/Books';
import Categories from './pages/categories/Categories';

function App() {
  return (
    <div>
      <h1>wag1</h1>
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="categories" element={<Categories />} />
      </Routes>
    </div>
  );
}

export default App;
