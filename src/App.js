import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SearchPage from "./pages/searchPageComponents/SearchPage";
import WishListPage from "./pages/WishListComponents/WishListPage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/wishList" element={<WishListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
