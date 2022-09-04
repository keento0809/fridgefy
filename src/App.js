import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "./components/Header";
import SearchPage from "./pages/searchPageComponents/SearchPage";
import WishListPage from "./pages/WishListComponents/WishListPage";
import {UserDataProvider} from "./contexts/users_data";
import DataProvider from "./helper/DataContext";
import {GlobalStyle} from "./components/styles/RecipeDetail.style";

function App() {
  return (
    <UserDataProvider>
      <DataProvider>
        <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<SearchPage/>}/>
            <Route path="/wishList" element={<WishListPage/>}/>
          </Routes>
        </Router>
      </DataProvider>
    </UserDataProvider>
  );
}

export default App;
