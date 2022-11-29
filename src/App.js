import './App.css';
import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [size, setSize] = useState("All");
  const [setting, setSetting] = useState("All");
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);
  const [plants, setPlants] = useState([]);
  const [sortby, setSortby] = useState("height");

  const plantList = [
    { name: "Cute Plant", size: "Small", height: 1, sunlight: 3, price:7.25, setting:"Indoor", count: 0},
    { name: "Happy Plant", size: "Medium", height: 3, sunlight: 2, price: 3.50, setting: "Outdoor", count: 0},
    { name: "Sad Plant", size: "Large", height: 4, sunlight: 4, price: 4.50, setting: "Indoor", count: 0},
    { name: "Smart Plant", size: "Small", height: 1, sunlight: 2, price: 5.75, setting: "Outdoor", count: 0},
    { name: "Sleepy Plant", size: "Large", height: 4, sunlight: 1, price: 6.25, setting: "Indoor", count: 0},
    { name: "Mad Plant", size: "Small", height: 1, sunlight: 4, price:7.25, setting:"Indoor", count: 0},
    { name: "Goofy Plant", size: "Medium", height: 2, sunlight: 2, price: 3.50, setting: "Outdoor", count: 0},
    { name: "Funny Plant", size: "Large", height: 6, sunlight: 5, price: 4.50, setting: "Indoor", count: 0},
    { name: "Nerdy Plant", size: "Small", height: 1, sunlight: 2, price: 5.75, setting: "Outdoor", count: 0},
    { name: "Bored Plant", size: "Large", height: 4, sunlight: 1, price: 6.25, setting: "Indoor", count: 0},
    { name: "Pretty Plant", size: "Small", height: 1, sunlight: 3, price:7.25, setting:"Indoor", count: 0},
    { name: "Excited Plant", size: "Medium", height: 2, sunlight: 5, price: 3.50, setting: "Outdoor", count: 0},
    { name: "Tired Plant", size: "Large", height: 5, sunlight: 1, price: 4.50, setting: "Indoor", count: 0},
    { name: "Spooky Plant", size: "Small", height: 1, sunlight: 2, price: 5.75, setting: "Outdoor", count: 0},
    { name: "Neutral Plant", size: "Large", height: 4, sunlight: 6, price: 6.25, setting: "Indoor", count: 0}
   ]

   const Plant = (props) => {

    const addToCart = () => {
      if (plants.indexOf(props.name) == -1) {
        setCart([...cart, props])
        setPlants([...plants, props.name, props.count + 1])
      } else {
        const newCount = plants[plants.indexOf(props.name) + 1] + 1
        plants[plants.indexOf(props.name) + 1] += 1
        console.log(newCount)
      }
      
      setTotal(total+props.price)
      console.log(plants)
     }

    return (
      <div className='p-3'>
        <Card className='shadow' border='light' style={{ width: '18rem', height: '25rem'}}>
        <Card.Body>
          <div className='d-flex justify-content-center'>
            <Card.Img style={{width:'4rem', height: '6rem'}}variant="top" src="https://st.depositphotos.com/1055085/3389/i/450/depositphotos_33897773-stock-photo-artificial-tree.jpg" />

          </div>

          <Card.Title>{props.name}</Card.Title>
          <Card.Text>
            {/* <div className='d-flex'>
              <p>Size: {props.size}</p>
              <p className='ms-auto'>Max Height: {props.height}'</p>
            </div>
            <div className='d-flex'>
              <p>Sunlight level: {props.sunlight}</p>
              <p className='ms-auto'>Setting: {props.setting}</p>
            </div> */}
            <ListGroup variant="flush">
              <ListGroup.Item>Size: {props.size}</ListGroup.Item>
              <ListGroup.Item>Max Height: {props.height}'</ListGroup.Item>
              <ListGroup.Item>Sunlight level: {props.sunlight}</ListGroup.Item>
              <ListGroup.Item>Setting: {props.setting}</ListGroup.Item>
            </ListGroup>
            
            <h6>Price: ${props.price}</h6>
          </Card.Text>
          <Button onClick={addToCart} variant="success">Add to cart</Button>
        </Card.Body>
        </Card>
      </div>
      
    );
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
        <div className='d-flex flex-wrap container'>
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
        <div className='d-flex'>
        <input className='mx-2' type="radio" id="height" name="sortby" 
          value="height" checked={sortby === "height"} onChange={selectSortType}/>
        <label for="height">Height</label>
        <input className='mx-2' type="radio" id="sunlight" name="sortby" 
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
        <h6>Size:</h6>
        <div className='d-flex'>
          <input className='mx-2' type="radio" id="All" name="sizeFilter" 
          value="All" checked={size==="All"} onChange={selectFilterSize}/>
          <label for="All">All</label>
          <input className='mx-2' type="radio" id="Small" name="sizeFilter" 
          value="Small" checked={size==="Small"} onChange={selectFilterSize}/>
          <label for="Small">Small</label>
          <input className='mx-2' type="radio" id="Medium" name="sizeFilter" 
          value="Medium" checked={size==="Medium"}onChange={selectFilterSize}/>
          <label for="Medium">Medium</label>
          <input className='mx-2' type="radio" id="Large" name="sizeFilter" 
          value="Large" checked={size==="Large"}onChange={selectFilterSize}/>
          <label for="Large">Large</label>
        </div>
        <h6>Setting:</h6>
        <div className='d-flex'>
          <input className='mx-2' type="radio" id="All" name="settingFilter" 
          value="All" checked={setting==="All"} onChange={selectFilterSetting}/>
          <label for="All">All</label>
          <input className='mx-2' type="radio" id="Indoor" name="settingFilter" 
          value="Indoor" checked={setting==="Indoor"}onChange={selectFilterSetting}/>
          <label for="Indoor">Indoor</label>
          <input className='mx-2' type="radio" id="Outdoor" name="settingFilter" 
          value="Outdoor" checked={setting==="Outdoor"}onChange={selectFilterSetting}/>
          <label for="Outdoor">Outdoor</label>
        </div>
      </div>
    )
  }
   
   const Cart = () => {
    if (cart.length > 0) {
      return (
        <div className='py-4'>
          <Card style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title>Your Cart</Card.Title>
            <Card.Text>
              {/* <h6>{ cart }</h6> */}
              <h6>
              {cart.map((item, index) => (
                <div className='p-3'>
                  <CartItem key={index} count={item.count} name={item.name} price={item.price}/>
                </div>
                
              ))}
              </h6>
              <hr/>
              <h3> Total : ${total}</h3>
            </Card.Text>
          </Card.Body>
          </Card>
        </div>
        
      );
    } else {
      return (
        <div className='py-4'>
          <Card style={{ width: '20rem' }}>
          <Card.Body>
            <Card.Title>Your Cart</Card.Title>
            <Card.Text>
              {/* <h6>{ cart }</h6> */}
              <p> Your cart is currently empty.</p>
              <hr/>
              <h3> Total : ${total}</h3>
            </Card.Text>
          </Card.Body>
          </Card>
        </div>
      );
    }
    
   }

   const increment = (eventKey) => {
    plants[plants.indexOf(eventKey.target.value) + 1] += 1
    // I'm not entirely sure why, but without this 
    // line the amount in cart does not update visually ??
    const newPlants = plants.filter((plant) => plant.name !== eventKey.target.value)
    setPlants(newPlants)
    cart.map((plant) => {
      if (plant.name === eventKey.target.value) {
        setTotal(total + plant.price)
      }
    })
    console.log(cart)
   }

   const decrement = (eventKey) => {
    // Do not want to plant counts to go below zero
    if (plants[plants.indexOf(eventKey.target.value) + 1] > 0) {
      plants[plants.indexOf(eventKey.target.value) + 1] -= 1
      // I'm not entirely sure why, but without this 
      // line the amount in cart does not update visually ??
      const newPlants = plants.filter((plant) => plant.name !== eventKey.target.value)
      setPlants(newPlants)
      cart.map((plant) => {
        if (plant.name === eventKey.target.value) {
          setTotal(total - plant.price)
        }
      })
    }
    // Remove plant from cart (and plants list) if it has reached zero
    if (plants[plants.indexOf(eventKey.target.value) + 1] == 0) {
      const newCart = cart.filter((plant) => plant.name !== eventKey.target.value)
      setCart(newCart)
      const newPlants = plants.filter((plant) => plant !== eventKey.target.value)
      setPlants(newPlants)
    }
   }

   const CartItem = (props) => {
    return (
      <div className='d-flex align-items-center'>
        <Button variant="danger"value={props.name} onClick={decrement}>-</Button>
        <div className='mx-auto'>
          <h6>{plants[plants.indexOf(props.name) + 1]}x {props.name} ${props.price}</h6>
          </div>
        <div className='ms-auto'>
          <Button variant="success"value={props.name} onClick={increment}>+</Button>
        </div>
        
      </div>
    )
   }

  const firstList = plantList.filter(matchesFilterSize);
  const finalList = firstList.filter(matchesFilterSetting);
  finalList.sort(sortPlants);

  return (
    <div className="App">
      <h1>Plants!</h1>
      <div className='d-flex'>
        <div>
          <FilterNav/>
          <SortNav/>
          <Cart/>
        </div>
        <FinalFilter plants={finalList}/>
      
      
      </div>
      
      
      
    </div>
  );
}

export default App;
