import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import AllBeersPage from "./components/AllBeersPage/AllBeersPage";
import SingleBeerDetailPage from "./components/SingleBeerDetailPage";
import AddNewBeerPage from "./components/AddNewBeerPage";
import RandomBeerPage from "./components/RandomBeerPage";
import { Route, Routes } from "react-router-dom";


function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/beers" element={<AllBeersPage/>} />
        <Route path="/beers/:id" element={<SingleBeerDetailPage />} />
        <Route path="/beers/random" element={<RandomBeerPage />} />
        <Route path="/new" element={<AddNewBeerPage />} />
      </Routes>
    </div>
  );
}

export default App;
