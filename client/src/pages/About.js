import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function About() {
    return(
        <Container>
            <Row>
                <Col>
                    <h1>About Page</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Link to="/">
                        Home
                    </Link>
                </Col>   
            </Row>
        </Container>
    );
};

export default About;