import Cards from "./components/Cards";
import Form from "./components/Form";
import Nav from "./components/Nav";
import { GlobalProvider } from "./Context/GlobalContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <GlobalProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
         

              <Route path="/form" element={<Form />} />



          <Route path="/cards" element={<Cards />} />


        </Routes>
      </GlobalProvider>
    </Router>
  );
}

export default App;
