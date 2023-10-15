import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/pages/home/home";
import 'bootstrap/dist/css/bootstrap.css';
import MovieDetail from "./components/pages/movieDetail/MovieDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route index element={<Home />}></Route>
        <Route path="movies/:type" element={<Home />}></Route>
        <Route path="movie/:id" element={<MovieDetail />}></Route>
        <Route path="/*" element={<h1>Error Page</h1>}></Route>
      </Routes>
    </BrowserRouter>
    </div >
  );
}

export default App;
