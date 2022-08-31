import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SearchPage from "./pages/searchPageComponents/SearchPage";
import WishListPage from "./pages/WishListComponents/WishListPage";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/wishList" element={<WishListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
