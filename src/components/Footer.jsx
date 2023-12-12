
import { Col, Container, Row } from 'react-bootstrap'
import {motion} from 'framer-motion'
import "./Footer.scss"
function Footer() {
    const currentYear=new Date().getFullYear()
  return (
    <footer>
          <Container className='mx-auto'>
        <Row>
          <Col className="text-center mx-auto py-3">
            <p>
              <span>Cinema Hub</span> &copy; <strong>{currentYear}</strong>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer