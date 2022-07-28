import Student from "./Component/Administrator/Student";

import { BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Displayall from"./Component/Administrator/Displayall";


function App() {
  return (
    <div>
    <Router>
      <Routes>
      
      
       < Route element ={<Student/>} path="/student" />
       < Route element ={<Displayall/>} path="/displayAll" />

       </Routes>
       </Router>
       </div>
   
  );
}

export default App;
