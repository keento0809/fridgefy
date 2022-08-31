import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import SearchPage from "./pages/searchPageComponents/SearchPage";
import WishListPage from "./pages/WishListComponents/WishListPage";
import { UserDataProvider } from "./contexts/users_data";

function App() {
  return (
    <UserDataProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/wishList" element={<WishListPage />} />
        </Routes>
      </Router>
    </UserDataProvider>
  );
}

export default App;
