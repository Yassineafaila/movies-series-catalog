import { LinkContainer } from "react-router-bootstrap";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Form,
  Button,
} from "react-bootstrap";
import { CiSearch } from "react-icons/ci";
import "./Header.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
function Header() {
  const defaultAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.5 });
  return (
    <header className="px-3 py-2">
      <Navbar className="py-3 container mx-auto" expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to={"/"}>
            <Navbar.Brand href={"/"}>
              <motion.p
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                transition={{ staggerChildren: 0.1 }}
              >
                <strong className="logoLeft">Cinema</strong>
                <motion.strong
                  variants={defaultAnimation}
                  className="logoRight px-1 rounded-1 ms-1 d-inline-block"
                >
                  Hub
                </motion.strong>
              </motion.p>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="ms-lg-4 my-2" id="basic-navbar-nav">
            <Nav className="me-auto mt-4 mb-4 m-lg-0  gap-4">
              <NavDropdown title="Movies" id="basic-nav-dropdown">
                <LinkContainer to={"/movies/popular"}>
                  <NavDropdown.Item className="" href="/movies/popular">
                    Popular
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={"/movies/playing"}>
                  <NavDropdown.Item href="/movies/playing">
                    Nom Playing
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={"/movies/upcoming"}>
                  <NavDropdown.Item href="/movies/popular">
                    UpComing
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="Tv Shows" id="basic-nav-dropdown">
                <LinkContainer to={"/tv/popular"}>
                  <NavDropdown.Item href="/tv/popular">
                    Popular
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={"/tv/airing-today"}>
                  <NavDropdown.Item href="/tv/airing-today">
                    Airing Today
                  </NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to={"/tv/onTv"}>
                  <NavDropdown.Item href="/tv/onTv">UpComing</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
              <NavDropdown title="People" id="basic-nav-dropdown">
                <LinkContainer to={"/credits/popular"}>
                  <NavDropdown.Item href="/credits/popular">
                    Popular People
                  </NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            </Nav>
            <Form className="ms-auto d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2 px-3 py-1"
                aria-label="Search"
              />
              <Button className="px-2">
                <CiSearch />
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
