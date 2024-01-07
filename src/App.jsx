import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./App.scss";
function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container className="mx-auto " fluid>
          <Outlet />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
