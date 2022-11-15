import './App.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [type, setType] = useState("All");

  const plantList = [
    { name: "Cute Plant", size: "Medium"},
    { name: "Happy Plant", size: "Large"},
    { name: "Sad Plant", size: "Desktop"},
    { name: "Smart Plant", size: "Medium"},
    { name: "Sleepy Plant", size: "Desktop"}
   ]

   function Plant(props) {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.size}
        </Card.Text>
        <Button variant="success">Add to cart</Button>
      </Card.Body>
      </Card>
    );
   }

   function selectFilterType() {

   }

  return (
    <div className="App">
      <h1>Plants!</h1>
      <Nav>
        <Nav.Item>
          <Nav.Link eventKey="All" onSelect={selectFilterType}>All</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Medium" onSelect={selectFilterType}>Medium</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Large" onSelect={selectFilterType}>Large</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Desktop" onSelect={selectFilterType}>Desktop</Nav.Link>
        </Nav.Item>
      </Nav>
      
      {plantList.map((item) => (
        <Plant name = {item.name}
        size = {item.size} />
      ))}
    </div>
  );
}

export default App;
