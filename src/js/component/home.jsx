import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Stack from 'react-bootstrap/Stack';

import rigoImage from "../../img/rigo-baby.jpg"

// or less ideally
//create your first component
const Home = () => {
	return (
	<div>
		<Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Start Bootstrap</Navbar.Brand>
          <Nav className="navbar">
		  	<Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#features">About</Nav.Link>
            <Nav.Link href="#pricing">Services</Nav.Link>
			<Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      	</Navbar>
		<div className="jumbotron">
		<h1>A Warm Welcome!</h1>
		<p>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
			since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
		</p>
		<Button variant="primary">Call to action!</Button>{' '}
		</div>
	<Stack className="cards" direction="horizontal" gap={3}>
		<Card style={{ width: '18rem' }}>
      	<Card.Img variant="top" src={rigoImage} />
      	<Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
			since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </Card.Text>
        <Button variant="primary">Find out More!</Button>
      	</Card.Body>
    	</Card>
		<Card style={{ width: '18rem' }}>
		<Card.Img variant="top" src={rigoImage} />
		<Card.Body>
		<Card.Title>Card Title</Card.Title>
		<Card.Text>
		  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
			  since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
		</Card.Text>
		<Button variant="primary">Find out More!</Button>
		</Card.Body>
	  	</Card>
		  <Card style={{ width: '18rem' }}>
		<Card.Img variant="top" src={rigoImage} />
		<Card.Body>
		<Card.Title>Card Title</Card.Title>
		<Card.Text>
		  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
			  since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
		</Card.Text>
		<Button variant="primary">Find out More!</Button>
		</Card.Body>
	  	</Card>
		  <Card style={{ width: '18rem' }}>
		<Card.Img variant="top" src={rigoImage} />
		<Card.Body>
		<Card.Title>Card Title</Card.Title>
		<Card.Text>
		  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
			  since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
		</Card.Text>
		<Button variant="primary">Find out More!</Button>
		</Card.Body>
	  	</Card>
	</Stack>
	<div className="footer">
	<p>Copyright© Your Website 2023</p>
	</div>
	</div>
	);
};

export default Home;
