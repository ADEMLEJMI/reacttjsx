import React from 'react';
import { Navbar, Nav, Card, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

    return (
        <>  

        <div className='App'>
            {/* Navbar */}
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">My Navbar</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">About</Nav.Link>
                    <Nav.Link href="#">Contact</Nav.Link>
                </Nav>
            </Navbar>

            {/* Heading */}
            <Container className="mt-4">
                <h1>Welcome to My Page</h1>
            </Container>

            {/* Cards */}
            <Container className="mt-4">
                <Row>
                    {[1, 2, 3].map(num => (
                        <Col md={4} key={num} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={`https://static.boredpanda.com/blog/wp-content/uploads/2017/11/My-most-popular-pic-since-I-started-dog-photography-5a0b38cbd5e1e__880.jpg`} />
                                
                                <Card.Body>
                                    <Card.Title>Card {num}</Card.Title>
                                    <Card.Text>
                                        This is a sample card for demonstration purposes.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
            
        </div>

        </>

    );

}
export default App;