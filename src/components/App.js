import Home from '../pages/Home.js'
import Nav from '../components/Nav.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav />
        <Routes>
        {/* <Home /> */}
        
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
