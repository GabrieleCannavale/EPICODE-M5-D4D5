import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import BookDetails from './pages/BookDetail';



function App() {
  return (
    <Router>
      <Routes>
         <Route 
          exact path="/"
          element = {<Homepage/>}
         />
         <Route 
          path="/book/:bookAsin"
          element = {<BookDetails/>}
         />
      </Routes>

    </Router>


  );
}

export default App;
