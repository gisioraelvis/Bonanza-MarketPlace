import React from "react";
import { BrowserRouter as Router , Route} from "react-router-dom";
import "./index.css";
import "./bootstrap.min.css";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";


const App = () => {
  return (
    <Router>
      <Header />
      <Container>
        <main>
          <Route path='/' component={HomeScreen} exact/>
          <Route path='/Product/:id' component={ProductScreen} />
        </main>
      </Container>
      <Footer />
    </Router>
  );
};

export default App;
