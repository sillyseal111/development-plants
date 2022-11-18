import './App.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [type, setType] = useState("All");
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [sortby, setSortby] = useState("height");

  const plantList = [
    { name: "Cute Plant", size: "Medium", height: 1, sunlight: 3, price:7.25, setting:"Indoor"},
    { name: "Happy Plant", size: "Large", height: 2, sunlight: 2, price: 3.50, setting: "Outdoor"},
    { name: "Sad Plant", size: "Desktop", height: 3, sunlight: 1, price: 4.50, setting: "Indoor"},
    { name: "Smart Plant", size: "Medium", height: 1, sunlight: 2, price: 5.75, setting: "Outdoor"},
    { name: "Sleepy Plant", size: "Desktop", height: 3, sunlight: 1, price: 6.25, setting: "Indoor"}
   ]

   const Plant = props => {
    const addToCart = () => {
      setCart([...cart, "1x ", props.name, " ", props.price, <br></br>]);
      setTotal(total+props.price);
     }

    return (
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text>
          <p>{props.size}</p>
          <p>Height: {props.height}'</p>
          <p>Sunlight level: {props.sunlight}</p>
          <p>{props.setting}</p>
          <h6>Price: ${props.price}</h6>
        </Card.Text>
        <Button onClick={addToCart} variant="success">Add to cart</Button>
      </Card.Body>
      </Card>
    );
   }

   const selectFilterType = (eventKey) => {
    setType(eventKey);
   }

   const selectSortType = (eventKey) => {
    setSortby(eventKey);
   }
   
   const matchesFilterType = (item) => {
    if (type === "All") {
      return true
    } else if (type === item.size || type === item.setting) {
      return true
    } else {
      return false
    }
   }

   const sortPlants = (a,b) => {
    if (sortby === "height") {
      return a.height - b.height
    } else {
      return a.sunlight - b.sunlight;
    }
    
   }

   const FinalFilter = (props) => {
    return (
      <div>
        {props.plants.map((item, index) => (
          <Plant key={index} name = {item.name} height={item.height}
          sunlight={item.sunlight} size = {item.size} price={item.price} setting={item.setting}/>
        ))}
      </div>
    );
   }

   const SortNav = () => {
    return (
      <div>
        <h5>Sort by:</h5>
        <Nav onSelect={selectSortType}>
        <Nav.Item>
          <Nav.Link eventKey="height" >Height</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="sunlight">Sunlight</Nav.Link>
        </Nav.Item>
        </Nav>
      </div>
      
    )
   }

  // const SortNav = () => {
  //   const [radioValue, setRadioValue] = useState('1');

  //   const radios = [
  //     { name: 'Height', value: 'height' },
  //     { name: 'Sunlight', value: 'sunlight' }
  //   ];

  //   const handleChange = (e) => {
  //     setRadioValue(e.currentTarget.value);
  //     selectSortType(e.currentTarget.value);

  //   }
  //   return (
  //     <div>
  //       <h5>Sort by: </h5>
  //       <ButtonGroup className="mr-4">
  //       {radios.map((radio, idx) => (
  //         <ToggleButton
  //           key={idx}
  //           id={`radio-${idx}`}
  //           type="radio"
  //           variant="secondary"
  //           value={radio.value}
  //           checked={radioValue === radio.value}
  //           onChange={handleChange}
  //         >
  //           {radio.name}
  //         </ToggleButton>
  //       ))}
  //     </ButtonGroup>
  //     </div>
  //   );
  //  }

   const FilterNav = () => {
    return (
      <div>
        <h5>Filter by: </h5>
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
          <Nav.Item>
            <Nav.Link eventKey="Indoor">Indoor</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Outdoor">Outdoor</Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    )
   }
   
   const Cart = () => {
    return (
      <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>Your Cart</Card.Title>
        <Card.Text>
          <h6>{ cart }</h6>
          <hr/>
          <h3> Total : ${total}</h3>
        </Card.Text>
      </Card.Body>
      </Card>
    );
   }
   const filteredList = plantList.filter(matchesFilterType).sort(sortPlants);

  return (
    <div className="App">
      <h1>Plants!</h1>
      <FilterNav/>
      <SortNav/>
      <div className="d-flex">
        <div>
          <FinalFilter plants={filteredList}/>
        </div>
        <div>
          <Cart/>
        </div>
      </div>
      
    </div>
  );
}

export default App;
