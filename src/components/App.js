import Home from '../pages/Home.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Resume from '../pages/Resume'
import ProjectDetails from '../pages/ProjectDetails'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/resume' element={<Resume />} /> 
          <Route path='/project-details' element={<ProjectDetails />} />          
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
