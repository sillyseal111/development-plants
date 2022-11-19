import './App.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ButtonGroup } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [size, setSize] = useState("All");
  const [setting, setSetting] = useState("All");
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

  const selectAllFilters = (eventKey) => {
    setSize(eventKey.target.value);
    setSetting(eventKey.target.value);
  }
  const selectFilterSize = (eventKey) => {
    setSize(eventKey.target.value);
  }

  const selectFilterSetting = (eventKey) => {
    setSetting(eventKey.target.value);
  }

  const selectSortType = (eventKey) => {
    setSortby(eventKey.target.value);
  }

  const matchesFilterSize = (item) => {
    if (size === "All") {
      return true
    } else if (size === item.size) {
      return true
    } else {
      return false
    }
   }

   const matchesFilterSetting = (item) => {
    if (setting === "All") {
      return true
    } else if (setting === item.setting) {
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
    if (props.plants.length > 0) {
      return (
        <div>
          {props.plants.map((item, index) => (
            <Plant key={index} name = {item.name} height={item.height}
            sunlight={item.sunlight} size = {item.size} price={item.price} setting={item.setting}/>
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <h6>No plants match your criteria :(</h6>
        </div>
      )
    }
    
   }

  const SortNav = () => {
    return (
      <div>
        <h5>Sort by:</h5>
        <div>
        <input type="radio" id="height" name="sortby" 
          value="height" checked={sortby === "height"} onChange={selectSortType}/>
        <label for="height">Height</label>
        <input type="radio" id="sunlight" name="sortby" 
          value="sunlight" checked={sortby === "sunlight"} onChange={selectSortType}/>
        <label for="sunlight">Sunlight</label>
      </div>
      </div>
      
    )
  }

  const FilterNav = () => {
    return (
      <div>
        <h5>Filter by: </h5>
          <input type="radio" id="All" name="filters" 
          value="All" checked={size === "All" && setting === "All"} onChange={selectAllFilters}/>
          <label for="All">All</label>
        <h6>Size:</h6>
        <div>
          <input type="radio" id="Medium" name="sizeFilter" 
          value="Medium" checked={size==="Medium"} onChange={selectFilterSize}/>
          <label for="Medium">Medium</label>
          <input type="radio" id="Large" name="sizeFilter" 
          value="Large" checked={size==="Large"}onChange={selectFilterSize}/>
          <label for="Large">Large</label>
          <input type="radio" id="Desktop" name="sizeFilter" 
          value="Desktop" checked={size==="Desktop"}onChange={selectFilterSize}/>
          <label for="Desktop">Desktop</label>
        </div>
        <h6>Setting:</h6>
        <div>
          <input type="radio" id="Indoor" name="settingFilter" 
          value="Indoor" checked={setting==="Indoor"}onChange={selectFilterSetting}/>
          <label for="Indoor">Indoor</label>
          <input type="radio" id="Outdoor" name="settingFilter" 
          value="Outdoor" checked={setting==="Outdoor"}onChange={selectFilterSetting}/>
          <label for="Outdoor">Outdoor</label>
        </div>
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

  const firstList = plantList.filter(matchesFilterSize);
  const finalList = firstList.filter(matchesFilterSetting);
  finalList.sort(sortPlants);

  return (
    <div className="App">
      <h1>Plants!</h1>
      
      <div className="d-flex align-items-start">
        <div>
          <div>
          <FilterNav/>
          <SortNav/>
          </div>
          <div>
            <Cart/>
          </div>
        </div>
        <div>
          <FinalFilter plants={finalList}/>
        </div>
      </div>
      
      
    </div>
  );
}

export default App;
