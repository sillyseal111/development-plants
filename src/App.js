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

   const Plant = props => {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          {props.size}
        </Card.Text>
        <Button onClick={addToCart} variant="success">Add to cart</Button>
      </Card.Body>
      </Card>
    );
   }

   const addToCart = () => {
    console.log("added!");
   }

   const selectFilterType = (eventKey) => {
    setType(eventKey);
    console.log(type);
   }
   
   const matchesFilterType = (item) => {
    console.log(type)
    if (type === "All") {
      return true
    } else if (type === item.size) {
      return true
    } else {
      return false
    }
   }

   const FinalFilter = (props) => {
    return (
      <div>
        {props.plants.map((item, index) => (
          <Plant key={index} name = {item.name}
          size = {item.size} />
        ))}
      </div>
    );
   }

   const FilterNav = () => {
    return (
      <Nav onSelect={selectFilterType}>
        <Nav.Item>
          <Nav.Link eventKey="All" >All</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Medium">Medium</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Large">Large</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="Desktop">Desktop</Nav.Link>
        </Nav.Item>
      </Nav>
    )
   }

   const filteredList = plantList.filter(matchesFilterType)

  return (
    <div className="App">
      <h1>Plants!</h1>
      <FilterNav/>
      <FinalFilter plants={filteredList}/>
    </div>
  );
}

export default App;
