import './App.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [size, setSize] = useState("All");
  const [setting, setSetting] = useState("All");
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [plants, setPlants] = useState([]);
  const [sortby, setSortby] = useState("height");

  const plantList = [
    { name: "Cute Plant", size: "Medium", height: 1, sunlight: 3, price:7.25, setting:"Indoor", count: 1},
    { name: "Happy Plant", size: "Large", height: 2, sunlight: 2, price: 3.50, setting: "Outdoor", count: 1},
    { name: "Sad Plant", size: "Desktop", height: 3, sunlight: 1, price: 4.50, setting: "Indoor", count: 1},
    { name: "Smart Plant", size: "Medium", height: 1, sunlight: 2, price: 5.75, setting: "Outdoor", count: 1},
    { name: "Sleepy Plant", size: "Desktop", height: 3, sunlight: 1, price: 6.25, setting: "Indoor", count: 1}
   ]

   const Plant = (props) => {

    const addToCart = () => {
      if (plants.indexOf(props.name) == -1) {
        setCart([...cart, props])
        setPlants([...plants, props.name, props.count])
      } else {
        const newCount = plants[plants.indexOf(props.name) + 1] + 1
        plants[plants.indexOf(props.name) + 1] += 1
        console.log(newCount)
      }
      
      setTotal(total+props.price)
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
            <Plant key={index} count={item.count} name = {item.name} height={item.height}
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
          {/* <h6>{ cart }</h6> */}
          <h6>
          {cart.map((item, index) => (
            <CartItem key={index} count={item.count} name={item.name} price={item.price}/>
          ))}
          </h6>
          <hr/>
          <h3> Total : ${total}</h3>
        </Card.Text>
      </Card.Body>
      </Card>
    );
   }

   const increment = (eventKey) => {
    plants[plants.indexOf(eventKey.target.value) + 1] += 1
    console.log("hello")
   }

   const CartItem = (props) => {
    return (
      <div className='d-flex'>
        <Button>-</Button>
        <h6>{plants[plants.indexOf(props.name) + 1]}x {props.name} ${props.price}</h6>
        <Button value={props.name} onClick={increment}>+</Button>
      </div>
    )
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
