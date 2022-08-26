import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import SearchPage from "./components/SearchPage";
import WishListPage from "./components/WishListPage";
import Home from "./components/Home";

function App() {
  return (
    < Router>
      < Header />
      < Routes>
        <Route path="/" element={< Home />}/>
        <Route path="/search" element={< SearchPage />}/>
        <Route path="/wishList" element={< WishListPage />}/>
      </Routes>
    </Router>
  );
}

export default App;
