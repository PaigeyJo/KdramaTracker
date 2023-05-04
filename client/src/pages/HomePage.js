import React, { useState } from 'react';
import { Container, Row, Col, Alert, Card, Button } from 'react-bootstrap';
import Sparkle from 'react-sparkle';

function HomePage(props) {

    return(
        <Container>
            <Row>
                <Col>
                    <h1>Home Page</h1>
                </Col>
            </Row>
            <Row>
                <Col md={8} sm={4}>
                    <Alert variant="dark">
                        This is an alert—check it out!
                    </Alert>
                </Col>  
                <Col>
                    <Alert variant="dark">
                        This is an alert—check it out!
                    </Alert>
                </Col>  
                <Col>
                    <Alert variant="dark">
                        This is an alert—check it out!
                    </Alert>
                </Col>   
            </Row>
            <Row>
                <Col>
               
                    <Card style={{ width: '18rem', backgroundColor: 'pink', position: 'relative' }}>
                        <Card.Img variant="top" src="https://cdn.discordapp.com/attachments/593859903899041803/1098070464032677928/IMG_8443.jpg" />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                        <Sparkle 
                            color="#c02376" 
                            minSize={5} 
                            maxSize={20} 
                            flicker={false}
                            count={80}
                        />
                    </Card> 
                </Col>    
            </Row>
        </Container>
    );
};

export default HomePage;