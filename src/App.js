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
        <Button onClick={addToCart}variant="success">Add to cart</Button>
      </Card.Body>
      </Card>
    );
   }

   const addToCart = () => {
    console.log("added!");
   }

   const selectFilterType = eventKey => {
    setType(eventKey);
   }
   
   const matchesFilterType = item => {
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
        {props.plants.map((item) => (
          <Plant name = {item.name}
          size = {item.size} />
        ))}
      </div>
    );
   }

   const FilterItems = () => {
    return (
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
    )
   }

   const filteredList = plantList.filter(matchesFilterType)

  return (
    <div className="App">
      <h1>Plants!</h1>
      <FilterItems/>
      <FinalFilter plants={filteredList}/>
    </div>
  );
}

export default App;
